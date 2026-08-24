import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 5 — Palavras e Modificadores                                */
/*  Source sections 8, 9, 10, 11, 12, 13                               */
/* ------------------------------------------------------------------ */

export const wordsModule: Module = {
  id: "words",
  title: "Words & Modifiers",
  titlePt: "Palavras e Modificadores",
  description:
    "Artigos, contáveis, adjetivos, advérbios e preposições. É aqui que mora a maior parte dos erros que denunciam um falante de português.",
  icon: "words",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "w-articles",
      number: "8",
      title: "Articles",
      titlePt: "a, an, the — e o artigo zero",
      priority: "essential",
      summary:
        "Top-3 em erros de brasileiros. O português usa artigo onde o inglês não usa, e vice-versa.",
      tags: ["articles", "artigos", "a", "an", "the", "zero article", "the Brazil"],
      blocks: [
        {
          kind: "pattern",
          lines: [
            "a / an  \u2192 um de v\u00e1rios, primeira men\u00e7\u00e3o, contável singular",
            "the     \u2192 este espec\u00edfico, j\u00e1 mencionado, \u00fanico no contexto",
            "\u2205 (nada) \u2192 generaliza\u00e7\u00f5es, plurais gerais, incontáveis gerais",
          ],
        },
        {
          kind: "rule",
          title: "`a` antes de som de consoante, `an` antes de som de vogal.",
          text: "É o **som**, não a letra: [[an hour]], [[a university]], [[an MBA]], [[a European]].",
        },
        {
          kind: "heading",
          text: "O erro nº 1: `the` antes de generalização",
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português usa artigo para falar de coisas em geral (*a vida*, *as pessoas*, *a música*). O inglês usa **artigo zero**.",
        },
        {
          kind: "table",
          headers: ["Português", "❌", "✅"],
          rows: [
            ["Eu gosto de música.", "I like the music.", "I like **music**."],
            ["A vida é difícil.", "The life is hard.", "**Life** is hard."],
            ["As pessoas mudam.", "The people change.", "**People** change."],
            ["Os brasileiros são calorosos.", "The Brazilians are warm.", "**Brazilians** are warm."],
            ["Confiança leva tempo.", "The trust takes time.", "**Trust** takes time."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "Use `the` quando você **especifica**: ✅ [[I like the music in this bar.]] ✅ [[The people in my team are great.]]",
        },
        {
          kind: "heading",
          text: "Sem artigo — memorize como lista",
        },
        {
          kind: "table",
          headers: ["Categoria", "Exemplo"],
          rows: [
            ["Idiomas", "I speak **∅ Portuguese**."],
            ["Refeições", "We had **∅ lunch**."],
            ["Países e cidades", "∅ Brazil, ∅ Portugal, ∅ Lisbon, ∅ Japan"],
            ["Esportes e matérias", "I play **∅ football**. She studies **∅ economics**."],
            ["Dias, meses, feriados", "on ∅ Monday, in ∅ July, at ∅ Christmas"],
            ["`go to` + instituição", "go to ∅ work, ∅ school, ∅ bed"],
            ["Transporte com `by`", "by ∅ car, by ∅ plane, by ∅ email"],
            ["Empresas e produtos", "∅ Google, ∅ Docker"],
          ],
        },
        {
          kind: "heading",
          text: "Com `the` — a outra lista",
        },
        {
          kind: "table",
          headers: ["Categoria", "Exemplo"],
          rows: [
            ["Países com nome plural/político", "**the** United States, **the** UK, **the** Netherlands"],
            ["Oceanos, mares, rios", "**the** Atlantic, **the** Amazon"],
            ["Cordilheiras, arquipélagos", "**the** Andes, **the** Azores"],
            ["Regiões", "**the** north, **the** Middle East"],
            ["Jornais", "**the** Guardian, **the** New York Times"],
            ["Superlativos e únicos", "**the** best, **the** only one, **the** same"],
            ["Décadas e séculos", "in **the** 90s, in **the** 21st century"],
          ],
        },
        {
          kind: "translation",
          pt: "O Brasil é grande.",
          wrong: "The Brazil is big.",
          right: ["Brazil is big."],
          note: "Exceções: *the United States*, *the UK*, *the Netherlands* — porque são descrições, não nomes.",
        },
        {
          kind: "heading",
          text: "Profissões",
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português omite o artigo aqui (*Ele é engenheiro*). O inglês **exige**.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "She is doctor." },
            { marker: "good", text: "She is a doctor." },
            { marker: "good", text: "He's an accountant." },
            { marker: "good", text: "Designers are expensive.", note: "plural geral, sem artigo" },
          ],
        },
        {
          kind: "heading",
          text: "work / home / bed",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I'm going to the work." },
            { marker: "good", text: "I'm going to work." },
            { marker: "bad", text: "I'm going to the home." },
            { marker: "good", text: "I'm going home.", note: "sem preposição também!" },
            { marker: "bad", text: "I go to the bed at 11." },
            { marker: "good", text: "I go to bed at 11." },
          ],
        },
        {
          kind: "list",
          title: "Erros de artigo por ordem de gravidade",
          ordered: true,
          items: [
            "`the` antes de substantivo geral — *\u201cI like the music\u201d*",
            "`the` antes de país — *\u201cthe Brazil\u201d*",
            "Falta de `a` antes de profissão — *\u201cI am engineer\u201d*",
            "*\u201cgo to the work / the home\u201d*",
            "Falta de artigo com contável singular — *\u201cI have car\u201d*",
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I like the music, especially the jazz.",
          answers: ["I like music, especially jazz."],
          explanation:
            "Generalização não leva artigo em inglês. `the` só entraria se você especificasse *qual* música.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "The Brazil is bigger than the Portugal.",
          answers: ["Brazil is bigger than Portugal."],
          explanation:
            "Nomes de países quase nunca levam artigo. Exceções são nomes descritivos: *the United States*, *the Netherlands*.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She is engineer at a fintech.",
          answers: [
            "She is an engineer at a fintech.",
            "She's an engineer at a fintech.",
          ],
          explanation:
            "Profissão no singular exige `a`/`an` em inglês, mesmo o português omitindo.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Complete: *I like ___ people in this team.*",
          options: ["— (nenhum artigo)", "the", "a", "an"],
          answer: 1,
          explanation:
            "Aqui você especifica *quais* pessoas → `the`. Se fosse generalização (*People change*), seria sem artigo.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Complete: *___ trust takes years to build.*",
          options: ["The", "A", "— (nenhum artigo)", "An"],
          answer: 2,
          explanation:
            "Substantivo abstrato usado de forma geral → artigo zero. *A confiança* vira só [[Trust]].",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "fill",
          prompt: "Complete com `a` ou `an`.",
          sentence: "It took ___ hour to fix, and it wasn't even ___ university project.",
          answers: [["an"], ["a"]],
          explanation:
            "Vale o **som**: *hour* começa com som de vogal → `an`. *University* começa com som de /j/ → `a`.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'm going to the work now, then to the home.",
          answers: [
            "I'm going to work now, then home.",
            "I'm going to work now, then I'm going home.",
          ],
          explanation:
            "`work`, `home`, `bed` e `school` não levam artigo quando você vai lá pela função. E `home` dispensa até a preposição.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "categorize",
          prompt: "Leva `the` ou não?",
          buckets: ["Com the", "Sem artigo"],
          items: [
            { text: "United States", bucket: "Com the" },
            { text: "Brazil", bucket: "Sem artigo" },
            { text: "Amazon (rio)", bucket: "Com the" },
            { text: "Portuguese (idioma)", bucket: "Sem artigo" },
            { text: "Netherlands", bucket: "Com the" },
            { text: "breakfast", bucket: "Sem artigo" },
          ],
          explanation:
            "Regra prática: nome próprio simples → sem artigo. Nome que descreve um conjunto (rios, cordilheiras, federações) → `the`.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I found a bug. The bug is in the login flow.",
          natural: true,
          explanation:
            "Primeira menção → `a`. Segunda menção do mesmo item → `the`. É o mecanismo central dos artigos.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A vida é curta.",
          answers: ["Life is short."],
          explanation:
            "Conceito abstrato geral → artigo zero. [[The life is short]] soa imediatamente estrangeiro.",
          difficulty: 1,
        },
        {
          id: "e11",
          kind: "fill",
          prompt: "Complete com `the` onde for necessário.",
          sentence: "It's ___ fastest option we have.",
          answers: [["the"]],
          explanation: "Superlativo sempre leva `the`. ❌ [[It's fastest option.]]",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-countable",
      number: "9",
      title: "Countable & Uncountable",
      titlePt: "Contáveis e incontáveis",
      priority: "essential",
      summary:
        "information, advice, news, furniture. Palavras que são plurais em português e singulares em inglês.",
      tags: ["countable", "uncountable", "information", "advice", "news", "much", "many", "few"],
      blocks: [
        {
          kind: "callout",
          tone: "danger",
          title: "A lista que mais gera erro",
          text: "Estes substantivos **nunca** têm plural em inglês: *information, advice, news, furniture, equipment, knowledge, research, feedback, software, work, money, luggage, progress, traffic, homework, evidence*.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I need some informations." },
            { marker: "good", text: "I need some information." },
            { marker: "bad", text: "He gave me a good advice." },
            { marker: "good", text: "He gave me some good advice." },
            { marker: "good", text: "He gave me a piece of advice." },
            { marker: "bad", text: "The news are bad." },
            { marker: "good", text: "The news is bad.", note: "news é singular, apesar do -s" },
            { marker: "bad", text: "We bought new furnitures." },
            { marker: "good", text: "We bought new furniture." },
          ],
        },
        {
          kind: "heading",
          text: "Como contar o incontável",
        },
        {
          kind: "pattern",
          lines: [
            "a piece of  advice / information / news / furniture / equipment",
            "a bit of    help / trouble / luck",
            "a cup of coffee, a glass of water, a slice of bread",
            "a lot of / plenty of / a couple of",
          ],
        },
        {
          kind: "heading",
          text: "Quantificadores",
        },
        {
          kind: "table",
          headers: ["Quantificador", "Contável", "Incontável", "Nota"],
          rows: [
            ["some", "✅ some files", "✅ some water", "afirmativas, ofertas"],
            ["any", "✅ any files", "✅ any water", "perguntas, negativas"],
            ["many", "✅", "❌", "sobretudo perguntas/negativas"],
            ["much", "❌", "✅ much time", "sobretudo perguntas/negativas"],
            ["a lot of / lots of", "✅", "✅", "**afirmativas** — o mais comum"],
            ["a few", "✅ a few files", "❌", "alguns (positivo)"],
            ["few", "✅ few files", "❌", "quase nenhum (negativo)"],
            ["a little", "❌", "✅ a little time", "um pouco (positivo)"],
            ["little", "❌", "✅ little time", "quase nada (negativo)"],
            ["fewer", "✅ fewer bugs", "❌", ""],
            ["less", "❌", "✅ less time", ""],
          ],
        },
        {
          kind: "rule",
          title: "Afirmativa → `a lot of`. Pergunta/negativa → `much` / `many`.",
          text: "⚠️ [[I have much work]] soa formal e estranho. ✅ [[I have a lot of work.]]",
        },
        {
          kind: "heading",
          text: "`few` × `a few` — a diferença é atitude",
        },
        {
          kind: "compare",
          left: {
            title: "a few / a little — positivo",
            caption: "alguns, e isso basta",
            tone: "good",
            items: [
              "I have a few questions.",
              "We have a little time.",
              "A few people showed up.",
            ],
          },
          right: {
            title: "few / little — negativo",
            caption: "quase nenhum, e isso é problema",
            tone: "bad",
            items: [
              "I have few questions.",
              "We have little time.",
              "Few people showed up.",
            ],
          },
        },
        {
          kind: "callout",
          tone: "tip",
          text: "🗣️ Na fala, evita-se `few`/`little` pelados. Diga **not many** / **not much** / **hardly any**: ✅ [[Not many people showed up.]] ✅ [[We have hardly any time.]]",
        },
        {
          kind: "rule",
          title: "`fewer` + contável plural. `less` + incontável.",
          text: "✅ [[We have fewer bugs and less technical debt.]] Nativos dizem *less bugs* o tempo todo, mas em escrita cuidadosa é considerado erro.",
        },
        {
          kind: "table",
          title: "Erros de brasileiros",
          headers: ["❌", "✅", "Por quê"],
          rows: [
            ["I need some informations.", "some **information**", "incontável"],
            ["a good advice", "**some good advice**", "incontável"],
            ["The news are bad.", "The news **is** bad.", "singular"],
            ["I have many works to do.", "**a lot of work**", "incontável"],
            ["How much people came?", "How **many** people", "contável"],
            ["I have much friends.", "**a lot of** friends", "quantificador"],
            ["The peoples of the office", "**The people** in the office", "*people* já é plural"],
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I need some informations about the project.",
          answers: [
            "I need some information about the project.",
            "I need information about the project.",
          ],
          explanation: "`information` é incontável em inglês — nunca leva `-s`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "He gave me a good advice about the interview.",
          answers: [
            "He gave me some good advice about the interview.",
            "He gave me a piece of good advice about the interview.",
            "He gave me good advice about the interview.",
          ],
          explanation:
            "`advice` é incontável: não aceita `a` nem `-s`. Para individualizar, use `a piece of advice`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete com `is` ou `are`.",
          sentence: "The news ___ bad, and the feedback ___ worse.",
          answers: [["is"], ["is"]],
          explanation:
            "`news` e `feedback` são incontáveis singulares, apesar do `-s` em *news*.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "How ___ people came to the demo?",
          options: ["much", "many", "a lot of", "little"],
          answer: 1,
          explanation: "`people` é contável plural → `many`. `much` só serve para incontáveis.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Contável ou incontável em inglês?",
          buckets: ["Contável", "Incontável"],
          items: [
            { text: "information", bucket: "Incontável" },
            { text: "file", bucket: "Contável" },
            { text: "advice", bucket: "Incontável" },
            { text: "meeting", bucket: "Contável" },
            { text: "furniture", bucket: "Incontável" },
            { text: "equipment", bucket: "Incontável" },
          ],
          explanation:
            "A intuição do português engana: quase todos esses têm plural em português e nenhum tem em inglês.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "match",
          prompt: "Ligue a frase ao que ela realmente comunica.",
          pairs: [
            { left: "We have a little time.", right: "Dá pra fazer." },
            { left: "We have little time.", right: "Corre, é pouquíssimo." },
            { left: "A few people came.", right: "Vieram alguns, tudo bem." },
            { left: "Few people came.", right: "Veio quase ninguém, decepcionante." },
          ],
          explanation:
            "O artigo `a` inverte a atitude: com ele é *suficiente*, sem ele é *insuficiente*.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete com `fewer` ou `less`.",
          sentence: "This release has ___ bugs and ___ technical debt.",
          answers: [["fewer"], ["less"]],
          explanation:
            "`bugs` é contável plural → `fewer`. `debt` é incontável → `less`.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I have much work to do this week.",
          natural: false,
          correction: "I have a lot of work to do this week.",
          explanation:
            "`much` em afirmativa soa formal e antiquado. Na fala real, use `a lot of`.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "As pessoas do escritório são legais.",
          answers: [
            "The people in the office are nice.",
            "The people at the office are nice.",
          ],
          explanation:
            "`people` já é plural — nunca *peoples*. E o verbo concorda no plural: `are`.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["Can", "I", "give", "you", "a piece of", "advice"],
          answers: [["Can", "I", "give", "you", "a piece of", "advice"]],
          explanation:
            "`a piece of` é o contador padrão de `advice`, `information`, `news` e `furniture`.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-adjectives",
      number: "10",
      title: "Adjectives",
      titlePt: "Adjetivos",
      priority: "essential",
      summary:
        "Sempre antes do substantivo, nunca no plural. E o par -ed/-ing que já causou muita entrevista constrangedora.",
      tags: ["adjectives", "adjetivos", "bored", "boring", "ordem", "interested in"],
      blocks: [
        {
          kind: "rule",
          title: "Adjetivo vem antes do substantivo e nunca vai para o plural.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "a solution simple" },
            { marker: "good", text: "a simple solution" },
            { marker: "bad", text: "importants decisions" },
            { marker: "good", text: "important decisions" },
            { marker: "bad", text: "the file more recent" },
            { marker: "good", text: "the most recent file" },
          ],
        },
        {
          kind: "text",
          text: "Exceções em que o adjetivo vem depois: após verbos de ligação ([[The solution is simple]]) e em expressões fixas: *something new, anything else, nothing special, the person responsible, ten years old*.",
        },
        {
          kind: "heading",
          text: "-ed × -ing — alto valor",
        },
        {
          kind: "pattern",
          lines: [
            "-ing \u2192 descreve a COISA que causa o sentimento",
            "-ed  \u2192 descreve a PESSOA que sente",
          ],
        },
        {
          kind: "table",
          headers: ["Causa (-ing)", "Sentimento (-ed)"],
          rows: [
            ["The meeting was **boring**.", "I was **bored**."],
            ["This project is **interesting**.", "I'm **interested** in this project."],
            ["The trip was **tiring**.", "I'm **tired**."],
            ["That's **confusing**.", "I'm **confused**."],
            ["The result was **surprising**.", "I was **surprised**."],
            ["It's **frustrating**.", "I'm **frustrated**."],
            ["It was **embarrassing**.", "She was **embarrassed**."],
            ["This is **disappointing**.", "We're **disappointed**."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "O erro memorável",
          text: "[[I am boring]] = *eu sou chato*. [[I am bored]] = *estou entediado*. Dizer *\u201cI'm boring\u201d* numa entrevista de emprego é um clássico.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Truque de memória",
          text: "Se a **coisa** te dá o sentimento, ela termina em `-ing`. Se **você** recebe o sentimento, você termina em `-ed`.",
        },
        {
          kind: "heading",
          text: "Ordem de vários adjetivos",
        },
        {
          kind: "pattern",
          lines: ["Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Color \u2192 Origin \u2192 Material \u2192 Purpose \u2192 NOUN"],
          caption: "Na prática, com dois adjetivos: opinião antes de fato, tamanho antes de cor.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "a nice big old wooden desk" },
            { marker: "good", text: "a great new feature" },
            { marker: "good", text: "a small black laptop" },
            { marker: "bad", text: "a black small laptop" },
          ],
        },
        {
          kind: "heading",
          text: "Adjetivo + preposição — decore em bloco",
        },
        {
          kind: "table",
          headers: ["Combinação", "Exemplo"],
          rows: [
            ["interested **in**", "I'm interested in machine learning."],
            ["good / bad **at**", "She's good at negotiating."],
            ["responsible **for**", "He's responsible for deployments."],
            ["worried **about**", "I'm worried about the deadline."],
            ["afraid **of**", "I'm afraid of flying."],
            ["tired **of**", "I'm tired of these meetings."],
            ["similar **to**", "It's similar to Redis."],
            ["different **from**", "This is different from the old one."],
            ["married **to**", "She's married to a lawyer."],
            ["familiar **with**", "Are you familiar with Kafka?"],
            ["capable **of**", "It's capable of handling 10k requests."],
            ["dependent **on**", "It's dependent on the API."],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "Transferências erradas comuns: ❌ *interested **on*** → ✅ `in`; ❌ *good **in*** → ✅ `at`; ❌ *married **with*** → ✅ `to`; ❌ *responsible **of*** → ✅ `for`.",
        },
        {
          kind: "pairs",
          title: "Outros fatos úteis",
          items: [
            { term: "Adjetivos compostos", meaning: "hifenizados e no singular antes do substantivo: [[a five-minute break]], [[a two-year contract]]" },
            { term: "`enough` vem DEPOIS", meaning: "✅ [[fast enough]] ❌ [[enough fast]] — mas antes de substantivo: [[enough time]]" },
            { term: "`too` vem antes", meaning: "[[too expensive]], [[too late]]" },
            { term: "Palavras em -ly que são adjetivos", meaning: "*friendly, lovely, lonely, likely, silly*. ❌ [[He spoke friendly]] → ✅ [[in a friendly way]]" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "A reunião durou três horas e você não aguentava mais. O que você diz?",
          options: [
            "I was so boring.",
            "I was so bored.",
            "I was so bore.",
            "I was so boredom.",
          ],
          answer: 1,
          explanation:
            "Você **recebe** o sentimento → `-ed`. [[I was boring]] significaria que você é uma pessoa chata.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com a forma correta de *confuse*.",
          sentence: "The documentation is ___, so now I'm completely ___.",
          answers: [["confusing"], ["confused"]],
          explanation:
            "A coisa que causa → `-ing`. A pessoa que sente → `-ed`. Sempre nessa direção.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "We need to take importants decisions.",
          answers: [
            "We need to make important decisions.",
            "We need to take important decisions.",
          ],
          explanation:
            "Adjetivo em inglês nunca vai para o plural. Bônus: o inglês diz [[make a decision]], não *take*.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija a preposição.",
          wrong: "I'm very interested on this position.",
          answers: ["I'm very interested in this position."],
          explanation:
            "`interested` sempre pede `in`. Essas combinações são fixas — decore em bloco.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "order",
          prompt: "Coloque na ordem correta.",
          tokens: ["a", "nice", "big", "old", "wooden", "desk"],
          answers: [["a", "nice", "big", "old", "wooden", "desk"]],
          explanation:
            "Opinião → tamanho → idade → material. Nativos sentem essa ordem sem saber explicar.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "match",
          prompt: "Ligue o adjetivo à preposição.",
          pairs: [
            { left: "good", right: "at" },
            { left: "responsible", right: "for" },
            { left: "married", right: "to" },
            { left: "afraid", right: "of" },
            { left: "familiar", right: "with" },
          ],
          explanation:
            "Não há lógica — é memorização em bloco. Aprenda a expressão inteira, nunca a palavra sozinha.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "We took a five-minutes break.",
          natural: false,
          correction: "We took a five-minute break.",
          explanation:
            "Adjetivo composto antes do substantivo fica no **singular** e com hífen: `five-minute`.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "fix",
          prompt: "Corrija a posição de *enough*.",
          wrong: "The server isn't enough fast for this load.",
          answers: ["The server isn't fast enough for this load."],
          explanation:
            "`enough` vem **depois** do adjetivo. Antes de substantivo é o contrário: [[enough time]].",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "categorize",
          prompt: "A frase descreve a causa ou quem sente?",
          buckets: ["Causa (-ing)", "Quem sente (-ed)"],
          items: [
            { text: "The result was surprising.", bucket: "Causa (-ing)" },
            { text: "I was surprised.", bucket: "Quem sente (-ed)" },
            { text: "It's frustrating.", bucket: "Causa (-ing)" },
            { text: "We're disappointed.", bucket: "Quem sente (-ed)" },
          ],
          explanation:
            "Coisas terminam em `-ing`, pessoas em `-ed`. Uma exceção: você pode ser [[boring]] — mas provavelmente não quer dizer isso.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Isso é diferente do que a gente usava antes.",
          answers: [
            "This is different from what we used before.",
            "This is different from what we used to use.",
            "It's different from what we used before.",
          ],
          explanation:
            "`different from` é a forma mais segura. 🇺🇸 aceita *different than*, 🇬🇧 aceita *different to*.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-comparatives",
      number: "11",
      title: "Comparatives & Superlatives",
      titlePt: "Comparativos e superlativos",
      priority: "essential",
      summary:
        "Adjetivo curto ganha -er. Adjetivo longo ganha more. Nunca os dois — *more better* não existe.",
      tags: ["comparative", "superlative", "than", "as as", "more", "better", "the most"],
      blocks: [
        {
          kind: "pattern",
          lines: [
            "1 s\u00edlaba          \u2192 -er / -est      fast \u2192 faster \u2192 the fastest",
            "2 s\u00edlabas em -y   \u2192 -ier / -iest    easy \u2192 easier \u2192 the easiest",
            "2+ s\u00edlabas        \u2192 more / most     complex \u2192 more complex \u2192 the most complex",
          ],
        },
        {
          kind: "table",
          title: "Irregulares — decore",
          headers: ["Adjetivo", "Comparativo", "Superlativo"],
          rows: [
            ["good", "better", "the best"],
            ["bad", "worse", "the worst"],
            ["far", "further / farther", "the furthest / farthest"],
            ["little", "less", "the least"],
            ["much / many", "more", "the most"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Nunca dobre a marcação",
          text: "❌ [[more better]] ❌ [[more easier]] ❌ [[the most best]]. Ou `-er`, ou `more` — jamais os dois.",
        },
        {
          kind: "heading",
          text: "`as … as` — igualdade",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's as fast as the original." },
            { marker: "good", text: "She's as experienced as he is." },
            { marker: "good", text: "Come as soon as possible." },
            { marker: "good", text: "It's not as expensive as I thought.", note: "= mais barato do que eu esperava" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "Nativos preferem `not as … as` a `less …` com adjetivos curtos: ⚠️ [[It's less big than mine]] → ✅ [[It's not as big as mine.]]",
        },
        {
          kind: "heading",
          text: "The more…, the more…",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The more you practice, the better you get." },
            { marker: "good", text: "The bigger the team, the slower the decisions." },
            { marker: "good", text: "The sooner we start, the sooner we finish." },
          ],
        },
        {
          kind: "text",
          text: "Também útil: **comparativo + and + comparativo** para mudança progressiva — [[It's getting harder and harder.]] [[Prices are getting more and more expensive.]]",
        },
        {
          kind: "table",
          title: "Erros comuns",
          headers: ["❌", "✅"],
          rows: [
            ["more better", "**better**"],
            ["It's more big than that.", "It's **bigger** than that."],
            ["It's the more expensive.", "It's **the most** expensive."],
            ["I'm better than him in English.", "I'm better **at** English than he is."],
            ["very better", "**much** better"],
            ["as fast than", "as fast **as**"],
            ["It's best option.", "It's **the** best option."],
            ["the same than", "the same **as**"],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "*Mais grande* → `bigger` (não *more big*). *Mais bom* → `better`. O conceito existe em português (*melhor/pior*) — a armadilha é aplicar `more` a adjetivos curtos.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "This approach is more better than the old one.",
          answers: ["This approach is better than the old one."],
          explanation:
            "`better` já é comparativo. Somar `more` é marcação dupla — erro grave e muito audível.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com o comparativo de *fast* e o superlativo de *complex*.",
          sentence: "Redis is ___ than Postgres for cache, but this is the ___ part of the system.",
          answers: [["faster"], ["most complex"]],
          explanation:
            "Uma sílaba → `-er`. Três sílabas → `most`. A regra é o tamanho da palavra.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "It's the same than the previous version.",
          answers: ["It's the same as the previous version."],
          explanation: "`the same` sempre vem com `as`, nunca com `than`.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual está correto?",
          options: [
            "I'm better than him in English.",
            "I'm better at English than he is.",
            "I'm more good at English than him.",
            "I'm better in English than he.",
          ],
          answer: 1,
          explanation:
            "Habilidade usa `good/better **at**`. E depois de `than` o inglês cuidadoso usa sujeito + verbo.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "order",
          prompt: "Monte a estrutura paralela.",
          tokens: ["The", "sooner", "we start", "the", "sooner", "we finish"],
          answers: [["The", "sooner", "we start", "the", "sooner", "we finish"]],
          explanation:
            "`The + comparativo, the + comparativo`. Estrutura fixa, muito natural e pouco ensinada.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "The new version isn't as fast as the old one.",
          natural: true,
          explanation:
            "`not as … as` é a forma preferida para negar igualdade com adjetivos curtos.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "categorize",
          prompt: "`-er` ou `more`?",
          buckets: ["-er", "more"],
          items: [
            { text: "fast", bucket: "-er" },
            { text: "expensive", bucket: "more" },
            { text: "easy", bucket: "-er" },
            { text: "reliable", bucket: "more" },
            { text: "big", bucket: "-er" },
            { text: "complicated", bucket: "more" },
          ],
          explanation:
            "Uma sílaba, ou duas terminando em `-y`, levam `-er`. O resto leva `more`.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "This is very better than what we had.",
          answers: [
            "This is much better than what we had.",
            "This is a lot better than what we had.",
          ],
          explanation:
            "`very` não intensifica comparativo. Use `much`, `far` ou `a lot`.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Temos o dobro de clientes que no ano passado.",
          answers: [
            "We have twice as many customers as last year.",
            "We have twice as many clients as last year.",
          ],
          explanation:
            "Multiplicação usa `twice/three times as many … as`. Contável → `many`; incontável → `much`.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com o superlativo.",
          sentence: "It's ___ ___ option we have right now.",
          answers: [["the"], ["best"]],
          explanation:
            "Superlativo sempre pede `the`. ❌ [[It's best option.]]",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-adverbs",
      number: "12",
      title: "Adverbs",
      titlePt: "Advérbios",
      priority: "useful",
      summary:
        "Posição é tudo. E o trio still / already / yet, que brasileiros embaralham constantemente.",
      tags: ["adverbs", "advérbios", "always", "still", "already", "yet", "good", "well", "hardly"],
      blocks: [
        {
          kind: "rule",
          title: "Advérbio de frequência: antes do verbo principal, depois do `be`, depois do primeiro auxiliar.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I arrive always early." },
            { marker: "good", text: "I always arrive early." },
            { marker: "bad", text: "He is late always." },
            { marker: "good", text: "He is always late." },
            { marker: "bad", text: "I never have been there." },
            { marker: "good", text: "I have never been there." },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português põe o advérbio depois do verbo (*Eu trabalho sempre em casa*). `always` e `never` em inglês ficam **no meio**, sempre.",
        },
        {
          kind: "text",
          text: "**Expressões** de frequência (não advérbios simples) vão no **fim**: [[I check my email every day / twice a week / all the time.]] ❌ [[I every day check my email.]]",
        },
        {
          kind: "heading",
          text: "still / already / yet",
        },
        {
          kind: "table",
          headers: ["Palavra", "Significado", "Posição", "Exemplo"],
          rows: [
            ["**still**", "continua", "meio", "I'm **still** working on it."],
            ["**already**", "aconteceu, antes do esperado", "meio", "I've **already** finished."],
            ["**yet**", "ainda não aconteceu", "fim", "I haven't finished **yet**."],
            ["**anymore**", "parou", "fim", "He doesn't work here **anymore**."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "Compare: [[It doesn't work yet]] (neutro) × [[It still doesn't work]] (irritado). O `still` antes da negativa carrega frustração.",
        },
        {
          kind: "heading",
          text: "good × well, hard × hardly",
        },
        {
          kind: "table",
          headers: ["Par", "Diferença", "Exemplo"],
          rows: [
            ["good / well", "adjetivo / advérbio", "It's **good**. / She works **well**."],
            ["hard / hardly", "muito / quase nada", "He works **hard**. / He **hardly** works."],
            ["late / lately", "atrasado / recentemente", "I arrived **late**. / I've been busy **lately**."],
            ["near / nearly", "perto / quase", "It's **near**. / It's **nearly** done."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          text: "`hardly` **não** significa *duramente*. [[He hardly works]] = ele quase não trabalha. O oposto de [[He works hard]].",
        },
        {
          kind: "callout",
          tone: "warn",
          text: "🗣️ *\u201cI'm good\u201d* como resposta a *How are you?* é padrão americano e aceito. Mas para descrever ação, use `well`: ✅ [[The API works well.]]",
        },
        {
          kind: "heading",
          text: "Advérbios de intensidade",
        },
        {
          kind: "table",
          headers: ["Advérbio", "Força", "Nota"],
          rows: [
            ["a bit / a little", "fraco", "suavizador — muito comum 🇬🇧"],
            ["fairly", "moderado", "neutro-positivo"],
            ["quite", "⚠️ ambíguo", "🇬🇧 *razoavelmente* / 🇺🇸 *muito*"],
            ["pretty 🗣️", "bastante", "*It's pretty good.* — informal comum"],
            ["really", "forte", "funciona com verbos: *I really like it.*"],
            ["very", "forte", "só adjetivos e advérbios"],
            ["absolutely / totally", "com adjetivos extremos", "*absolutely amazing*, não *absolutely good*"],
            ["too", "excessivo — negativo", "*too expensive* = além do aceitável"],
            ["hardly / barely", "quase não", "*I could hardly hear you.*"],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "`too` ≠ `very`. [[It's too expensive]] = caro demais, não dá. [[It's very expensive]] = muito caro, mas talvez dê.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija a posição do advérbio.",
          wrong: "I arrive always early to meetings.",
          answers: ["I always arrive early to meetings."],
          explanation:
            "`always` fica antes do verbo principal. Só o português permite jogá-lo depois.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com `still`, `already` ou `yet`.",
          sentence: "I've ___ sent it, but they haven't replied ___.",
          answers: [["already"], ["yet"]],
          explanation:
            "`already` vai no meio e indica antecipação. `yet` vai no fim e só aparece em negativas e perguntas.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Ele quase não trabalha. Como se diz?",
          options: [
            "He works hardly.",
            "He hardly works.",
            "He works hard.",
            "He is hardly working.",
          ],
          answer: 1,
          explanation:
            "`hardly` = quase nada, e vem antes do verbo. [[He works hard]] significa o contrário: ele trabalha muito.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "The new API works good.",
          answers: [
            "The new API works well.",
            "The new API works fine.",
          ],
          explanation:
            "`good` é adjetivo; para qualificar um verbo, use o advérbio `well`.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "match",
          prompt: "Ligue o par ao significado correto.",
          pairs: [
            { left: "He works hard.", right: "Trabalha muito." },
            { left: "He hardly works.", right: "Quase não trabalha." },
            { left: "I arrived late.", right: "Cheguei atrasado." },
            { left: "I've been busy lately.", right: "Tenho estado ocupado ultimamente." },
          ],
          explanation:
            "O `-ly` aqui não faz o advérbio do adjetivo — cria uma palavra com sentido totalmente diferente.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I every day check my email before lunch.",
          natural: false,
          correction: "I check my email every day before lunch.",
          explanation:
            "Expressões de frequência (`every day`, `twice a week`) vão no fim, não no meio.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "categorize",
          prompt: "O advérbio vai no meio ou no fim?",
          buckets: ["Meio da frase", "Fim da frase"],
          items: [
            { text: "always", bucket: "Meio da frase" },
            { text: "yet", bucket: "Fim da frase" },
            { text: "already", bucket: "Meio da frase" },
            { text: "anymore", bucket: "Fim da frase" },
            { text: "never", bucket: "Meio da frase" },
          ],
          explanation:
            "Regra prática: advérbio de uma palavra sobre frequência ou tempo relativo → meio. `yet` e `anymore` → fim.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com `too` ou `very`.",
          sentence: "It's ___ expensive — we simply can't afford it.",
          answers: [["too"]],
          explanation:
            "`too` indica que passou do limite aceitável. `very` seria só intensidade, sem impedimento.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Diga em inglês (com irritação):",
          pt: "Ainda não está funcionando.",
          answers: [
            "It still doesn't work.",
            "It still isn't working.",
          ],
          explanation:
            "`still` antes da negativa carrega frustração. [[It doesn't work yet]] seria neutro.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["I", "have", "never", "worked", "with Kafka"],
          answers: [["I", "have", "never", "worked", "with Kafka"]],
          explanation:
            "Advérbio de frequência vem depois do **primeiro** auxiliar, não antes dele.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-prepositions-basic",
      number: "13.1",
      title: "Prepositions of Time & Place",
      titlePt: "Preposições de tempo e lugar",
      priority: "essential",
      summary:
        "in, on, at — e o par by × until, que causa problemas reais no trabalho.",
      tags: ["prepositions", "in", "on", "at", "by", "until", "since", "for", "during"],
      blocks: [
        {
          kind: "pattern",
          title: "Tempo — a hierarquia",
          lines: [
            "at \u2192 hora exata     at 7 o'clock, at noon, at lunchtime",
            "on \u2192 dia            on Monday, on 15 March, on Friday morning",
            "in \u2192 per\u00edodo longo  in April, in 2025, in the 90s, in the morning",
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Preposição zero",
          text: "Nada antes de *next, last, this, every, all, tomorrow, yesterday, today*: ❌ [[in next week]] → ✅ [[next week]]. ❌ [[on last Monday]] → ✅ [[last Monday]].",
        },
        {
          kind: "table",
          title: "Outras preposições de tempo",
          headers: ["Preposição", "Significado", "Exemplo"],
          rows: [
            ["**since**", "ponto de partida", "since 2020, since Monday"],
            ["**for**", "duração", "for two hours, for a week"],
            ["**during**", "dentro de um período (quando?)", "during the meeting"],
            ["**until / till**", "até aquele momento", "I'll wait until 5."],
            ["**by**", "não mais tarde que (prazo)", "Send it **by** Friday."],
            ["**within**", "dentro de um prazo", "within 24 hours"],
            ["**in** (futuro)", "daqui a", "I'll be there **in** 10 minutes."],
            ["**ago**", "atrás (vem DEPOIS)", "two years **ago**"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "by × until — causa problemas reais no trabalho",
          text: "**by** = o prazo, a ação acontece em algum momento antes. **until** = a ação continua até aquele momento.",
        },
        {
          kind: "translation",
          pt: "Preciso disso até sexta.",
          wrong: "I need it until Friday.",
          right: ["I need it by Friday."],
          note: "[[I need it until Friday]] significaria que você precisa dele continuamente até sexta e depois pode devolver.",
        },
        {
          kind: "callout",
          tone: "warn",
          title: "during × for",
          text: "*during* responde **quando**; *for* responde **por quanto tempo**. ✅ [[I was on holiday for two weeks during the summer.]] ❌ [[I slept during two hours.]] → ✅ [[I slept for two hours.]]",
        },
        {
          kind: "heading",
          text: "Lugar",
        },
        {
          kind: "pattern",
          lines: [
            "in \u2192 dentro de um espa\u00e7o/\u00e1rea   in the office, in Brazil, in a car",
            "on \u2192 sobre uma superf\u00edcie/linha  on the table, on the wall, on a bus",
            "at \u2192 um ponto/local             at the door, at work, at the bus stop",
          ],
        },
        {
          kind: "table",
          headers: ["in", "on", "at"],
          rows: [
            ["in the room", "on the desk", "at the entrance"],
            ["in Lisbon / in Portugal", "on the wall", "at the airport"],
            ["in the car / in a taxi", "on the bus / train / plane", "at home / at work"],
            ["in bed", "on the floor", "at the top / bottom"],
            ["in the newspaper", "on TV / on the radio / on the internet", "at the meeting"],
            ["in a book", "on a website", "at a party"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "in × at para prédios",
          text: "`at` quando você pensa na **função** ([[I'm at the office]]). `in` quando pensa no **interior físico** ([[It's cold in the office]]). Na dúvida, `at` é mais seguro.",
        },
        {
          kind: "pairs",
          title: "Frases prepositivas fixas — decore",
          items: [
            { term: "on time × in time", meaning: "pontual × a tempo (antes do limite)" },
            { term: "in a hurry", meaning: "com pressa" },
            { term: "in advance", meaning: "com antecedência" },
            { term: "on my way", meaning: "a caminho" },
            { term: "in person × on the phone", meaning: "pessoalmente × por telefone" },
            { term: "at least / at most", meaning: "no mínimo / no máximo" },
            { term: "by mistake / on purpose", meaning: "sem querer / de propósito" },
            { term: "in charge of", meaning: "responsável por" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com `at`, `on` ou `in`.",
          sentence: "The demo is ___ Monday ___ 3 p.m., ___ March.",
          answers: [["on"], ["at"], ["in"]],
          explanation:
            "Dia → `on`. Hora exata → `at`. Mês → `in`. É uma hierarquia do mais específico ao mais amplo.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I need the report until Friday.",
          answers: ["I need the report by Friday."],
          explanation:
            "Prazo → `by`. `until` significaria que você usa o relatório continuamente até sexta.",
          difficulty: 3,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "We're meeting in next week.",
          answers: ["We're meeting next week."],
          explanation:
            "`next`, `last`, `this` e `every` dispensam preposição em inglês.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete com `for` ou `during`.",
          sentence: "I was offline ___ two hours ___ the deployment window.",
          answers: [["for"], ["during"]],
          explanation:
            "`for` responde *por quanto tempo*. `during` responde *quando*, e vem sempre com substantivo.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "I saw it ___ TV last night.",
          options: ["in", "on", "at", "by"],
          answer: 1,
          explanation:
            "`on TV`, `on the radio`, `on the internet`. Mas `in the newspaper`. São combinações fixas.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Qual preposição de lugar?",
          buckets: ["in", "on", "at"],
          items: [
            { text: "___ the office (função)", bucket: "at" },
            { text: "___ Portugal", bucket: "in" },
            { text: "___ the wall", bucket: "on" },
            { text: "___ home", bucket: "at" },
            { text: "___ the second floor", bucket: "on" },
            { text: "___ a taxi", bucket: "in" },
          ],
          explanation:
            "`in` = dentro de um volume. `on` = sobre uma superfície. `at` = um ponto no mapa.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'll be there in 10 minutes.",
          natural: true,
          explanation:
            "`in + período` no futuro significa *daqui a*. Diferente de `within 10 minutes`, que é *em até*.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Ela mora aqui desde 2020.",
          answers: [
            "She's lived here since 2020.",
            "She has lived here since 2020.",
            "She's been living here since 2020.",
          ],
          explanation:
            "`since` marca o ponto de partida e exige Present Perfect, nunca presente simples.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue a expressão ao significado.",
          pairs: [
            { left: "on time", right: "pontual" },
            { left: "in time", right: "a tempo, antes do limite" },
            { left: "on purpose", right: "de propósito" },
            { left: "by mistake", right: "sem querer" },
          ],
          explanation:
            "São expressões fixas — a preposição não segue lógica, tem que ser decorada em bloco.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I finished it two years before.",
          answers: [
            "I finished it two years ago.",
          ],
          explanation:
            "*Atrás* contado a partir de agora → `ago`, e ele vem **depois** do período. `before` precisa de um marco de referência.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "w-prepositions-verbs",
      number: "13.2",
      title: "Dependent Prepositions",
      titlePt: "Preposições que grudam no verbo",
      priority: "essential",
      summary:
        "depend on, listen to, discuss (sem nada). Traduzir a preposição do português é o caminho mais rápido para soar estrangeiro.",
      tags: ["prepositions", "depend on", "discuss", "married to", "listen to", "arrive at"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Verbos e preposições formam blocos fixos. Traduzir a preposição do português quase sempre dá errado.",
        },
        {
          kind: "table",
          headers: ["✅ Inglês", "❌ Erro de brasileiro"],
          rows: [
            ["depend **on**", "depend of"],
            ["listen **to**", "listen ∅ music"],
            ["wait **for**", "wait ∅"],
            ["look **for** *(procurar)*", "look ∅"],
            ["ask **for** *(pedir)*", "ask ∅"],
            ["pay **for** *(pagar por algo)*", "pay ∅ the coffee"],
            ["think **about / of**", "think in"],
            ["dream **about / of**", "dream with"],
            ["worry **about**", "worry with"],
            ["belong **to**", "belong ∅"],
            ["arrive **at** (local) / **in** (cidade)", "arrive to"],
            ["participate **in**", "participate of"],
            ["consist **of**", "consist in"],
            ["focus **on**", "focus in"],
            ["rely **on**", "rely in"],
            ["insist **on**", "insist in"],
            ["remind **of / about**", "remember of"],
            ["care **about**", "care with"],
            ["deal **with**", "deal ∅"],
            ["divide **into**", "divide in"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Verbos que NÃO aceitam preposição",
          text: "*discuss, enter, answer, marry, phone/call, join, approach, reach, lack, resemble*. O português adiciona preposição onde o inglês proíbe.",
        },
        {
          kind: "translation",
          pt: "Vamos discutir sobre o projeto.",
          wrong: "Let's discuss about the project.",
          right: ["Let's discuss the project.", "Let's talk about the project."],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "He entered in the room." },
            { marker: "good", text: "He entered the room." },
            { marker: "good", text: "He went into the room." },
            { marker: "bad", text: "She married with him." },
            { marker: "good", text: "She married him." },
            { marker: "good", text: "She got married to him." },
            { marker: "bad", text: "I'll call to him later." },
            { marker: "good", text: "I'll call him later." },
          ],
        },
        {
          kind: "heading",
          text: "O grupo by / with / for / of / about",
        },
        {
          kind: "table",
          headers: ["Preposição", "Sentido central", "Exemplos"],
          rows: [
            ["**by**", "agente, método, prazo, proximidade", "written **by** Ana, **by** email, **by** Friday"],
            ["**with**", "companhia, ferramenta, característica", "coffee **with** milk, cut it **with** a knife"],
            ["**for**", "propósito, beneficiário, duração", "a tool **for** testing, this is **for** you"],
            ["**of**", "pertencimento, quantidade, material", "the end **of** the file, made **of** wood"],
            ["**about**", "assunto", "a book **about** design"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "by × with para método",
          text: "`by` + método geral, sem artigo: *by email, by phone, by car, by hand*. `with` + instrumento específico: *with my phone, with a hammer*.",
        },
        {
          kind: "heading",
          text: "Preposição no fim da frase",
        },
        {
          kind: "text",
          text: "Isso é **inglês normal e correto**, sobretudo em perguntas e orações relativas. A regra contra isso é um mito.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Who are you talking to?" },
            { marker: "good", text: "That's the file I was looking for." },
            { marker: "good", text: "What's this for?" },
            { marker: "good", text: "It's nothing to worry about." },
          ],
        },
        {
          kind: "list",
          title: "Erros de preposição por ordem de gravidade",
          ordered: true,
          items: [
            "*depend of* → **depend on**",
            "*discuss about* → **discuss ∅**",
            "*arrive to* → **arrive at/in**",
            "*married with* → **married to**",
            "*by Friday* × *until Friday*",
            "*in the TV* → **on TV**",
            "*go to home* → **go home**",
            "*listen ∅ music* → **listen to music**",
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Let's discuss about the roadmap tomorrow.",
          answers: [
            "Let's discuss the roadmap tomorrow.",
            "Let's talk about the roadmap tomorrow.",
          ],
          explanation:
            "`discuss` é transitivo direto. Se quiser a preposição, troque o verbo por `talk about`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "It depends of the payload size.",
          answers: ["It depends on the payload size."],
          explanation:
            "`depend` sempre pede `on`. É o erro de preposição nº 1 de falantes de português.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete com a preposição correta.",
          sentence: "I was listening ___ a podcast while waiting ___ the build.",
          answers: [["to"], ["for"]],
          explanation:
            "`listen to` e `wait for` são blocos fixos. Em português nenhum dos dois leva preposição.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She married with a lawyer last year.",
          answers: [
            "She married a lawyer last year.",
            "She got married to a lawyer last year.",
          ],
          explanation:
            "`marry` não leva preposição. Com `get married`, a preposição é `to`, nunca `with`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "We ___ at the airport around noon.",
          options: ["arrived to", "arrived in", "arrived at", "arrived"],
          answer: 2,
          explanation:
            "`arrive at` para lugares específicos, `arrive in` para cidades e países. Nunca `arrive to`.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "O verbo pede preposição ou não?",
          buckets: ["Pede preposição", "Sem preposição"],
          items: [
            { text: "depend ___", bucket: "Pede preposição" },
            { text: "discuss ___", bucket: "Sem preposição" },
            { text: "listen ___", bucket: "Pede preposição" },
            { text: "call ___", bucket: "Sem preposição" },
            { text: "focus ___", bucket: "Pede preposição" },
            { text: "answer ___", bucket: "Sem preposição" },
          ],
          explanation:
            "A lista de verbos sem preposição é curta — decore ela e você elimina metade dos erros.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eu vou ligar para ele amanhã.",
          answers: ["I'll call him tomorrow.", "I will call him tomorrow."],
          explanation:
            "`call` é transitivo direto em inglês. ❌ [[call to him]] é tradução literal de *ligar para*.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue o verbo à preposição.",
          pairs: [
            { left: "rely", right: "on" },
            { left: "consist", right: "of" },
            { left: "participate", right: "in" },
            { left: "deal", right: "with" },
          ],
          explanation:
            "Guarde sempre o verbo com a preposição colada, como se fosse uma palavra só.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "judge",
          prompt: "Isso é inglês correto?",
          sentence: "That's the tool I was telling you about.",
          natural: true,
          explanation:
            "Preposição no fim é inglês normal e natural. A proibição é um mito de gramática prescritiva.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com `by` ou `with`.",
          sentence: "I'll send it ___ email, ___ my phone.",
          answers: [["by"], ["with"]],
          explanation:
            "`by` + método geral sem artigo. `with` + instrumento específico.",
          difficulty: 3,
        },
        {
          id: "e11",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'm going to home after the call.",
          answers: [
            "I'm going home after the call.",
          ],
          explanation:
            "`home` não leva preposição nem artigo nesse uso: [[go home]], [[get home]], [[come home]].",
          difficulty: 1,
        },
      ],
    },
  ],
};
