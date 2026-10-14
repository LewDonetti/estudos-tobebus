/* =========================================================================
 * courses.js — Cursos embutidos (conteúdo pronto, igual para todos)
 *
 * Cada curso traz matérias -> módulos -> aulas (conteúdo + vídeos + links).
 * O catálogo da tela inicial lista estes cursos. Ao abrir um curso, ele é
 * carregado na conta da pessoa (Store.seedCourse); as anotações e o
 * progresso de cada usuário ficam privados. Para adicionar um novo curso,
 * acrescente outro objeto neste array.
 * ========================================================================= */
window.COURSES = [
 {
  "id": "ftp-pcsp",
  "title": "Fotógrafo Técnico-Pericial — PC-SP",
  "subtitle": "Banca Vunesp · Polícia Científica de SP",
  "emoji": "📷",
  "color": "#5b4fd6",
  "cover": "<img class='cc-cover' src='assets/covers/ftp-pcsp.webp' alt='Perícia Criminal' loading='lazy'><span class='cc-scrim'></span>",
  "subjects": [
   {
    "name": "Técnicas Audiovisuais",
    "emoji": "📷",
    "color": "#9aa7ff",
    "modules": [
     {
      "title": "Módulo 1 — Equipamento fotográfico: câmera convencional e digital",
      "content": "Tipos de câmera (compacta, DSLR/reflex, mirrorless); corpo, visor, espelho, pentaprisma; correção dióptrica do visor; correlação entre câmera analógica e digital; nomenclaturas.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=vsHlF6xnUAI",
        "title": "O que faz um Fotógrafo Técnico-Pericial"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=como+funciona+c%C3%A2mera+DSLR+espelho+pentaprisma+aula",
        "title": "DSLR: corpo, espelho, pentaprisma e visor (buscar no YouTube)"
       },
       {
        "url": "https://www.youtube.com/@Modestofotopol/videos",
        "title": "Canal do Daniel Modesto (fotógrafo pericial)"
       }
      ]
     },
     {
      "title": "Módulo 2 — Exposição: o triângulo ISO × diafragma × obturador",
      "content": "Tempo de exposição; função do diafragma; números f e “stops”; escala ISO (fusão ASA/DIN); ruído com ISO alto; equivalência/reciprocidade de exposição; subexposição e superexposição.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=NB6esQU6ikg",
        "title": "ISO, velocidade e abertura: resumo sobre exposição"
       },
       {
        "url": "https://www.youtube.com/watch?v=ilT-gjfTT5U",
        "title": "Velocidade do obturador e a exposição"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 3 — Profundidade de campo e foco",
      "content": "Fatores (abertura, distância focal, distância do assunto); relação abertura × profundidade de campo; foco manual × automático e quando usar o manual.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=sMS7flzY5oc",
        "title": "Profundidade de Campo e Distância Hiperfocal"
       },
       {
        "url": "https://www.youtube.com/watch?v=6yVqX_mRuA4",
        "title": "Profundidade de Campo: o que influencia e como controlar"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 4 — Fotometria",
      "content": "Fotômetro incorporado (luz refletida) × fotômetro manual (luz incidente); modos de medição; cinza 18%; situações de pouca luz.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=Cjhmc8UJeiY",
        "title": "Histograma e fotometria (aula grátis)"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=fot%C3%B4metro+luz+incidente+luz+refletida+fotografia+aula",
        "title": "Fotômetro: luz incidente × luz refletida (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 5 — Objetivas",
      "content": "Distância focal (ponto nodal → plano focal com foco no infinito); objetiva normal ≈ diagonal do formato; grande angular, normal e teleobjetiva; ângulo de visão; abertura máxima/mínima; objetivas rápidas; aberrações; poder de resolução; círculo de cobertura.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=qATpsLgQQcg",
        "title": "Objetivas e distância focal"
       },
       {
        "url": "https://www.youtube.com/watch?v=ONXcryKzm4A",
        "title": "Grande angular, normal ou teleobjetiva?"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 6 — Luz natural",
      "content": "Luz solar direta × luz do céu (difusa): sombras e contraste; variações ao longo do dia; luz de janela em ambiente interno.",
      "videos": [],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=luz+natural+luz+dura+luz+suave+fotografia+aula",
        "title": "Luz natural: luz dura × suave e luz de janela (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 7 — Temperatura de cor e balanço de branco",
      "content": "Escala Kelvin; tungstênio (~3200 K), luz do dia/flash (~5500 K); predominância tonal de cada fonte; balanço de branco na câmera; filtros de correção.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=eDGDhdyXnDA",
        "title": "Temperatura de cor, escala Kelvin e tipos de luz"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 8 — Iluminação artificial: luz contínua e flash",
      "content": "Refletores halógenos com lente Fresnel, fluorescentes, HMI, LED (luz dura × suave); flash: número-guia (NG ÷ distância = f), sincronismo, flash rebatido/difuso; acessórios (rebatedores, softbox).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=Wi6tQDkJH5A",
        "title": "Como calcular o número-guia do flash"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=ilumina%C3%A7%C3%A3o+cont%C3%ADnua+fresnel+HMI+fluorescente+LED+fotografia+aula",
        "title": "Refletor Fresnel, fluorescente, HMI e LED (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 9 — Macrofotografia (registro em escala)",
      "content": "Objetivas macro; lentes close-up e dioptrias (distância de foco = 1/dioptria, em metros); tubos e foles; correção de exposição; escala de reprodução; iluminação em macro; uso de escala métrica pericial.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=q8EdCPZtOQQ",
        "title": "Como fazer macrofotografia: acessórios, lentes e flash"
       },
       {
        "url": "https://www.youtube.com/watch?v=PmkzPnamn-I",
        "title": "Fotografia macro com tubo extensor"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=lente+close-up+dioptria+macro+fotografia+como+funciona",
        "title": "Lentes close-up e dioptrias (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 10 — Filtros ópticos",
      "content": "Polarizador (reflexos em vidro/água, ângulo de uso); UV; filtros de correção de cor; filtros de contraste para P&B.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=9OIR4mGy6oA",
        "title": "Filtro polarizador: o que é, o que faz e como usar"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 11 — Captura digital",
      "content": "Sensor (CCD/CMOS, matriz de pixels, filtro de Bayer); “imagem latente” digital; histograma (leitura e diagnóstico de exposição); modos automático, cenas (“scene”), P/A/S/M; resolução em megapixels.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=8NOhFJKLF5M",
        "title": "Histograma: como ler"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=sensor+CMOS+CCD+filtro+de+bayer+como+funciona+c%C3%A2mera",
        "title": "Sensores CCD e CMOS / filtro de Bayer (buscar no YouTube)"
       },
       {
        "url": "https://www.youtube.com/results?search_query=modos+da+c%C3%A2mera+P+A+S+M+explicado+fotografia",
        "title": "Modos P, A/Av, S/Tv e M da câmera (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 12 — Arquivos digitais e autenticidade",
      "content": "Formatos RAW, JPEG, TIFF; resolução × dpi para impressão (cm ÷ 2,54 × dpi); redimensionamento; armazenamento, transferência e backup (trabalhar sempre em cópia); formatos não editáveis; hash MD5/SHA (integridade); segurança do equipamento e dos arquivos.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=C2CA_M1cghE",
        "title": "Resolução, DPI × PPI e impressão (aulão)"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=RAW+JPEG+TIFF+diferen%C3%A7a+formatos+fotografia",
        "title": "RAW × JPEG × TIFF (buscar no YouTube)"
       },
       {
        "url": "https://www.youtube.com/results?search_query=hash+MD5+integridade+arquivo+prova+digital+explica%C3%A7%C3%A3o",
        "title": "Hash MD5/SHA e integridade de arquivos (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 13 — Vídeo: filmadora HD e captura de frames",
      "content": "Resolução HD/Full HD, quadros por segundo; extração de quadros (frames), edição, visualização e impressão. (Não caiu em 2014, mas está no edital — estude por último.)",
      "videos": [],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=resolu%C3%A7%C3%A3o+de+v%C3%ADdeo+HD+Full+HD+fps+quadros+por+segundo+explica%C3%A7%C3%A3o",
        "title": "Resolução HD/Full HD, fps e extração de frames (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 14 — Fotografia analógica e laboratório",
      "content": "Materiais sensíveis (negativo/positivo, P&B/cor, sensibilidade cromática); imagem latente e redução da prata; revelação química (fases, temperatura, agitação); ampliação e ampliador. (Não caiu em 2014, mas está no edital — estude por último.)",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=dHN98CNz--M",
        "title": "Revelação de filme preto e branco"
       },
       {
        "url": "https://www.youtube.com/watch?v=xfjoKv0sW4Q",
        "title": "Resolvendo questões da prova de Fotógrafo Técnico-Pericial"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 15 — Materiais de apoio (PDFs e leituras)",
      "content": "PDFs gratuitos de fotografia e perícia para aprofundar. Também: provas da Vunesp para treinar.",
      "videos": [],
      "links": [
       {
        "url": "https://transforma.fbb.org.br/storage/socialtecnologies/520/files/Apostila%20de%20fotografia%20-%20RAT.pdf",
        "title": "Apostila de Fotografia – Profa. Thaís Solon (FBB)"
       },
       {
        "url": "https://www.ocasaldafoto.com/wp-content/uploads/2017/04/guia-de-fotografia-iniciantes-v2.5.pdf",
        "title": "Guia Definitivo de Fotografia para Iniciantes – O Casal da Foto"
       },
       {
        "url": "https://www.marcusramos.com.br/slides-fotografia/digital.pdf",
        "title": "Introdução à Fotografia Digital – Marcus Ramos (slides)"
       },
       {
        "url": "https://ilab.eba.ufmg.br/wp-content/uploads/2025/01/Guia_Fotografia_Obra_Arte_Dani_Luce_09_Junho_2016.pdf",
        "title": "Fotografia Digital de Obras de Arte – UFMG"
       },
       {
        "url": "https://educapes.capes.gov.br/bitstream/capes/432727/2/Livro%20Laborat%C3%B3rio%20de%20Fotografia.pdf",
        "title": "Laboratório de Fotografia – livro (eduCAPES)"
       },
       {
        "url": "https://estudosaudiovisuais.wordpress.com/wp-content/uploads/2018/08/livro-formulacc81rio-fotogracc81fico.pdf",
        "title": "O Processo Fotográfico: revelação e químicos – Prof. Enio Leite"
       },
       {
        "url": "https://www.gov.br/mj/pt-br/assuntos/sua-seguranca/seguranca-publica/analise-e-pesquisa/download/pop/procedimento_operacional_padrao-pericia_criminal.pdf",
        "title": "Procedimento Operacional Padrão – Perícia Criminal (Min. da Justiça)"
       },
       {
        "url": "https://www.novaconcursos.com.br/downloadable/download/sample/sample_id/344",
        "title": "Amostra da apostila Fotógrafo Técnico-Pericial – Nova Concursos"
       },
       {
        "url": "https://www.cambridgeincolour.com/pt-br/tutoriais/camera-metering.htm",
        "title": "Tutoriais Cambridge in Colour (em português)"
       },
       {
        "url": "https://infolivros.org/livros-pdf-gratis/arte/fotografia/",
        "title": "25 livros de fotografia grátis – InfoLivros"
       },
       {
        "url": "https://www.qconcursos.com/questoes-de-concursos/provas/vunesp-2014-pc-sp-fotografo-tecnico-pericial",
        "title": "Prova Vunesp 2014 – Fotógrafo Técnico-Pericial (Qconcursos)"
       },
       {
        "url": "https://www.pciconcursos.com.br/provas/vunesp-policia-civil-sp",
        "title": "Provas Vunesp da Polícia Civil-SP para download (PCI Concursos)"
       },
       {
        "url": "https://www.qconcursos.com/questoes-de-concursos/provas/vunesp-2014-pc-sp-auxiliar-de-necropsia",
        "title": "Prova Vunesp 2014 – Auxiliar de Necropsia (Qconcursos)"
       }
      ]
     }
    ]
   },
   {
    "name": "Noções de Direito",
    "emoji": "📚",
    "color": "#ff7eb6",
    "modules": [
     {
      "title": "Módulo 1 — CF arts. 1º a 4º e Estado Democrático de Direito",
      "content": "Fundamentos, objetivos, princípios das relações internacionais; separação de poderes.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=ypNuEbiWysw",
        "title": "Princípios Fundamentais (arts. 1º ao 4º da CF)"
       },
       {
        "url": "https://www.youtube.com/watch?v=dHTXl5s239M",
        "title": "Princípios Fundamentais: fundamentos, objetivos e relações internacionais"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 2 — Direitos Humanos",
      "content": "Conceito, características, evolução histórica (gerações/dimensões), cidadania.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=Ufh4TqT7pmQ",
        "title": "Direitos Humanos: evolução histórica e gerações"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 3 — CF art. 5º — direitos e garantias individuais",
      "content": "Incisos mais cobrados: igualdade, liberdade, associação (XVII–XXI), inviolabilidade de domicílio, extradição, prisão, remédios constitucionais.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=AX_JTuVJedE",
        "title": "Direitos e Garantias Fundamentais – Art. 5º ao 17"
       },
       {
        "url": "https://www.youtube.com/watch?v=mP_3VHO-COs",
        "title": "40 questões do art. 5º"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 4 — CF arts. 6º a 16",
      "content": "Direitos sociais (6º–11), nacionalidade (12–13), direitos políticos (14–16).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=8o3L6CT3aDo",
        "title": "Constituição Federal arts. 6 a 16"
       },
       {
        "url": "https://www.youtube.com/watch?v=LlEKrSk0LFw",
        "title": "Direitos sociais (arts. 6º a 11)"
       },
       {
        "url": "https://www.youtube.com/watch?v=oDhBc411wjc",
        "title": "Nacionalidade (art. 12) – aula 01"
       },
       {
        "url": "https://www.youtube.com/watch?v=gdIOcawRGfo",
        "title": "Direitos políticos – leitura dos arts. 14 a 16"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 5 — CF arts. 37 e 41",
      "content": "Princípios da administração (LIMPE), acesso a cargos, concurso público; estabilidade do servidor.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=FaZEZV4qYXU",
        "title": "Administração Pública – arts. 37 a 41 (parte 1)"
       },
       {
        "url": "https://www.youtube.com/watch?v=FBj8A3X_yRI",
        "title": "Correção de simulado – arts. 37 a 41"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 6 — CF art. 144 — segurança pública",
      "content": "Órgãos (PF, PRF, PFF, polícias civis, militares e penais); atribuições de cada um.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=p9UR6jdQbys",
        "title": "Art. 144 – Constituição Federal"
       },
       {
        "url": "https://www.youtube.com/watch?v=-4iOmGow9ww",
        "title": "Questões comentadas do art. 144 (PC-SP 2023)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 7 — Direito Penal — parte geral",
      "content": "Crime × contravenção (art. 1º da Lei de Introdução ao CP); crime doloso e culposo; consumado e tentado (pena da tentativa: reduzida de 1/3 a 2/3); excludentes de ilicitude (estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=e43PMgUA5es",
        "title": "Teoria do Crime explicada de forma simples"
       },
       {
        "url": "https://www.youtube.com/watch?v=VjdcN86Z_08",
        "title": "Consumação e tentativa"
       },
       {
        "url": "https://www.youtube.com/watch?v=8XGvBalJbDI",
        "title": "Excludentes de ilicitude – legítima defesa"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=crime+e+contraven%C3%A7%C3%A3o+penal+diferen%C3%A7a+lei+de+introdu%C3%A7%C3%A3o+ao+c%C3%B3digo+penal+aula",
        "title": "Crime × contravenção penal (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 8 — Crimes praticados por funcionário público (CP arts. 312 a 327)",
      "content": "Peculato e modalidades, concussão, excesso de exação, corrupção passiva, prevaricação, condescendência criminosa, advocacia administrativa, conceito de funcionário público (art. 327).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=_OrwDXoKfQg",
        "title": "Crimes contra a Administração – Rodrigo Gomes (AlfaCon)"
       },
       {
        "url": "https://www.youtube.com/watch?v=sg0ocjzz4OA",
        "title": "Sexta Extravagante: Crimes contra a Administração Pública"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 9 — CPP arts. 158 a 184 — exame de corpo de delito e perícias",
      "content": "Corpo de delito direto/indireto; perito oficial × peritos nomeados; laudo; fotografias e esquemas no laudo; perícia em local de crime. (Tema mais ligado ao cargo — atenção extra.)",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=SLomQt26CgU",
        "title": "Exame de corpo de delito, cadeia de custódia e perícias"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 10 — Lei Orgânica da Polícia de SP",
      "content": "LC 207/79 com alterações da LC 922/02 e LC 1.151/11: carreiras, posse (quem empossa cada cargo), deveres, transgressões e penalidades.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=5OBccykcbdQ",
        "title": "LOP Aula 1 – LC 207/79 e LC 922/02 (parte 1)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 11 — Lei de Acesso à Informação",
      "content": "Lei 12.527/11 e Decreto Estadual 58.052/12: princípios, pedido de acesso, prazos, classificação de sigilo.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=kdj7QA1z5ms",
        "title": "Aula completa – Lei 12.527/2011"
       },
       {
        "url": "https://www.youtube.com/watch?v=T_LArnRvRoQ",
        "title": "Áudio-leitura – Lei 12.527/2011"
       },
       {
        "url": "https://www.youtube.com/watch?v=2Fc_Npa7zYc",
        "title": "Simulado 15 questões – Lei 12.527"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 12 — Revisão geral de Direito",
      "content": "Questões mistas de toda a matéria. A Vunesp copia o texto da lei nas alternativas — leia a lei seca.",
      "videos": [],
      "links": []
     },
     {
      "title": "Módulo 13 — Materiais de apoio (leis e PDFs)",
      "content": "Texto das leis (sempre a fonte mais segura) e aulas demonstrativas gratuitas.",
      "videos": [],
      "links": [
       {
        "url": "https://www.stf.jus.br/arquivo/cms/legislacaoConstituicao/anexo/CF.pdf",
        "title": "Constituição Federal em PDF – STF"
       },
       {
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "title": "Constituição Federal – Planalto (texto atualizado)"
       },
       {
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
        "title": "Código Penal – Planalto"
       },
       {
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3914.htm",
        "title": "Lei de Introdução ao Código Penal (DL 3.914/41) – Planalto"
       },
       {
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm",
        "title": "Código de Processo Penal – Planalto"
       },
       {
        "url": "https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/1979/lei.complementar-207-05.01.1979.html",
        "title": "Lei Orgânica da Polícia de SP – LC 207/79 (Alesp)"
       },
       {
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm",
        "title": "Lei de Acesso à Informação – Lei 12.527/11 (Planalto)"
       },
       {
        "url": "https://www.al.sp.gov.br/repositorio/legislacao/decreto/2012/decreto-58052-16.05.2012.html",
        "title": "Decreto Estadual 58.052/12 (Alesp)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-38.pdf",
        "title": "Aula demonstrativa – Direito Penal (Direção Concursos)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-10743.pdf",
        "title": "Aula demonstrativa – Direito Constitucional (Direção Concursos)"
       },
       {
        "url": "https://www.novaconcursos.com.br/arquivos-digitais/apostilas/17960/26008/direito-penal-crime-contra-administracao.pdf",
        "title": "Crimes contra a Administração Pública – material Nova Concursos"
       }
      ]
     }
    ]
   },
   {
    "name": "Raciocínio Lógico",
    "emoji": "🧩",
    "color": "#b57edc",
    "modules": [
     {
      "title": "Módulo 1 — Base: operações, frações, decimais e unidades",
      "content": "Frações, decimais, MMC/MDC, conversão de unidades (cm, m, km², minutos/horas). Sempre com papel e caneta.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=La_EvMyv1lQ",
        "title": "MMC e MDC: qual utilizar?"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/playlist?list=PLdNJc9bf_AaJ5HFAm0x7pwnFpMMvBI9NH",
        "title": "Operações com frações (playlist)"
       }
      ]
     },
     {
      "title": "Módulo 2 — Razão e proporção",
      "content": "Razão, proporção, escala; ampliação/redução de retângulos (lados, perímetro e área). As questões de 2014 usaram contexto de fotografia.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=GjxEHeAKWAU",
        "title": "Aprenda proporção em 8 minutos"
       },
       {
        "url": "https://www.youtube.com/watch?v=xb2huMvIrRI",
        "title": "Matemática Vunesp – razão e proporção, questões resolvidas"
       },
       {
        "url": "https://www.youtube.com/watch?v=NNwPceUVf8k",
        "title": "23 questões resolvidas de razão e proporção"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 3 — Grandezas proporcionais e divisão proporcional",
      "content": "Diretamente e inversamente proporcionais; divisão de um valor em partes proporcionais.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=ZiHqfMn2nQY",
        "title": "Grandezas diretamente e inversamente proporcionais"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=divis%C3%A3o+proporcional+quest%C3%B5es+resolvidas+concurso+vunesp",
        "title": "Divisão proporcional – questões (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 4 — Regra de três",
      "content": "Simples (direta e inversa) e composta (caiu em 2014 mesmo sem estar no edital).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=hOvO1e-gVJA",
        "title": "Regra de três simples e composta – aula 01"
       },
       {
        "url": "https://www.youtube.com/watch?v=jB5x4uEH6K0",
        "title": "Exercícios de regra de três para concursos"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 5 — Porcentagem",
      "content": "Cálculo de %, desconto, acréscimo, variação percentual, aumentos e descontos sucessivos.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=F88XEI5fW8s",
        "title": "Porcentagem – aumentos e descontos sucessivos (aula 04)"
       },
       {
        "url": "https://www.youtube.com/watch?v=aNOqH0y8loU",
        "title": "Porcentagem – aumentos e descontos sucessivos"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 6 — Teoria dos conjuntos",
      "content": "Diagramas de Venn com 2 e 3 conjuntos; união, interseção, “apenas A”.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=7ECA-F5Nhp0",
        "title": "Diagramas de Venn com três conjuntos"
       },
       {
        "url": "https://www.youtube.com/watch?v=Gt8M2PoKojY",
        "title": "18 questões de diagrama de Venn mais cobradas"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 7 — Sequências e padrões",
      "content": "Sequências numéricas, de letras e figuras; termo geral; padrões alternados.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=AYEcjiNMkps",
        "title": "Aula de sequências lógicas para concursos"
       },
       {
        "url": "https://www.youtube.com/watch?v=W2aFL3pKqfU",
        "title": "Sequências de números, figuras e palavras"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 8 — Raciocínio lógico (proposições)",
      "content": "Proposições e conectivos; tabela-verdade básica; negação; problemas de verdade/mentira e de associação.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=vdZSCwhC8Z0",
        "title": "Introdução à lógica proposicional – conectivos"
       },
       {
        "url": "https://www.youtube.com/watch?v=KXm8Hi-I_G0",
        "title": "Proposições e tabela-verdade"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=racioc%C3%ADnio+l%C3%B3gico+verdade+e+mentira+quest%C3%B5es+concurso",
        "title": "Verdades e mentiras – questões (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 9 — Revisão e questões mistas",
      "content": "Listas com todos os tópicos, cronometradas. Caderno de erros obrigatório.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=Ul34chd1SxA",
        "title": "Raciocínio lógico Vunesp 2023 – prova resolvida"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/playlist?list=PLtHEmAz8xX1urpMRzGI59C1j9D9AHY3ml",
        "title": "Raciocínio Lógico – Vunesp 2023 (playlist)"
       }
      ]
     },
     {
      "title": "Módulo 10 — Materiais de apoio (PDFs)",
      "content": "Apostilas e aulas demonstrativas gratuitas de raciocínio lógico e matemática.",
      "videos": [],
      "links": [
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-16.pdf",
        "title": "Aula 00 – Conceitos básicos de raciocínio lógico (Direção Concursos)"
       },
       {
        "url": "https://edumat.ouropreto.ifmg.edu.br/wp-content/uploads/sites/12/2016/06/apostila-matematica-financeira-01-RAZ%C3%83O-PROPOR%C3%87%C3%83O-REGRAS-DE-TRES-e-PORCENTAGEM-cassio.pdf",
        "title": "Razão, proporção, regras de três e porcentagem – apostila IFMG"
       },
       {
        "url": "https://codap.ufs.br/uploads/page_attach/path/8460/Raz_o__propor__o_e_regras_de_tr_s.pdf",
        "title": "Razão, proporção e regras de três – CODAP/UFS"
       },
       {
        "url": "https://www.ime.unicamp.br/~chico/ma091verao/ma091_ex4.pdf",
        "title": "Lista de exercícios: porcentagem e proporções – Unicamp"
       },
       {
        "url": "https://vali.qconcursos.com/odin/topics/f50e07d5-58f0-454b-afd9-206d38a36411.pdf",
        "title": "Aula 07 – Raciocínio lógico (Prof. Arthur Lima)"
       },
       {
        "url": "https://vali.qconcursos.com/odin/topics/cb595cac-833c-440c-b4ec-2f43c60cb699.pdf",
        "title": "Aula demonstrativa – Raciocínio lógico para Agente"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3334.pdf",
        "title": "Aula 00 – Raciocínio lógico, Prof. Arthur Lima (Direção Concursos)"
       }
      ]
     }
    ]
   },
   {
    "name": "Português",
    "emoji": "📖",
    "color": "#ff7eb6",
    "modules": [
     {
      "title": "Módulo 1 — Interpretação de textos (contínuo)",
      "content": "Textos jornalísticos, crônicas e charges; tema/assunto, inferência, intenção do autor. Pratique toda quarta, do início ao fim do ciclo.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=xfWlP2FoJno",
        "title": "Aula de interpretação – banca Vunesp"
       },
       {
        "url": "https://www.youtube.com/watch?v=z0PX0-KjI6U",
        "title": "4 passos para interpretação de texto"
       }
      ],
      "links": [
       {
        "url": "https://m.youtube.com/live/Sn8H21iBdO0",
        "title": "Interpretação – questões Vunesp (live)"
       },
       {
        "url": "https://www.youtube.com/playlist?list=PLbuo_BUvjP3Mds367iGHTGjGRz5VIfMmc",
        "title": "Português do Zero para Concursos (playlist, 23 aulas)"
       }
      ]
     },
     {
      "title": "Módulo 2 — Classes de palavras",
      "content": "Substantivo, adjetivo, numeral, pronome, verbo (tempos e modos), advérbio, preposição e conjunção.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=s8a6eXncWY8",
        "title": "Classe de Palavras"
       },
       {
        "url": "https://www.youtube.com/watch?v=M_wt1DWKV8s",
        "title": "Classes de Palavras"
       },
       {
        "url": "https://www.youtube.com/watch?v=EV_UoMMzwSE",
        "title": "Dominando os Verbos"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 3 — Sinônimos, antônimos e sentido no contexto",
      "content": "Substituição de expressões sem alterar o sentido; sentido figurado.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=4QtyXRbBkYA",
        "title": "Sinônimos e Antônimos + Questões Vunesp"
       },
       {
        "url": "https://www.youtube.com/watch?v=XHR9TPAlz1E",
        "title": "Semântica para Concursos"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 4 — Conectivos e relações de sentido",
      "content": "Valor de conjunções, preposições e advérbios (finalidade, restrição, causa, concessão...).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=sgZTQ_-ph6E",
        "title": "Conjunção em uma aula"
       },
       {
        "url": "https://www.youtube.com/watch?v=GAI8B2JoZuU",
        "title": "Conjunções subordinativas adverbiais"
       },
       {
        "url": "https://www.youtube.com/watch?v=AGoRgpivCwM",
        "title": "Exercícios de Conjunção"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 5 — Concordância verbal e nominal",
      "content": "Regras gerais e casos especiais mais cobrados (haver/fazer, sujeito posposto, “-se”).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=4ZJnTqTk4_Y",
        "title": "Concordância Verbal – Aula 01"
       },
       {
        "url": "https://www.youtube.com/watch?v=iZ7Ryffdoc0",
        "title": "Concordância Verbal – Aula 02"
       },
       {
        "url": "https://www.youtube.com/watch?v=wtYgEDzjcWM",
        "title": "Concordância Nominal – Aula 01"
       },
       {
        "url": "https://www.youtube.com/watch?v=ISPEMEtMprA",
        "title": "Concordância Nominal – Aula 02"
       },
       {
        "url": "https://www.youtube.com/watch?v=RgChoEg6enk",
        "title": "Concordância Verbal e Nominal – Aula 01"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 6 — Regência verbal e nominal",
      "content": "Verbos e nomes mais cobrados; preposições exigidas.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=B0EgJVneeGE",
        "title": "Regência Verbal – Aula 01"
       },
       {
        "url": "https://www.youtube.com/watch?v=r4Pew3CliXI",
        "title": "Regência Verbal – Aula 02"
       },
       {
        "url": "https://www.youtube.com/watch?v=LLqdavHTZ8A",
        "title": "Regência Verbal e Nominal"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 7 — Crase",
      "content": "Regra geral (a + a), casos proibidos, obrigatórios e facultativos. Depende de regência — estude depois dela.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=JJsqGFn7c24",
        "title": "Crase sem mistérios"
       },
       {
        "url": "https://www.youtube.com/watch?v=vyYgeAPb9nE",
        "title": "Uso básico da crase"
       },
       {
        "url": "https://www.youtube.com/watch?v=YY8CqGBc9B8",
        "title": "Exercícios de Crase"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 8 — Pronomes e colocação pronominal",
      "content": "Substituição por pronomes oblíquos (o/a/lhe); próclise, mesóclise e ênclise.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=PQRdgiIutrE",
        "title": "Pronomes – Aula 1"
       },
       {
        "url": "https://www.youtube.com/watch?v=cZ3MmXT0uys",
        "title": "Pronomes – Aula 2"
       },
       {
        "url": "https://www.youtube.com/watch?v=ggoDaZUfWdY",
        "title": "Colocação Pronominal"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 9 — Pontuação",
      "content": "Vírgula, ponto e vírgula, dois-pontos; efeito de exclamação, reticências e interrogação no texto.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=9tdpcfdr244",
        "title": "Vírgula, ponto e vírgula e dois-pontos"
       },
       {
        "url": "https://www.youtube.com/watch?v=C1QemeIdoNQ",
        "title": "Pontuação (INSS)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 10 — Revisão e questões Vunesp de todos os tópicos",
      "content": "Resolva provas completas de Português da banca Vunesp, do início ao fim do ciclo.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=hHUYvi7RsOI",
        "title": "Questões comentadas Vunesp"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/playlist?list=PLtHEmAz8xX1u3uo-SFlhxhvzXvyskqgqv",
        "title": "Playlist Português Vunesp (192 vídeos)"
       }
      ]
     },
     {
      "title": "Módulo 11 — Materiais de apoio (PDFs)",
      "content": "Aulas demonstrativas gratuitas de gramática e interpretação (Prof. José Maria e Português) e simulado Vunesp.",
      "videos": [],
      "links": [
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-32.pdf",
        "title": "Aula 00 – Prof. José Maria (Direção Concursos)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-7191.pdf",
        "title": "Aula 00 – Prof. José Maria (curso 7191)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-7147.pdf",
        "title": "Aula 00 – Prof. José Maria (curso 7147)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-9851.pdf",
        "title": "Aula 00 – Prof. José Maria (curso 9851)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-8081.pdf",
        "title": "Aula 00 – Prof. José Maria (curso 8081)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-11347.pdf",
        "title": "Aula 01 – Prof. José Maria"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-1095.pdf",
        "title": "Aula 00 – Português (Direção Concursos)"
       },
       {
        "url": "https://fabianoabreu.com/wp-content/uploads/2024/08/SIMULADO-TJ-SP-2024-comentado-Prof.-Fabiano-Abreu.pdf",
        "title": "Simulado TJ-SP 2024 comentado (Vunesp) – Prof. Fabiano Abreu"
       }
      ]
     }
    ]
   },
   {
    "name": "Informática",
    "emoji": "💻",
    "color": "#70d9ff",
    "modules": [
     {
      "title": "Módulo 1 — Windows: conceitos básicos",
      "content": "Área de trabalho, menu Iniciar, pastas, arquivos, extensões, atalhos; Bibliotecas; Acessórios e Ferramentas do Sistema; atalhos de teclado. Todo comando estudado deve ser testado no programa.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=xRoE32ck6V8",
        "title": "Windows 10 para concursos – aula 1"
       },
       {
        "url": "https://www.youtube.com/watch?v=Dvs424Ur1Io",
        "title": "Windows 10 para concursos – aula ao vivo"
       },
       {
        "url": "https://www.youtube.com/watch?v=8SmLcUatOmA",
        "title": "Questões de sistemas operacionais"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 2 — Word: edição e formatação",
      "content": "Guias e grupos da faixa de opções; fonte, parágrafo, marcadores e numeração; atalhos (no Word em português, Ctrl+S = sublinhado).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=pv5DWHGFBfk",
        "title": "Microsoft Word 365 para concurso – aula 1"
       },
       {
        "url": "https://www.youtube.com/watch?v=T0bMQYfwsQs",
        "title": "Atalhos de teclado do Word"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 3 — Word: estrutura e recursos",
      "content": "Cabeçalho/rodapé, numeração de páginas, quebras, inserção de objetos (grupo Ilustrações), salvar como PDF, impressão.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=5l4fJW8cK3s",
        "title": "Curso básico de informática – Word (episódio 4)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 4 — Excel: fundamentos",
      "content": "Células, linhas, colunas, planilhas e pastas; referências relativas e absolutas ($); operadores; : e ; nas fórmulas.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=DHmyda99XN8",
        "title": "Referências relativas e absolutas ($)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 5 — Excel: fórmulas e funções",
      "content": "SOMA, MÉDIA, MÁXIMO, MÍNIMO, SE, CONT.SE, SOMASE; cálculo passo a passo de fórmulas combinadas.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=sPbAeeRevVo",
        "title": "Fórmulas e funções do Excel para concursos – aula 15"
       },
       {
        "url": "https://www.youtube.com/watch?v=NllyYcgFZTo",
        "title": "SOMA, MÉDIA, MÁXIMO, MÍNIMO"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=excel+fun%C3%A7%C3%A3o+SE+CONT.SE+SOMASE+para+concursos",
        "title": "Função SE, CONT.SE e SOMASE (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 6 — Excel: tabelas e classificação",
      "content": "Classificar e filtrar dados, inserção de objetos e gráficos.",
      "videos": [],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=excel+classificar+e+filtrar+dados+aula",
        "title": "Classificar e filtrar dados no Excel (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 7 — Internet e navegadores",
      "content": "Conceitos (provedor, URL, link, site), buscas, histórico, abas e janelas, atalhos (Ctrl+N, Ctrl+T, Ctrl+Shift+Del), vírus e segurança.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=vOQNnusrSaY",
        "title": "Questões de navegadores de internet"
       },
       {
        "url": "https://www.youtube.com/watch?v=1tVxzd7id7A",
        "title": "Malware e vírus – informática para concursos"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 8 — Correio eletrônico",
      "content": "Enviar, responder, responder a todos, encaminhar; anexos; assinatura; CC e CCO.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=A-c6_5-g8IM",
        "title": "Correio eletrônico para concursos"
       },
       {
        "url": "https://www.youtube.com/watch?v=amzyoZ0Kbxk",
        "title": "Envio de e-mail: Para, CC e CCO"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 9 — Revisão",
      "content": "Questões mistas. A prova de 2014 cobrou Windows 7, Office 2010 e IE 10; estude pelas versões atuais, pois os conceitos são os mesmos.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=kTH21k9pZXA",
        "title": "Revisão com questões – informática para concursos"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/playlist?list=PLzMN3jVT58xo_JFbE7h4l9-mbgFhBg_Nr",
        "title": "Curso Básico de Informática para Concursos (playlist)"
       }
      ]
     },
     {
      "title": "Módulo 10 — Materiais de apoio (PDFs)",
      "content": "Aulas demonstrativas gratuitas de informática (Prof. Victor Dalton).",
      "videos": [],
      "links": [
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-9013.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curso 9013)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-7140.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curso 7140)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-10426.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curso 10426)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-11294.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curso 11294)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3307.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curso 3307)"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3458.pdf",
        "title": "Aula 00 – Prof. Victor Dalton (curta, 50 p.)"
       }
      ]
     }
    ]
   },
   {
    "name": "Criminologia",
    "emoji": "🔎",
    "color": "#ffa69e",
    "modules": [
     {
      "title": "Módulo 1 — Criminologia: conceito, método, objeto e finalidades",
      "content": "Ciência empírica e interdisciplinar; métodos (empírico, indutivo, estatístico); objetos (delito, delinquente, vítima, controle social); criminologia geral × clínica; finalidades. Matéria de memorização — ideal para flashcards.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=c9RM51Ig7To",
        "title": "Conceito, métodos, objetos e finalidades – Missão PC-SP"
       },
       {
        "url": "https://www.youtube.com/watch?v=T29zUYiBKQ0",
        "title": "Criminologia: conceito, cientificidade, métodos, objetos e finalidades"
       },
       {
        "url": "https://www.youtube.com/watch?v=xsRIyWybAYo",
        "title": "Ao vivo: Conceito, métodos, objetos e finalidades (Polícia Civil SP)"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 2 — Fatores condicionantes e desencadeantes da criminalidade",
      "content": "Fatores sociais (pobreza, desemprego, migração, “má vivência”), meios de comunicação, urbanização, família, educação.",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=TLXmQR5gC7Q",
        "title": "Aula de Criminologia para concurso PC-SP"
       }
      ],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=criminologia+fatores+condicionantes+e+desencadeantes+da+criminalidade+aula",
        "title": "Fatores da criminalidade (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 3 — Vitimologia",
      "content": "Conceito e precursores (Mendelsohn, von Hentig); 1º Simpósio Internacional (Jerusalém, 1973); classificação das vítimas; cifra negra; vitimização primária, secundária e terciária; leis de proteção à vítima (Lei 9.099/95, Lei 9.807/99, Lei Maria da Penha).",
      "videos": [],
      "links": [
       {
        "url": "https://www.youtube.com/results?search_query=vitimologia+vitimiza%C3%A7%C3%A3o+prim%C3%A1ria+secund%C3%A1ria+terci%C3%A1ria+cifra+negra+aula+concursos",
        "title": "Vitimização primária, secundária, terciária e cifra negra (buscar no YouTube)"
       }
      ]
     },
     {
      "title": "Módulo 4 — Prevenção do delito",
      "content": "Prevenção primária, secundária e terciária; prevenção situacional; finalidades da pena (retribuição e prevenção geral/especial); modelos de reação ao delito (dissuasório, ressocializador, restaurador).",
      "videos": [
       {
        "url": "https://www.youtube.com/watch?v=qcpjrrDS2mI",
        "title": "Prevenção primária, secundária e terciária"
       },
       {
        "url": "https://www.youtube.com/watch?v=TRODoY3aftk",
        "title": "Aula da prevenção da criminalidade"
       }
      ],
      "links": []
     },
     {
      "title": "Módulo 5 — Revisão e questões",
      "content": "Questões Vunesp de Criminologia de outros cargos da PC-SP.",
      "videos": [],
      "links": [
       {
        "url": "https://www.youtube.com/playlist?list=PLZvSkVqe_ub4tzEulAKOf6ngvQ4Vggilc",
        "title": "Criminologia para a Polícia Civil (playlist)"
       }
      ]
     },
     {
      "title": "Módulo 6 — Materiais de apoio (PDFs)",
      "content": "Aulas demonstrativas gratuitas e amostras de apostila de criminologia.",
      "videos": [],
      "links": [
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-9634.pdf",
        "title": "Criminologia: conceito, métodos, objetos e finalidades – Prof. Diego Pureza"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3501.pdf",
        "title": "Criminologia – Aula 03 (prevenção) – Prof. Diego Pureza"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3499.pdf",
        "title": "Noções de Criminologia para Escrivão e Investigador"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-3320.pdf",
        "title": "Aula 00 – Criminologia – Prof. Rafael de Oliveira"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-11491.pdf",
        "title": "Aula 00 – Criminologia para Agente e Escrivão – Prof. Rafael de Oliveira"
       },
       {
        "url": "https://free-content.direcaoconcursos.com.br/demo/curso-11592.pdf",
        "title": "Aula 00 – Criminologia – Prof. Rafael de Oliveira (outro curso)"
       },
       {
        "url": "https://cdn.novaconcursos.com.br/static-gestao-conteudo-help-provas/amostra/1232/8983/b48df059736e38cf8364ef09a1c252f4.pdf",
        "title": "Amostra – Noções de Criminologia PC-SP (Nova Concursos)"
       },
       {
        "url": "https://raimundomarinho.edu.br/rdta/files/original/0ea1ffa0e0695368ae1273358d8f6a14e6a94d9f.pdf",
        "title": "Vitimologia: vitimização primária, secundária e terciária"
       }
      ]
     }
    ]
   }
  ]
 }
];
