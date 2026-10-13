/* =========================================================================
 * bank.js — Banco de simulados prontos (questões de múltipla escolha)
 *
 * Gerado para o roteiro de estudo. Cada matéria tem seus módulos, e cada
 * módulo um conjunto de questões com correção automática (correctIndex).
 * O app casa a matéria + o título do módulo com estas chaves e mostra o
 * simulado pronto, sem depender de IA.
 * ========================================================================= */
window.SIMULADOS = {
 "tecnicas audiovisuais": [
  {
   "key": "equipamento fotografico camera convencional e digital",
   "title": "Equipamento fotográfico: câmera convencional e digital",
   "questions": [
    {
     "type": "mc",
     "stem": "Nas câmeras reflex monobjetivas (DSLR), o elemento óptico responsável por inverter a imagem formada pelo espelho e entregá-la ao visor na orientação correta (direita e para cima) é:",
     "options": [
      "O obturador de plano focal",
      "O pentaprisma",
      "O diafragma da objetiva",
      "O sensor de imagem"
     ],
     "correctIndex": 1,
     "explanation": "Na DSLR o espelho reflete a imagem para cima e o pentaprisma corrige a inversão, apresentando-a ao visor na orientação correta."
    },
    {
     "type": "mc",
     "stem": "A principal diferença construtiva de uma câmera mirrorless em relação a uma DSLR é:",
     "options": [
      "A ausência do espelho e do pentaprisma, usando normalmente visor eletrônico ou a tela",
      "A impossibilidade de troca de objetivas",
      "A obrigatoriedade de usar filme fotográfico",
      "A ausência de sensor de imagem"
     ],
     "correctIndex": 0,
     "explanation": "A mirrorless dispensa o conjunto espelho/pentaprisma das reflex, empregando visor eletrônico (EVF) ou a própria tela (LCD) para enquadramento."
    },
    {
     "type": "mc",
     "stem": "O ajuste de correção dióptrica presente no visor de muitas câmeras serve para:",
     "options": [
      "Alterar a profundidade de campo da objetiva",
      "Adaptar o visor à acuidade visual do fotógrafo, permitindo enxergar nítido sem óculos",
      "Corrigir o balanço de branco da imagem",
      "Aumentar a sensibilidade ISO do sensor"
     ],
     "correctIndex": 1,
     "explanation": "A correção dióptrica ajusta a ótica do visor ao olho do operador, compensando pequenos erros de refração para que a cena seja vista com nitidez."
    },
    {
     "type": "mc",
     "stem": "Na correlação entre câmera analógica e digital, o elemento que na câmera a filme corresponde funcionalmente ao sensor da câmera digital é:",
     "options": [
      "O obturador",
      "O filme fotográfico",
      "O diafragma",
      "O visor"
     ],
     "correctIndex": 1,
     "explanation": "O filme é o material sensível que registra a imagem na câmera analógica, papel desempenhado pelo sensor (CCD/CMOS) na câmera digital."
    },
    {
     "type": "mc",
     "stem": "As câmeras compactas se caracterizam, em comparação às DSLR, por:",
     "options": [
      "Possuírem objetivas intercambiáveis e espelho reflex",
      "Serem câmeras de grande formato com fole",
      "Terem, em geral, objetiva fixa e sensor menor, visando portabilidade",
      "Dispensarem completamente o obturador"
     ],
     "correctIndex": 2,
     "explanation": "As compactas priorizam portabilidade, com objetiva geralmente fixa e sensor de dimensões reduzidas, diferentemente das DSLR com objetivas intercambiáveis."
    }
   ]
  },
  {
   "key": "exposicao o triangulo iso diafragma obturador",
   "title": "Exposição: o triângulo ISO × diafragma × obturador",
   "questions": [
    {
     "type": "mc",
     "stem": "No triângulo de exposição, aumentar a sensibilidade ISO de um valor para o dobro (por exemplo, de 100 para 200) tem como efeito:",
     "options": [
      "Reduzir a sensibilidade do sensor à luz pela metade",
      "Dobrar a sensibilidade do sensor à luz, equivalendo a ganhar 1 stop de exposição",
      "Alterar a profundidade de campo sem afetar a exposição",
      "Diminuir o ruído na imagem"
     ],
     "correctIndex": 1,
     "explanation": "Cada duplicação do valor ISO corresponde a um stop a mais de exposição, pois dobra a resposta do sensor à luz."
    },
    {
     "type": "mc",
     "stem": "Entre as aberturas de diafragma abaixo, aquela que deixa passar MAIS luz é:",
     "options": [
      "f/16",
      "f/11",
      "f/2,8",
      "f/8"
     ],
     "correctIndex": 2,
     "explanation": "O número f é inversamente proporcional ao tamanho da abertura; quanto menor o número f, maior a abertura e mais luz entra, de modo que f/2,8 é a maior entre as listadas."
    },
    {
     "type": "mc",
     "stem": "Sobre o ruído digital e a sensibilidade ISO, é correto afirmar que:",
     "options": [
      "ISO alto reduz o ruído, resultando em imagens mais limpas",
      "O ruído independe do valor ISO utilizado",
      "ISO alto tende a aumentar o ruído na imagem, sendo útil em pouca luz com essa desvantagem",
      "Somente ISO baixo gera ruído visível"
     ],
     "correctIndex": 2,
     "explanation": "Valores de ISO elevados amplificam o sinal e também o ruído; são usados em baixa luminosidade, ao custo de maior granulação/ruído."
    },
    {
     "type": "mc",
     "stem": "Uma fotografia subexposta apresenta-se:",
     "options": [
      "Clara demais, com perda de detalhe nas altas luzes",
      "Escura demais, com perda de detalhe nas sombras",
      "Com cores saturadas e nitidez máxima",
      "Sempre tremida em razão do movimento"
     ],
     "correctIndex": 1,
     "explanation": "Subexposição significa luz insuficiente no registro, gerando imagem escura com sombras empastadas e perda de detalhe nas áreas de baixa luz."
    },
    {
     "type": "mc",
     "stem": "Pela lei da reciprocidade da exposição, ao fechar o diafragma em 1 stop (reduzindo a luz pela metade), para manter a mesma exposição o fotógrafo pode:",
     "options": [
      "Dobrar o tempo de exposição (obturador 1 stop mais lento)",
      "Reduzir o tempo de exposição pela metade",
      "Reduzir o ISO pela metade",
      "Fechar ainda mais o diafragma"
     ],
     "correctIndex": 0,
     "explanation": "A reciprocidade permite compensar a perda de 1 stop no diafragma com o ganho de 1 stop no obturador, mantendo a exposição equivalente."
    }
   ]
  },
  {
   "key": "profundidade de campo e foco",
   "title": "Profundidade de campo e foco",
   "questions": [
    {
     "type": "mc",
     "stem": "A profundidade de campo de uma fotografia é MAIOR quando se utiliza:",
     "options": [
      "Uma abertura ampla, como f/2,8",
      "Uma abertura fechada, como f/16",
      "Uma distância focal muito longa",
      "Foco em um assunto muito próximo"
     ],
     "correctIndex": 1,
     "explanation": "Aberturas fechadas (número f grande, como f/16) aumentam a profundidade de campo, deixando mais planos nítidos da cena."
    },
    {
     "type": "mc",
     "stem": "Mantidos constantes abertura e distância do assunto, o uso de uma distância focal mais longa (teleobjetiva) tende a:",
     "options": [
      "Aumentar a profundidade de campo",
      "Reduzir a profundidade de campo",
      "Não ter qualquer influência sobre a profundidade de campo",
      "Eliminar totalmente o desfoque de fundo"
     ],
     "correctIndex": 1,
     "explanation": "Distâncias focais maiores reduzem a profundidade de campo, tornando mais evidente o desfoque dos planos anterior e posterior ao assunto."
    },
    {
     "type": "mc",
     "stem": "Quanto à distância do assunto, aproximar a câmera do objeto focado, mantidos os demais fatores, faz com que a profundidade de campo:",
     "options": [
      "Aumente",
      "Diminua",
      "Permaneça exatamente igual",
      "Dobre de valor"
     ],
     "correctIndex": 1,
     "explanation": "Quanto menor a distância entre câmera e assunto, menor a profundidade de campo; por isso fotos aproximadas têm faixa de nitidez muito estreita."
    },
    {
     "type": "mc",
     "stem": "O foco manual costuma ser preferível ao automático em situações como:",
     "options": [
      "Cenas bem iluminadas com alto contraste e bordas definidas",
      "Macrofotografia e cenas de baixo contraste ou pouca luz, em que o automático tem dificuldade",
      "Retratos em estúdio com iluminação controlada",
      "Fotografia esportiva com assunto em movimento rápido"
     ],
     "correctIndex": 1,
     "explanation": "Em macro, baixa luz ou cenas sem contraste o autofoco oscila ou erra; o controle manual garante precisão do plano de foco."
    },
    {
     "type": "mc",
     "stem": "Para obter um retrato com o fundo bem desfocado (pouca profundidade de campo), a combinação mais adequada é:",
     "options": [
      "Abertura fechada (f/16) e grande angular",
      "Abertura ampla (f/1,8) e distância focal mais longa",
      "ISO alto e obturador rápido",
      "Abertura fechada e assunto muito distante"
     ],
     "correctIndex": 1,
     "explanation": "Abertura ampla aliada a focal mais longa minimiza a profundidade de campo, isolando o assunto com fundo desfocado."
    }
   ]
  },
  {
   "key": "fotometria",
   "title": "Fotometria",
   "questions": [
    {
     "type": "mc",
     "stem": "O fotômetro incorporado à câmera mede, por padrão:",
     "options": [
      "A luz incidente que chega ao assunto",
      "A luz refletida pela cena em direção à câmera",
      "Apenas a temperatura de cor da fonte",
      "A distância entre câmera e assunto"
     ],
     "correctIndex": 1,
     "explanation": "O fotômetro interno é do tipo luz refletida: lê a luz que a cena devolve à objetiva, ao contrário do fotômetro de mão de luz incidente."
    },
    {
     "type": "mc",
     "stem": "Os fotômetros são calibrados tomando como referência um tom de cinza médio que reflete aproximadamente:",
     "options": [
      "50% da luz incidente",
      "90% da luz incidente",
      "18% da luz incidente",
      "2% da luz incidente"
     ],
     "correctIndex": 2,
     "explanation": "A calibração padrão dos fotômetros adota o cinza médio de 18% de reflectância como referência de exposição."
    },
    {
     "type": "mc",
     "stem": "Ao fotografar uma superfície predominantemente branca (como neve), confiando na leitura direta do fotômetro de luz refletida, tende-se a obter:",
     "options": [
      "Uma imagem corretamente exposta",
      "Uma imagem subexposta, com o branco acinzentado",
      "Uma imagem superexposta, totalmente estourada",
      "Alteração apenas da temperatura de cor"
     ],
     "correctIndex": 1,
     "explanation": "O fotômetro tenta tornar a cena um cinza de 18%; diante de muito branco ele reduz a exposição, deixando o branco acinzentado (subexposto), exigindo compensação positiva."
    },
    {
     "type": "mc",
     "stem": "O fotômetro de luz incidente (manual, de mão) tem como vantagem:",
     "options": [
      "Medir a luz que efetivamente ilumina o assunto, sem a influência da reflectância do objeto",
      "Dispensar qualquer posicionamento próximo ao assunto",
      "Medir automaticamente o balanço de branco",
      "Funcionar somente com luz artificial"
     ],
     "correctIndex": 0,
     "explanation": "Por medir a luz que incide sobre o assunto, o fotômetro de luz incidente não é enganado pela cor ou tonalidade do objeto, ao contrário do de luz refletida."
    },
    {
     "type": "mc",
     "stem": "O modo de medição que avalia a luz de várias zonas da cena e calcula uma exposição média ponderada é denominado:",
     "options": [
      "Medição pontual (spot)",
      "Medição matricial/avaliativa",
      "Medição por luz incidente",
      "Medição de temperatura de cor"
     ],
     "correctIndex": 1,
     "explanation": "A medição matricial (avaliativa) divide o quadro em zonas e pondera as leituras, diferindo da medição pontual, que lê apenas uma pequena área."
    }
   ]
  },
  {
   "key": "objetivas",
   "title": "Objetivas",
   "questions": [
    {
     "type": "mc",
     "stem": "Considera-se objetiva normal aquela cuja distância focal é aproximadamente igual:",
     "options": [
      "Ao dobro da diagonal do formato de captura",
      "À diagonal do quadro (formato) de captura",
      "À metade da base do sensor",
      "Ao círculo de cobertura da objetiva"
     ],
     "correctIndex": 1,
     "explanation": "A objetiva normal tem distância focal próxima à diagonal do formato, oferecendo ângulo de visão semelhante ao da percepção humana."
    },
    {
     "type": "mc",
     "stem": "Em relação à objetiva normal de um mesmo formato, uma grande angular caracteriza-se por:",
     "options": [
      "Menor distância focal e maior ângulo de visão",
      "Maior distância focal e menor ângulo de visão",
      "Mesma focal, porém maior abertura máxima",
      "Ausência de aberrações ópticas"
     ],
     "correctIndex": 0,
     "explanation": "A grande angular tem distância focal menor que a normal, o que amplia o ângulo de visão abrangido."
    },
    {
     "type": "mc",
     "stem": "Diz-se que uma objetiva é 'rápida' (luminosa) quando:",
     "options": [
      "Possui grande abertura máxima, como f/1,4 ou f/2",
      "Permite o obturador atingir velocidades altas",
      "Tem distância focal muito longa",
      "Apresenta o menor círculo de cobertura"
     ],
     "correctIndex": 0,
     "explanation": "Objetivas rápidas têm abertura máxima ampla (número f pequeno), captando muita luz e permitindo exposições mais curtas em baixa luminosidade."
    },
    {
     "type": "mc",
     "stem": "A distância focal de uma objetiva é definida, para foco no infinito, como a distância entre:",
     "options": [
      "A primeira lente frontal e o visor",
      "O ponto nodal posterior e o plano focal (sensor/filme)",
      "O diafragma e a montagem da objetiva",
      "O para-sol e o sensor"
     ],
     "correctIndex": 1,
     "explanation": "Com foco no infinito, a distância focal é medida do ponto nodal posterior até o plano focal onde a imagem nítida se forma."
    },
    {
     "type": "mc",
     "stem": "O círculo de cobertura de uma objetiva corresponde:",
     "options": [
      "Ao diâmetro do filtro frontal que ela aceita",
      "À área de imagem nítida que ela projeta sobre o plano focal",
      "Ao ângulo de rotação do anel de foco",
      "À menor distância de foco possível"
     ],
     "correctIndex": 1,
     "explanation": "O círculo de cobertura é a área circular de imagem útil projetada pela objetiva, que deve ser maior que o formato de captura para cobri-lo inteiramente."
    }
   ]
  },
  {
   "key": "luz natural",
   "title": "Luz natural",
   "questions": [
    {
     "type": "mc",
     "stem": "A luz solar direta, em comparação com a luz difusa do céu nublado, produz:",
     "options": [
      "Sombras suaves e baixo contraste",
      "Sombras densas e bem definidas, com alto contraste",
      "Ausência total de sombras",
      "Dominância azulada e contraste nulo"
     ],
     "correctIndex": 1,
     "explanation": "A luz solar direta é uma fonte dura e pontual, gerando sombras nítidas e contraste elevado, ao contrário da luz difusa do céu encoberto."
    },
    {
     "type": "mc",
     "stem": "Em dias de céu nublado, a luz que chega ao assunto é considerada:",
     "options": [
      "Dura e direcional",
      "Difusa e suave, por ser espalhada pelas nuvens",
      "Mais quente que a luz do tungstênio",
      "Pontual, como a de um flash não difundido"
     ],
     "correctIndex": 1,
     "explanation": "As nuvens atuam como um grande difusor, espalhando a luz solar e produzindo iluminação suave, com sombras tênues e baixo contraste."
    },
    {
     "type": "mc",
     "stem": "Ao longo do dia, o período próximo ao meio-dia com sol a pino tende a produzir, em retratos:",
     "options": [
      "Luz frontal suave e agradável",
      "Sombras duras e marcadas sob olhos e nariz, por luz muito vertical",
      "A chamada hora dourada, de luz quente e rasante",
      "Iluminação totalmente difusa"
     ],
     "correctIndex": 1,
     "explanation": "Com o sol alto, a luz incide quase vertical, criando sombras duras sob sobrancelhas, nariz e queixo, pouco favoráveis ao retrato."
    },
    {
     "type": "mc",
     "stem": "A luz proveniente de uma janela em ambiente interno, sem incidência solar direta, caracteriza-se por ser:",
     "options": [
      "Uma luz direcional e difusa, que cria modelado suave no assunto",
      "Uma luz dura equivalente ao flash direto",
      "Uma fonte de temperatura de cor igual à do tungstênio",
      "Uma luz sem qualquer direção predominante"
     ],
     "correctIndex": 0,
     "explanation": "A luz de janela é direcional (vem de um lado), porém difusa, produzindo transição suave entre luz e sombra, muito usada em retratos clássicos."
    },
    {
     "type": "mc",
     "stem": "O chamado horário próximo ao nascer e ao pôr do sol (hora dourada) oferece ao fotógrafo:",
     "options": [
      "Luz muito dura e azulada",
      "Luz quente, rasante e de baixo contraste",
      "Luz vertical com sombras densas",
      "Luz idêntica à do meio-dia"
     ],
     "correctIndex": 1,
     "explanation": "Nesses horários o sol está baixo no horizonte, produzindo luz quente, rasante e de contraste mais ameno, valorizando texturas e volumes."
    }
   ]
  },
  {
   "key": "temperatura de cor e balanco de branco",
   "title": "Temperatura de cor e balanço de branco",
   "questions": [
    {
     "type": "mc",
     "stem": "A temperatura de cor de uma fonte de luz é expressa na escala:",
     "options": [
      "Celsius (°C)",
      "Fahrenheit (°F)",
      "Kelvin (K)",
      "Lux"
     ],
     "correctIndex": 2,
     "explanation": "A temperatura de cor é medida em kelvin (K), escala que associa cada valor a uma tonalidade da luz emitida por um corpo negro ideal."
    },
    {
     "type": "mc",
     "stem": "A iluminação por lâmpadas de tungstênio (incandescentes) tem temperatura de cor em torno de 3200 K e produz, sem correção, predominância:",
     "options": [
      "Azulada (fria)",
      "Alaranjada/amarelada (quente)",
      "Esverdeada",
      "Neutra, sem dominante"
     ],
     "correctIndex": 1,
     "explanation": "O tungstênio, por volta de 3200 K, é uma fonte quente; sem ajuste de balanço de branco a imagem fica com dominante alaranjada."
    },
    {
     "type": "mc",
     "stem": "A luz do dia e a luz do flash eletrônico têm temperatura de cor aproximada de:",
     "options": [
      "2000 K",
      "3200 K",
      "5500 K",
      "10000 K"
     ],
     "correctIndex": 2,
     "explanation": "A luz do dia (sol com céu limpo) e o flash eletrônico situam-se em torno de 5500 K, referência de luz branca neutra na fotografia."
    },
    {
     "type": "mc",
     "stem": "O ajuste de balanço de branco na câmera tem a finalidade de:",
     "options": [
      "Aumentar a profundidade de campo",
      "Neutralizar a dominante de cor da fonte de luz, fazendo o branco aparecer branco",
      "Elevar a sensibilidade ISO",
      "Reduzir o tempo de exposição"
     ],
     "correctIndex": 1,
     "explanation": "O balanço de branco compensa a temperatura de cor da iluminação para que tons neutros sejam reproduzidos sem dominante cromática."
    },
    {
     "type": "mc",
     "stem": "Para corrigir, no momento da captura em filme, a dominante quente do tungstênio aproximando-a da luz do dia, utiliza-se classicamente um filtro:",
     "options": [
      "De coloração azulada (série 80), de conversão",
      "De coloração âmbar/alaranjada (série 85)",
      "Polarizador circular",
      "Vermelho de contraste para P&B"
     ],
     "correctIndex": 0,
     "explanation": "Os filtros de conversão azulados (série 80) elevam a temperatura de cor, convertendo a luz quente do tungstênio para o padrão da luz do dia."
    }
   ]
  },
  {
   "key": "iluminacao artificial luz continua e flash",
   "title": "Iluminação artificial: luz contínua e flash",
   "questions": [
    {
     "type": "mc",
     "stem": "O número-guia (NG) de um flash relaciona-se com a abertura e a distância pela fórmula:",
     "options": [
      "f = NG × distância",
      "f = NG ÷ distância",
      "distância = f × NG²",
      "NG = distância ÷ f"
     ],
     "correctIndex": 1,
     "explanation": "O número-guia é o produto da abertura pela distância; isolando a abertura, tem-se f = NG ÷ distância para exposição correta com flash."
    },
    {
     "type": "mc",
     "stem": "Um flash com número-guia 32 (ISO 100, em metros) iluminando um assunto a 8 metros exige, para exposição correta, abertura de aproximadamente:",
     "options": [
      "f/2",
      "f/4",
      "f/8",
      "f/16"
     ],
     "correctIndex": 1,
     "explanation": "Aplicando f = NG ÷ distância, tem-se 32 ÷ 8 = 4, ou seja, abertura f/4."
    },
    {
     "type": "mc",
     "stem": "A técnica do flash rebatido (bounce), direcionando a luz para o teto ou uma parede, tem como objetivo principal:",
     "options": [
      "Aumentar o alcance do flash ao máximo",
      "Tornar a luz mais suave e difusa, reduzindo sombras duras",
      "Elevar a temperatura de cor da cena",
      "Congelar movimentos mais rápidos"
     ],
     "correctIndex": 1,
     "explanation": "Ao rebater a luz em uma superfície ampla, aumenta-se a área da fonte, suavizando a iluminação e atenuando sombras duras e reflexos."
    },
    {
     "type": "mc",
     "stem": "Os refletores halógenos com lente Fresnel e os painéis de LED são exemplos de:",
     "options": [
      "Fontes de luz contínua",
      "Fontes de flash eletrônico",
      "Filtros de correção de cor",
      "Difusores passivos"
     ],
     "correctIndex": 0,
     "explanation": "Halógenos com Fresnel, fluorescentes, HMI e LED são fontes de luz contínua, que permanecem acesas, diferentemente do flash, que emite um pulso breve."
    },
    {
     "type": "mc",
     "stem": "Entre os acessórios abaixo, aquele que transforma a luz do flash ou do refletor em luz mais suave (difusa) é:",
     "options": [
      "O para-sol da objetiva",
      "A softbox",
      "O filtro polarizador",
      "O cabo disparador"
     ],
     "correctIndex": 1,
     "explanation": "A softbox é um difusor que amplia e suaviza a fonte de luz, produzindo iluminação macia; rebatedores também espalham a luz, ao contrário de fontes nuas (luz dura)."
    }
   ]
  },
  {
   "key": "macrofotografia registro em escala",
   "title": "Macrofotografia (registro em escala)",
   "questions": [
    {
     "type": "mc",
     "stem": "Uma lente close-up (dioptria) de +2 dioptrias permite focar, com a objetiva ajustada para o infinito, a uma distância aproximada de:",
     "options": [
      "2 metros",
      "1 metro",
      "0,5 metro",
      "0,25 metro"
     ],
     "correctIndex": 2,
     "explanation": "A distância de foco é o inverso da dioptria em metros: 1 ÷ 2 = 0,5 m."
    },
    {
     "type": "mc",
     "stem": "Na macrofotografia, diz-se que a escala de reprodução é 1:1 quando:",
     "options": [
      "A imagem no sensor/filme tem o mesmo tamanho do objeto real",
      "A imagem é duas vezes maior que o objeto",
      "O objeto é fotografado a 1 metro de distância",
      "A abertura utilizada é f/1"
     ],
     "correctIndex": 0,
     "explanation": "Reprodução 1:1 (razão 1) significa que o tamanho da imagem projetada no plano focal é igual ao tamanho real do objeto fotografado."
    },
    {
     "type": "mc",
     "stem": "O uso de tubos de extensão ou fole entre a objetiva e o corpo da câmera, por afastar a lente do plano focal, exige:",
     "options": [
      "Nenhuma mudança na exposição",
      "Compensação de exposição (mais luz), pois a intensidade que chega ao plano focal diminui",
      "Redução do ISO para compensar o excesso de luz",
      "Fechar ainda mais o diafragma para ganhar luz"
     ],
     "correctIndex": 1,
     "explanation": "Afastar a objetiva aumenta a distância ao plano focal e reduz a luz que o atinge, exigindo compensação positiva de exposição."
    },
    {
     "type": "mc",
     "stem": "Em uma fotografia pericial de pequenos vestígios, a inclusão de uma escala métrica (régua) ao lado do objeto serve para:",
     "options": [
      "Melhorar o balanço de branco da imagem",
      "Permitir a aferição das dimensões reais do vestígio no registro",
      "Aumentar a profundidade de campo da cena",
      "Reduzir o ruído em ISO alto"
     ],
     "correctIndex": 1,
     "explanation": "A escala métrica pericial fornece referência dimensional, permitindo medir o tamanho real do vestígio diretamente na imagem."
    },
    {
     "type": "mc",
     "stem": "Uma característica típica da macrofotografia que exige cuidado especial com a iluminação e o foco é:",
     "options": [
      "A profundidade de campo extremamente reduzida nas grandes aproximações",
      "A profundidade de campo praticamente infinita",
      "A ausência de necessidade de tripé",
      "A impossibilidade de usar foco manual"
     ],
     "correctIndex": 0,
     "explanation": "Em alta ampliação a profundidade de campo torna-se muito pequena, dificultando manter todo o objeto nítido e exigindo foco preciso e iluminação adequada."
    }
   ]
  },
  {
   "key": "filtros opticos",
   "title": "Filtros ópticos",
   "questions": [
    {
     "type": "mc",
     "stem": "O filtro polarizador é especialmente útil para:",
     "options": [
      "Elevar a temperatura de cor da imagem",
      "Eliminar ou atenuar reflexos em superfícies não metálicas, como vidro e água",
      "Aumentar a sensibilidade do sensor em pouca luz",
      "Corrigir a distorção de grandes angulares"
     ],
     "correctIndex": 1,
     "explanation": "O polarizador bloqueia a luz polarizada dos reflexos em superfícies não metálicas (vidro, água), reduzindo-os e saturando céus azuis."
    },
    {
     "type": "mc",
     "stem": "O efeito do filtro polarizador sobre reflexos e o céu depende:",
     "options": [
      "Apenas da abertura do diafragma",
      "Do ângulo entre o eixo da câmera, a superfície e a fonte de luz (sendo máximo por volta de 90° em relação ao sol)",
      "Exclusivamente da sensibilidade ISO",
      "Somente do balanço de branco escolhido"
     ],
     "correctIndex": 1,
     "explanation": "A polarização é angular: o efeito de redução de reflexos e escurecimento do céu é máximo quando a câmera aponta a cerca de 90° da direção do sol."
    },
    {
     "type": "mc",
     "stem": "Em fotografia preto e branco, um filtro vermelho de contraste colocado diante da objetiva tende a:",
     "options": [
      "Clarear o céu azul, reduzindo o contraste",
      "Escurecer o céu azul, aumentando o contraste com as nuvens brancas",
      "Tornar a imagem azulada",
      "Eliminar reflexos na água"
     ],
     "correctIndex": 1,
     "explanation": "Um filtro vermelho bloqueia o azul, escurecendo o céu no P&B e realçando o contraste com as nuvens; filtros de contraste clareiam suas próprias cores e escurecem as complementares."
    },
    {
     "type": "mc",
     "stem": "O filtro UV (ultravioleta) tem como função principal:",
     "options": [
      "Aquecer a dominante de cor da imagem",
      "Absorver a radiação ultravioleta, reduzindo a névoa azulada em paisagens distantes",
      "Polarizar a luz refletida",
      "Aumentar a profundidade de campo"
     ],
     "correctIndex": 1,
     "explanation": "O filtro UV barra a radiação ultravioleta, atenuando a dominante azulada/neblina em tomadas distantes, e também protege a lente frontal."
    },
    {
     "type": "mc",
     "stem": "Os filtros de correção de cor empregados sobre a objetiva têm por objetivo:",
     "options": [
      "Ajustar a temperatura de cor da luz que chega ao plano focal, equilibrando a dominante da fonte",
      "Aumentar o número-guia do flash",
      "Reduzir o tempo de obturação",
      "Eliminar o ruído digital"
     ],
     "correctIndex": 0,
     "explanation": "Filtros de correção/conversão de cor alteram a temperatura de cor da luz registrada, compensando dominantes da fonte (quente ou fria)."
    }
   ]
  },
  {
   "key": "captura digital",
   "title": "Captura digital",
   "questions": [
    {
     "type": "mc",
     "stem": "Na maioria dos sensores digitais coloridos, o dispositivo que, posicionado sobre os fotossítios, permite a cada ponto captar apenas uma cor primária (vermelho, verde ou azul) é:",
     "options": [
      "O filtro polarizador",
      "O filtro de Bayer (matriz de cores)",
      "O pentaprisma",
      "O obturador eletrônico"
     ],
     "correctIndex": 1,
     "explanation": "O filtro de Bayer é a matriz de microfiltros RGB sobre o sensor; a cor final de cada pixel é reconstruída por interpolação dos vizinhos (demosaicing)."
    },
    {
     "type": "mc",
     "stem": "O histograma de uma imagem digital representa:",
     "options": [
      "A distribuição dos tons da imagem, dos mais escuros (esquerda) aos mais claros (direita)",
      "A temperatura de cor da fonte de luz",
      "A distância focal utilizada na captura",
      "O número de megapixels do sensor"
     ],
     "correctIndex": 0,
     "explanation": "O histograma é um gráfico da distribuição tonal: o eixo horizontal vai das sombras (esquerda) às altas luzes (direita), auxiliando o diagnóstico de exposição."
    },
    {
     "type": "mc",
     "stem": "Um histograma com grande acúmulo de valores encostado na extremidade DIREITA, com corte (clipping), indica geralmente:",
     "options": [
      "Subexposição, com sombras empastadas",
      "Superexposição, com altas luzes estouradas e perda de detalhe",
      "Exposição perfeitamente equilibrada",
      "Erro de balanço de branco"
     ],
     "correctIndex": 1,
     "explanation": "Valores empilhados e cortados à direita indicam altas luzes estouradas (superexposição), com perda irrecuperável de detalhe nessas áreas."
    },
    {
     "type": "mc",
     "stem": "Entre os modos de operação da câmera, aquele em que o fotógrafo escolhe a abertura e a câmera define automaticamente o tempo de obturação é o:",
     "options": [
      "Modo M (manual)",
      "Modo A/Av (prioridade de abertura)",
      "Modo S/Tv (prioridade de obturador)",
      "Modo P (programado)"
     ],
     "correctIndex": 1,
     "explanation": "No modo de prioridade de abertura (A ou Av) o operador fixa o diafragma e a câmera calcula a velocidade do obturador correspondente."
    },
    {
     "type": "mc",
     "stem": "A resolução de um sensor digital, medida em megapixels, corresponde:",
     "options": [
      "À quantidade total de pixels (em milhões) que compõem a imagem",
      "À temperatura de cor máxima suportada",
      "À abertura máxima da objetiva acoplada",
      "Ao número de quadros por segundo em vídeo"
     ],
     "correctIndex": 0,
     "explanation": "Megapixel equivale a um milhão de pixels; a resolução expressa o total de pixels do sensor/imagem, relacionado ao detalhamento e ao tamanho possível de impressão."
    }
   ]
  },
  {
   "key": "arquivos digitais e autenticidade",
   "title": "Arquivos digitais e autenticidade",
   "questions": [
    {
     "type": "mc",
     "stem": "Em relação ao arquivo JPEG, o formato RAW caracteriza-se por:",
     "options": [
      "Guardar menos informação, por já ser comprimido com perdas",
      "Preservar os dados brutos do sensor, retendo mais informação e permitindo maior latitude de edição",
      "Ser sempre menor em tamanho que o JPEG",
      "Não permitir qualquer ajuste de balanço de branco posterior"
     ],
     "correctIndex": 1,
     "explanation": "O RAW armazena os dados brutos do sensor sem compressão com perdas, retendo mais informação tonal e oferecendo maior margem de ajuste que o JPEG."
    },
    {
     "type": "mc",
     "stem": "O uso de funções hash como MD5 ou SHA sobre um arquivo de imagem pericial tem por finalidade:",
     "options": [
      "Comprimir a imagem para economizar espaço",
      "Verificar a integridade e autenticidade do arquivo, detectando qualquer alteração",
      "Aumentar a resolução em dpi",
      "Converter o arquivo de RAW para JPEG"
     ],
     "correctIndex": 1,
     "explanation": "O hash gera um código único do arquivo; qualquer modificação altera o valor, permitindo comprovar que o arquivo não foi adulterado (cadeia de custódia)."
    },
    {
     "type": "mc",
     "stem": "Uma boa prática na manipulação de imagens de interesse pericial é:",
     "options": [
      "Editar sempre o arquivo original para preservar o histórico",
      "Trabalhar sempre sobre uma cópia, mantendo o arquivo original intacto",
      "Descartar o arquivo original após a primeira edição",
      "Salvar tudo exclusivamente em JPEG de baixa qualidade"
     ],
     "correctIndex": 1,
     "explanation": "Preserva-se o original como prova e trabalha-se em cópia; isso protege a integridade do material e permite a verificação posterior por hash."
    },
    {
     "type": "mc",
     "stem": "Para imprimir uma fotografia com 10 cm de largura a 300 dpi, a quantidade de pixels necessária na largura é de aproximadamente (considerando 1 polegada = 2,54 cm):",
     "options": [
      "300 pixels",
      "600 pixels",
      "1181 pixels",
      "3000 pixels"
     ],
     "correctIndex": 2,
     "explanation": "Convertendo: 10 ÷ 2,54 ≈ 3,94 polegadas; multiplicando por 300 dpi obtém-se cerca de 1181 pixels."
    },
    {
     "type": "mc",
     "stem": "O formato TIFF é frequentemente utilizado em arquivamento e perícia porque:",
     "options": [
      "Aplica forte compressão com perdas, reduzindo muito o tamanho",
      "Permite armazenamento sem perdas, preservando a qualidade da imagem",
      "É um formato de vídeo de alta definição",
      "Não pode ser aberto por softwares de edição"
     ],
     "correctIndex": 1,
     "explanation": "O TIFF suporta armazenamento sem perdas, mantendo a qualidade integral da imagem, o que o torna adequado para arquivamento e documentação."
    }
   ]
  },
  {
   "key": "video filmadora hd e captura de frames",
   "title": "Vídeo: filmadora HD e captura de frames",
   "questions": [
    {
     "type": "mc",
     "stem": "A resolução conhecida como Full HD corresponde a:",
     "options": [
      "1280 × 720 pixels",
      "1920 × 1080 pixels",
      "720 × 480 pixels",
      "3840 × 2160 pixels"
     ],
     "correctIndex": 1,
     "explanation": "Full HD (1080p) tem resolução de 1920 × 1080 pixels; 1280 × 720 é o HD (720p) e 3840 × 2160 é o 4K/UHD."
    },
    {
     "type": "mc",
     "stem": "A expressão 'quadros por segundo' (fps) em um vídeo indica:",
     "options": [
      "O número de imagens exibidas a cada segundo",
      "A resolução em megapixels de cada quadro",
      "A temperatura de cor da iluminação",
      "A abertura do diafragma utilizada"
     ],
     "correctIndex": 0,
     "explanation": "Os quadros por segundo (fps) medem quantas imagens individuais compõem cada segundo de vídeo, relacionando-se à fluidez do movimento."
    },
    {
     "type": "mc",
     "stem": "A extração de um quadro (frame) de um vídeo digital consiste em:",
     "options": [
      "Converter o vídeo em áudio",
      "Isolar uma imagem estática de um instante específico da gravação",
      "Aumentar a quantidade de quadros por segundo",
      "Remover a trilha sonora do arquivo"
     ],
     "correctIndex": 1,
     "explanation": "A captura de frame extrai uma imagem fixa de determinado instante da sequência de vídeo, útil para análise e impressão de um momento específico."
    },
    {
     "type": "mc",
     "stem": "Em geral, uma imagem obtida pela extração de um único frame de vídeo, comparada a uma fotografia tirada com câmera fotográfica equivalente, tende a apresentar:",
     "options": [
      "Maior resolução e detalhamento",
      "Menor resolução e detalhamento, por limitações do vídeo",
      "Exatamente a mesma qualidade",
      "Ausência total de cor"
     ],
     "correctIndex": 1,
     "explanation": "O quadro de vídeo costuma ter resolução inferior à de uma foto dedicada, resultando em menos detalhe, o que limita ampliações e análises finas."
    },
    {
     "type": "mc",
     "stem": "Entre HD e Full HD, a principal diferença é:",
     "options": [
      "A quantidade de quadros por segundo obrigatória",
      "A quantidade de pixels (resolução), sendo o Full HD mais detalhado",
      "A duração máxima do vídeo",
      "O formato de arquivo utilizado"
     ],
     "correctIndex": 1,
     "explanation": "HD (1280 × 720) e Full HD (1920 × 1080) distinguem-se pela resolução; o Full HD possui mais pixels e, portanto, mais detalhe de imagem."
    }
   ]
  },
  {
   "key": "fotografia analogica e laboratorio",
   "title": "Fotografia analógica e laboratório",
   "questions": [
    {
     "type": "mc",
     "stem": "Na fotografia analógica, a imagem latente é:",
     "options": [
      "A imagem já visível assim que o filme é exposto",
      "A imagem invisível formada na emulsão após a exposição, que se torna visível apenas com a revelação",
      "Uma cópia digital do negativo",
      "O resultado final já fixado e lavado"
     ],
     "correctIndex": 1,
     "explanation": "A exposição forma na emulsão uma imagem latente invisível; é o revelador que reduz os haletos de prata expostos, tornando-a visível."
    },
    {
     "type": "mc",
     "stem": "O processo químico de revelação transforma a imagem latente em imagem visível por meio da:",
     "options": [
      "Oxidação do papel fotográfico",
      "Redução dos cristais de haleto de prata expostos a prata metálica",
      "Evaporação da emulsão",
      "Polarização da luz incidente"
     ],
     "correctIndex": 1,
     "explanation": "O revelador reduz os haletos de prata que foram sensibilizados pela luz, convertendo-os em prata metálica negra que compõe a imagem."
    },
    {
     "type": "mc",
     "stem": "Em um filme/negativo preto e branco comum, as áreas que receberam MAIS luz na cena aparecem, após revelado o negativo:",
     "options": [
      "Mais claras (transparentes)",
      "Mais escuras (densas)",
      "Coloridas de azul",
      "Sem qualquer densidade"
     ],
     "correctIndex": 1,
     "explanation": "No negativo, maior exposição gera maior densidade de prata, de modo que as áreas mais claras da cena ficam mais escuras (densas) no negativo."
    },
    {
     "type": "mc",
     "stem": "Sobre o controle das fases de revelação química, é correto afirmar que a temperatura e o tempo dos banhos:",
     "options": [
      "Não influenciam no resultado final",
      "Devem ser controlados com rigor, pois afetam diretamente a densidade e o contraste da imagem",
      "Devem ser mantidos sempre acima de 50 °C",
      "São irrelevantes desde que haja agitação"
     ],
     "correctIndex": 1,
     "explanation": "Temperatura, tempo e agitação são variáveis críticas do processamento; desvios alteram densidade, contraste e podem gerar defeitos na imagem."
    },
    {
     "type": "mc",
     "stem": "O equipamento de laboratório utilizado para projetar o negativo sobre o papel fotossensível, permitindo obter cópias em diferentes tamanhos, é:",
     "options": [
      "O ampliador",
      "O fotômetro de luz incidente",
      "O tanque de revelação",
      "O pentaprisma"
     ],
     "correctIndex": 0,
     "explanation": "O ampliador projeta a imagem do negativo sobre o papel sensível, controlando o tamanho da cópia e o enquadramento durante a ampliação."
    }
   ]
  }
 ],
 "direito": [
  {
   "key": "cf arts 1 a 4 e estado democratico de direito",
   "title": "CF arts. 1º a 4º e Estado Democrático de Direito",
   "questions": [
    {
     "type": "mc",
     "stem": "Segundo o art. 1º da Constituição Federal, a República Federativa do Brasil constitui-se em Estado Democrático de Direito e tem como um de seus fundamentos:",
     "options": [
      "a prevalência dos direitos humanos",
      "a dignidade da pessoa humana",
      "a defesa da paz",
      "a erradicação da pobreza"
     ],
     "correctIndex": 1,
     "explanation": "A dignidade da pessoa humana é fundamento da República (art. 1º, III, CF); os demais são objetivos ou princípios de relações internacionais."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 1º, parágrafo único, da Constituição Federal, todo o poder emana:",
     "options": [
      "do Estado, que o exerce de forma soberana",
      "do povo, que o exerce por meio de representantes eleitos ou diretamente",
      "do Congresso Nacional, titular da soberania",
      "dos Poderes da União, de forma independente"
     ],
     "correctIndex": 1,
     "explanation": "Art. 1º, parágrafo único, CF: todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 3º da Constituição Federal, constitui objetivo fundamental da República Federativa do Brasil:",
     "options": [
      "a cidadania",
      "o pluralismo político",
      "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais",
      "a soberania"
     ],
     "correctIndex": 2,
     "explanation": "Erradicar a pobreza e reduzir desigualdades é objetivo fundamental (art. 3º, III, CF); cidadania, pluralismo político e soberania são fundamentos (art. 1º)."
    },
    {
     "type": "mc",
     "stem": "Entre os princípios que regem a República Federativa do Brasil nas suas relações internacionais, o art. 4º da Constituição Federal prevê expressamente:",
     "options": [
      "a concessão de asilo político",
      "o federalismo cooperativo",
      "a livre iniciativa",
      "os valores sociais do trabalho"
     ],
     "correctIndex": 0,
     "explanation": "A concessão de asilo político é princípio das relações internacionais (art. 4º, X, CF)."
    },
    {
     "type": "mc",
     "stem": "Sobre a organização dos Poderes, a Constituição Federal estabelece, em seu art. 2º, que são Poderes da União, independentes e harmônicos entre si:",
     "options": [
      "o Legislativo, o Executivo e o Ministério Público",
      "o Legislativo, o Executivo e o Judiciário",
      "o Executivo, o Judiciário e o Tribunal de Contas",
      "o Legislativo, o Judiciário e a Administração Pública"
     ],
     "correctIndex": 1,
     "explanation": "Art. 2º da CF: são Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário."
    }
   ]
  },
  {
   "key": "direitos humanos",
   "title": "Direitos Humanos",
   "questions": [
    {
     "type": "mc",
     "stem": "Os direitos humanos de primeira geração (ou dimensão) correspondem principalmente aos direitos:",
     "options": [
      "sociais, econômicos e culturais, que exigem prestações positivas do Estado",
      "civis e políticos, ligados às liberdades individuais e à abstenção do Estado",
      "de solidariedade ou fraternidade, como o direito ao meio ambiente",
      "difusos relacionados à bioética e ao patrimônio genético"
     ],
     "correctIndex": 1,
     "explanation": "Os direitos de primeira geração são os civis e políticos (liberdades individuais), marcados pela abstenção estatal; os sociais são de segunda geração e os difusos de terceira."
    },
    {
     "type": "mc",
     "stem": "Os direitos de segunda geração (ou dimensão) caracterizam-se por:",
     "options": [
      "serem direitos de liberdade que exigem a não intervenção do Estado",
      "compreenderem os direitos sociais, econômicos e culturais, exigindo prestações positivas do Estado",
      "abrangerem direitos difusos e coletivos, como o direito à paz",
      "tratarem exclusivamente dos direitos políticos de votar e ser votado"
     ],
     "correctIndex": 1,
     "explanation": "Os direitos de segunda geração são os sociais, econômicos e culturais, que demandam prestações positivas (atuação) do Estado."
    },
    {
     "type": "mc",
     "stem": "Entre as características comumente atribuídas aos direitos humanos, destaca-se a universalidade, que significa que tais direitos:",
     "options": [
      "podem ser livremente renunciados por seus titulares",
      "são destinados a todas as pessoas, independentemente de nacionalidade, sexo, raça ou credo",
      "prescrevem com o decurso do tempo",
      "admitem transferência a terceiros a título oneroso"
     ],
     "correctIndex": 1,
     "explanation": "A universalidade indica que os direitos humanos alcançam todas as pessoas por sua simples condição humana; renúncia, prescrição e transferência contrariam a inalienabilidade, imprescritibilidade e indisponibilidade."
    },
    {
     "type": "mc",
     "stem": "A característica dos direitos humanos segundo a qual eles não podem ser transferidos, cedidos ou negociados é denominada:",
     "options": [
      "historicidade",
      "inalienabilidade (indisponibilidade)",
      "relatividade",
      "divisibilidade"
     ],
     "correctIndex": 1,
     "explanation": "A inalienabilidade (ou indisponibilidade) significa que os direitos humanos não são passíveis de transferência ou negociação por seus titulares."
    },
    {
     "type": "mc",
     "stem": "Os direitos de terceira geração (ou dimensão) são tradicionalmente associados ao lema da fraternidade/solidariedade e abrangem, por exemplo:",
     "options": [
      "o direito à vida e à liberdade de locomoção",
      "o direito ao voto e à participação política",
      "o direito ao meio ambiente equilibrado, à paz e ao desenvolvimento",
      "o direito à educação e à saúde"
     ],
     "correctIndex": 2,
     "explanation": "Os direitos de terceira geração são difusos/coletivos de solidariedade, como o meio ambiente, a paz e o desenvolvimento; vida/liberdade são de primeira e educação/saúde de segunda geração."
    }
   ]
  },
  {
   "key": "cf art 5 direitos e garantias individuais",
   "title": "CF art. 5º — direitos e garantias individuais",
   "questions": [
    {
     "type": "mc",
     "stem": "Nos termos do art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, SALVO:",
     "options": [
      "em qualquer horário, mediante mandado de autoridade policial",
      "durante o dia, por determinação verbal de delegado de polícia",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial",
      "somente à noite, em caso de investigação criminal em andamento"
     ],
     "correctIndex": 2,
     "explanation": "Art. 5º, XI, CF: salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    },
    {
     "type": "mc",
     "stem": "Conforme o art. 5º da Constituição Federal, a respeito do direito de associação, é correto afirmar que:",
     "options": [
      "a criação de associações depende de autorização estatal prévia",
      "é plena a liberdade de associação para fins lícitos, vedada a de caráter paramilitar",
      "as associações só podem ser dissolvidas por ato administrativo da autoridade competente",
      "ninguém é obrigado a associar-se, salvo determinação legal em contrário"
     ],
     "correctIndex": 1,
     "explanation": "Art. 5º, XVII, CF: é plena a liberdade de associação para fins lícitos, vedada a de caráter paramilitar; a criação independe de autorização (XVIII) e a dissolução compulsória exige decisão judicial transitada em julgado (XIX)."
    },
    {
     "type": "mc",
     "stem": "Segundo o art. 5º, LXVIII, da Constituição Federal, conceder-se-á habeas corpus sempre que alguém:",
     "options": [
      "sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder",
      "não tiver acesso a informações relativas à sua pessoa constantes de registros públicos",
      "necessitar proteger direito líquido e certo não amparado por habeas corpus ou habeas data",
      "for parte em processo cuja tramitação se mostrar excessivamente demorada"
     ],
     "correctIndex": 0,
     "explanation": "Art. 5º, LXVIII, CF: o habeas corpus protege a liberdade de locomoção contra ilegalidade ou abuso de poder; a hipótese de informações pessoais corresponde ao habeas data (LXXII)."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 5º, LI, da Constituição Federal, quanto à extradição de brasileiros:",
     "options": [
      "o brasileiro nato pode ser extraditado em caso de crime hediondo",
      "nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes",
      "o brasileiro naturalizado jamais poderá ser extraditado",
      "o brasileiro nato pode ser extraditado se consentir expressamente"
     ],
     "correctIndex": 1,
     "explanation": "Art. 5º, LI, CF: nenhum brasileiro será extraditado, salvo o naturalizado, por crime comum praticado antes da naturalização ou comprovado envolvimento em tráfico ilícito de entorpecentes; o nato nunca é extraditado (LII)."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 5º, LXI, da Constituição Federal, ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de:",
     "options": [
      "transgressão militar ou crime propriamente militar, definidos em lei",
      "crimes hediondos e equiparados",
      "reincidência específica em crimes contra o patrimônio",
      "prisão administrativa decretada por delegado de polícia"
     ],
     "correctIndex": 0,
     "explanation": "Art. 5º, LXI, CF: a exceção à ordem judicial escrita e ao flagrante é a transgressão militar ou crime propriamente militar, definidos em lei."
    }
   ]
  },
  {
   "key": "cf arts 6 a 16",
   "title": "CF arts. 6º a 16",
   "questions": [
    {
     "type": "mc",
     "stem": "O art. 6º da Constituição Federal elenca os direitos sociais. Entre eles, consta expressamente:",
     "options": [
      "a educação, a saúde, a alimentação, o trabalho e a moradia",
      "a livre concorrência e a propriedade privada",
      "o sigilo bancário e a inviolabilidade de domicílio",
      "a soberania nacional e o pluralismo político"
     ],
     "correctIndex": 0,
     "explanation": "Art. 6º, CF: são direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, entre outros."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 12 da Constituição Federal, são brasileiros natos:",
     "options": [
      "os estrangeiros que residam no Brasil há mais de quinze anos ininterruptos",
      "os nascidos no estrangeiro, de pai ou mãe brasileiros, que venham a residir no Brasil e optem pela nacionalidade a qualquer tempo",
      "os nascidos em país de língua portuguesa que requeiram a naturalização",
      "os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país"
     ],
     "correctIndex": 3,
     "explanation": "Art. 12, I, a, CF: são natos os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país; a residência de 15 anos é hipótese de naturalização (II, b)."
    },
    {
     "type": "mc",
     "stem": "Conforme o art. 14 da Constituição Federal, a soberania popular será exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e, nos termos da lei, mediante:",
     "options": [
      "plebiscito, referendo e iniciativa popular",
      "eleições indiretas realizadas pelo Congresso Nacional",
      "consulta restrita aos filiados a partidos políticos",
      "voto censitário conforme a renda do eleitor"
     ],
     "correctIndex": 0,
     "explanation": "Art. 14, CF: a soberania popular é exercida também mediante plebiscito, referendo e iniciativa popular."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 14, § 1º, da Constituição Federal, o alistamento eleitoral e o voto são:",
     "options": [
      "obrigatórios para todos os brasileiros a partir dos dezesseis anos",
      "facultativos para os maiores de setenta anos",
      "obrigatórios inclusive para os analfabetos",
      "facultativos para os maiores de dezoito anos e menores de setenta"
     ],
     "correctIndex": 1,
     "explanation": "Art. 14, § 1º, CF: o voto é obrigatório para os maiores de 18 anos e facultativo para analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos."
    },
    {
     "type": "mc",
     "stem": "Segundo o art. 14, § 3º, da Constituição Federal, é condição de elegibilidade, na forma da lei:",
     "options": [
      "o alistamento como militar da ativa",
      "a filiação a mais de um partido político",
      "o pleno exercício dos direitos políticos e a filiação partidária",
      "possuir ensino superior completo"
     ],
     "correctIndex": 2,
     "explanation": "Art. 14, § 3º, CF: são condições de elegibilidade, entre outras, o pleno exercício dos direitos políticos e a filiação partidária."
    }
   ]
  },
  {
   "key": "cf arts 37 e 41",
   "title": "CF arts. 37 e 41",
   "questions": [
    {
     "type": "mc",
     "stem": "O art. 37, caput, da Constituição Federal estabelece que a administração pública direta e indireta obedecerá aos princípios de:",
     "options": [
      "legalidade, impessoalidade, moralidade, publicidade e eficiência",
      "legalidade, celeridade, moralidade, proporcionalidade e economicidade",
      "hierarquia, disciplina, legalidade, publicidade e eficiência",
      "supremacia, legalidade, moralidade, razoabilidade e transparência"
     ],
     "correctIndex": 0,
     "explanation": "Art. 37, caput, CF: a administração obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE)."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 37, II, da Constituição Federal, a investidura em cargo ou emprego público depende de:",
     "options": [
      "indicação da autoridade máxima do órgão",
      "aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração",
      "tempo mínimo de serviço prestado à administração",
      "sorteio público entre os candidatos habilitados"
     ],
     "correctIndex": 1,
     "explanation": "Art. 37, II, CF: a investidura depende de aprovação prévia em concurso público, ressalvadas as nomeações para cargo em comissão de livre nomeação e exoneração."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 37, III, da Constituição Federal, o prazo de validade do concurso público será de:",
     "options": [
      "até dois anos, prorrogável uma vez, por igual período",
      "até quatro anos, improrrogável",
      "de um ano, prorrogável por igual período",
      "indeterminado, enquanto houver vagas"
     ],
     "correctIndex": 0,
     "explanation": "Art. 37, III, CF: o prazo de validade do concurso será de até dois anos, prorrogável uma vez, por igual período."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 41 da Constituição Federal, são estáveis, após três anos de efetivo exercício, os servidores nomeados para cargo de provimento efetivo em virtude de:",
     "options": [
      "livre nomeação pela autoridade competente",
      "concurso público",
      "contrato por tempo determinado",
      "indicação política regulamentada em lei"
     ],
     "correctIndex": 1,
     "explanation": "Art. 41, CF: são estáveis após 3 anos de efetivo exercício os servidores nomeados para cargo efetivo em virtude de concurso público."
    },
    {
     "type": "mc",
     "stem": "Conforme o art. 41, § 1º, da Constituição Federal, o servidor público estável só perderá o cargo:",
     "options": [
      "por mera conveniência administrativa, independentemente de processo",
      "em virtude de sentença judicial transitada em julgado, mediante processo administrativo com ampla defesa, ou mediante procedimento de avaliação periódica de desempenho",
      "por decisão discricionária do chefe do Poder Executivo",
      "automaticamente, em caso de redução de despesas do órgão"
     ],
     "correctIndex": 1,
     "explanation": "Art. 41, § 1º, CF: o estável perderá o cargo por sentença judicial transitada em julgado, por processo administrativo com ampla defesa, ou por avaliação periódica de desempenho."
    }
   ]
  },
  {
   "key": "cf art 144 seguranca publica",
   "title": "CF art. 144 — segurança pública",
   "questions": [
    {
     "type": "mc",
     "stem": "Segundo o art. 144 da Constituição Federal, a segurança pública é dever do Estado, direito e responsabilidade de todos, e é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, por meio, entre outros, de:",
     "options": [
      "Forças Armadas e Guarda Nacional",
      "polícia federal, polícia rodoviária federal, polícia ferroviária federal, polícias civis, polícias militares, corpos de bombeiros militares e polícias penais",
      "Ministério Público e Defensoria Pública",
      "polícia do Senado e polícia legislativa"
     ],
     "correctIndex": 1,
     "explanation": "Art. 144, CF: a segurança pública é exercida pela polícia federal, rodoviária federal, ferroviária federal, polícias civis, militares, corpos de bombeiros militares e polícias penais."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 144, § 4º, da Constituição Federal, às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União:",
     "options": [
      "o policiamento ostensivo e a preservação da ordem pública",
      "as funções de polícia judiciária e a apuração de infrações penais, exceto as militares",
      "a execução de atividades de defesa civil",
      "o patrulhamento das rodovias federais"
     ],
     "correctIndex": 1,
     "explanation": "Art. 144, § 4º, CF: às polícias civis incumbem as funções de polícia judiciária e a apuração de infrações penais, exceto as militares."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 144, § 5º, da Constituição Federal, às polícias militares cabem:",
     "options": [
      "a apuração de infrações penais contra a ordem política e social",
      "o policiamento ostensivo e a preservação da ordem pública",
      "as funções de polícia judiciária da União",
      "o controle do fluxo de entrada e saída de estrangeiros"
     ],
     "correctIndex": 1,
     "explanation": "Art. 144, § 5º, CF: às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares cabe ainda a defesa civil."
    },
    {
     "type": "mc",
     "stem": "Conforme o art. 144, § 1º, da Constituição Federal, a polícia federal, instituída por lei como órgão permanente, destina-se, entre outras atribuições, a:",
     "options": [
      "exercer o policiamento ostensivo das vias urbanas municipais",
      "apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União",
      "realizar a defesa civil em todo o território nacional",
      "fiscalizar exclusivamente o trânsito nas rodovias estaduais"
     ],
     "correctIndex": 1,
     "explanation": "Art. 144, § 1º, I, CF: cabe à polícia federal apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 144, § 2º, da Constituição Federal, a polícia rodoviária federal, órgão permanente, destina-se a:",
     "options": [
      "exercer o patrulhamento ostensivo das rodovias federais",
      "apurar infrações penais contra a União",
      "fiscalizar as ferrovias federais",
      "realizar o controle migratório nos aeroportos"
     ],
     "correctIndex": 0,
     "explanation": "Art. 144, § 2º, CF: a polícia rodoviária federal destina-se ao patrulhamento ostensivo das rodovias federais."
    }
   ]
  },
  {
   "key": "direito penal parte geral",
   "title": "Direito Penal — parte geral",
   "questions": [
    {
     "type": "mc",
     "stem": "Nos termos do art. 1º da Lei de Introdução ao Código Penal, considera-se crime a infração penal a que a lei comina pena de:",
     "options": [
      "multa, isoladamente",
      "reclusão ou de detenção, quer isoladamente, quer alternativa ou cumulativamente com a pena de multa",
      "prisão simples, isolada ou cumulativamente com multa",
      "advertência e prestação de serviços à comunidade"
     ],
     "correctIndex": 1,
     "explanation": "Art. 1º da LICP: crime é a infração a que a lei comina pena de reclusão ou detenção; à contravenção corresponde prisão simples ou multa, ou ambas."
    },
    {
     "type": "mc",
     "stem": "Segundo o Código Penal, diz-se o crime doloso quando o agente:",
     "options": [
      "deu causa ao resultado por imprudência, negligência ou imperícia",
      "quis o resultado ou assumiu o risco de produzi-lo",
      "produziu resultado por caso fortuito ou força maior",
      "agiu sem qualquer previsão do resultado"
     ],
     "correctIndex": 1,
     "explanation": "Art. 18, I, CP: o crime é doloso quando o agente quis o resultado ou assumiu o risco de produzi-lo."
    },
    {
     "type": "mc",
     "stem": "Quanto à tentativa, o Código Penal determina que, salvo disposição em contrário, a pena do crime tentado é a pena do crime consumado:",
     "options": [
      "diminuída de um a dois terços",
      "aumentada de um a dois terços",
      "reduzida pela metade",
      "aplicada integralmente"
     ],
     "correctIndex": 0,
     "explanation": "Art. 14, parágrafo único, CP: pune-se a tentativa com a pena do crime consumado, diminuída de um a dois terços."
    },
    {
     "type": "mc",
     "stem": "De acordo com o Código Penal, NÃO constitui excludente de ilicitude (antijuridicidade):",
     "options": [
      "o estado de necessidade",
      "a legítima defesa",
      "o estrito cumprimento de dever legal",
      "a coação moral irresistível"
     ],
     "correctIndex": 3,
     "explanation": "Art. 23, CP: são excludentes de ilicitude o estado de necessidade, a legítima defesa, o estrito cumprimento de dever legal e o exercício regular de direito; a coação moral irresistível exclui a culpabilidade (art. 22)."
    },
    {
     "type": "mc",
     "stem": "Considera-se em legítima defesa, nos termos do art. 25 do Código Penal, quem, usando moderadamente dos meios necessários:",
     "options": [
      "pratica o fato para preservar direito próprio ou alheio de perigo atual que não provocou",
      "repele injusta agressão, atual ou iminente, a direito seu ou de outrem",
      "cumpre determinação legal no exercício de função pública",
      "exerce regularmente um direito reconhecido em lei"
     ],
     "correctIndex": 1,
     "explanation": "Art. 25, CP: age em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem."
    }
   ]
  },
  {
   "key": "crimes praticados por funcionario publico cp arts 312 a 327",
   "title": "Crimes praticados por funcionário público (CP arts. 312 a 327)",
   "questions": [
    {
     "type": "mc",
     "stem": "Comete o crime de peculato, nos termos do art. 312 do Código Penal, o funcionário público que:",
     "options": [
      "exige, para si ou para outrem, vantagem indevida em razão da função",
      "apropria-se de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou o desvia em proveito próprio ou alheio",
      "retarda ou deixa de praticar ato de ofício para satisfazer interesse ou sentimento pessoal",
      "patrocina interesse privado perante a administração pública"
     ],
     "correctIndex": 1,
     "explanation": "Art. 312, CP: peculato é apropriar-se de bem de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio."
    },
    {
     "type": "mc",
     "stem": "A conduta do funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, configura o crime de:",
     "options": [
      "concussão",
      "corrupção passiva",
      "prevaricação",
      "advocacia administrativa"
     ],
     "correctIndex": 0,
     "explanation": "Art. 316, CP: concussão é exigir, em razão da função, vantagem indevida."
    },
    {
     "type": "mc",
     "stem": "Comete o crime de corrupção passiva, previsto no art. 317 do Código Penal, o funcionário público que:",
     "options": [
      "exige vantagem indevida em razão da função",
      "solicita ou recebe, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceita promessa de tal vantagem",
      "deixa, por indulgência, de responsabilizar subordinado que cometeu infração",
      "desvia bem público de que tem a posse em razão do cargo"
     ],
     "correctIndex": 1,
     "explanation": "Art. 317, CP: corrupção passiva é solicitar ou receber vantagem indevida, ou aceitar promessa dela, em razão da função."
    },
    {
     "type": "mc",
     "stem": "O funcionário público que retarda ou deixa de praticar, indevidamente, ato de ofício, ou o pratica contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal, comete o crime de:",
     "options": [
      "prevaricação",
      "condescendência criminosa",
      "excesso de exação",
      "peculato culposo"
     ],
     "correctIndex": 0,
     "explanation": "Art. 319, CP: prevaricação é retardar ou deixar de praticar ato de ofício, ou praticá-lo contra a lei, para satisfazer interesse ou sentimento pessoal."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 327 do Código Penal, considera-se funcionário público, para os efeitos penais:",
     "options": [
      "apenas o servidor efetivo investido mediante concurso público",
      "quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública",
      "somente os ocupantes de cargo em comissão",
      "exclusivamente os agentes políticos eleitos"
     ],
     "correctIndex": 1,
     "explanation": "Art. 327, CP: considera-se funcionário público quem, ainda que transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública."
    }
   ]
  },
  {
   "key": "cpp arts 158 a 184 exame de corpo de delito e pericias",
   "title": "CPP arts. 158 a 184 — exame de corpo de delito e perícias",
   "questions": [
    {
     "type": "mc",
     "stem": "Nos termos do art. 158 do Código de Processo Penal, quando a infração deixar vestígios:",
     "options": [
      "será dispensável o exame de corpo de delito se houver confissão do acusado",
      "será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado",
      "bastará a prova testemunhal para comprovar a materialidade",
      "o exame poderá ser substituído por declaração da autoridade policial"
     ],
     "correctIndex": 1,
     "explanation": "Art. 158, CPP: quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado."
    },
    {
     "type": "mc",
     "stem": "De acordo com o art. 159 do Código de Processo Penal, o exame de corpo de delito e outras perícias serão realizados por:",
     "options": [
      "dois peritos não oficiais nomeados pelo juiz, em qualquer hipótese",
      "perito oficial, portador de diploma de curso superior",
      "três peritos oficiais designados pelo delegado",
      "autoridade policial, independentemente de formação técnica"
     ],
     "correctIndex": 1,
     "explanation": "Art. 159, CPP: o exame de corpo de delito e outras perícias serão realizados por perito oficial, portador de diploma de curso superior."
    },
    {
     "type": "mc",
     "stem": "Segundo o art. 159, § 1º, do Código de Processo Penal, na falta de perito oficial, o exame será realizado por:",
     "options": [
      "um único perito não oficial, independentemente de habilitação",
      "duas pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, que prestarão compromisso",
      "pela autoridade judiciária, pessoalmente",
      "por servidores administrativos do cartório"
     ],
     "correctIndex": 1,
     "explanation": "Art. 159, § 1º, CPP: na falta de perito oficial, o exame será realizado por 2 pessoas idôneas, portadoras de diploma de curso superior, preferencialmente na área específica."
    },
    {
     "type": "mc",
     "stem": "Conforme o art. 167 do Código de Processo Penal, não sendo possível o exame de corpo de delito por haverem desaparecido os vestígios:",
     "options": [
      "a prova testemunhal poderá suprir-lhe a falta",
      "o inquérito deverá ser obrigatoriamente arquivado",
      "somente a confissão do acusado poderá suprir a ausência",
      "a materialidade do crime ficará definitivamente comprometida"
     ],
     "correctIndex": 0,
     "explanation": "Art. 167, CPP: não sendo possível o exame de corpo de delito por haverem desaparecido os vestígios, a prova testemunhal poderá suprir-lhe a falta."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 165 do Código de Processo Penal, para representar as lesões encontradas no cadáver, os peritos, quando possível:",
     "options": [
      "juntarão ao laudo do exame provas fotográficas, esquemas ou desenhos, devidamente rubricados",
      "deverão descrevê-las apenas por escrito, sendo vedada a juntada de imagens",
      "encaminharão o corpo diretamente ao arquivo policial",
      "dispensarão qualquer registro visual das lesões"
     ],
     "correctIndex": 0,
     "explanation": "Art. 165, CPP: para representar as lesões, os peritos juntarão ao laudo provas fotográficas, esquemas ou desenhos, devidamente rubricados."
    }
   ]
  },
  {
   "key": "lei organica da policia de sp",
   "title": "Lei Orgânica da Polícia de SP",
   "questions": [
    {
     "type": "mc",
     "stem": "A Lei Orgânica da Polícia do Estado de São Paulo (Lei Complementar nº 207/1979) dispõe, entre outros assuntos, sobre:",
     "options": [
      "a organização do Ministério Público estadual",
      "a organização, as carreiras, os deveres, as transgressões disciplinares e as penalidades dos integrantes da Polícia do Estado de São Paulo",
      "as atribuições das Forças Armadas",
      "o regime jurídico dos magistrados estaduais"
     ],
     "correctIndex": 1,
     "explanation": "A LC 207/1979 é a Lei Orgânica da Polícia do Estado de SP, tratando de sua organização, carreiras, deveres, transgressões e penalidades."
    },
    {
     "type": "mc",
     "stem": "De modo geral, na Lei Orgânica da Polícia de São Paulo, o ingresso nas carreiras policiais civis depende de:",
     "options": [
      "livre indicação do Secretário de Segurança Pública",
      "aprovação prévia em concurso público, observados os requisitos legais",
      "sorteio entre candidatos inscritos",
      "convite feito a servidores de outros órgãos"
     ],
     "correctIndex": 1,
     "explanation": "O ingresso nas carreiras policiais civis ocorre mediante concurso público, em consonância com a exigência constitucional (art. 37, II, CF) e a Lei Orgânica."
    },
    {
     "type": "mc",
     "stem": "Na sistemática disciplinar da Lei Orgânica da Polícia de São Paulo, a inobservância dos deveres funcionais pelo policial civil caracteriza:",
     "options": [
      "transgressão disciplinar, sujeita às penalidades previstas em lei",
      "mero ato irrelevante para a administração",
      "infração que só pode ser apurada pelo Poder Judiciário",
      "conduta sempre atípica no âmbito administrativo"
     ],
     "correctIndex": 0,
     "explanation": "A violação dos deveres funcionais constitui transgressão disciplinar, sujeitando o policial às penalidades previstas na Lei Orgânica (LC 207/1979)."
    },
    {
     "type": "mc",
     "stem": "Entre as penalidades disciplinares aplicáveis aos funcionários policiais na Lei Orgânica da Polícia de São Paulo, inclui-se:",
     "options": [
      "a cassação de aposentadoria pela Justiça Eleitoral",
      "a repreensão, a suspensão e a demissão, conforme a gravidade da falta",
      "o banimento do território nacional",
      "a prisão administrativa decretada pelo delegado"
     ],
     "correctIndex": 1,
     "explanation": "A Lei Orgânica prevê penalidades disciplinares como repreensão, suspensão e demissão, graduadas conforme a natureza e a gravidade da transgressão."
    },
    {
     "type": "mc",
     "stem": "Quanto à posse nos cargos das carreiras policiais civis regidas pela Lei Orgânica da Polícia de São Paulo, é correto afirmar que:",
     "options": [
      "a posse independe de ato formal da autoridade competente",
      "a competência para dar posse é definida conforme o cargo, segundo a hierarquia prevista na legislação",
      "a posse é ato privativo do Governador em todos os cargos policiais",
      "não existe exigência de posse para o exercício dos cargos"
     ],
     "correctIndex": 1,
     "explanation": "A posse é ato formal e a competência para empossar varia conforme o cargo, segundo a estrutura hierárquica definida na Lei Orgânica da Polícia."
    }
   ]
  },
  {
   "key": "lei de acesso a informacao",
   "title": "Lei de Acesso à Informação",
   "questions": [
    {
     "type": "mc",
     "stem": "A Lei nº 12.527/2011 (Lei de Acesso à Informação) tem como diretriz, nos termos de seu art. 3º:",
     "options": [
      "o sigilo como regra geral da administração pública",
      "a observância da publicidade como preceito geral e do sigilo como exceção",
      "a divulgação apenas de informações requeridas judicialmente",
      "a cobrança de taxas sobre todo e qualquer pedido de informação"
     ],
     "correctIndex": 1,
     "explanation": "Art. 3º, I, da Lei 12.527/2011: a publicidade é o preceito geral e o sigilo, a exceção."
    },
    {
     "type": "mc",
     "stem": "Segundo a Lei nº 12.527/2011, o órgão ou entidade que receber pedido de acesso à informação deverá, quando possível, conceder o acesso imediato; não sendo possível, deverá atender ao pedido em prazo não superior a:",
     "options": [
      "5 dias",
      "10 dias",
      "20 dias, prorrogável por mais 10 dias, mediante justificativa expressa",
      "30 dias improrrogáveis"
     ],
     "correctIndex": 2,
     "explanation": "Art. 11, § 1º e § 2º, da Lei 12.527/2011: não sendo possível o acesso imediato, o pedido deve ser atendido em até 20 dias, prorrogáveis por mais 10, mediante justificativa."
    },
    {
     "type": "mc",
     "stem": "De acordo com a Lei nº 12.527/2011, para o acesso à informação de interesse público, é vedado exigir do requerente:",
     "options": [
      "a identificação do requerente",
      "a especificação da informação requerida",
      "os motivos determinantes da solicitação de informação de interesse público",
      "a indicação de forma de recebimento da informação"
     ],
     "correctIndex": 2,
     "explanation": "Art. 10, § 3º, da Lei 12.527/2011: são vedadas exigências relativas aos motivos determinantes da solicitação de informação de interesse público."
    },
    {
     "type": "mc",
     "stem": "Nos termos da Lei nº 12.527/2011, a informação em poder dos órgãos públicos, observado o seu teor e em razão de sua imprescindibilidade à segurança da sociedade ou do Estado, poderá ser classificada como:",
     "options": [
      "reservada, secreta ou ultrassecreta",
      "confidencial, restrita ou proibida",
      "interna, externa ou mista",
      "temporária, permanente ou vitalícia"
     ],
     "correctIndex": 0,
     "explanation": "Art. 24, § 1º, da Lei 12.527/2011: a informação sigilosa pode ser classificada como reservada, secreta ou ultrassecreta."
    },
    {
     "type": "mc",
     "stem": "Conforme a Lei nº 12.527/2011, o acesso à informação compreende, entre outros, o direito de obter:",
     "options": [
      "somente informações que já estejam divulgadas em sítios oficiais",
      "informação contida em registros ou documentos, produzidos ou acumulados por seus órgãos ou entidades, recolhidos ou não a arquivos públicos",
      "apenas informações classificadas como ultrassecretas",
      "exclusivamente informações sobre o próprio requerente"
     ],
     "correctIndex": 1,
     "explanation": "Art. 7º, II, da Lei 12.527/2011: o acesso compreende o direito de obter informação contida em registros ou documentos produzidos ou acumulados pelos órgãos, recolhidos ou não a arquivos públicos."
    }
   ]
  },
  {
   "key": "revisao geral de direito",
   "title": "Revisão geral de Direito",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa que apresenta corretamente um fundamento da República Federativa do Brasil, nos termos do art. 1º da Constituição Federal:",
     "options": [
      "a construção de uma sociedade livre, justa e solidária",
      "os valores sociais do trabalho e da livre iniciativa",
      "a garantia do desenvolvimento nacional",
      "a prevalência dos direitos humanos"
     ],
     "correctIndex": 1,
     "explanation": "Art. 1º, IV, CF: os valores sociais do trabalho e da livre iniciativa são fundamentos; as demais alternativas são objetivos (art. 3º) ou princípios de relações internacionais (art. 4º)."
    },
    {
     "type": "mc",
     "stem": "Nos termos do art. 5º da Constituição Federal, conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for:",
     "options": [
      "qualquer particular, em relações privadas",
      "autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público",
      "exclusivamente o Presidente da República",
      "somente autoridade do Poder Judiciário"
     ],
     "correctIndex": 1,
     "explanation": "Art. 5º, LXIX, CF: o mandado de segurança protege direito líquido e certo contra ilegalidade ou abuso de poder de autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público."
    },
    {
     "type": "mc",
     "stem": "O crime em que o funcionário público deixa de responsabilizar subordinado que cometeu infração no exercício do cargo, ou, quando lhe falte competência, não leva o fato ao conhecimento da autoridade competente, por indulgência, denomina-se:",
     "options": [
      "prevaricação",
      "condescendência criminosa",
      "concussão",
      "advocacia administrativa"
     ],
     "correctIndex": 1,
     "explanation": "Art. 320, CP: a condescendência criminosa consiste em deixar de responsabilizar subordinado infrator, ou de comunicar o fato à autoridade competente, por indulgência."
    },
    {
     "type": "mc",
     "stem": "Sobre os princípios da administração pública (art. 37, caput, CF), a exigência de que o agente público atue sempre visando ao interesse público, sem promoção pessoal, relaciona-se diretamente ao princípio da:",
     "options": [
      "impessoalidade",
      "eficiência",
      "publicidade",
      "legalidade"
     ],
     "correctIndex": 0,
     "explanation": "O princípio da impessoalidade (art. 37, caput, CF) impõe que a atuação administrativa vise ao interesse público, vedada a promoção pessoal do agente."
    },
    {
     "type": "mc",
     "stem": "De acordo com o Código de Processo Penal, o exame de corpo de delito indireto é aquele que:",
     "options": [
      "é realizado diretamente sobre o próprio vestígio material deixado pela infração",
      "se baseia em outros elementos de prova, como depoimentos, quando os vestígios já desapareceram",
      "é dispensado sempre que houver confissão do acusado",
      "somente pode ser feito por autoridade policial"
     ],
     "correctIndex": 1,
     "explanation": "O corpo de delito indireto apoia-se em outros meios de prova (p. ex. prova testemunhal, art. 167, CPP) quando não é possível o exame direto sobre os vestígios."
    }
   ]
  }
 ],
 "raciocinio logico": [
  {
   "key": "base operacoes fracoes decimais e unidades",
   "title": "Base: operações, frações, decimais e unidades",
   "questions": [
    {
     "type": "mc",
     "stem": "O resultado da soma 1/2 + 1/3 é igual a:",
     "options": [
      "5/6",
      "2/5",
      "1/5",
      "1/6"
     ],
     "correctIndex": 0,
     "explanation": "MMC(2,3)=6. 1/2 = 3/6 e 1/3 = 2/6, logo 3/6 + 2/6 = 5/6."
    },
    {
     "type": "mc",
     "stem": "O menor múltiplo comum (MMC) entre 12 e 18 é:",
     "options": [
      "6",
      "72",
      "36",
      "216"
     ],
     "correctIndex": 2,
     "explanation": "12 = 2²·3 e 18 = 2·3². MMC = 2²·3² = 36."
    },
    {
     "type": "mc",
     "stem": "O máximo divisor comum (MDC) entre 24 e 36 é:",
     "options": [
      "6",
      "12",
      "72",
      "48"
     ],
     "correctIndex": 1,
     "explanation": "24 = 2³·3 e 36 = 2²·3². MDC = 2²·3 = 12."
    },
    {
     "type": "mc",
     "stem": "Uma folha mede 2,5 metros de comprimento. Esse valor, em centímetros, é igual a:",
     "options": [
      "25 cm",
      "2,5 cm",
      "2500 cm",
      "250 cm"
     ],
     "correctIndex": 3,
     "explanation": "1 m = 100 cm, logo 2,5 × 100 = 250 cm."
    },
    {
     "type": "mc",
     "stem": "Um processo de revelação durou 150 minutos. Esse tempo corresponde a:",
     "options": [
      "1h50min",
      "3h",
      "2h30min",
      "2h50min"
     ],
     "correctIndex": 2,
     "explanation": "150 ÷ 60 = 2 horas e resta 30 minutos, ou seja, 2h30min."
    }
   ]
  },
  {
   "key": "razao e proporcao",
   "title": "Razão e proporção",
   "questions": [
    {
     "type": "mc",
     "stem": "A razão entre 15 e 25, na forma de fração irredutível, é igual a:",
     "options": [
      "5/3",
      "3/5",
      "2/5",
      "3/4"
     ],
     "correctIndex": 1,
     "explanation": "15/25, dividindo numerador e denominador por 5, resulta em 3/5."
    },
    {
     "type": "mc",
     "stem": "Na proporção x/8 = 15/24, o valor de x é:",
     "options": [
      "45",
      "10",
      "3",
      "5"
     ],
     "correctIndex": 3,
     "explanation": "x = (8 × 15) / 24 = 120/24 = 5."
    },
    {
     "type": "mc",
     "stem": "Uma foto retangular de 10 cm por 15 cm é ampliada de modo que cada lado fique três vezes maior. A área da foto ampliada, em cm², será:",
     "options": [
      "1350 cm²",
      "450 cm²",
      "150 cm²",
      "225 cm²"
     ],
     "correctIndex": 0,
     "explanation": "Novos lados: 30 cm e 45 cm. Área = 30 × 45 = 1350 cm² (a área fica 3² = 9 vezes maior que os 150 cm² originais)."
    },
    {
     "type": "mc",
     "stem": "Num desenho feito na escala 1:50, um segmento mede 4 cm. A medida real correspondente é:",
     "options": [
      "0,08 m",
      "20 m",
      "2 m",
      "200 m"
     ],
     "correctIndex": 2,
     "explanation": "Real = 4 × 50 = 200 cm = 2 m."
    },
    {
     "type": "mc",
     "stem": "Uma foto de 6 cm por 9 cm é reduzida mantendo a proporção, e o menor lado passa a medir 4 cm. O maior lado passará a medir:",
     "options": [
      "7 cm",
      "6 cm",
      "13,5 cm",
      "4,5 cm"
     ],
     "correctIndex": 1,
     "explanation": "6/9 = 4/x, logo x = (9 × 4)/6 = 6 cm."
    }
   ]
  },
  {
   "key": "grandezas proporcionais e divisao proporcional",
   "title": "Grandezas proporcionais e divisão proporcional",
   "questions": [
    {
     "type": "mc",
     "stem": "Dividindo R$ 600,00 em partes diretamente proporcionais a 2 e 4, a maior parte será de:",
     "options": [
      "R$ 300,00",
      "R$ 150,00",
      "R$ 450,00",
      "R$ 400,00"
     ],
     "correctIndex": 3,
     "explanation": "Soma das partes: 2 + 4 = 6. Cada parte vale 600/6 = 100. Maior parte = 4 × 100 = R$ 400,00."
    },
    {
     "type": "mc",
     "stem": "Dividindo 350 em partes diretamente proporcionais a 3, 5 e 6, a menor parte será:",
     "options": [
      "75",
      "50",
      "100",
      "25"
     ],
     "correctIndex": 0,
     "explanation": "Soma: 3 + 5 + 6 = 14. Unidade = 350/14 = 25. Menor parte = 3 × 25 = 75."
    },
    {
     "type": "mc",
     "stem": "Dividindo 220 em partes inversamente proporcionais a 2 e 3, a maior das partes será:",
     "options": [
      "88",
      "110",
      "132",
      "147"
     ],
     "correctIndex": 2,
     "explanation": "Inverter: usa-se 1/2 e 1/3, equivalentes a 3 e 2. Soma 3 + 2 = 5. Unidade = 220/5 = 44. Maior parte = 3 × 44 = 132."
    },
    {
     "type": "mc",
     "stem": "A grandeza y é diretamente proporcional a x. Quando x = 4, tem-se y = 20. Quando x = 9, o valor de y será:",
     "options": [
      "36",
      "45",
      "25",
      "54"
     ],
     "correctIndex": 1,
     "explanation": "Constante = 20/4 = 5. Logo y = 5 × 9 = 45."
    },
    {
     "type": "mc",
     "stem": "Duas grandezas são inversamente proporcionais: quando a primeira vale 6, a segunda vale 10. Quando a primeira passar a valer 4, a segunda valerá:",
     "options": [
      "24",
      "6",
      "60",
      "15"
     ],
     "correctIndex": 3,
     "explanation": "Em grandezas inversamente proporcionais o produto é constante: 6 × 10 = 60. Logo 4 × y = 60, y = 15."
    }
   ]
  },
  {
   "key": "regra de tres",
   "title": "Regra de três",
   "questions": [
    {
     "type": "mc",
     "stem": "Se 3 kg de certo produto custam R$ 12,00, então 7 kg desse mesmo produto custarão:",
     "options": [
      "R$ 21,00",
      "R$ 36,00",
      "R$ 28,00",
      "R$ 24,00"
     ],
     "correctIndex": 2,
     "explanation": "Grandezas diretamente proporcionais: 1 kg = 12/3 = R$ 4,00. Logo 7 × 4 = R$ 28,00."
    },
    {
     "type": "mc",
     "stem": "Quatro torneiras iguais enchem um tanque em 90 minutos. Seis torneiras iguais encheriam o mesmo tanque em:",
     "options": [
      "135 min",
      "60 min",
      "120 min",
      "45 min"
     ],
     "correctIndex": 1,
     "explanation": "Grandezas inversamente proporcionais: 4 × 90 = 360. Logo 6 × t = 360, t = 60 minutos."
    },
    {
     "type": "mc",
     "stem": "Um carro a 60 km/h faz certo trajeto em 4 horas. A 80 km/h, o mesmo trajeto será feito em:",
     "options": [
      "3 h",
      "5,3 h",
      "3,5 h",
      "2 h"
     ],
     "correctIndex": 0,
     "explanation": "Velocidade e tempo são inversamente proporcionais: 60 × 4 = 240. Logo 80 × t = 240, t = 3 horas."
    },
    {
     "type": "mc",
     "stem": "Cinco operários constroem 100 m de muro em 8 dias. Para construir 200 m de muro, 10 operários levarão:",
     "options": [
      "4 dias",
      "16 dias",
      "2 dias",
      "8 dias"
     ],
     "correctIndex": 3,
     "explanation": "Operários são inversos e metros são diretos aos dias: 8 × (5/10) × (200/100) = 8 × 0,5 × 2 = 8 dias."
    },
    {
     "type": "mc",
     "stem": "Três máquinas produzem 600 peças em 5 horas. Quantas peças quatro máquinas produzirão em 8 horas, no mesmo ritmo?",
     "options": [
      "960",
      "1280",
      "800",
      "1600"
     ],
     "correctIndex": 1,
     "explanation": "Máquinas e horas são diretas às peças: 600 × (4/3) × (8/5) = 600 × 32/15 = 1280 peças."
    }
   ]
  },
  {
   "key": "porcentagem",
   "title": "Porcentagem",
   "questions": [
    {
     "type": "mc",
     "stem": "Calculando 30% de 80, obtém-se:",
     "options": [
      "24",
      "2,4",
      "240",
      "50"
     ],
     "correctIndex": 0,
     "explanation": "30% de 80 = 0,30 × 80 = 24."
    },
    {
     "type": "mc",
     "stem": "Um produto que custa R$ 200,00 recebe desconto de 15%. O valor a pagar será:",
     "options": [
      "R$ 185,00",
      "R$ 30,00",
      "R$ 170,00",
      "R$ 230,00"
     ],
     "correctIndex": 2,
     "explanation": "Desconto = 15% de 200 = R$ 30,00. Valor a pagar = 200 − 30 = R$ 170,00."
    },
    {
     "type": "mc",
     "stem": "Um valor de R$ 150,00 sofre acréscimo de 20%. O novo valor será:",
     "options": [
      "R$ 170,00",
      "R$ 30,00",
      "R$ 120,00",
      "R$ 180,00"
     ],
     "correctIndex": 3,
     "explanation": "Acréscimo = 20% de 150 = R$ 30,00. Novo valor = 150 + 30 = R$ 180,00."
    },
    {
     "type": "mc",
     "stem": "Uma quantia passou de 50 para 65. O aumento percentual foi de:",
     "options": [
      "15%",
      "30%",
      "23%",
      "25%"
     ],
     "correctIndex": 1,
     "explanation": "Variação = 65 − 50 = 15. Percentual = 15/50 = 0,30 = 30%."
    },
    {
     "type": "mc",
     "stem": "Um preço sofre dois aumentos sucessivos, de 10% e depois de 20%. O aumento total equivale a:",
     "options": [
      "30%",
      "22%",
      "32%",
      "2%"
     ],
     "correctIndex": 2,
     "explanation": "Fator total = 1,10 × 1,20 = 1,32, que corresponde a um aumento de 32% (não basta somar 10% + 20%)."
    }
   ]
  },
  {
   "key": "teoria dos conjuntos",
   "title": "Teoria dos conjuntos",
   "questions": [
    {
     "type": "mc",
     "stem": "Numa pesquisa, 30 pessoas gostam do produto A, 25 gostam do produto B e 10 gostam de ambos. Quantas pessoas gostam de pelo menos um dos produtos?",
     "options": [
      "45",
      "55",
      "35",
      "65"
     ],
     "correctIndex": 0,
     "explanation": "|A ∪ B| = 30 + 25 − 10 = 45."
    },
    {
     "type": "mc",
     "stem": "Numa turma de 40 alunos, 22 jogam futebol, 18 jogam vôlei e 8 jogam os dois esportes. Quantos jogam apenas futebol?",
     "options": [
      "22",
      "30",
      "6",
      "14"
     ],
     "correctIndex": 3,
     "explanation": "Apenas futebol = 22 − 8 = 14."
    },
    {
     "type": "mc",
     "stem": "Numa turma de 40 alunos, 22 jogam futebol, 18 jogam vôlei e 8 jogam os dois esportes. Quantos não jogam nenhum dos dois?",
     "options": [
      "0",
      "8",
      "4",
      "10"
     ],
     "correctIndex": 1,
     "explanation": "Pelo menos um = 22 + 18 − 8 = 32. Nenhum = 40 − 32 = 8."
    },
    {
     "type": "mc",
     "stem": "Considere três conjuntos com |A| = 20, |B| = 15, |C| = 10, |A∩B| = 5, |A∩C| = 4, |B∩C| = 3 e |A∩B∩C| = 2. O número de elementos da união A ∪ B ∪ C é:",
     "options": [
      "45",
      "31",
      "35",
      "51"
     ],
     "correctIndex": 2,
     "explanation": "União = 20 + 15 + 10 − 5 − 4 − 3 + 2 = 35."
    },
    {
     "type": "mc",
     "stem": "Com |A| = 20, |A∩B| = 5, |A∩C| = 4 e |A∩B∩C| = 2, o número de elementos que pertencem apenas ao conjunto A é:",
     "options": [
      "11",
      "15",
      "20",
      "13"
     ],
     "correctIndex": 3,
     "explanation": "Apenas A = 20 − 5 − 4 + 2 = 13."
    }
   ]
  },
  {
   "key": "sequencias e padroes",
   "title": "Sequências e padrões",
   "questions": [
    {
     "type": "mc",
     "stem": "Na sequência 2, 5, 8, 11, ..., o próximo termo é:",
     "options": [
      "14",
      "13",
      "15",
      "12"
     ],
     "correctIndex": 0,
     "explanation": "Progressão aritmética de razão 3: 11 + 3 = 14."
    },
    {
     "type": "mc",
     "stem": "Na sequência 3, 6, 12, 24, ..., o próximo termo é:",
     "options": [
      "36",
      "30",
      "48",
      "96"
     ],
     "correctIndex": 2,
     "explanation": "Progressão geométrica de razão 2: 24 × 2 = 48."
    },
    {
     "type": "mc",
     "stem": "Na sequência 1, 4, 9, 16, 25, ..., o próximo termo é:",
     "options": [
      "30",
      "36",
      "35",
      "49"
     ],
     "correctIndex": 1,
     "explanation": "São os quadrados perfeitos: 1², 2², 3², 4², 5², 6². O próximo é 6² = 36."
    },
    {
     "type": "mc",
     "stem": "Na sequência 1, 1, 2, 3, 5, 8, ..., o próximo termo é:",
     "options": [
      "11",
      "12",
      "15",
      "13"
     ],
     "correctIndex": 3,
     "explanation": "Sequência de Fibonacci: cada termo é a soma dos dois anteriores. 5 + 8 = 13."
    },
    {
     "type": "mc",
     "stem": "Na sequência de letras B, D, F, H, ..., a próxima letra é:",
     "options": [
      "I",
      "K",
      "J",
      "L"
     ],
     "correctIndex": 2,
     "explanation": "São as letras em posições pares, pulando uma a cada passo: B, D, F, H, J."
    }
   ]
  },
  {
   "key": "raciocinio logico proposicoes",
   "title": "Raciocínio lógico (proposições)",
   "questions": [
    {
     "type": "mc",
     "stem": "A negação da proposição \"Todos os gatos são pretos\" é:",
     "options": [
      "Nenhum gato é preto",
      "Pelo menos um gato não é preto",
      "Todos os gatos não são pretos",
      "Alguns gatos são pretos"
     ],
     "correctIndex": 1,
     "explanation": "A negação de \"todo A é B\" é \"existe pelo menos um A que não é B\"."
    },
    {
     "type": "mc",
     "stem": "A conjunção p ∧ q (p e q) é verdadeira somente:",
     "options": [
      "Quando p e q são ambas verdadeiras",
      "Quando p é verdadeira e q é falsa",
      "Quando pelo menos uma é verdadeira",
      "Quando ambas são falsas"
     ],
     "correctIndex": 0,
     "explanation": "A conjunção só é verdadeira quando as duas proposições são verdadeiras ao mesmo tempo."
    },
    {
     "type": "mc",
     "stem": "A condicional p → q (se p, então q) é falsa somente:",
     "options": [
      "Quando ambas são verdadeiras",
      "Quando ambas são falsas",
      "Quando p é falsa e q é verdadeira",
      "Quando p é verdadeira e q é falsa"
     ],
     "correctIndex": 3,
     "explanation": "A condicional só é falsa quando o antecedente p é verdadeiro e o consequente q é falso."
    },
    {
     "type": "mc",
     "stem": "A negação da proposição \"Se chove, então levo guarda-chuva\" é:",
     "options": [
      "Se não chove, então não levo guarda-chuva",
      "Se levo guarda-chuva, então chove",
      "Chove e não levo guarda-chuva",
      "Não chove e levo guarda-chuva"
     ],
     "correctIndex": 2,
     "explanation": "A negação de p → q é p ∧ ¬q: \"chove e não levo guarda-chuva\"."
    },
    {
     "type": "mc",
     "stem": "A bicondicional p ↔ q (p se e somente se q) é verdadeira:",
     "options": [
      "Quando p e q têm o mesmo valor lógico",
      "Quando p e q têm valores lógicos diferentes",
      "Somente quando ambas são verdadeiras",
      "Somente quando ambas são falsas"
     ],
     "correctIndex": 0,
     "explanation": "A bicondicional é verdadeira quando p e q têm o mesmo valor lógico (ambas V ou ambas F)."
    }
   ]
  },
  {
   "key": "revisao e questoes mistas",
   "title": "Revisão e questões mistas",
   "questions": [
    {
     "type": "mc",
     "stem": "Uma foto tem área de 600 cm². Após uma redução de 25% na área, a nova área passa a ser:",
     "options": [
      "150 cm²",
      "450 cm²",
      "575 cm²",
      "480 cm²"
     ],
     "correctIndex": 1,
     "explanation": "Redução = 25% de 600 = 150 cm². Nova área = 600 − 150 = 450 cm²."
    },
    {
     "type": "mc",
     "stem": "Dois fotógrafos revelam 50 fotos em 4 horas. Mantendo o ritmo, em 6 horas eles revelarão:",
     "options": [
      "100 fotos",
      "33 fotos",
      "66 fotos",
      "75 fotos"
     ],
     "correctIndex": 3,
     "explanation": "Fotos e tempo são diretamente proporcionais: 50 × 6/4 = 75 fotos."
    },
    {
     "type": "mc",
     "stem": "O valor de 2/5 de 350 é:",
     "options": [
      "140",
      "70",
      "175",
      "210"
     ],
     "correctIndex": 0,
     "explanation": "350 ÷ 5 = 70, e 70 × 2 = 140."
    },
    {
     "type": "mc",
     "stem": "Num grupo de 60 pessoas, 35 leem jornal, 28 leem revista e 15 leem ambos. Quantas não leem nem jornal nem revista?",
     "options": [
      "8",
      "20",
      "12",
      "0"
     ],
     "correctIndex": 2,
     "explanation": "Pelo menos um = 35 + 28 − 15 = 48. Nenhum = 60 − 48 = 12."
    },
    {
     "type": "mc",
     "stem": "Na sequência 100, 95, 85, 70, 50, ..., o próximo termo é:",
     "options": [
      "30",
      "35",
      "20",
      "25"
     ],
     "correctIndex": 3,
     "explanation": "As diferenças crescem: −5, −10, −15, −20, −25. Logo 50 − 25 = 25."
    }
   ]
  }
 ],
 "portugues": [
  {
   "key": "interpretacao de textos continuo",
   "title": "Interpretação de textos (contínuo)",
   "questions": [
    {
     "type": "mc",
     "stem": "Leia o trecho: \"A prefeitura anunciou o fechamento da ciclovia para obras. Moradores, porém, afirmam que nunca foram consultados e que o trajeto é o único seguro para quem vai de bicicleta ao trabalho.\" A principal crítica dos moradores refere-se à:",
     "options": [
      "falta de participação da população na decisão",
      "má qualidade do asfalto da ciclovia",
      "demora no início das obras anunciadas",
      "ausência de ciclistas na região central"
     ],
     "correctIndex": 0,
     "explanation": "Os moradores reclamam que \"nunca foram consultados\", ou seja, da falta de participação na decisão."
    },
    {
     "type": "mc",
     "stem": "Leia a crônica: \"Todo domingo meu avô acordava cedo, regava as roseiras e dizia que planta é que nem gente: só cresce com atenção. Hoje, diante do jardim seco, entendi tarde demais o que ele queria dizer.\" Infere-se do texto que o narrador:",
     "options": [
      "arrepende-se de não ter cuidado do que o avô valorizava",
      "prefere plantas artificiais às naturais",
      "continua a rotina do avô todos os domingos",
      "nunca compreendeu as palavras do avô"
     ],
     "correctIndex": 0,
     "explanation": "A expressão \"entendi tarde demais\" diante do \"jardim seco\" revela arrependimento por não ter mantido o cuidado."
    },
    {
     "type": "mc",
     "stem": "Leia: \"O novo aplicativo promete reduzir filas em hospitais públicos. Especialistas, contudo, alertam que, sem mais médicos, a tecnologia apenas organiza a espera — não a elimina.\" A intenção dos especialistas no trecho é:",
     "options": [
      "ponderar que a tecnologia não resolve a falta de profissionais",
      "elogiar incondicionalmente o novo aplicativo",
      "afirmar que as filas desaparecerão em breve",
      "defender o fim dos hospitais públicos"
     ],
     "correctIndex": 0,
     "explanation": "Os especialistas ressalvam (\"contudo\") que, sem médicos, a tecnologia \"organiza a espera, não a elimina\"."
    },
    {
     "type": "mc",
     "stem": "Leia: \"Choveu a noite inteira. Pela manhã, as ruas amanheceram limpas, o ar mais leve, e até os pássaros pareciam cantar com mais vontade.\" O trecho transmite, predominantemente, uma sensação de:",
     "options": [
      "renovação após a chuva",
      "tristeza pela tempestade",
      "medo de novas enchentes",
      "indiferença diante do tempo"
     ],
     "correctIndex": 0,
     "explanation": "Ruas limpas, ar leve e pássaros cantando compõem a ideia de renovação trazida pela chuva."
    },
    {
     "type": "mc",
     "stem": "Leia a notícia: \"Apesar do recorde de visitantes, o museu encerrou o ano com déficit, pois a maioria entrou nos dias de gratuidade.\" Conclui-se do texto que:",
     "options": [
      "o grande público não garantiu arrecadação suficiente",
      "o museu teve poucos visitantes no ano",
      "a gratuidade foi suspensa durante o ano",
      "o déficit decorreu de furtos nas bilheterias"
     ],
     "correctIndex": 0,
     "explanation": "O conectivo \"pois\" explica: o recorde de público não gerou receita porque a maioria entrou gratuitamente."
    }
   ]
  },
  {
   "key": "classes de palavras",
   "title": "Classes de palavras",
   "questions": [
    {
     "type": "mc",
     "stem": "Na frase \"Ele agiu rapidamente diante do perigo iminente\", as palavras destacadas \"rapidamente\" e \"iminente\" são, respectivamente:",
     "options": [
      "advérbio e adjetivo",
      "adjetivo e advérbio",
      "advérbio e substantivo",
      "substantivo e adjetivo"
     ],
     "correctIndex": 0,
     "explanation": "\"Rapidamente\" modifica o verbo (advérbio de modo); \"iminente\" caracteriza o substantivo \"perigo\" (adjetivo)."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a palavra \"meio\" funciona como advérbio.",
     "options": [
      "Ela estava meio cansada depois da prova.",
      "Comprou meio quilo de café.",
      "O meio ambiente deve ser preservado.",
      "Encontraram um meio de resolver tudo."
     ],
     "correctIndex": 0,
     "explanation": "Em \"meio cansada\", \"meio\" equivale a \"um pouco\", é advérbio, portanto invariável. Nos demais, é numeral ou substantivo."
    },
    {
     "type": "mc",
     "stem": "Em \"Quando chegamos, todos já haviam saído\", a palavra \"quando\" classifica-se como:",
     "options": [
      "conjunção subordinativa temporal",
      "preposição",
      "pronome relativo",
      "advérbio interrogativo"
     ],
     "correctIndex": 0,
     "explanation": "\"Quando\" introduz oração subordinada adverbial de tempo, logo é conjunção subordinativa temporal."
    },
    {
     "type": "mc",
     "stem": "Na frase \"Dois candidatos chegaram atrasados, mas ambos foram atendidos\", as palavras \"dois\" e \"ambos\" são, respectivamente:",
     "options": [
      "numeral e pronome",
      "pronome e numeral",
      "artigo e numeral",
      "numeral e adjetivo"
     ],
     "correctIndex": 0,
     "explanation": "\"Dois\" indica quantidade exata (numeral); \"ambos\" retoma os dois candidatos (pronome indefinido)."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a palavra destacada é uma preposição.",
     "options": [
      "Ficou em casa durante a tarde toda.",
      "Ele correu bastante naquele dia.",
      "Chegaram cedo à reunião.",
      "Falou pouco sobre o assunto."
     ],
     "correctIndex": 0,
     "explanation": "\"Durante\" liga termos estabelecendo relação de tempo, sendo preposição. \"Bastante\", \"cedo\" e \"pouco\" são advérbios nesses contextos."
    }
   ]
  },
  {
   "key": "sinonimos antonimos e sentido no contexto",
   "title": "Sinônimos, antônimos e sentido no contexto",
   "questions": [
    {
     "type": "mc",
     "stem": "Em \"O argumento do réu era frágil e não convenceu o júri\", a palavra \"frágil\" pode ser substituída, sem alteração de sentido, por:",
     "options": [
      "inconsistente",
      "robusto",
      "irrefutável",
      "sólido"
     ],
     "correctIndex": 0,
     "explanation": "\"Frágil\", nesse contexto, significa pouco consistente; \"inconsistente\" é sinônimo. Os demais são antônimos."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa cujo par apresenta palavras de sentido oposto (antônimos).",
     "options": [
      "efêmero / duradouro",
      "veloz / rápido",
      "sábio / inteligente",
      "alegre / contente"
     ],
     "correctIndex": 0,
     "explanation": "\"Efêmero\" (passageiro) opõe-se a \"duradouro\". Os demais pares são de sinônimos."
    },
    {
     "type": "mc",
     "stem": "Em \"Ele engoliu o choro para não demonstrar fraqueza\", a expressão \"engoliu o choro\" foi empregada em sentido:",
     "options": [
      "figurado, significando conter a emoção",
      "literal, referindo-se a um ato físico",
      "de dúvida sobre o estado emocional",
      "que indica alegria incontida"
     ],
     "correctIndex": 0,
     "explanation": "\"Engolir o choro\" é expressão conotativa (figurada) que significa segurar, conter a emoção."
    },
    {
     "type": "mc",
     "stem": "Em \"A notícia se espalhou com rapidez pela cidade\", a palavra \"rapidez\" equivale, em sentido, a:",
     "options": [
      "celeridade",
      "demora",
      "lentidão",
      "hesitação"
     ],
     "correctIndex": 0,
     "explanation": "\"Celeridade\" é sinônimo de rapidez. As demais indicam o contrário."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a substituição da palavra em destaque MANTÉM o sentido da frase \"O gerente foi intransigente nas negociações\".",
     "options": [
      "inflexível",
      "condescendente",
      "tolerante",
      "flexível"
     ],
     "correctIndex": 0,
     "explanation": "\"Intransigente\" significa que não cede, ou seja, \"inflexível\". As demais exprimem o sentido oposto."
    }
   ]
  },
  {
   "key": "conectivos e relacoes de sentido",
   "title": "Conectivos e relações de sentido",
   "questions": [
    {
     "type": "mc",
     "stem": "Em \"Estudou muito, por isso foi aprovado\", a expressão \"por isso\" estabelece relação de:",
     "options": [
      "conclusão/consequência",
      "oposição",
      "finalidade",
      "concessão"
     ],
     "correctIndex": 0,
     "explanation": "\"Por isso\" introduz a consequência/conclusão do fato anterior (estudar muito)."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que o conectivo exprime ideia de finalidade.",
     "options": [
      "Economizou durante meses para que pudesse viajar.",
      "Economizou durante meses, mas não viajou.",
      "Economizou durante meses porque queria viajar.",
      "Economizou durante meses, embora não viajasse."
     ],
     "correctIndex": 0,
     "explanation": "\"Para que\" introduz oração final (indica o objetivo). \"Mas\" é adversativo, \"porque\" causal e \"embora\" concessivo."
    },
    {
     "type": "mc",
     "stem": "Em \"Embora estivesse cansado, continuou trabalhando\", o conectivo \"embora\" indica:",
     "options": [
      "concessão",
      "causa",
      "condição",
      "tempo"
     ],
     "correctIndex": 0,
     "explanation": "\"Embora\" introduz ideia concessiva: admite um fato contrário ao esperado sem impedir o resultado."
    },
    {
     "type": "mc",
     "stem": "Na frase \"Se chover amanhã, cancelaremos o passeio\", o conectivo \"se\" exprime relação de:",
     "options": [
      "condição",
      "conclusão",
      "explicação",
      "proporção"
     ],
     "correctIndex": 0,
     "explanation": "\"Se\" introduz oração subordinada adverbial condicional: o passeio depende da condição de chover."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que o termo em destaque expressa ideia de causa.",
     "options": [
      "Não saiu de casa porque estava doente.",
      "Não saiu de casa, portanto perdeu a festa.",
      "Não saiu de casa para descansar melhor.",
      "Não saiu de casa, contudo recebeu amigos."
     ],
     "correctIndex": 0,
     "explanation": "\"Porque\" introduz a causa de não ter saído. \"Portanto\" é conclusivo, \"para\" final e \"contudo\" adversativo."
    }
   ]
  },
  {
   "key": "concordancia verbal e nominal",
   "title": "Concordância verbal e nominal",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a concordância verbal está correta.",
     "options": [
      "Faz dez anos que não o vejo.",
      "Fazem dez anos que não o vejo.",
      "Houveram muitos problemas na reunião.",
      "Existe muitos motivos para comemorar."
     ],
     "correctIndex": 0,
     "explanation": "O verbo \"fazer\" indicando tempo decorrido é impessoal: fica no singular (\"faz dez anos\"). \"Haver\" (existir) também é impessoal (\"houve\"); e \"existir\" concorda com o sujeito (\"existem\")."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a concordância nominal está de acordo com a norma-padrão.",
     "options": [
      "É necessário muita calma neste momento.",
      "É necessária muita calma neste momento.",
      "É proibido entrada de estranhos na sala.",
      "Anexo seguem as cópias solicitadas."
     ],
     "correctIndex": 1,
     "explanation": "Com o substantivo determinado por \"muita\", a expressão varia: \"É necessária muita calma\". \"Anexas\" deveria concordar com \"cópias\" (anexas)."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase em que o verbo concorda corretamente com o sujeito posposto.",
     "options": [
      "Chegaram ontem os documentos da perícia.",
      "Chegou ontem os documentos da perícia.",
      "Falta ainda duas assinaturas no laudo.",
      "Sobrou várias cadeiras no auditório."
     ],
     "correctIndex": 0,
     "explanation": "O sujeito \"os documentos\" (plural), mesmo posposto, exige verbo no plural: \"chegaram\"."
    },
    {
     "type": "mc",
     "stem": "Em \"___ necessárias reformas no prédio histórico\", qual forma completa corretamente a frase?",
     "options": [
      "Fazem-se",
      "Faz-se",
      "Houveram",
      "Foi feito"
     ],
     "correctIndex": 0,
     "explanation": "Com a partícula apassivadora \"se\", \"reformas\" é sujeito e o verbo vai ao plural: \"Fazem-se necessárias reformas\"."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa correta quanto à concordância.",
     "options": [
      "Mais de um candidato se inscreveu no concurso.",
      "Mais de um candidato se inscreveram no concurso.",
      "Um e outro aluno faltaram à prova sem motivo.",
      "Nenhum dos alunos compareceram à cerimônia."
     ],
     "correctIndex": 0,
     "explanation": "A expressão \"mais de um\" exige verbo no singular: \"se inscreveu\". Em \"nenhum dos alunos\", o verbo fica no singular (\"compareceu\")."
    }
   ]
  },
  {
   "key": "regencia verbal e nominal",
   "title": "Regência verbal e nominal",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.",
     "options": [
      "Assisti ao filme recomendado pelo professor.",
      "Assisti o filme recomendado pelo professor.",
      "Prefiro mais caminhar do que correr.",
      "Cheguei na escola muito cedo hoje."
     ],
     "correctIndex": 0,
     "explanation": "\"Assistir\" no sentido de ver exige a preposição \"a\" (assistir a algo). \"Preferir\" não admite \"mais\" e \"chegar\" pede \"a\" (cheguei à escola)."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase em que o verbo \"obedecer\" está empregado com a regência correta.",
     "options": [
      "Os soldados obedeceram às ordens do capitão.",
      "Os soldados obedeceram as ordens do capitão.",
      "Os soldados obedeceram nas ordens do capitão.",
      "Os soldados obedeceram pelas ordens do capitão."
     ],
     "correctIndex": 0,
     "explanation": "\"Obedecer\" é transitivo indireto e exige a preposição \"a\": obedecer a algo/alguém (obedeceram às ordens)."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a regência nominal está correta.",
     "options": [
      "Ele é favorável à proposta apresentada.",
      "Ele é favorável a proposta de a aceitar sem ler.",
      "Tinha aversão com aquele tipo de atitude.",
      "Estava ansioso em receber a resposta."
     ],
     "correctIndex": 0,
     "explanation": "\"Favorável\" rege a preposição \"a\" (favorável a algo). \"Aversão\" pede \"a/por\" e \"ansioso\" pede \"por\"."
    },
    {
     "type": "mc",
     "stem": "Em \"Os moradores ___ a nova norma de trânsito\", o verbo que completa corretamente, segundo a regência, é:",
     "options": [
      "visam a cumprir",
      "visam cumprir diretamente sem preposição alguma obrigatória",
      "visam na",
      "visam de"
     ],
     "correctIndex": 0,
     "explanation": "No sentido de ter por objetivo, \"visar\" é transitivo indireto e rege a preposição \"a\": visar a algo."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que o verbo \"informar\" está corretamente regido.",
     "options": [
      "Informei os candidatos do resultado da prova.",
      "Informei aos candidatos os candidatos do resultado.",
      "Informei com os candidatos o resultado.",
      "Informei sobre os candidatos do resultado."
     ],
     "correctIndex": 0,
     "explanation": "\"Informar\" admite informar alguém de algo: informei os candidatos (objeto direto) do resultado (objeto indireto)."
    }
   ]
  },
  {
   "key": "crase",
   "title": "Crase",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a frase em que a crase está corretamente empregada.",
     "options": [
      "Entreguei o laudo à perita responsável.",
      "Entreguei o laudo a perita responsável com atraso de à dias.",
      "Cheguei à cavalo na fazenda.",
      "Refiro-me à você e aos colegas."
     ],
     "correctIndex": 0,
     "explanation": "Antes de substantivo feminino regido de \"a\" ocorre crase (à perita). Não há crase antes de \"cavalo\" (masculino) nem antes de \"você\" (pronome de tratamento)."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que o uso da crase é PROIBIDO.",
     "options": [
      "Começou a chover durante a tarde.",
      "Fomos à feira no domingo.",
      "Entregou o relatório à diretora.",
      "Referiu-se à proposta inicial."
     ],
     "correctIndex": 0,
     "explanation": "Não há crase antes de verbo (\"a chover\"). Nos demais, há crase antes de substantivo feminino regido de \"a\"."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase em que a crase é obrigatória.",
     "options": [
      "Dirigiu-se à sala de reuniões imediatamente.",
      "Esta carta foi escrita a mão.",
      "Vendas a prazo têm juros altos.",
      "Ele ficou cara a cara com o suspeito."
     ],
     "correctIndex": 0,
     "explanation": "\"Dirigir-se a\" + substantivo feminino \"a sala\" resulta em crase obrigatória (à sala). Nas locuções adverbiais com palavras femininas repetidas ou de meio, não há crase."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a crase está empregada corretamente.",
     "options": [
      "O atendimento é das 8 às 17 horas.",
      "Voltaremos daqui à pouco com novidades.",
      "Ele estava disposto à colaborar com todos.",
      "Pediu para falar à sós com o delegado."
     ],
     "correctIndex": 0,
     "explanation": "Em horas determinadas ocorre crase (às 17 horas). \"Há pouco\" (tempo) não tem crase; não há crase antes de verbo (\"a colaborar\") nem em \"a sós\"."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase em que NÃO deve haver crase.",
     "options": [
      "Assisti a uma palestra muito interessante.",
      "Fui à praça com as crianças.",
      "Chegamos à conclusão esperada.",
      "Deu o presente à amiga de infância."
     ],
     "correctIndex": 0,
     "explanation": "Antes do artigo indefinido \"uma\" não há crase (a uma palestra). Nos demais há a fusão da preposição com o artigo feminino."
    }
   ]
  },
  {
   "key": "pronomes e colocacao pronominal",
   "title": "Pronomes e colocação pronominal",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a colocação pronominal está de acordo com a norma-padrão.",
     "options": [
      "Não me disseram a verdade sobre o caso.",
      "Não disseram-me a verdade sobre o caso.",
      "Me disseram a verdade logo cedo.",
      "Nunca contaram-me esse segredo."
     ],
     "correctIndex": 0,
     "explanation": "Palavras negativas (\"não\", \"nunca\") atraem o pronome, exigindo próclise: \"não me disseram\"."
    },
    {
     "type": "mc",
     "stem": "Na frase \"Entreguei o relatório ao chefe\", a substituição correta dos termos destacados por pronomes é:",
     "options": [
      "Entreguei-lho.",
      "Entreguei-o a ele.",
      "Entreguei-lhe-o.",
      "Entreguei ele a ele."
     ],
     "correctIndex": 0,
     "explanation": "\"O relatório\" (objeto direto) vira \"o\" e \"ao chefe\" (objeto indireto) vira \"lhe\"; a fusão resulta em \"lho\": entreguei-lho."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que o pronome oblíquo foi usado corretamente como objeto direto.",
     "options": [
      "Vi-o atravessar a rua apressado.",
      "Vi-lhe atravessar a rua apressado.",
      "Assisti-o ao jogo pela televisão.",
      "Obedeci-o sem questionar as ordens."
     ],
     "correctIndex": 0,
     "explanation": "Como objeto direto usa-se \"o/a\": \"vi-o\". \"Assistir\" e \"obedecer\" são transitivos indiretos e pedem \"lhe\"."
    },
    {
     "type": "mc",
     "stem": "Em início de oração, na norma-padrão, assinale a colocação adequada.",
     "options": [
      "Diga-me o que aconteceu ontem.",
      "Me diga o que aconteceu ontem.",
      "Lhe entregaram o documento hoje.",
      "Nos avisaram do adiamento agora."
     ],
     "correctIndex": 0,
     "explanation": "Não se inicia frase com pronome átono; usa-se a ênclise: \"Diga-me\"."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase em que a mesóclise foi empregada corretamente.",
     "options": [
      "Entregar-lhe-ei o resultado amanhã.",
      "Lhe entregarei o resultado amanhã.",
      "Entregarei-lhe o resultado amanhã.",
      "Não entregar-lhe-ei o resultado amanhã."
     ],
     "correctIndex": 0,
     "explanation": "Com o verbo no futuro do presente e sem palavra atrativa, usa-se a mesóclise: \"entregar-lhe-ei\". Em \"não\", a negação exigiria próclise (não lhe entregarei)."
    }
   ]
  },
  {
   "key": "pontuacao",
   "title": "Pontuação",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a vírgula foi empregada corretamente.",
     "options": [
      "São Paulo, 13 de outubro de 2026.",
      "O perito, analisou as fotos com atenção.",
      "Comprei canetas, lápis e, borrachas.",
      "Ela disse que, viria mais tarde."
     ],
     "correctIndex": 0,
     "explanation": "Separa-se a localidade da data por vírgula. Não se separa sujeito do verbo, nem se usa vírgula antes do último item de enumeração ligado por \"e\", nem entre \"que\" e a oração."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase corretamente pontuada.",
     "options": [
      "Os candidatos, que chegaram atrasados, não fizeram a prova.",
      "Os candidatos que chegaram atrasados não, fizeram a prova.",
      "Os candidatos que, chegaram atrasados não fizeram a prova.",
      "Os candidatos que chegaram, atrasados não fizeram a prova."
     ],
     "correctIndex": 0,
     "explanation": "A oração explicativa entre vírgulas (\"que chegaram atrasados\") acrescenta informação ao sujeito já definido, por isso fica isolada por vírgulas."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que os dois-pontos foram usados adequadamente.",
     "options": [
      "Levei tudo para a perícia: câmera, tripé e lanterna.",
      "Levei: tudo para a perícia câmera, tripé e lanterna.",
      "Levei tudo para: a perícia câmera, tripé e lanterna.",
      "Levei tudo para a perícia câmera tripé e lanterna:"
     ],
     "correctIndex": 0,
     "explanation": "Os dois-pontos introduzem uma enumeração explicativa daquilo que foi dito antes (\"tudo\")."
    },
    {
     "type": "mc",
     "stem": "Em \"Estudei muito; ainda assim, não fui aprovado\", o ponto e vírgula foi empregado para:",
     "options": [
      "separar orações com certa autonomia relacionadas por oposição",
      "indicar o fim de uma enumeração vertical",
      "substituir obrigatoriamente os dois-pontos",
      "marcar o encerramento do período"
     ],
     "correctIndex": 0,
     "explanation": "O ponto e vírgula separa orações que mantêm relação de sentido (aqui, de oposição), com pausa maior que a da vírgula."
    },
    {
     "type": "mc",
     "stem": "No texto \"— E agora? — perguntou ela, sem acreditar no que via...\", as reticências foram usadas para:",
     "options": [
      "sugerir a suspensão do pensamento ou hesitação",
      "encerrar afirmativamente a frase",
      "indicar uma pergunta direta",
      "separar itens de uma lista"
     ],
     "correctIndex": 0,
     "explanation": "As reticências marcam a interrupção ou suspensão da ideia, sugerindo hesitação ou incerteza da personagem."
    }
   ]
  },
  {
   "key": "revisao e questoes vunesp de todos os topicos",
   "title": "Revisão e questões Vunesp de todos os tópicos",
   "questions": [
    {
     "type": "mc",
     "stem": "Leia: \"O fotógrafo pericial registrou a cena com rigor, pois cada imagem poderia ser decisiva no processo.\" O conectivo \"pois\" estabelece relação de:",
     "options": [
      "causa/explicação",
      "finalidade",
      "oposição",
      "condição"
     ],
     "correctIndex": 0,
     "explanation": "\"Pois\" introduz a explicação/causa do rigor: as imagens poderiam ser decisivas."
    },
    {
     "type": "mc",
     "stem": "Assinale a alternativa em que a crase está corretamente empregada.",
     "options": [
      "O laudo foi entregue à autoridade competente.",
      "O laudo foi entregue à prazo pela equipe.",
      "Começou à trabalhar antes do amanhecer.",
      "Dedicou-se à ele durante toda a investigação."
     ],
     "correctIndex": 0,
     "explanation": "Ocorre crase antes do substantivo feminino \"autoridade\" regido pela preposição \"a\". Não há crase antes de verbo nem antes de pronome pessoal \"ele\"."
    },
    {
     "type": "mc",
     "stem": "Assinale a frase com concordância verbal correta.",
     "options": [
      "Existem indícios suficientes para a condenação.",
      "Existe indícios suficientes para a condenação.",
      "Houveram falhas graves na coleta de provas.",
      "Fazem anos que o caso foi arquivado."
     ],
     "correctIndex": 0,
     "explanation": "\"Existir\" concorda com o sujeito \"indícios\" (plural): existem. \"Haver\" (ocorrer) e \"fazer\" (tempo) são impessoais e ficam no singular."
    },
    {
     "type": "mc",
     "stem": "Em \"Os peritos examinaram as digitais e as fotografaram\", o termo \"as\" em \"as fotografaram\" é:",
     "options": [
      "pronome pessoal oblíquo, objeto direto",
      "artigo definido feminino",
      "pronome relativo",
      "preposição acidental"
     ],
     "correctIndex": 0,
     "explanation": "\"As\" retoma \"as digitais\" e funciona como objeto direto do verbo fotografar, sendo pronome pessoal oblíquo."
    },
    {
     "type": "mc",
     "stem": "Leia: \"A análise foi minuciosa, cuidadosa e, sobretudo, imparcial.\" As vírgulas isolam a expressão \"sobretudo\" porque ela:",
     "options": [
      "é um termo intercalado de realce",
      "separa sujeito e predicado",
      "marca uma enumeração incompleta",
      "introduz uma oração explicativa"
     ],
     "correctIndex": 0,
     "explanation": "\"Sobretudo\" está intercalado para dar realce ao último adjetivo; por ser termo deslocado/intercalado, vem isolado por vírgulas."
    }
   ]
  }
 ],
 "informatica": [
  {
   "key": "windows conceitos basicos",
   "title": "Windows: conceitos básicos",
   "questions": [
    {
     "type": "mc",
     "stem": "No Windows 10/11, qual combinação de teclas abre a janela do Explorador de Arquivos diretamente?",
     "options": [
      "Windows + E",
      "Windows + D",
      "Windows + L",
      "Windows + R"
     ],
     "correctIndex": 0,
     "explanation": "Windows+E abre o Explorador de Arquivos. Windows+D mostra a área de trabalho, Windows+L bloqueia o computador e Windows+R abre a caixa Executar."
    },
    {
     "type": "mc",
     "stem": "No Windows, os arquivos de atalho que apontam para um programa ou pasta possuem qual extensão?",
     "options": [
      ".exe",
      ".lnk",
      ".tmp",
      ".sys"
     ],
     "correctIndex": 1,
     "explanation": "Atalhos no Windows têm extensão .lnk. A extensão .exe identifica programas executáveis, .tmp arquivos temporários e .sys arquivos de sistema."
    },
    {
     "type": "mc",
     "stem": "No Windows 10/11, pressionar simultaneamente as teclas Windows + D produz qual efeito?",
     "options": [
      "Bloqueia a sessão do usuário",
      "Exibe a área de trabalho, minimizando as janelas abertas",
      "Abre o menu Iniciar",
      "Abre a caixa de diálogo Executar"
     ],
     "correctIndex": 1,
     "explanation": "Windows+D minimiza todas as janelas e mostra a área de trabalho. Bloquear é Windows+L, Executar é Windows+R e o menu Iniciar abre com a tecla Windows sozinha."
    },
    {
     "type": "mc",
     "stem": "No Explorador de Arquivos do Windows, qual tecla é usada para renomear um arquivo selecionado?",
     "options": [
      "F1",
      "F2",
      "F5",
      "F12"
     ],
     "correctIndex": 1,
     "explanation": "F2 renomeia o item selecionado. F1 abre a ajuda, F5 atualiza a janela e F12 não tem função padrão nesse contexto."
    },
    {
     "type": "mc",
     "stem": "No Windows, para excluir um arquivo permanentemente, sem enviá-lo à Lixeira, o usuário deve selecioná-lo e pressionar:",
     "options": [
      "Delete",
      "Shift + Delete",
      "Ctrl + Delete",
      "Alt + Delete"
     ],
     "correctIndex": 1,
     "explanation": "Shift+Delete exclui definitivamente, sem passar pela Lixeira. A tecla Delete sozinha move o arquivo para a Lixeira."
    }
   ]
  },
  {
   "key": "word edicao e formatacao",
   "title": "Word: edição e formatação",
   "questions": [
    {
     "type": "mc",
     "stem": "No Microsoft Word em português, o atalho Ctrl+S aplica qual formatação ao texto selecionado?",
     "options": [
      "Salvar o documento",
      "Sublinhado",
      "Negrito",
      "Itálico"
     ],
     "correctIndex": 1,
     "explanation": "No Word em português, Ctrl+S aplica sublinhado (de Sublinhado). Negrito é Ctrl+N, itálico é Ctrl+I e salvar é Ctrl+B (de Brivar/Gravar)."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word em português, qual atalho de teclado aplica o efeito negrito ao texto selecionado?",
     "options": [
      "Ctrl+N",
      "Ctrl+B",
      "Ctrl+I",
      "Ctrl+T"
     ],
     "correctIndex": 0,
     "explanation": "No Word em português, Ctrl+N aplica negrito. Ctrl+B salva o documento, Ctrl+I aplica itálico e Ctrl+T seleciona todo o texto."
    },
    {
     "type": "mc",
     "stem": "Na faixa de opções do Word, os recursos de marcadores, numeração e alinhamento de texto encontram-se em qual grupo da guia Página Inicial?",
     "options": [
      "Fonte",
      "Parágrafo",
      "Estilos",
      "Edição"
     ],
     "correctIndex": 1,
     "explanation": "Marcadores, numeração, recuos e alinhamento ficam no grupo Parágrafo. O grupo Fonte trata de tipo, tamanho e cor da fonte; Estilos aplica estilos predefinidos."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word, o atalho Ctrl+I, quando há texto selecionado, produz qual efeito?",
     "options": [
      "Aplica itálico",
      "Insere uma imagem",
      "Centraliza o parágrafo",
      "Aplica tachado"
     ],
     "correctIndex": 0,
     "explanation": "Ctrl+I aplica itálico ao texto selecionado. Centralizar é Ctrl+E e não há atalho simples de uma letra para tachado ou inserção de imagem."
    },
    {
     "type": "mc",
     "stem": "No grupo Fonte da guia Página Inicial do Word, o botão com a letra A realçada por um pincel colorido permite:",
     "options": [
      "Alterar a cor da fonte do texto",
      "Aumentar o espaçamento entre linhas",
      "Alterar a cor de realce do texto",
      "Aplicar um estilo de parágrafo"
     ],
     "correctIndex": 2,
     "explanation": "O botão com o pincel colorido sobre a letra é a Cor do Realce do Texto (como marca-texto). A Cor da Fonte é representada pela letra A com uma barra colorida abaixo."
    }
   ]
  },
  {
   "key": "word estrutura e recursos",
   "title": "Word: estrutura e recursos",
   "questions": [
    {
     "type": "mc",
     "stem": "No Microsoft Word, os comandos para inserir cabeçalho, rodapé e número de página localizam-se em qual guia da faixa de opções?",
     "options": [
      "Página Inicial",
      "Inserir",
      "Layout",
      "Revisão"
     ],
     "correctIndex": 1,
     "explanation": "Cabeçalho, Rodapé e Número de Página ficam no grupo Cabeçalho e Rodapé da guia Inserir. A guia Layout trata de margens e orientação; Revisão trata de ortografia e comentários."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word, para forçar que o texto seguinte inicie no topo da próxima página, mantendo o conteúdo em um único documento, utiliza-se:",
     "options": [
      "Uma quebra de página",
      "Vários toques na tecla Enter",
      "Uma quebra de seção contínua",
      "A tecla Tab repetidamente"
     ],
     "correctIndex": 0,
     "explanation": "A quebra de página (Ctrl+Enter) move o texto para o início da página seguinte de forma estável. Usar Enter repetidamente desalinha o texto a qualquer alteração anterior."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word (Microsoft 365), a forma adequada de gerar um arquivo PDF a partir do documento é:",
     "options": [
      "Renomear o arquivo .docx para .pdf",
      "Usar Arquivo > Exportar (ou Salvar Como) e escolher o tipo PDF",
      "Copiar o texto e colar em um navegador",
      "Imprimir o documento em papel e digitalizar"
     ],
     "correctIndex": 1,
     "explanation": "O Word gera PDF nativamente por Arquivo > Exportar > Criar PDF/XPS ou em Salvar Como escolhendo o tipo PDF. Apenas renomear a extensão não converte o conteúdo."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word, os comandos para inserir imagens, formas e SmartArt encontram-se em qual grupo da guia Inserir?",
     "options": [
      "Texto",
      "Ilustrações",
      "Símbolos",
      "Tabelas"
     ],
     "correctIndex": 1,
     "explanation": "Imagens, Formas, Ícones, SmartArt e Gráfico ficam no grupo Ilustrações da guia Inserir. O grupo Tabelas insere tabelas e o grupo Símbolos insere símbolos e equações."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word, o atalho de teclado Ctrl+P abre:",
     "options": [
      "A caixa de diálogo de impressão / visualização de impressão",
      "A guia Inserir",
      "O verificador ortográfico",
      "A janela de propriedades do documento"
     ],
     "correctIndex": 0,
     "explanation": "Ctrl+P abre a tela de impressão (Imprimir), com a visualização e as opções de impressora. A verificação ortográfica é acionada por F7."
    }
   ]
  },
  {
   "key": "excel fundamentos",
   "title": "Excel: fundamentos",
   "questions": [
    {
     "type": "mc",
     "stem": "No Microsoft Excel, a referência $A$1 utilizada em uma fórmula é classificada como:",
     "options": [
      "Referência relativa",
      "Referência absoluta",
      "Referência mista com coluna relativa",
      "Referência circular"
     ],
     "correctIndex": 1,
     "explanation": "O cifrão ($) fixa a parte à qual antecede. Em $A$1, tanto a coluna quanto a linha estão fixas, caracterizando referência absoluta, que não muda ao copiar a fórmula."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere a fórmula =SOMA(A1:A3). O caractere dois-pontos (:) empregado indica:",
     "options": [
      "Um intervalo contínuo de A1 até A3, incluindo A2",
      "Apenas as células A1 e A3",
      "Uma divisão entre A1 e A3",
      "Uma referência a outra planilha"
     ],
     "correctIndex": 0,
     "explanation": "O dois-pontos define um intervalo contínuo; A1:A3 abrange A1, A2 e A3. Já o ponto e vírgula (;) separa argumentos ou células não adjacentes."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, ao copiar a fórmula =A1+B1 da célula C1 para a célula C2, a fórmula resultante em C2 será:",
     "options": [
      "=A1+B1",
      "=A2+B2",
      "=B1+C1",
      "=A3+B3"
     ],
     "correctIndex": 1,
     "explanation": "Como as referências são relativas, ao copiar uma linha para baixo elas são ajustadas automaticamente, resultando em =A2+B2."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, qual operador é utilizado para realizar potenciação (exponenciação) em uma fórmula?",
     "options": [
      "*",
      "/",
      "^",
      "%"
     ],
     "correctIndex": 2,
     "explanation": "O circunflexo (^) é o operador de potenciação; por exemplo =2^3 resulta em 8. O asterisco multiplica, a barra divide e o % calcula porcentagem."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, o conjunto de planilhas (abas) gravadas em um único arquivo é denominado:",
     "options": [
      "Pasta de trabalho",
      "Documento",
      "Biblioteca",
      "Diretório"
     ],
     "correctIndex": 0,
     "explanation": "No Excel, o arquivo que reúne uma ou mais planilhas é chamado de pasta de trabalho (workbook). Cada aba corresponde a uma planilha."
    }
   ]
  },
  {
   "key": "excel formulas e funcoes",
   "title": "Excel: fórmulas e funções",
   "questions": [
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere A1=10, A2=20 e A3=30. Qual é o resultado da fórmula =MÉDIA(A1:A3)?",
     "options": [
      "20",
      "30",
      "60",
      "15"
     ],
     "correctIndex": 0,
     "explanation": "A média de 10, 20 e 30 é (10+20+30)/3 = 60/3 = 20. A função SOMA, por sua vez, retornaria 60."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere as células A1=5, A2=8 e A3=3. Qual é o resultado da fórmula =MÁXIMO(A1:A3)-MÍNIMO(A1:A3)?",
     "options": [
      "3",
      "5",
      "8",
      "11"
     ],
     "correctIndex": 1,
     "explanation": "MÁXIMO(A1:A3) é 8 e MÍNIMO(A1:A3) é 3; a diferença é 8-3 = 5."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere A1=70. Qual é o resultado da fórmula =SE(A1>=60;\"Aprovado\";\"Reprovado\")?",
     "options": [
      "Aprovado",
      "Reprovado",
      "VERDADEIRO",
      "70"
     ],
     "correctIndex": 0,
     "explanation": "Como 70 é maior ou igual a 60, a condição é verdadeira e a função SE retorna o primeiro valor, \"Aprovado\"."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere o intervalo B1:B5 contendo os valores 10, 5, 20, 5 e 8. Qual é o resultado de =CONT.SE(B1:B5;5)?",
     "options": [
      "1",
      "2",
      "3",
      "5"
     ],
     "correctIndex": 1,
     "explanation": "CONT.SE conta quantas células atendem ao critério. O valor 5 aparece duas vezes no intervalo, portanto o resultado é 2."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere A1=100, A2=200 e A3=300, com B1=\"Sim\", B2=\"Não\" e B3=\"Sim\". Qual é o resultado de =SOMASE(B1:B3;\"Sim\";A1:A3)?",
     "options": [
      "200",
      "400",
      "600",
      "300"
     ],
     "correctIndex": 1,
     "explanation": "SOMASE soma apenas os valores de A cujo correspondente em B é \"Sim\": 100 (A1) + 300 (A3) = 400."
    }
   ]
  },
  {
   "key": "excel tabelas e classificacao",
   "title": "Excel: tabelas e classificação",
   "questions": [
    {
     "type": "mc",
     "stem": "No Microsoft Excel, os comandos Classificar e Filtrar encontram-se principalmente em qual guia da faixa de opções?",
     "options": [
      "Página Inicial e Dados",
      "Inserir e Layout",
      "Fórmulas e Revisão",
      "Exibir e Arquivo"
     ],
     "correctIndex": 0,
     "explanation": "Classificar e Filtrar aparecem no grupo Edição da guia Página Inicial e também, de forma completa, no grupo Classificar e Filtrar da guia Dados."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, aplicar um filtro a uma coluna de dados tem como efeito principal:",
     "options": [
      "Excluir definitivamente as linhas que não atendem ao critério",
      "Ocultar temporariamente as linhas que não atendem ao critério escolhido",
      "Ordenar os dados em ordem alfabética automaticamente",
      "Somar os valores selecionados"
     ],
     "correctIndex": 1,
     "explanation": "O filtro apenas oculta temporariamente as linhas que não correspondem ao critério; os dados continuam no arquivo e reaparecem ao limpar o filtro."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, para inserir um gráfico de colunas a partir de dados selecionados, o usuário deve utilizar a guia:",
     "options": [
      "Inserir",
      "Dados",
      "Fórmulas",
      "Revisão"
     ],
     "correctIndex": 0,
     "explanation": "Os gráficos ficam no grupo Gráficos da guia Inserir. A guia Dados trata de classificação, filtros e importação de dados."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, classificar uma coluna de números em ordem crescente significa organizá-los:",
     "options": [
      "Do maior para o menor valor",
      "Do menor para o maior valor",
      "Em ordem aleatória",
      "Apenas os valores positivos"
     ],
     "correctIndex": 1,
     "explanation": "A classificação crescente (de A a Z, ou do menor para o maior) organiza os números do menor para o maior valor. A decrescente faz o contrário."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, ao transformar um intervalo em Tabela (guia Inserir > Tabela), um recurso automaticamente disponibilizado nos cabeçalhos é:",
     "options": [
      "A inserção automática de gráficos",
      "Os botões de filtro e classificação (setas suspensas)",
      "A conversão dos dados em PDF",
      "O bloqueio da edição das células"
     ],
     "correctIndex": 1,
     "explanation": "Ao criar uma Tabela, o Excel adiciona automaticamente as setas de filtro e classificação nos cabeçalhos das colunas, além de aplicar um estilo com linhas alternadas."
    }
   ]
  },
  {
   "key": "internet e navegadores",
   "title": "Internet e navegadores",
   "questions": [
    {
     "type": "mc",
     "stem": "Nos navegadores Google Chrome e Microsoft Edge, qual atalho de teclado abre uma nova guia (aba) na janela atual?",
     "options": [
      "Ctrl+N",
      "Ctrl+T",
      "Ctrl+W",
      "Ctrl+Shift+N"
     ],
     "correctIndex": 1,
     "explanation": "Ctrl+T abre uma nova guia. Ctrl+N abre uma nova janela, Ctrl+W fecha a guia atual e Ctrl+Shift+N abre uma janela anônima."
    },
    {
     "type": "mc",
     "stem": "Nos navegadores Chrome e Edge, o atalho Ctrl+Shift+Del normalmente abre a janela para:",
     "options": [
      "Limpar dados de navegação (histórico, cache, cookies)",
      "Abrir uma nova janela anônima",
      "Imprimir a página atual",
      "Adicionar a página aos favoritos"
     ],
     "correctIndex": 0,
     "explanation": "Ctrl+Shift+Del abre a caixa Limpar dados de navegação, com opções de histórico, cache e cookies. A janela anônima é Ctrl+Shift+N."
    },
    {
     "type": "mc",
     "stem": "Em uma URL como https://www.policia.sp.gov.br, o trecho https indica:",
     "options": [
      "O nome do domínio do site",
      "O protocolo de comunicação utilizado, com segurança (criptografia)",
      "O endereço IP do servidor",
      "O provedor de acesso à internet"
     ],
     "correctIndex": 1,
     "explanation": "O https é o protocolo de transferência de hipertexto seguro, que criptografa a comunicação. O domínio seria www.policia.sp.gov.br."
    },
    {
     "type": "mc",
     "stem": "Nos navegadores atuais, o atalho Ctrl+N tem como função:",
     "options": [
      "Abrir uma nova guia na janela atual",
      "Abrir uma nova janela do navegador",
      "Fechar o navegador",
      "Recarregar a página"
     ],
     "correctIndex": 1,
     "explanation": "Ctrl+N abre uma nova janela do navegador. A nova guia é Ctrl+T e recarregar a página é F5 ou Ctrl+R."
    },
    {
     "type": "mc",
     "stem": "Sobre segurança na internet, um programa malicioso que se disfarça de software legítimo para enganar o usuário e executar ações nocivas é classificado como:",
     "options": [
      "Cavalo de Troia (trojan)",
      "Firewall",
      "Cookie",
      "Backup"
     ],
     "correctIndex": 0,
     "explanation": "O Cavalo de Troia (trojan) se apresenta como programa legítimo para enganar o usuário. Firewall é um mecanismo de proteção e backup é cópia de segurança."
    }
   ]
  },
  {
   "key": "correio eletronico",
   "title": "Correio eletrônico",
   "questions": [
    {
     "type": "mc",
     "stem": "No correio eletrônico, ao usar o recurso Responder a Todos em uma mensagem recebida, a resposta é enviada:",
     "options": [
      "Apenas ao remetente original",
      "Ao remetente e a todos os destinatários que estavam nos campos Para e Cc",
      "Somente aos destinatários do campo Cco",
      "A todos os contatos da agenda do usuário"
     ],
     "correctIndex": 1,
     "explanation": "Responder a Todos envia a resposta ao remetente e a todos os destinatários visíveis (campos Para e Cc). Quem estava em Cco não é incluído, pois é oculto."
    },
    {
     "type": "mc",
     "stem": "No correio eletrônico, o campo Cco (com cópia oculta) tem como característica:",
     "options": [
      "Mostrar os endereços a todos os destinatários",
      "Ocultar os endereços nele inseridos dos demais destinatários",
      "Enviar a mensagem apenas para o próprio remetente",
      "Impedir que a mensagem tenha anexos"
     ],
     "correctIndex": 1,
     "explanation": "No campo Cco os endereços ficam ocultos: os demais destinatários não veem quem recebeu cópia oculta. No campo Cc os endereços ficam visíveis a todos."
    },
    {
     "type": "mc",
     "stem": "No correio eletrônico, o recurso Encaminhar é utilizado para:",
     "options": [
      "Responder somente ao remetente da mensagem",
      "Enviar uma mensagem recebida (inclusive seus anexos) a um ou mais novos destinatários",
      "Excluir a mensagem definitivamente",
      "Marcar a mensagem como spam"
     ],
     "correctIndex": 1,
     "explanation": "Encaminhar envia a mensagem recebida, normalmente com seus anexos, a novos destinatários escolhidos pelo usuário, diferentemente de Responder."
    },
    {
     "type": "mc",
     "stem": "No correio eletrônico, ao receber uma mensagem enviada a vários destinatários e desejar que apenas o remetente original receba sua resposta, o usuário deve utilizar:",
     "options": [
      "Responder",
      "Responder a Todos",
      "Encaminhar",
      "Cco"
     ],
     "correctIndex": 0,
     "explanation": "O comando Responder direciona a resposta somente ao remetente original. Responder a Todos incluiria também os demais destinatários."
    },
    {
     "type": "mc",
     "stem": "No correio eletrônico, a assinatura de e-mail é um recurso que:",
     "options": [
      "Criptografa automaticamente toda a mensagem",
      "Insere automaticamente um texto padrão (como nome e contato) ao final das mensagens",
      "Garante que a mensagem não contenha vírus",
      "Confirma a entrega da mensagem ao destinatário"
     ],
     "correctIndex": 1,
     "explanation": "A assinatura é um bloco de texto padrão (nome, cargo, contatos) adicionado automaticamente ao final das mensagens. Não tem relação com criptografia ou antivírus."
    }
   ]
  },
  {
   "key": "revisao",
   "title": "Revisão",
   "questions": [
    {
     "type": "mc",
     "stem": "Considerando as versões atuais, no Microsoft Excel a fórmula =SOMA(A1;A3) (com ponto e vírgula) soma:",
     "options": [
      "O intervalo contínuo de A1 até A3",
      "Apenas as células A1 e A3",
      "Apenas a célula A1",
      "Todas as células da coluna A"
     ],
     "correctIndex": 1,
     "explanation": "Com ponto e vírgula, a fórmula soma apenas as células indicadas, A1 e A3, ignorando A2. Para somar o intervalo contínuo usaria-se o dois-pontos: A1:A3."
    },
    {
     "type": "mc",
     "stem": "No Windows 10/11, o atalho Windows + L tem como função:",
     "options": [
      "Abrir o Explorador de Arquivos",
      "Bloquear o computador (travar a sessão)",
      "Mostrar a área de trabalho",
      "Abrir a caixa Executar"
     ],
     "correctIndex": 1,
     "explanation": "Windows+L bloqueia o computador, exigindo nova autenticação. O Explorador abre com Windows+E e a área de trabalho com Windows+D."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Word em português, a função dos atalhos Ctrl+N e Ctrl+S é, respectivamente:",
     "options": [
      "Novo documento e salvar",
      "Negrito e sublinhado",
      "Negrito e salvar",
      "Sublinhado e negrito"
     ],
     "correctIndex": 1,
     "explanation": "No Word em português, Ctrl+N aplica negrito e Ctrl+S aplica sublinhado. Salvar é Ctrl+B nessa versão."
    },
    {
     "type": "mc",
     "stem": "Nos navegadores atuais, um site cujo endereço começa com https:// em vez de http:// caracteriza-se por:",
     "options": [
      "Ser mais rápido que os demais",
      "Ter a comunicação criptografada, oferecendo mais segurança",
      "Não poder conter imagens",
      "Funcionar apenas no Google Chrome"
     ],
     "correctIndex": 1,
     "explanation": "O https utiliza criptografia (SSL/TLS) para proteger os dados trafegados, trazendo mais segurança que o http simples, sem relação com velocidade ou navegador específico."
    },
    {
     "type": "mc",
     "stem": "No Microsoft Excel, considere A1=4, A2=6 e A3=10. Qual é o resultado da fórmula =SE(MÉDIA(A1:A3)>5;\"Alto\";\"Baixo\")?",
     "options": [
      "Alto",
      "Baixo",
      "VERDADEIRO",
      "6,67"
     ],
     "correctIndex": 0,
     "explanation": "A média de 4, 6 e 10 é 20/3 ≈ 6,67, que é maior que 5; portanto o SE retorna o primeiro valor, \"Alto\"."
    }
   ]
  }
 ],
 "criminologia": [
  {
   "key": "criminologia conceito metodo objeto e finalidades",
   "title": "Criminologia: conceito, método, objeto e finalidades",
   "questions": [
    {
     "type": "mc",
     "stem": "A Criminologia é usualmente definida como uma ciência:",
     "options": [
      "normativa e dogmática, que se ocupa da interpretação da lei penal",
      "empírica e interdisciplinar, que estuda o crime, o criminoso, a vítima e o controle social",
      "exclusivamente filosófica, que investiga o fundamento abstrato da pena",
      "meramente processual, voltada à produção de provas em juízo"
     ],
     "correctIndex": 1,
     "explanation": "A Criminologia é ciência empírica (baseada na observação da realidade) e interdisciplinar, distinguindo-se do Direito Penal, que é normativo e dogmático."
    },
    {
     "type": "mc",
     "stem": "São considerados objetos de estudo da Criminologia moderna:",
     "options": [
      "a lei, o processo, a sentença e a execução",
      "o delito, o delinquente, a vítima e o controle social",
      "apenas o delinquente e a pena a ele aplicada",
      "somente a norma penal incriminadora e a culpabilidade"
     ],
     "correctIndex": 1,
     "explanation": "Os quatro objetos clássicos da Criminologia moderna são o delito, o delinquente, a vítima e o controle social (mecanismos de reação ao crime)."
    },
    {
     "type": "mc",
     "stem": "O caráter empírico da Criminologia significa que ela:",
     "options": [
      "baseia-se exclusivamente em deduções lógicas a partir da lei",
      "fundamenta suas conclusões na observação e na análise da realidade",
      "dispensa qualquer método de investigação sistemática",
      "limita-se a interpretar normas jurídicas abstratas"
     ],
     "correctIndex": 1,
     "explanation": "Por ser empírica, a Criminologia parte da observação dos fatos e da realidade, utilizando métodos como o indutivo e o estatístico, e não da mera dedução normativa."
    },
    {
     "type": "mc",
     "stem": "A chamada Criminologia Clínica caracteriza-se por:",
     "options": [
      "estudar o fenômeno criminal de forma ampla e geral na sociedade",
      "dedicar-se ao estudo individualizado do delinquente, com fins de diagnóstico e tratamento",
      "analisar exclusivamente as estatísticas oficiais de criminalidade",
      "elaborar as normas incriminadoras do ordenamento jurídico"
     ],
     "correctIndex": 1,
     "explanation": "A Criminologia Clínica tem enfoque individual, voltado ao exame do delinquente concreto (diagnóstico, prognóstico e tratamento), enquanto a Criminologia Geral estuda o fenômeno de modo abrangente."
    },
    {
     "type": "mc",
     "stem": "Entre as finalidades da Criminologia, é correto apontar:",
     "options": [
      "a criação de tipos penais e a cominação de penas",
      "a explicação do fenômeno criminal e a oferta de subsídios à prevenção da criminalidade",
      "o julgamento dos acusados e a fixação da pena no caso concreto",
      "a execução da pena privativa de liberdade"
     ],
     "correctIndex": 1,
     "explanation": "A Criminologia busca conhecer e explicar o crime e seus fatores, fornecendo informações úteis à prevenção e ao controle da criminalidade; criar tipos penais e julgar são tarefas do legislador e do Judiciário."
    }
   ]
  },
  {
   "key": "fatores condicionantes e desencadeantes da criminalidade",
   "title": "Fatores condicionantes e desencadeantes da criminalidade",
   "questions": [
    {
     "type": "mc",
     "stem": "No estudo dos fatores da criminalidade, os chamados fatores sociais abrangem, entre outros:",
     "options": [
      "a carga genética e a herança biológica do indivíduo",
      "a pobreza, o desemprego, a migração e as condições de moradia",
      "exclusivamente traços de personalidade e doenças mentais",
      "apenas a idade e o sexo do agente"
     ],
     "correctIndex": 1,
     "explanation": "Fatores sociais referem-se a condições do meio e da estrutura social, como pobreza, desemprego, migração e urbanização, distintos dos fatores individuais ou biológicos."
    },
    {
     "type": "mc",
     "stem": "A Criminologia reconhece que a criminalidade é um fenômeno:",
     "options": [
      "determinado por uma única causa isolada",
      "multifatorial, resultante da interação de diversos fatores",
      "de origem exclusivamente econômica",
      "totalmente independente do contexto social"
     ],
     "correctIndex": 1,
     "explanation": "Prevalece a compreensão multifatorial da criminalidade: diversos fatores (sociais, individuais, ambientais) interagem, afastando explicações de causa única."
    },
    {
     "type": "mc",
     "stem": "Sobre a relação entre fatores econômicos e criminalidade, é correto afirmar que:",
     "options": [
      "a pobreza é a causa única e determinante de todo crime",
      "fatores como desemprego e pobreza são condicionantes que podem influenciar a criminalidade, sem a determinarem isoladamente",
      "não há qualquer relação entre condições econômicas e delito",
      "somente pessoas pobres praticam crimes"
     ],
     "correctIndex": 1,
     "explanation": "Condições econômicas atuam como fatores condicionantes que podem favorecer a criminalidade, mas não a determinam sozinhas, pois o fenômeno é multifatorial e há crimes em todas as classes."
    },
    {
     "type": "mc",
     "stem": "Quanto à influência dos meios de comunicação na criminalidade, a Criminologia costuma destacar que:",
     "options": [
      "eles jamais interferem na conduta ou na sensação de insegurança",
      "podem influenciar comportamentos e a percepção social do crime, atuando como um dos fatores do fenômeno",
      "são a causa biológica direta da delinquência",
      "substituem a família e a escola como únicos agentes formadores"
     ],
     "correctIndex": 1,
     "explanation": "Os meios de comunicação são apontados como fator que pode influenciar comportamentos e a percepção pública sobre a criminalidade, sem serem causa exclusiva do delito."
    },
    {
     "type": "mc",
     "stem": "A distinção entre fatores condicionantes e fatores desencadeantes da criminalidade indica que:",
     "options": [
      "ambos têm exatamente o mesmo significado e efeito",
      "os condicionantes predispõem ou favorecem, enquanto os desencadeantes atuam como o estímulo imediato do ato",
      "apenas os desencadeantes têm relevância criminológica",
      "os condicionantes só existem em crimes dolosos"
     ],
     "correctIndex": 1,
     "explanation": "Fatores condicionantes predispõem ou criam terreno favorável à conduta criminosa; os desencadeantes funcionam como o fator imediato que precipita a prática do delito."
    }
   ]
  },
  {
   "key": "vitimologia",
   "title": "Vitimologia",
   "questions": [
    {
     "type": "mc",
     "stem": "São apontados como precursores do estudo científico da vítima (Vitimologia):",
     "options": [
      "Cesare Lombroso e Enrico Ferri",
      "Benjamin Mendelsohn e Hans von Hentig",
      "Edwin Sutherland e Robert Merton",
      "Émile Durkheim e Max Weber"
     ],
     "correctIndex": 1,
     "explanation": "Benjamin Mendelsohn e Hans von Hentig são tradicionalmente reconhecidos como os principais precursores da Vitimologia, dedicando-se ao estudo da vítima e sua relação com o delito."
    },
    {
     "type": "mc",
     "stem": "A denominada vitimização secundária refere-se:",
     "options": [
      "ao dano sofrido diretamente pela ação do autor do crime",
      "ao sofrimento adicional causado à vítima pela atuação das instâncias formais de controle (polícia, Judiciário, etc.)",
      "ao abandono da vítima pela comunidade e pelo seu meio social",
      "à ausência total de qualquer dano à vítima"
     ],
     "correctIndex": 1,
     "explanation": "A vitimização secundária decorre do contato da vítima com o sistema de justiça e demais instâncias formais, que podem lhe causar novos sofrimentos; a primária é o dano do próprio crime e a terciária advém do meio social."
    },
    {
     "type": "mc",
     "stem": "A expressão cifra negra (ou cifra oculta) da criminalidade designa:",
     "options": [
      "o conjunto de crimes efetivamente registrados pelas estatísticas oficiais",
      "a quantidade de crimes que não chegam ao conhecimento oficial e não figuram nas estatísticas",
      "o número de condenações transitadas em julgado",
      "a totalidade de crimes dolosos contra a vida"
     ],
     "correctIndex": 1,
     "explanation": "A cifra negra corresponde ao volume de delitos praticados mas que não são comunicados ou registrados pelos órgãos oficiais, permanecendo fora das estatísticas da criminalidade."
    },
    {
     "type": "mc",
     "stem": "A vitimização primária pode ser definida como:",
     "options": [
      "o dano causado à vítima diretamente pela prática do crime",
      "o novo dano gerado pela resposta do sistema penal à vítima",
      "a estigmatização da vítima por parte de sua comunidade",
      "a inexistência de dano decorrente do delito"
     ],
     "correctIndex": 0,
     "explanation": "A vitimização primária é o dano (físico, psíquico ou material) sofrido pela vítima em razão direta da conduta criminosa. As demais hipóteses descrevem a vitimização secundária e a terciária."
    },
    {
     "type": "mc",
     "stem": "O primeiro Simpósio Internacional de Vitimologia foi realizado em:",
     "options": [
      "Roma, 1960",
      "Jerusalém, 1973",
      "Paris, 1980",
      "São Paulo, 1990"
     ],
     "correctIndex": 1,
     "explanation": "O 1º Simpósio Internacional de Vitimologia ocorreu em Jerusalém, em 1973, marco de consolidação do estudo científico da vítima."
    }
   ]
  },
  {
   "key": "prevencao do delito",
   "title": "Prevenção do delito",
   "questions": [
    {
     "type": "mc",
     "stem": "A prevenção primária do delito dirige-se:",
     "options": [
      "aos indivíduos já condenados, buscando evitar a reincidência",
      "às causas ou raízes do conflito criminal, por meio de ações como educação, emprego e qualidade de vida",
      "a grupos específicos com maior risco de envolvimento com o crime",
      "exclusivamente ao reforço do policiamento ostensivo"
     ],
     "correctIndex": 1,
     "explanation": "A prevenção primária atua sobre as causas profundas da criminalidade, por meio de políticas sociais gerais (educação, saúde, trabalho), buscando neutralizar o problema na origem."
    },
    {
     "type": "mc",
     "stem": "A prevenção secundária caracteriza-se por:",
     "options": [
      "atuar sobre as raízes sociais gerais da criminalidade",
      "voltar-se a grupos ou setores sociais com maior risco de prática ou de ocorrência de crimes",
      "dirigir-se ao condenado para evitar a reincidência",
      "limitar-se à reparação do dano à vítima"
     ],
     "correctIndex": 1,
     "explanation": "A prevenção secundária é seletiva e dirige-se a grupos, locais ou setores que apresentam maior probabilidade de envolvimento com o crime, de forma mais próxima e concreta do que a primária."
    },
    {
     "type": "mc",
     "stem": "A prevenção terciária tem como destinatário:",
     "options": [
      "a população em geral",
      "os grupos sociais de risco",
      "o indivíduo que já delinquiu, visando evitar a reincidência",
      "as vítimas potenciais de crimes futuros"
     ],
     "correctIndex": 2,
     "explanation": "A prevenção terciária volta-se ao delinquente já condenado, buscando sua ressocialização e a prevenção da reincidência, atuando no âmbito da execução penal."
    },
    {
     "type": "mc",
     "stem": "A chamada prevenção situacional do delito busca essencialmente:",
     "options": [
      "modificar a personalidade do delinquente por meio de tratamento",
      "reduzir as oportunidades para a prática de crimes e aumentar o risco e o esforço para o agente",
      "aumentar o rigor das penas previstas em lei",
      "eliminar as causas sociais estruturais da criminalidade"
     ],
     "correctIndex": 1,
     "explanation": "A prevenção situacional atua sobre o ambiente e as oportunidades concretas do crime (dificultando a ação, aumentando o risco de detecção), em vez de incidir sobre as causas sociais ou sobre a personalidade do agente."
    },
    {
     "type": "mc",
     "stem": "Entre os modelos de reação ao delito, o modelo ressocializador caracteriza-se por:",
     "options": [
      "centrar-se na intimidação por meio da ameaça e da aplicação da pena",
      "priorizar a reintegração social do condenado durante o cumprimento da pena",
      "buscar a reparação do dano e a reconciliação entre autor e vítima",
      "defender a mera retribuição do mal causado pelo crime"
     ],
     "correctIndex": 1,
     "explanation": "O modelo ressocializador enfatiza a reintegração do condenado à sociedade. O dissuasório foca a intimidação e o restaurador prioriza a reparação e a reconciliação entre autor e vítima."
    }
   ]
  },
  {
   "key": "revisao e questoes",
   "title": "Revisão e questões",
   "questions": [
    {
     "type": "mc",
     "stem": "Assinale a alternativa que distingue corretamente Criminologia e Direito Penal:",
     "options": [
      "ambos são ciências normativas que interpretam a lei",
      "a Criminologia é empírica e estuda o crime como fato real, enquanto o Direito Penal é normativo e estuda o crime como fato jurídico",
      "o Direito Penal é empírico e a Criminologia é normativa",
      "não há qualquer distinção entre as duas disciplinas"
     ],
     "correctIndex": 1,
     "explanation": "A Criminologia é ciência empírica que estuda o crime como fenômeno real (fato social e individual), ao passo que o Direito Penal é ciência normativa que o estuda como fato jurídico definido em lei."
    },
    {
     "type": "mc",
     "stem": "A respeito das finalidades da pena, a prevenção geral negativa consiste em:",
     "options": [
      "reafirmar a validade da norma perante a sociedade",
      "intimidar a coletividade, pela ameaça da pena, para que não cometa crimes",
      "ressocializar o próprio condenado",
      "neutralizar o delinquente, impedindo-o de delinquir novamente"
     ],
     "correctIndex": 1,
     "explanation": "A prevenção geral negativa busca intimidar a generalidade das pessoas pela ameaça da sanção penal. A reafirmação da norma é a prevenção geral positiva; a ressocialização e a neutralização são formas de prevenção especial."
    },
    {
     "type": "mc",
     "stem": "A prevenção especial da pena dirige-se:",
     "options": [
      "à sociedade em geral, pela força intimidativa da norma",
      "ao próprio condenado, buscando evitar que volte a delinquir",
      "apenas à reparação do dano causado à vítima",
      "exclusivamente à retribuição do mal pelo mal"
     ],
     "correctIndex": 1,
     "explanation": "A prevenção especial atua sobre o indivíduo que delinquiu, visando evitar a reincidência, seja pela ressocialização (positiva), seja pela neutralização (negativa)."
    },
    {
     "type": "mc",
     "stem": "Sobre a vítima, é correto afirmar que, ao longo da evolução do sistema penal, ela:",
     "options": [
      "sempre ocupou posição central no processo penal",
      "foi, em grande medida, relegada a segundo plano (neutralização da vítima), tendência que a Vitimologia busca reverter",
      "nunca teve qualquer relevância para a Criminologia",
      "é hoje responsável pela aplicação da pena"
     ],
     "correctIndex": 1,
     "explanation": "Com a estatização da justiça penal, a vítima foi historicamente colocada em segundo plano; a Vitimologia busca resgatar sua importância no estudo e no tratamento do fenômeno criminal."
    },
    {
     "type": "mc",
     "stem": "O modelo restaurador (justiça restaurativa) de reação ao delito tem como característica central:",
     "options": [
      "a imposição da pena mais severa possível ao autor",
      "a busca da reparação do dano e da reconciliação entre autor, vítima e comunidade",
      "a mera intimidação da coletividade",
      "a exclusão definitiva do delinquente do convívio social"
     ],
     "correctIndex": 1,
     "explanation": "O modelo restaurador prioriza a reparação do dano à vítima e a restauração das relações entre autor, vítima e comunidade, em vez de centrar-se apenas na punição ou na intimidação."
    }
   ]
  }
 ]
};
