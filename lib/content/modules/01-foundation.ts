import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 1 — Fundamentos                                             */
/*  Source sections 1, 2, 3                                            */
/* ------------------------------------------------------------------ */

export const foundationModule: Module = {
  id: "foundation",
  title: "How English Works",
  titlePt: "Fundamentos",
  description:
    "A mecânica por trás de tudo: ordem das palavras, sujeito obrigatório e auxiliares. Sem isso, o resto não gruda.",
  icon: "foundation",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "f-five-facts",
      number: "1.1",
      title: "The Five Facts",
      titlePt: "Os cinco fatos que explicam tudo",
      priority: "essential",
      summary:
        "Cinco diferenças estruturais entre português e inglês explicam a maior parte da dificuldade. Comece por aqui.",
      tags: [
        "ordem das palavras",
        "sujeito",
        "auxiliares",
        "word order",
        "dummy subject",
        "it",
        "there is",
      ],
      blocks: [
        {
          kind: "text",
          text: "Antes de qualquer regra de gramática, entenda o **formato** do inglês. Cinco fatos explicam quase toda a dificuldade que um falante de português tem.",
        },
        {
          kind: "heading",
          text: "Fato 1 — A ordem das palavras carrega o significado",
        },
        {
          kind: "text",
          text: "O português tem terminações verbais ricas e ordem flexível. O inglês quase não tem terminações, então **posição = significado**.",
        },
        {
          kind: "examples",
          items: [
            { marker: "neutral", text: "The dog bit the man.", note: "O cachorro mordeu o homem." },
            { marker: "neutral", text: "The man bit the dog.", note: "Frase diferente. Mesmas palavras." },
          ],
        },
        {
          kind: "text",
          text: 'Em português você diz *\u201cComprei um carro ontem\u201d*, *\u201cOntem comprei um carro\u201d*, *\u201cUm carro, comprei ontem\u201d* — tudo funciona. Em inglês, mover o objeto normalmente quebra a frase.',
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "A car I bought yesterday.", note: "só em poesia ou contraste forte" },
            { marker: "good", text: "I bought a car yesterday." },
          ],
        },
        {
          kind: "pattern",
          title: "A ordem padrão é quase sagrada",
          lines: ["SUBJECT + VERB + OBJECT + (MANNER) + (PLACE) + (TIME)"],
          caption: "Sujeito, verbo, objeto, modo, lugar, tempo.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I sent the report quickly to the client this morning." },
            { marker: "good", text: "She fixed the bug carefully on the server last night." },
          ],
        },
        {
          kind: "heading",
          text: "Fato 2 — O sujeito é quase sempre obrigatório",
        },
        {
          kind: "text",
          text: 'O português omite o sujeito o tempo todo (*\u201cEstá chovendo\u201d*, *\u201cFui ao mercado\u201d*). O inglês não pode.',
        },
        {
          kind: "table",
          headers: ["Português", "❌ Literal", "✅ Inglês"],
          rows: [
            ["Está chovendo.", "Is raining.", "**It** is raining."],
            ["Fui ao mercado.", "Went to the market.", "**I** went to the market."],
            ["É importante.", "Is important.", "**It**'s important."],
            ["Tem muita gente aqui.", "Have a lot of people here.", "**There are** a lot of people here."],
            ["Dizem que…", "Say that…", "**They** say that… / **It is said** that…"],
          ],
        },
        {
          kind: "text",
          text: "O inglês chega a **inventar** sujeitos quando não existe um de verdade: `it` e `there`. São os *dummy subjects*, e você vai precisar deles o tempo todo.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's cold. / It's 5 o'clock. / It seems fine." },
            { marker: "good", text: "There's a problem. / There were three people." },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "O erro estrutural nº 1",
          text: "Confundir *ter* com *haver/existir*. O português usa *tem* para os dois; o inglês não.",
        },
        {
          kind: "translation",
          pt: "Tem um problema no servidor.",
          wrong: "Have a problem in the server.",
          right: ["There's a problem with the server."],
        },
        {
          kind: "heading",
          text: "Fato 3 — O inglês é construído sobre verbos auxiliares",
        },
        {
          kind: "text",
          text: "Para fazer pergunta ou negativa, o inglês não muda a entonação como o português. Ele **adiciona um auxiliar** — um verbo ajudante com pouco significado próprio.",
        },
        {
          kind: "pattern",
          lines: [
            "Statement:  You    work    here.",
            "Question:   Do     you     work here?",
            "Negative:   You    don't   work here.",
          ],
        },
        {
          kind: "rule",
          title: "Se já existe um auxiliar na frase, não adicione `do`.",
          text: "Você reutiliza o que já está lá.",
        },
        {
          kind: "table",
          title: "A tabela mais lucrativa da gramática inglesa",
          headers: ["Afirmativa", "Pergunta", "Negativa"],
          rows: [
            ["She **is** working.", "**Is** she working?", "She **isn't** working."],
            ["They **have** finished.", "**Have** they finished?", "They **haven't** finished."],
            ["He **will** call.", "**Will** he call?", "He **won't** call."],
            ["You **can** help.", "**Can** you help?", "You **can't** help."],
            ["It **works**. *(sem auxiliar)*", "**Does** it work?", "It **doesn't** work."],
            ["It **worked**. *(sem auxiliar)*", "**Did** it work?", "It **didn't** work."],
          ],
        },
        {
          kind: "heading",
          text: "Fato 4 — O auxiliar carrega o tempo, não o verbo principal",
        },
        {
          kind: "text",
          text: "Quando você adiciona `do/does/did`, o **verbo principal volta à forma base**. Falantes de português marcam o tempo duas vezes.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Did you went to the meeting?" },
            { marker: "good", text: "Did you go to the meeting?" },
            { marker: "bad", text: "She doesn't works here." },
            { marker: "good", text: "She doesn't work here." },
            { marker: "bad", text: "Where did he bought it?" },
            { marker: "good", text: "Where did he buy it?" },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          text: "Pense assim: **o tempo verbal foi gasto pelo auxiliar**. Só um verbo da frase tem direito de ser marcado.",
        },
        {
          kind: "heading",
          text: "Fato 5 — O inglês separa *o que* você diz de *como* você diz",
        },
        {
          kind: "text",
          text: "A mesma ideia tem versão neutra, educada e casual. Escolher errado não quebra a gramática — quebra a situação social.",
        },
        {
          kind: "table",
          headers: ["Situação", "Versão"],
          rows: [
            ["Direto/neutro", "Send me the file."],
            ["Pedido educado", "Could you send me the file?"],
            ["Muito educado", "Would you mind sending me the file?"],
            ["Casual 🗣️", "Can you shoot me that file?"],
            ["Formal ✍️", "Please find the file attached."],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "O português usa tom de voz e *por favor*. O inglês usa **estruturas gramaticais** (modais, perguntas, formas no passado) para sinalizar educação. Um imperativo num e-mail soa muito mais ríspido em inglês do que *\u201cMe manda o arquivo\u201d* soa em português.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Falta o sujeito. Conserte a frase.",
          wrong: "Is raining, so we cancelled the game.",
          answers: [
            "It's raining, so we cancelled the game.",
            "It is raining, so we cancelled the game.",
          ],
          explanation:
            "O inglês exige sujeito. Para clima, hora e distância, o sujeito é o `it` vazio: [[It's raining.]]",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Tem três tickets abertos.",
          answers: [
            "There are three open tickets.",
            "There are 3 open tickets.",
          ],
          explanation:
            "*Ter* de existência vira `there is / there are`, nunca `have`. Plural → `there are`.",
          hint: "Não comece com `Have`.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Qual frase está correta?",
          options: [
            "Where did he bought the laptop?",
            "Where did he buy the laptop?",
            "Where he bought the laptop?",
            "Where did he buys the laptop?",
          ],
          answer: 1,
          explanation:
            "`did` já carrega o passado, então o verbo principal volta à forma base: `buy`. Fato 4.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "order",
          prompt: "Monte a frase na ordem natural (SVO + modo + lugar + tempo).",
          tokens: ["I", "sent", "the report", "quickly", "to the client", "this morning"],
          answers: [
            ["I", "sent", "the report", "quickly", "to the client", "this morning"],
          ],
          explanation:
            "SUBJECT + VERB + OBJECT + MANNER + PLACE + TIME. O tempo vai no fim, não no começo.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "They haven't finished the migration yet.",
          natural: true,
          explanation:
            "Já existe o auxiliar `have`, então a negativa se forma nele: `haven't`. Nada de `do` aqui.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "She doesn't works on Fridays.",
          natural: false,
          correction: "She doesn't work on Fridays.",
          explanation:
            "`doesn't` já marca a terceira pessoa. O verbo principal fica na base: `work`.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete com o auxiliar certo.",
          sentence: "___ you seen this error before?",
          answers: [["Have"]],
          explanation:
            "`seen` é particípio, então o auxiliar é `have`. [[Have you seen this error before?]]",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "categorize",
          prompt: "Classifique cada pedido pelo nível de formalidade.",
          buckets: ["Neutro / seguro", "Muito educado", "Casual"],
          items: [
            { text: "Could you send me the file?", bucket: "Neutro / seguro" },
            { text: "Would you mind sending me the file?", bucket: "Muito educado" },
            { text: "Can you shoot me that file?", bucket: "Casual" },
            { text: "Let me know.", bucket: "Neutro / seguro" },
            { text: "Lemme know.", bucket: "Casual" },
          ],
          explanation:
            "Em inglês profissional, a coluna **neutra** é quase sempre a escolha certa. Formal demais soa como carta de 1950.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fix",
          prompt: "Corrija o uso de *ter*.",
          wrong: "Have a lot of people waiting outside.",
          answers: [
            "There are a lot of people waiting outside.",
            "There's a lot of people waiting outside.",
          ],
          explanation:
            "*Tem* no sentido de existir → `there is / there are`. `have` é só posse.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Onde você mora?",
          answers: ["Where do you live?"],
          explanation:
            "Pergunta com verbo normal precisa de `do`. Manter a ordem da afirmativa (*Where you live?*) é o erro mais comum de brasileiros.",
          difficulty: 1,
        },
        {
          id: "e11",
          kind: "choice",
          prompt: "Qual é a tradução natural de *Dizem que ele vai sair da empresa*?",
          options: [
            "Say that he will leave the company.",
            "They say he's leaving the company.",
            "Is said that he will leave the company.",
            "Have said that he leaves the company.",
          ],
          answer: 1,
          explanation:
            "Sem sujeito real, o inglês usa `they` genérico (ou `It is said that…` em registro formal).",
          difficulty: 2,
        },
        {
          id: "e12",
          kind: "match",
          prompt: "Ligue cada expressão portuguesa ao equivalente estrutural em inglês.",
          pairs: [
            { left: "Está frio.", right: "It's cold." },
            { left: "Tem um problema.", right: "There's a problem." },
            { left: "São duas horas de carro.", right: "It's two hours by car." },
            { left: "Havia três pessoas.", right: "There were three people." },
          ],
          explanation:
            "`it` para clima/tempo/distância. `there` para existência. Nunca deixe a frase sem sujeito.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "f-sentence-shapes",
      number: "1.2",
      title: "Sentence Shapes",
      titlePt: "Os formatos de frase",
      priority: "essential",
      summary:
        "Cinco padrões cobrem quase todas as frases do inglês. Aprenda os moldes e encaixe vocabulário.",
      tags: ["estrutura", "svo", "there is", "there are", "sentence patterns"],
      blocks: [
        {
          kind: "text",
          text: "Cinco moldes cobrem a esmagadora maioria das frases em inglês. Decorar os moldes é mais útil do que decorar regras.",
        },
        {
          kind: "pattern",
          title: "Padrão 1 — Sujeito + Verbo",
          lines: ["S + V"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The server crashed." },
            { marker: "good", text: "She left." },
            { marker: "good", text: "It works." },
          ],
        },
        {
          kind: "pattern",
          title: "Padrão 2 — Sujeito + Verbo + Objeto",
          lines: ["S + V + O"],
          caption: "O padrão mais comum da língua.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I use Linux." },
            { marker: "good", text: "We finished the sprint." },
            { marker: "good", text: "They hired two developers." },
          ],
        },
        {
          kind: "pattern",
          title: "Padrão 3 — Sujeito + `be` + Complemento",
          lines: ["S + be + adjective / noun"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The API is slow." },
            { marker: "good", text: "She is a designer." },
            { marker: "good", text: "This is important." },
          ],
        },
        {
          kind: "pattern",
          title: "Padrão 4 — Dois objetos",
          lines: ["S + V + person + thing", "S + V + thing + to/for + person"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I sent him the report.", note: "= I sent the report to him." },
            { marker: "good", text: "She bought me a coffee.", note: "= She bought a coffee for me." },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Cuidado",
          text: "Quando o objeto direto é pronome, use a versão com `to/for`: ❌ [[Send me it.]] → ✅ [[Send it to me.]]",
        },
        {
          kind: "pattern",
          title: "Padrão 5 — Objeto + Complemento",
          lines: ["S + V + O + adjective/noun"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "That makes it easier." },
            { marker: "good", text: 'We call this approach "lazy loading".' },
            { marker: "good", text: "Keep the door open." },
          ],
        },
        { kind: "heading", text: "There is / There are" },
        {
          kind: "pattern",
          lines: [
            "There is  + singular / uncountable",
            "There are + plural",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "There's a bug in production." },
            { marker: "good", text: "There are three open tickets." },
            { marker: "good", text: "There isn't enough time." },
            { marker: "good", text: "Is there any coffee left?" },
            { marker: "good", text: "There used to be a meeting on Fridays." },
            { marker: "good", text: "There's going to be a delay." },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "🗣️ Na fala rápida as pessoas dizem [[There's three people here]] — tecnicamente errado, extremamente comum. Reconheça na escuta; escreva `there are`.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com `There is` ou `There are`.",
          sentence: "___ two things I want to discuss.",
          answers: [["There are"]],
          explanation: "`two things` é plural → `There are`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija a ordem dos objetos.",
          wrong: "Send me it as soon as possible.",
          answers: [
            "Send it to me as soon as possible.",
            "Send it to me ASAP.",
          ],
          explanation:
            "Com objeto direto pronominal (`it`), o inglês exige a versão com `to`: [[Send it to me.]]",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["We", "call", "this pattern", "dependency injection"],
          answers: [["We", "call", "this pattern", "dependency injection"]],
          explanation: "Padrão 5: S + V + O + complemento.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Escolha a versão natural.",
          options: [
            "Have not enough time.",
            "There isn't enough time.",
            "It hasn't enough time.",
            "Is not enough time.",
          ],
          answer: 1,
          explanation:
            "Existência negativa → `There isn't`. `time` é incontável, por isso `is` e não `are`.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "She bought me a coffee.",
          natural: true,
          explanation:
            "Padrão 4 com pessoa antes da coisa. Equivalente: [[She bought a coffee for me.]]",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Isso deixa tudo mais fácil.",
          answers: [
            "That makes everything easier.",
            "That makes it easier.",
            "This makes everything easier.",
          ],
          explanation:
            "`make + objeto + adjetivo` é um molde altíssima frequência: [[make it easier]], [[make it clear]], [[make it work]].",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete os dois espaços.",
          sentence: "___ a delay, and ___ two tickets about it.",
          answers: [["There's", "There is"], ["there are"]],
          explanation:
            "Singular → `There's`. Plural → `there are`. Concordância com o que vem *depois*.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "categorize",
          prompt: "Cada frase segue qual padrão?",
          buckets: ["S + V", "S + V + O", "S + be + complemento"],
          items: [
            { text: "The server crashed.", bucket: "S + V" },
            { text: "We finished the sprint.", bucket: "S + V + O" },
            { text: "The API is slow.", bucket: "S + be + complemento" },
            { text: "She left.", bucket: "S + V" },
            { text: "She is a designer.", bucket: "S + be + complemento" },
          ],
          explanation:
            "Reconhecer o molde acelera a construção de frases — você para de traduzir palavra por palavra.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "f-auxiliaries",
      number: "1.5",
      title: "The Four Workhorses",
      titlePt: "do, be, have, will",
      priority: "essential",
      summary:
        "Quatro auxiliares fazem perguntas, negativas, ênfase e respostas curtas. Domine-os e metade da gramática se resolve.",
      tags: ["auxiliares", "do", "does", "did", "be", "have", "will", "auxiliary"],
      blocks: [
        {
          kind: "heading",
          text: "`do / does / did`",
        },
        {
          kind: "text",
          text: "Usado em perguntas e negativas com **todos os verbos normais** (qualquer verbo exceto `be` e os modais).",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Do you like it?" },
            { marker: "good", text: "He doesn't like it." },
            { marker: "good", text: "Did they like it?" },
          ],
        },
        {
          kind: "text",
          text: "Também serve para **ênfase** — recurso muito útil e pouco usado por aprendizes.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I do understand your point.", note: "= eu entendo mesmo" },
            { marker: "good", text: "She did send the email — check your spam." },
            { marker: "spoken", text: "I did tell you." },
          ],
        },
        {
          kind: "text",
          text: "E para **respostas curtas e ecos**:",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: '"Do you work here?" — "Yes, I do."' },
            { marker: "good", text: '"I love this tool." — "Do you?"', note: "= sério?" },
            { marker: "good", text: '"I don\'t like it." — "Neither do I."' },
          ],
        },
        { kind: "heading", text: "`be`" },
        {
          kind: "list",
          title: "Três funções",
          ordered: true,
          items: [
            "**Verbo de ligação:** [[She is a lawyer.]] [[It is cold.]]",
            "**Tempos contínuos:** [[They are working.]] [[He was sleeping.]]",
            "**Voz passiva:** [[The file was deleted.]]",
          ],
        },
        {
          kind: "text",
          text: "Formas: *am / is / are / was / were / been / being*.",
        },
        {
          kind: "callout",
          tone: "br",
          title: "estar com + substantivo → be + adjetivo",
          text: "O português tem *ser* e *estar*; o inglês tem só `be`. Isso é mais fácil. O problema é o inverso: *estar com* + substantivo vira `be` + **adjetivo**.",
        },
        {
          kind: "table",
          headers: ["Português", "❌", "✅"],
          rows: [
            ["Estou com fome", "I have hunger", "I'**m hungry**"],
            ["Estou com frio", "I have cold", "I'**m cold**"],
            ["Estou com medo", "I have fear", "I'**m scared / afraid**"],
            ["Tenho 30 anos", "I have 30 years", "I'**m 30 (years old)**"],
            ["Estou com sono", "I have sleep", "I'**m sleepy / tired**"],
            ["Você tem razão", "You have reason", "You'**re right**"],
            ["Estou com pressa", "I'm with hurry", "I'**m in a hurry**"],
          ],
        },
        { kind: "heading", text: "`have`" },
        {
          kind: "text",
          text: "Dois trabalhos diferentes — não confunda:",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Verbo principal (possuir):** [[I have a car.]] → pergunta: [[Do you have a car?]]",
            "**Auxiliar (tempos perfeitos):** [[I have finished.]] → pergunta: [[Have you finished?]]",
          ],
        },
        {
          kind: "pattern",
          lines: [
            'Do you have time?      ← "have" = possuir → precisa de "do"',
            'Have you had lunch?    ← 1º have = auxiliar, 2º = principal',
          ],
        },
        { kind: "heading", text: "`will`" },
        {
          kind: "text",
          text: "Marca futuro e decisões tomadas no momento da fala. Nunca muda de forma; o verbo depois dele fica sempre na base.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I will call you. / I'll call you." },
            { marker: "bad", text: "I will to call you." },
            { marker: "bad", text: "He will calls." },
          ],
        },
        { kind: "heading", text: "Respostas curtas" },
        {
          kind: "text",
          text: 'O inglês **não** responde repetindo o verbo como o português (*\u201cVocê vai?\u201d — \u201cVou.\u201d*). Ele repete o **auxiliar**.',
        },
        {
          kind: "table",
          headers: ["Pergunta", "Yes", "No"],
          rows: [
            ["Do you work here?", "Yes, I do.", "No, I don't."],
            ["Did she call?", "Yes, she did.", "No, she didn't."],
            ["Are you coming?", "Yes, I am.", "No, I'm not."],
            ["Have you eaten?", "Yes, I have.", "No, I haven't."],
            ["Can you help?", "Yes, I can.", "No, I can't."],
            ["Will you be there?", "Yes, I will.", "No, I won't."],
            ["Would you like coffee?", "Yes, please.", "No, thanks."],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: '❌ *"Do you like it?" — "Yes, I like."* → ✅ *"Yes, I **do**."* (ou simplesmente *"Yes."* / *"Yeah, I love it."*)',
        },
        {
          kind: "pairs",
          title: "Estruturas irmãs de alta frequência",
          items: [
            { term: "Concordar (positivo)", meaning: '"I\'m tired." — "**So am I.**" 🗣️ "Me too."' },
            { term: "Concordar (negativo)", meaning: '"I don\'t like it." — "**Neither do I.**" 🗣️ "Me neither."' },
            { term: "Tag question", meaning: "You're coming, **aren't you**? / He didn't call, **did he**?" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete a resposta curta.",
          sentence: '"Have you finished the report?" — "No, I ___."',
          answers: [["haven't", "have not"]],
          explanation:
            "A resposta repete o auxiliar da pergunta. `Have` → `haven't`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Yes, I like.",
          answers: ["Yes, I do."],
          explanation:
            "Resposta curta usa o auxiliar, não o verbo principal. Pergunta com `Do` → resposta com `do`.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Estou com fome.",
          answers: ["I'm hungry.", "I am hungry."],
          explanation:
            "*Estar com* + substantivo → `be` + **adjetivo**. Nunca [[I have hunger.]]",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Ela tem 32 anos.",
          answers: [
            "She's 32.",
            "She is 32.",
            "She's 32 years old.",
            "She is 32 years old.",
          ],
          explanation: "Idade usa `be`, não `have`: [[She's 32.]]",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual pergunta está correta?",
          sentence: "___ time to review this?",
          options: ["Have you", "Do you have", "Are you have", "Does you have"],
          answer: 1,
          explanation:
            "Aqui `have` é verbo principal (possuir) → precisa de `do`. [[Have you time?]] existe, mas é britânico e antiquado.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "fill",
          prompt: "Complete com o auxiliar de ênfase.",
          sentence: "I ___ understand your point — I just disagree.",
          answers: [["do"]],
          explanation:
            "`do` antes do verbo dá ênfase: *eu entendo sim*. Recurso muito natural e pouco usado por brasileiros.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "He will calls you tomorrow.",
          natural: false,
          correction: "He will call you tomorrow.",
          explanation: "Depois de `will`, verbo sempre na forma base. Sem `-s`, sem `to`.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue a pergunta à resposta curta correta.",
          pairs: [
            { left: "Are you coming?", right: "Yes, I am." },
            { left: "Did she call?", right: "Yes, she did." },
            { left: "Can you help?", right: "No, I can't." },
            { left: "Will you be there?", right: "No, I won't." },
          ],
          explanation: "Sempre o mesmo auxiliar da pergunta. Isso é uma regra mecânica.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fill",
          prompt: "Complete a concordância negativa.",
          sentence: '"I don\'t like meetings." — "___ do I."',
          answers: [["Neither"]],
          explanation:
            "Concordar com negativa: `Neither do I.` 🗣️ Informal: *Me neither.*",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a pergunta.",
          tokens: ["Have", "you", "had", "lunch", "yet"],
          answers: [["Have", "you", "had", "lunch", "yet"]],
          explanation:
            "Primeiro `have` = auxiliar, `had` = verbo principal. Os dois na mesma frase é normal.",
          difficulty: 2,
        },
        {
          id: "e11",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Você tem razão.",
          answers: ["You're right.", "You are right."],
          explanation:
            "*Ter razão* → `be right`. [[You have reason]] não existe em inglês.",
          difficulty: 1,
        },
        {
          id: "e12",
          kind: "fix",
          prompt: "Corrija a tag question.",
          wrong: "You're coming, isn't it?",
          answers: ["You're coming, aren't you?"],
          explanation:
            "A tag repete o auxiliar e o sujeito da frase: `You're` → `aren't you?`. `isn't it?` só serve para sujeito `it`.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "f-contractions",
      number: "1.7",
      title: "Contractions & Register",
      titlePt: "Contrações e nível de formalidade",
      priority: "essential",
      summary:
        "Contrações são inglês neutro, não gíria. Evitá-las te faz soar duro. E o inglês profissional é mais casual do que você imagina.",
      tags: ["contrações", "its", "it's", "formal", "informal", "register", "email"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Contrações são **inglês normal e neutro** — não gíria. Nativos usam constantemente na fala e na maior parte da escrita, inclusive e-mail corporativo. Evitá-las faz você soar rígido ou irritado.",
        },
        {
          kind: "table",
          headers: ["Completo", "Contração", "Nota"],
          rows: [
            ["I am", "I'm", ""],
            ["you are / we are / they are", "you're / we're / they're", ""],
            ["he is / she is / it is", "he's / she's / it's", "também = *he has* etc."],
            ["I have / you have", "I've / you've", ""],
            ["I had / I would", "I'd", "o contexto decide"],
            ["do not / does not / did not", "don't / doesn't / didn't", ""],
            ["cannot", "can't", ""],
            ["will not", "**won't**", "irregular — decore"],
            ["would not / should not", "wouldn't / shouldn't", ""],
            ["is not / are not", "isn't / aren't", ""],
            ["have not / has not", "haven't / hasn't", ""],
            ["there is / let us", "there's / let's", ""],
          ],
        },
        { kind: "heading", text: "Duas armadilhas" },
        {
          kind: "rule",
          title: "`it's` = *it is / it has*. `its` = possessivo.",
          text: "O apóstrofo **nunca** significa posse em `its`.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's raining." },
            { marker: "good", text: "The company lost its data." },
            { marker: "bad", text: "The company lost it's data." },
          ],
        },
        {
          kind: "text",
          text: "`'s` pode ser *is*, *has* ou posse: [[He's late]] (is), [[He's left]] (has), [[John's car]] (posse). O contexto resolve.",
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Quando NÃO contrair",
          text: "Documentos muito formais, texto jurídico e — importante — **no fim de uma resposta curta afirmativa**.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: '"Are you ready?" — "Yes, I\'m."' },
            { marker: "good", text: '"Are you ready?" — "Yes, I am."' },
            { marker: "good", text: '"No, I\'m not."', note: "contração negativa no fim é OK" },
          ],
        },
        { kind: "heading", text: "Formal × neutro × informal" },
        {
          kind: "text",
          text: "A maioria dos aprendizes superestima o quanto o inglês é formal. O inglês de negócios nos EUA e no Reino Unido é **bem mais casual** que o português corporativo.",
        },
        {
          kind: "table",
          headers: ["Ideia", "Formal ✍️", "Neutro (seguro)", "Informal 🗣️"],
          rows: [
            ["Pedir", "I would like to request…", "Could you…?", "Can you…?"],
            ["Desculpar", "I apologize for the inconvenience.", "Sorry about that.", "My bad."],
            ["Agradecer", "Thank you for your assistance.", "Thanks a lot.", "Thanks! / Cheers 🇬🇧"],
            ["Pedir retorno", "Please advise.", "Let me know.", "Lemme know."],
            ["Abrir e-mail", "Dear Mr. Silva,", "Hi John,", "Hey!"],
            ["Fechar e-mail", "Kind regards,", "Best, / Thanks,", "Cheers,"],
            ["Recusar", "I'm afraid that won't be possible.", "Sorry, I can't.", "No way."],
            ["Explicar", "Due to the fact that…", "Because…", "'Cause…"],
            ["Palavras difíceis", "commence, utilize, purchase, assist", "start, use, buy, help", "—"],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Regra prática",
          text: "Em inglês profissional, prefira a coluna **neutra**. Inglês formal escrito por não-nativo costuma soar como carta dos anos 1950. *\u201cPlease find attached herewith\u201d* não é melhor que *\u201cHere's the file.\u201d*",
        },
        {
          kind: "compare",
          left: {
            title: "Sinais de informal",
            tone: "neutral",
            items: [
              "contrações",
              "phrasal verbs",
              "`get`",
              "frases curtas",
              "gonna / wanna",
              "começar com *And / But / So*",
            ],
          },
          right: {
            title: "Sinais de formal",
            tone: "neutral",
            items: [
              "formas completas",
              "verbos de origem latina (*receive, obtain, require*)",
              "voz passiva",
              "sem phrasal verbs",
              "`whom`",
              "frases longas",
            ],
          },
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "The company lost ___ biggest client last year.",
          options: ["it's", "its", "its'", "it is"],
          answer: 1,
          explanation:
            "Possessivo de `it` é `its`, sem apóstrofo. `it's` sempre significa *it is* ou *it has*.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija a resposta curta.",
          wrong: "Yes, I'm.",
          answers: ["Yes, I am."],
          explanation:
            "Não se contrai no fim de resposta curta afirmativa. Negativa pode: [[No, I'm not.]]",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Contraia a forma negativa de *will not*.",
          sentence: "I ___ be late again.",
          answers: [["won't", "will not"]],
          explanation: "`will not` → `won't`. É irregular, precisa ser decorado.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "categorize",
          prompt: "Classifique cada expressão pelo registro.",
          buckets: ["Formal", "Neutro", "Informal"],
          items: [
            { text: "I apologize for the inconvenience.", bucket: "Formal" },
            { text: "Sorry about that.", bucket: "Neutro" },
            { text: "My bad.", bucket: "Informal" },
            { text: "Please advise.", bucket: "Formal" },
            { text: "Let me know.", bucket: "Neutro" },
            { text: "Lemme know.", bucket: "Informal" },
          ],
          explanation:
            "A coluna neutra funciona em 95% das situações profissionais. Quando na dúvida, use ela.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso soa bem num e-mail de trabalho?",
          sentence: "Please find attached herewith the requested documentation.",
          natural: false,
          correction: "Here's the documentation you asked for.",
          explanation:
            "Gramaticalmente correto, mas soa arcaico. Inglês corporativo moderno é direto e usa contrações.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "translate",
          prompt: "Escreva um pedido educado e neutro para:",
          pt: "Você pode revisar isso até sexta?",
          answers: [
            "Could you review this by Friday?",
            "Can you review this by Friday?",
            "Could you take a look at this by Friday?",
          ],
          explanation:
            "`Could you…?` é o pedido padrão seguro. Note `by Friday` (até sexta), não `until Friday`.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "match",
          prompt: "Ligue a palavra formal ao equivalente neutro.",
          pairs: [
            { left: "commence", right: "start" },
            { left: "utilize", right: "use" },
            { left: "purchase", right: "buy" },
            { left: "assist", right: "help" },
          ],
          explanation:
            "Palavra curta de origem germânica quase sempre soa melhor que a latina longa. Isso vale até em contexto profissional.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com `it's` ou `its`.",
          sentence: "___ a great tool, but ___ documentation is terrible.",
          answers: [["It's", "It is"], ["its"]],
          explanation:
            "Primeiro é *it is* → `It's`. Segundo é posse → `its`. Teste: se você pode trocar por *it is*, leva apóstrofo.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "f-pronouns",
      number: "3",
      title: "Pronouns",
      titlePt: "Pronomes",
      priority: "essential",
      summary:
        "I × me, my × mine, e o `it` que o português não tem. Erros aqui são imediatamente audíveis.",
      tags: ["pronomes", "pronouns", "it", "mine", "myself", "this", "that", "anyone"],
      blocks: [
        {
          kind: "table",
          title: "O mapa completo",
          headers: ["Sujeito", "Objeto", "Adj. possessivo", "Pron. possessivo", "Reflexivo"],
          rows: [
            ["I", "me", "my", "mine", "myself"],
            ["you", "you", "your", "yours", "yourself / yourselves"],
            ["he", "him", "his", "his", "himself"],
            ["she", "her", "her", "hers", "herself"],
            ["it", "it", "its", "—", "itself"],
            ["we", "us", "our", "ours", "ourselves"],
            ["they", "them", "their", "theirs", "themselves"],
          ],
        },
        { kind: "heading", text: "Sujeito × objeto — `I` × `me`" },
        {
          kind: "rule",
          title: "Antes do verbo → sujeito. Depois do verbo ou de preposição → objeto.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "She called me." },
            { marker: "good", text: "Between you and me…", note: "depois de preposição" },
            { marker: "bad", text: "Me and my colleague finished the report." },
            { marker: "good", text: "My colleague and I finished the report." },
            { marker: "spoken", text: "Me and John went out.", note: "muito comum falando, evite escrevendo" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Teste rápido",
          text: "Tire a outra pessoa da frase. *\u201cMe finished the report\u201d* soa errado → então é [[I]]. *\u201cShe called I\u201d* soa errado → então é [[me]].",
        },
        { kind: "heading", text: "`it` — o pronome que o português não tem" },
        {
          kind: "text",
          text: "O português usa *ele/ela* para objetos, ou simplesmente omite. O inglês precisa de `it` — e precisa dele explicitamente.",
        },
        {
          kind: "table",
          headers: ["Português", "❌", "✅"],
          rows: [
            ["O livro é bom. Tem 300 páginas.", "The book is good. **She** has 300 pages.", "**It** has 300 pages."],
            ["Está chovendo.", "Is raining.", "**It**'s raining."],
            ["É difícil explicar.", "Is difficult to explain.", "**It**'s difficult to explain."],
            ["Gostei disso.", "I liked.", "I liked **it**."],
            ["Não sei.", "I don't know.", "I don't know. / I don't know **it**. *(depende)*"],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Objeto omitido",
          text: "Verbos transitivos em inglês exigem objeto. ❌ [[Did you finish?]] está OK, mas ❌ [[I liked.]] não. Diga [[I liked it.]]",
        },
        { kind: "heading", text: "`my` × `mine`" },
        {
          kind: "compare",
          left: {
            title: "Adjetivo possessivo",
            caption: "vem antes do substantivo",
            tone: "brand",
            items: ["my laptop", "your idea", "their team", "❌ the my phone"],
          },
          right: {
            title: "Pronome possessivo",
            caption: "substitui o substantivo",
            tone: "brand",
            items: ["That laptop is mine.", "Is this yours?", "a friend of mine", "❌ a friend of me"],
          },
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português diz *o meu carro*. O inglês **nunca** usa artigo antes do possessivo: ❌ [[the my car]] → ✅ [[my car]].",
        },
        { kind: "heading", text: "Reflexivos" },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I taught myself Python." },
            { marker: "good", text: "Help yourself.", note: "sirva-se" },
            { marker: "good", text: "The system restarts itself." },
            { marker: "good", text: "I did it myself.", note: "ênfase: eu mesmo" },
            { marker: "bad", text: "She hurt herself the hand." },
            { marker: "good", text: "She hurt her hand." },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Muitos verbos reflexivos em português **não** são reflexivos em inglês: *sentar-se* → [[sit down]], *levantar-se* → [[get up]], *chamar-se* → [[my name is]], *sentir-se* → [[feel]] (❌ [[I feel myself tired]]).",
        },
        { kind: "heading", text: "`this` × `that` × `these` × `those`" },
        {
          kind: "table",
          headers: ["", "Perto / agora", "Longe / antes"],
          rows: [
            ["Singular", "this", "that"],
            ["Plural", "these", "those"],
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "This is my laptop.", note: "aqui na minha mão" },
            { marker: "good", text: "That was a great meeting.", note: "já terminou" },
            { marker: "good", text: "These are the files you asked for." },
            { marker: "spoken", text: "This is Ana speaking.", note: "ao telefone" },
          ],
        },
        { kind: "heading", text: "some- / any- / no- / every-" },
        {
          kind: "rule",
          title: "`some-` em afirmativas e ofertas. `any-` em negativas e perguntas.",
        },
        {
          kind: "table",
          headers: ["", "pessoa", "coisa", "lugar"],
          rows: [
            ["some-", "someone / somebody", "something", "somewhere"],
            ["any-", "anyone / anybody", "anything", "anywhere"],
            ["no-", "no one / nobody", "nothing", "nowhere"],
            ["every-", "everyone / everybody", "everything", "everywhere"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Uma negativa por oração",
          text: "O português dobra a negativa (*não vi ninguém*). O inglês não. ❌ [[I didn't see nobody.]] → ✅ [[I didn't see anyone.]] ou ✅ [[I saw no one.]]",
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Todos os `-one/-body/-thing` são **singulares**: ✅ [[Everyone is ready.]] ❌ [[Everyone are ready.]]",
        },
        {
          kind: "text",
          text: "Exceções úteis: `some-` aparece em **ofertas e pedidos** ([[Would you like something to drink?]]) e `any-` em afirmativas com sentido de *qualquer* ([[Ask anyone — they'll tell you the same.]]).",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Me and my colleague finished the report.",
          answers: [
            "My colleague and I finished the report.",
            "My colleague and I finished the report",
          ],
          explanation:
            "Sujeito → `I`. E por convenção a outra pessoa vem primeiro. Teste: *Me finished* soa errado.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "This is a friend of me.",
          answers: ["This is a friend of mine."],
          explanation:
            "A estrutura fixa é `a friend of mine` — pronome possessivo, não pronome objeto.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "The book is very good. She has 300 pages.",
          answers: ["The book is very good. It has 300 pages."],
          explanation:
            "Coisas são `it` em inglês, independentemente do gênero em português.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija a dupla negativa.",
          wrong: "I didn't tell nothing to nobody.",
          answers: [
            "I didn't tell anything to anyone.",
            "I didn't tell anything to anybody.",
            "I told nothing to anyone.",
          ],
          explanation:
            "Uma negativa por oração. Verbo negativo + palavra com `any-`, ou verbo positivo + palavra com `no-`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Where is the my phone?",
          answers: ["Where is my phone?", "Where's my phone?"],
          explanation:
            "Nunca use artigo antes de possessivo. O português diz *o meu*; o inglês diz só `my`.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "fill",
          prompt: "Complete.",
          sentence: "Everyone ___ ready to start.",
          answers: [["is"]],
          explanation:
            "`everyone`, `everybody`, `someone`, `nobody` são gramaticalmente **singulares**.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "choice",
          prompt: "Escolha a opção correta.",
          sentence: "I couldn't find ___ in the logs.",
          options: ["nothing", "anything", "something", "everything"],
          answer: 1,
          explanation:
            "`couldn't` já é a negativa da oração, então usa-se `anything`. Duas negativas se cancelam em inglês.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eu aprendi Python sozinho.",
          answers: [
            "I taught myself Python.",
            "I learned Python by myself.",
            "I learnt Python by myself.",
            "I learned Python on my own.",
          ],
          explanation:
            "Duas construções naturais: [[teach myself X]] ou [[learn X by myself / on my own]].",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She hurt herself the hand.",
          answers: ["She hurt her hand."],
          explanation:
            "Em inglês, a parte do corpo leva possessivo e o reflexivo desaparece: [[her hand]].",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "match",
          prompt: "Ligue cada verbo reflexivo em português ao equivalente em inglês.",
          pairs: [
            { left: "sentar-se", right: "sit down" },
            { left: "levantar-se", right: "get up" },
            { left: "chamar-se", right: "my name is" },
            { left: "sentir-se", right: "feel" },
          ],
          explanation:
            "Reflexivo em português quase nunca vira reflexivo em inglês. ❌ [[I feel myself tired.]]",
          difficulty: 2,
        },
        {
          id: "e11",
          kind: "choice",
          prompt: "Numa oferta, qual é natural?",
          options: [
            "Would you like anything to drink?",
            "Would you like something to drink?",
            "Would you like nothing to drink?",
            "Do you like any to drink?",
          ],
          answer: 1,
          explanation:
            "Ofertas e pedidos usam `some-` mesmo sendo perguntas. É a exceção mais útil da regra.",
          difficulty: 3,
        },
        {
          id: "e12",
          kind: "categorize",
          prompt: "This, that, these ou those?",
          buckets: ["this / these (perto)", "that / those (longe)"],
          items: [
            { text: "This is my laptop.", bucket: "this / these (perto)" },
            { text: "That was a great meeting.", bucket: "that / those (longe)" },
            { text: "These are the files you asked for.", bucket: "this / these (perto)" },
            { text: "Those days were hard.", bucket: "that / those (longe)" },
          ],
          explanation:
            "Distância física ou temporal. Algo que já aconteceu é sempre `that`.",
          difficulty: 1,
        },
      ],
    },
  ],
};
