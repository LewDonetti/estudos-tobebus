/* =========================================================================
 * filereaders.js — Extrai texto de arquivos (.txt, .md, .docx, .pdf)
 *
 * As bibliotecas pesadas (mammoth p/ Word e pdf.js p/ PDF) ficam embutidas
 * em js/vendor/ e são carregadas SÓ quando ela escolhe esse tipo de arquivo,
 * para a página abrir leve. Tudo roda no navegador; nada é enviado a lugar
 * nenhum.
 * ========================================================================= */

(function (global) {
  'use strict';

  var loaded = {}; // cache de scripts já injetados

  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error('Falha ao carregar ' + src));
      };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  function readArrayBuffer(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () {
        resolve(r.result);
      };
      r.onerror = function () {
        reject(new Error('Não consegui ler o arquivo.'));
      };
      r.readAsArrayBuffer(file);
    });
  }

  function readText(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () {
        resolve(r.result);
      };
      r.onerror = function () {
        reject(new Error('Não consegui ler o arquivo.'));
      };
      r.readAsText(file);
    });
  }

  // ----- Word (.docx) -----------------------------------------------------
  function extractDocx(file) {
    return loadScript('js/vendor/mammoth.browser.min.js')
      .then(function () {
        return readArrayBuffer(file);
      })
      .then(function (buf) {
        return global.mammoth.extractRawText({ arrayBuffer: buf });
      })
      .then(function (result) {
        return result.value || '';
      });
  }

  // ----- PDF --------------------------------------------------------------
  function extractPdf(file) {
    return loadScript('js/vendor/pdf.min.js')
      .then(function () {
        global.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'js/vendor/pdf.worker.min.js';
        return readArrayBuffer(file);
      })
      .then(function (buf) {
        return global.pdfjsLib.getDocument({ data: buf }).promise;
      })
      .then(function (pdf) {
        var pages = [];
        var chain = Promise.resolve();
        for (var i = 1; i <= pdf.numPages; i++) {
          (function (pageNum) {
            chain = chain
              .then(function () {
                return pdf.getPage(pageNum);
              })
              .then(function (page) {
                return page.getTextContent();
              })
              .then(function (content) {
                var text = '';
                content.items.forEach(function (item) {
                  text += item.str;
                  if (item.hasEOL) text += '\n';
                  else text += ' ';
                });
                pages.push(text.replace(/[ \t]+\n/g, '\n').trim());
              });
          })(i);
        }
        return chain.then(function () {
          return pages.join('\n\n');
        });
      });
  }

  // ----- Despacho por tipo de arquivo ------------------------------------
  function extractFile(file) {
    var name = (file.name || '').toLowerCase();
    if (/\.docx$/.test(name)) return extractDocx(file);
    if (/\.pdf$/.test(name)) return extractPdf(file);
    if (/\.(txt|md|markdown)$/.test(name) || /^text\//.test(file.type || '')) {
      return readText(file);
    }
    if (/\.doc$/.test(name)) {
      return Promise.reject(
        new Error(
          'Arquivos .doc antigos não são suportados. Salve como .docx e tente de novo.'
        )
      );
    }
    // tenta ler como texto por padrão
    return readText(file);
  }

  global.FileReaders = {
    extractFile: extractFile,
    extractDocx: extractDocx,
    extractPdf: extractPdf
  };
})(window);
