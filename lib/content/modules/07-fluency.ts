import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 7 — Fluência                                                */
/*  Source sections 18, 19, 28, 31, 32                                 */
/* ------------------------------------------------------------------ */

export const fluencyModule: Module = {
  id: "fluency",
  title: "Speaking & Listening",
  titlePt: "Fluência",
  description:
    "Por que você não entende inglês falado, o que os nativos realmente dizem, e como ser entendido mesmo errando.",
  icon: "fluency",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "fl-spoken",
      number: "18",
      title: "Spoken English",
      titlePt: "Inglês falado de verdade",
      priority: "essential",
      summary:
        "gonna, wanna, gotta. Nativos não escrevem assim — eles falam assim. Você precisa reconhecer, não produzir.",
      tags: ["spoken", "gonna", "wanna", "gotta", "reduções", "contrações", "fala"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Na fala natural, as formas completas soam erradas ou enfáticas demais. ⚠️ *\u201cI **am** going to the office\u201d* soa como se você estivesse discutindo com alguém. ✅ [[I'm going to the office.]]",
        },
        {
          kind: "heading",
          text: "As reduções clássicas",
        },
        {
          kind: "table",
          headers: ["Forma completa", "Reduzida", "Exemplo"],
          rows: [
            ["going to", "**gonna**", "I'm **gonna** check."],
            ["want to", "**wanna**", "Do you **wanna** grab lunch?"],
            ["got to / have got to", "**gotta**", "I **gotta** go."],
            ["have to", "**hafta**", "I **hafta** finish this."],
            ["kind of", "**kinda**", "It's **kinda** slow."],
            ["let me", "**lemme**", "**Lemme** check."],
            ["give me", "**gimme**", "**Gimme** a sec."],
            ["out of", "**outta**", "We're **outta** time."],
            ["don't know", "**dunno**", "I **dunno**."],
            ["what do you", "**whaddya**", "**Whaddya** think?"],
            ["did you", "**didja**", "**Didja** see that?"],
            ["because", "**'cause / cuz**", "**'Cause** it's broken."],
            ["them", "**'em**", "Tell **'em** I'm coming."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Distinção crítica",
          text: "**`gonna` é uma pronúncia, não uma palavra.** Nativos escrevem *going to* e falam *gonna*. Faça o mesmo. Escrever *\u201cI'm gonna send the proposal\u201d* num e-mail para cliente parece desleixo.",
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Armadilha gramatical",
          text: "`gonna` só substitui *going to* + **verbo**, nunca *going to* + **lugar**. ✅ [[I'm gonna call him.]] ❌ [[I'm gonna the office.]] → ✅ [[I'm going to the office.]]",
        },
        {
          kind: "heading",
          text: "Onde cada registro cabe",
        },
        {
          kind: "table",
          headers: ["Contexto", "Usar reduções?"],
          rows: [
            ["Conversa casual com amigos", "✅ sim, natural"],
            ["Chat de time (Slack, WhatsApp)", "✅ sim, comum"],
            ["Videochamada com colegas", "✅ sim, na fala"],
            ["Apresentação", "⚠️ algumas (*gonna* tudo bem, *gimme* não)"],
            ["Entrevista", "⚠️ na fala sim, com moderação"],
            ["E-mail profissional", "❌ escreva por extenso"],
            ["Documentação, relatórios, contratos", "❌ nunca"],
          ],
        },
        {
          kind: "heading",
          text: "Contrações que a escrita não mostra",
        },
        {
          kind: "table",
          headers: ["Escrito", "Falado soa como"],
          rows: [
            ["should have", "*shoulda*"],
            ["could have", "*coulda*"],
            ["would have", "*woulda*"],
            ["must have", "*musta*"],
            ["I would have", "*I'da*"],
            ["it will", "*itl*"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Consequência para a escuta",
          text: "*\u201cI would have told you\u201d* soa como **\u201cI'da told ya.\u201d** Se você está esperando ouvir quatro palavras separadas, perde a frase inteira.",
        },
        {
          kind: "heading",
          text: "Por que as palavras somem",
        },
        {
          kind: "pairs",
          title: "Quatro processos explicam quase tudo",
          items: [
            { term: "Linking", meaning: "consoante final gruda na vogal seguinte: *an apple* → \u201ca-napple\u201d" },
            { term: "Redução", meaning: "palavras funcionais viram /ə/: *to, for, of, and, can* quase desaparecem" },
            { term: "Elisão", meaning: "sons somem: *next day* → \u201cnexday\u201d, *I don't know* → \u201cI dunno\u201d" },
            { term: "Assimilação", meaning: "sons se contaminam: *did you* → \u201cdidja\u201d, *would you* → \u201cwouldja\u201d" },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          text: "O inglês tem ritmo **acentual**: só as palavras importantes recebem tempo. O português é silábico — cada sílaba dura o mesmo. É por isso que o inglês falado parece rápido demais.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija para um e-mail profissional.",
          wrong: "I'm gonna send the proposal tomorrow.",
          answers: [
            "I'm going to send the proposal tomorrow.",
            "I will send the proposal tomorrow.",
            "I'll send the proposal tomorrow.",
          ],
          explanation:
            "`gonna` é pronúncia, não escrita. Em e-mail sempre escreva `going to` ou use `will`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija o erro gramatical.",
          wrong: "I'm gonna the office now.",
          answers: ["I'm going to the office now."],
          explanation:
            "`gonna` só substitui *going to* antes de **verbo**. Antes de lugar, é sempre `going to`.",
          difficulty: 3,
        },
        {
          id: "e3",
          kind: "match",
          prompt: "Ligue a forma reduzida à forma completa.",
          pairs: [
            { left: "gonna", right: "going to" },
            { left: "wanna", right: "want to" },
            { left: "gotta", right: "have got to" },
            { left: "lemme", right: "let me" },
            { left: "dunno", right: "don't know" },
          ],
          explanation:
            "Reconhecer essas cinco já melhora muito a compreensão de filme e videochamada.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Você ouve *\"I'da told ya if I knew.\"* O que foi dito?",
          options: [
            "I do tell you if I knew.",
            "I would have told you if I knew.",
            "I did tell you if I knew.",
            "I had told you if I knew.",
          ],
          answer: 1,
          explanation:
            "*would have* → *would've* → *woulda* → *'da*. E *you* → *ya*. Contração sobre contração.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Onde você pode usar reduções?",
          buckets: ["Pode usar", "Não use"],
          items: [
            { text: "Chat do time no Slack", bucket: "Pode usar" },
            { text: "E-mail para cliente", bucket: "Não use" },
            { text: "Conversa casual na call", bucket: "Pode usar" },
            { text: "Documentação técnica", bucket: "Não use" },
            { text: "Contrato", bucket: "Não use" },
          ],
          explanation:
            "Regra simples: se você **fala**, reduções são naturais. Se você **escreve** formalmente, nunca.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é apropriado numa apresentação de trabalho?",
          sentence: "So I'm gonna walk you through the architecture.",
          natural: true,
          explanation:
            "`gonna` falado é aceitável até em apresentação. Já *gimme* e *dunno* seriam informais demais.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Escreva a forma completa de *shoulda*.",
          sentence: "I ___ ___ tested it before merging.",
          answers: [["should"], ["have"]],
          explanation:
            "*shoulda* = `should have`. Nunca escreva *should of* — é erro até entre nativos.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Escreva de forma profissional:",
          pt: "Preciso ir, tenho outra reunião.",
          answers: [
            "I have to go, I have another meeting.",
            "I need to go, I have another meeting.",
            "I've got to go, I have another meeting.",
          ],
          explanation:
            "Na fala seria *I gotta go*. Por escrito, use `have to` ou `need to`.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase por extenso.",
          tokens: ["Do", "you", "want", "to", "grab", "lunch"],
          answers: [["Do", "you", "want", "to", "grab", "lunch"]],
          explanation:
            "Falado vira *\u201cD'ya wanna grab lunch?\u201d*. Escrito, sempre por extenso.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "fl-listening",
      number: "19",
      title: "Listening",
      titlePt: "Por que você não entende",
      priority: "essential",
      summary:
        "O problema não é vocabulário. É que as palavras que você conhece não soam como você espera.",
      tags: ["listening", "escuta", "shadowing", "subtitles", "accents", "compreensão"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Você lê bem e não entende o áudio. O motivo não é vocabulário — é que **as palavras que você conhece não soam como você espera**.",
        },
        {
          kind: "heading",
          text: "Pares que soam quase iguais",
        },
        {
          kind: "table",
          headers: ["Par", "Diferença"],
          rows: [
            ["can / can't 🇺🇸", "acento e duração da vogal — `can't` é o **tônico**"],
            ["than / then", "na fala rápida os dois viram /ðən/ — o contexto decide"],
            ["walk / work", "vogal"],
            ["thirty / thirteen", "acento: **THIR**-ty × thir-**TEEN**"],
            ["sheet / shit, beach / bitch", "/i/ longo × curto — vale praticar por segurança"],
            ["desert / dessert", "acento"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Números e datas são o pior caso",
          text: "13 × 30, 14 × 40, 15 × 50. E datas: 🇺🇸 *March 5th / 3/5* × 🇬🇧 *5 March / 5/3* — fonte real de erro em negócios. **Sempre confirme:** *\u201cSorry, was that thirteen — one-three — or thirty?\u201d*",
        },
        {
          kind: "text",
          text: "Na fala rápida, as terminações `-s` e `-ed` desaparecem. [[He works]] e [[He work]] soam parecidos; [[I finished]] soa como [[I finish]]. Você precisa usar **contexto e marcadores de tempo** para saber o tempo verbal.",
        },
        {
          kind: "heading",
          text: "Estratégias que funcionam de verdade",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Ouça o mesmo áudio três vezes.** Sem legenda → com legenda em inglês → sem legenda de novo. É na terceira que o aprendizado acontece.",
            "**Legenda em inglês, nunca em português.** Legenda em português desliga sua escuta por completo.",
            "**Shadowing** — o maior retorno por minuto. Toque 10–20 segundos e repita **em voz alta** na mesma velocidade, copiando ritmo e entonação.",
            "**Ditado em clipes curtos.** Escreva exatamente o que ouve em 30 segundos e compare com a transcrição. As lacunas são suas fraquezas específicas.",
            "**Varie o input de propósito.** Podcasts com transcrição, palestras da sua área, YouTube a 0,75× e depois 1×.",
            "**Carregue contexto antes.** Leia a pauta, o título, os slides. Contexto faz metade do trabalho de escuta.",
          ],
        },
        {
          kind: "heading",
          text: "Interromper com elegância",
        },
        {
          kind: "pattern",
          lines: [
            "Sorry, could you say that again?",
            "Sorry, I didn't catch that.",
            "Could you repeat the last part?",
            "Sorry, could you speak a bit more slowly?",
            "Just to make sure I understood \u2014 you're saying that ...?",
            "Was that thirteen or thirty?",
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Nunca finja que entendeu",
          text: "Em contexto profissional, entender errado um requisito custa muito mais caro do que um momento pedindo repetição.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Aceite compreensão parcial",
          text: "Entender **70%** de uma conversa rápida entre nativos é normal para um bom falante não-nativo. O sentido sobrevive a 70%.",
        },
        {
          kind: "callout",
          tone: "key",
          title: "Nota prática",
          text: "A maior parte das suas conversas em inglês provavelmente será com outros **não-nativos**. Inglês internacional é mais devagar, mais explícito e usa menos gírias. Não otimize só para inglês de Hollywood.",
        },
        {
          kind: "compare",
          left: {
            title: "Faça",
            tone: "good",
            items: [
              "escuta ativa de 15 minutos",
              "shadowing em voz alta",
              "legenda em inglês",
              "ditado de clipes curtos",
            ],
          },
          right: {
            title: "Não faça",
            tone: "bad",
            items: [
              "3 horas de inglês como música de fundo",
              "conteúdo muito acima do nível com legenda em PT",
              "parar na primeira palavra desconhecida",
              "decorar símbolos fonéticos exaustivamente",
            ],
          },
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Você ouve um *can* forte e nítido no inglês americano. Provavelmente é:",
          options: ["can", "can't", "cane", "con"],
          answer: 1,
          explanation:
            "No inglês americano, `can` é átono e reduzido (/kən/). Se está claro e tônico, é `can't`.",
          difficulty: 3,
        },
        {
          id: "e2",
          kind: "translate",
          prompt: "Peça repetição de forma educada:",
          pt: "Desculpa, não entendi essa última parte.",
          answers: [
            "Sorry, I didn't catch that last part.",
            "Sorry, could you repeat the last part?",
            "Sorry, I didn't catch the last part.",
          ],
          explanation:
            "`didn't catch` é a forma mais natural de dizer *não peguei*. Evite [[Repeat, please]], que soa como ordem.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "judge",
          prompt: "Isso é uma boa prática de escuta?",
          sentence: "Watching movies with Portuguese subtitles for two hours a day.",
          natural: false,
          correction: "Watching with English subtitles, then again without them.",
          explanation:
            "Legenda em português desliga a escuta. Você lê em vez de ouvir e não aprende nada.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "match",
          prompt: "Ligue o par ao que os distingue.",
          pairs: [
            { left: "thirty / thirteen", right: "sílaba tônica" },
            { left: "sheet / shit", right: "duração da vogal" },
            { left: "can / can't", right: "acento e tensão" },
            { left: "walk / work", right: "qualidade da vogal" },
          ],
          explanation:
            "Quase nunca é o som isolado — é acento e duração. Por isso decorar fonemas ajuda pouco.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "fill",
          prompt: "Complete o pedido de confirmação de número.",
          sentence: "Sorry, was that thirteen — one-three — ___ thirty?",
          answers: [["or"]],
          explanation:
            "Soletrar o número (*one-three*) elimina a ambiguidade. Faça isso sempre com prazos e valores.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Boa ou má estratégia de escuta?",
          buckets: ["Boa estratégia", "Má estratégia"],
          items: [
            { text: "Shadowing em voz alta", bucket: "Boa estratégia" },
            { text: "Podcast como música de fundo", bucket: "Má estratégia" },
            { text: "Ditado de 30 segundos", bucket: "Boa estratégia" },
            { text: "Parar na primeira palavra desconhecida", bucket: "Má estratégia" },
            { text: "Ler a pauta antes da reunião", bucket: "Boa estratégia" },
          ],
          explanation:
            "Escuta ativa curta vence escuta passiva longa. Sempre.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "order",
          prompt: "Monte o pedido de confirmação de entendimento.",
          tokens: ["Just to make sure", "I understood", "you're saying", "that we postpone"],
          answers: [
            ["Just to make sure", "I understood", "you're saying", "that we postpone"],
          ],
          explanation:
            "Repetir o que você entendeu é a técnica mais eficaz para evitar mal-entendido caro.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fix",
          prompt: "Deixe o pedido mais educado.",
          wrong: "Repeat, please.",
          answers: [
            "Could you repeat that, please?",
            "Sorry, could you say that again?",
            "Sorry, could you repeat that?",
          ],
          explanation:
            "Imperativo soa como ordem em inglês. Pedidos usam `Could you…?`.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "fl-being-understood",
      number: "28",
      title: "Being Understood",
      titlePt: "Ser entendido",
      priority: "essential",
      summary:
        "Nem todo erro é igual. Alguns só soam estrangeiros; outros invertem sua mensagem. Saiba a diferença.",
      tags: ["clareza", "clarity", "erros", "prioridade", "comunicação"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Fluência e clareza vencem precisão. Quem fala com segurança cometendo erros pequenos comunica melhor do que quem pausa cinco segundos para conjugar certo.",
        },
        {
          kind: "heading",
          text: "O que realmente importa para ser entendido",
        },
        {
          kind: "pattern",
          lines: [
            "1. Ordem das palavras                 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  enorme",
            "2. Verbo principal e vocabul\u00e1rio      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   enorme",
            "3. Acento e ritmo da frase            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     grande",
            "4. Sujeito claro                      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      grande",
            "5. Tempo verbal (quando o tempo importa) \u2588\u2588\u2588\u2588\u2588\u2588  m\u00e9dio",
            "6. Preposi\u00e7\u00f5es-chave                   \u2588\u2588\u2588\u2588\u2588         m\u00e9dio",
            "8. Artigos                            \u2588\u2588            pequeno",
            "9. Concord\u00e2ncia perfeita (-s)          \u2588\u2588            pequeno",
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Erros inofensivos",
            caption: "soam não-nativos, mas não travam a comunicação",
            tone: "neutral",
            items: [
              "He work here.",
              "I like the music.",
              "at the weekend / on the weekend",
              "Two informations",
              "Different than",
              "Sotaque leve",
            ],
          },
          right: {
            title: "Erros que mudam o sentido",
            caption: "corrija estes primeiro",
            tone: "bad",
            items: [
              "too no lugar de very",
              "mustn't no lugar de don't have to",
              "until no lugar de by",
              "hardly no lugar de hard",
              "borrow / lend trocados",
              "Número errado (13/30)",
              "Falsos cognatos",
            ],
          },
        },
        {
          kind: "heading",
          text: "Estratégias para clareza máxima",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "1. Frases curtas",
          text: "Frases curtas não são \u201cinglês simples\u201d. São **bom inglês**. Escritores profissionais nativos usam frases curtas.",
        },
        {
          kind: "compare",
          left: {
            title: "⚠️ Frase longa",
            tone: "bad",
            items: [
              "I would like to inform you that regarding the issue that we discussed in our meeting last week, which was related to the performance of the system, we have identified that the problem is being caused by a query that is not optimized.",
            ],
          },
          right: {
            title: "✅ Frases curtas",
            tone: "good",
            items: [
              "I want to update you on the performance issue from last week's meeting.",
              "We found the cause: an unoptimized query.",
            ],
          },
        },
        {
          kind: "callout",
          tone: "key",
          title: "2. Ponto principal primeiro",
          text: "O leitor de inglês espera a conclusão no **começo**, não no fim. É o oposto de boa parte da tradição de escrita em português.",
        },
        {
          kind: "compare",
          left: {
            title: "⚠️ Conclusão no fim",
            tone: "bad",
            items: [
              "After analyzing the logs, checking the metrics, and running several tests, we concluded that we should postpone the release.",
            ],
          },
          right: {
            title: "✅ Conclusão primeiro",
            tone: "good",
            items: [
              "We should postpone the release. Here's why: logs, metrics, tests.",
            ],
          },
        },
        {
          kind: "list",
          title: "As outras três",
          ordered: true,
          items: [
            "**Use o vocabulário que você domina.** ⚠️ [[We need to ameliorate the situation]] → ✅ [[We need to improve this.]]",
            "**Sinalize sua estrutura.** [[There are three issues. First… Second… Finally…]]",
            "**Confirme informação crítica.** Repita números, datas e prazos em voz alta.",
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "categorize",
          prompt: "O erro muda o sentido ou só soa estrangeiro?",
          buckets: ["Muda o sentido", "Só soa estrangeiro"],
          items: [
            { text: "too no lugar de very", bucket: "Muda o sentido" },
            { text: "He work here.", bucket: "Só soa estrangeiro" },
            { text: "until no lugar de by", bucket: "Muda o sentido" },
            { text: "I like the music.", bucket: "Só soa estrangeiro" },
            { text: "borrow e lend trocados", bucket: "Muda o sentido" },
            { text: "Two informations", bucket: "Só soa estrangeiro" },
          ],
          explanation:
            "Priorize o que causa mal-entendido. Erro de artigo nunca fez ninguém perder um prazo.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Reescreva de forma clara e direta.",
          wrong: "We need to ameliorate the current situation of the deployment process.",
          answers: [
            "We need to improve the deployment process.",
            "We should improve the deployment process.",
          ],
          explanation:
            "Palavra rebuscada que você não domina é risco. Vocabulário simples e correto vence sempre.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Qual abertura de e-mail funciona melhor em inglês profissional?",
          options: [
            "After analyzing the logs and running several tests, we concluded that we should postpone the release.",
            "We should postpone the release. Here's why.",
            "Regarding the matter we discussed, I would like to inform you that...",
            "In light of recent findings pertaining to the release...",
          ],
          answer: 1,
          explanation:
            "O leitor de inglês espera a conclusão primeiro. Contexto vem depois, se ele quiser.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "judge",
          prompt: "Isso é bom inglês profissional?",
          sentence: "There are three issues. First, the cache. Second, the query. Finally, the index.",
          natural: true,
          explanation:
            "Sinalizar a estrutura antes de listar facilita muito a compreensão — sobretudo por áudio.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "fix",
          prompt: "Corrija — você quer dizer que é opcional.",
          wrong: "You mustn't join the call if you're busy.",
          answers: ["You don't have to join the call if you're busy."],
          explanation:
            "`mustn't` proíbe. Esse é um dos erros que **invertem** a mensagem — prioridade máxima.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "translate",
          prompt: "Diga em inglês, de forma curta e direta:",
          pt: "Encontramos a causa: uma query não otimizada.",
          answers: [
            "We found the cause: an unoptimized query.",
            "We found the cause: a query that isn't optimized.",
          ],
          explanation:
            "Dois pontos e um substantivo. Não precisa de oração relativa nem de voz passiva.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "match",
          prompt: "Ligue o erro ao risco que ele cria.",
          pairs: [
            { left: "until em vez de by", right: "prazo errado" },
            { left: "hardly em vez de hard", right: "sentido oposto" },
            { left: "13 confundido com 30", right: "erro de negócio" },
            { left: "pretend em vez de intend", right: "significado totalmente errado" },
          ],
          explanation:
            "Todos esses passam despercebidos pelo interlocutor — ele entende, mas entende errado.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete o sinalizador de estrutura.",
          sentence: "There are three issues. ___, the cache. Second, the query. ___, the index.",
          answers: [["First"], ["Finally", "Third", "Last"]],
          explanation:
            "`First… Second… Finally…` é a sequência padrão. Ela prepara o ouvinte para o que vem.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "fl-conversation",
      number: "31",
      title: "Conversation Toolkit",
      titlePt: "Kit de conversação",
      priority: "essential",
      summary:
        "Como pedir repetição, ganhar tempo, discordar e manter a conversa viva sem travar.",
      tags: ["conversation", "conversação", "small talk", "clarification", "repetir"],
      blocks: [
        {
          kind: "callout",
          tone: "warn",
          title: "\u201cHow are you?\u201d é cumprimento, não pergunta",
          text: "A resposta esperada é curta e positiva. Não dê um relatório de saúde. ✅ [[Good, thanks — you?]]",
        },
        {
          kind: "heading",
          text: "Manter a conversa viva",
        },
        {
          kind: "pattern",
          lines: [
            "Really? / Oh, wow. / That's interesting.",
            "Tell me more about that.",
            "How did that go?     What happened next?",
            "That makes sense.    I know what you mean.",
            "Same here.           I've been there.",
            "What about you?      How about you?",
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "A pergunta de volta é a habilidade central",
          text: "O inglês espera que você devolva a pergunta: *\u201cHow was your weekend?\u201d* — *\u201cGood! I went hiking. **How about you?**\u201d* Sem isso, a conversa morre.",
        },
        {
          kind: "heading",
          text: "Pedir repetição",
        },
        {
          kind: "table",
          headers: ["Nível", "Expressão"],
          rows: [
            ["Mais educado", "I'm sorry, could you repeat that, please?"],
            ["Padrão", "Sorry, could you say that again?"],
            ["Padrão", "Sorry, I didn't catch that."],
            ["Casual 🗣️", "Sorry, what? / Come again?"],
            ["Específico", "Sorry, did you say Tuesday or Thursday?"],
            ["Velocidade", "Could you slow down a bit?"],
            ["Conexão", "Sorry, you cut out. Could you repeat that?"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          text: "Evite *\u201cRepeat, please.\u201d* — soa como ordem. Use *\u201cCould you repeat that?\u201d*",
        },
        {
          kind: "heading",
          text: "Dizer que não entendeu",
        },
        {
          kind: "pattern",
          lines: [
            "Sorry, I don't follow.",
            "I'm not sure I understand.",
            "Sorry, you lost me.",
            "I didn't get that last part.",
            "Sorry, what does \u201cX\u201d mean?",
            "Could you explain that in a different way?",
            "Sorry \u2014 English isn't my first language. Could you rephrase that?",
          ],
          caption: "A última é totalmente aceitável e frequentemente apreciada. As pessoas se ajustam na hora.",
        },
        {
          kind: "heading",
          text: "Ganhar tempo",
        },
        {
          kind: "pattern",
          lines: [
            "That's a good question.",
            "Let me think about that for a second.",
            "Hmm, good point \u2014 give me a moment.",
            "Well, it depends.",
            "That's a tricky one.",
            "How should I put this...",
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "Ganhar tempo em voz alta é muito melhor do que silêncio. Silêncio numa call soa como problema de conexão ou de compreensão.",
        },
        {
          kind: "heading",
          text: "Concordar e discordar",
        },
        {
          kind: "table",
          headers: ["Função", "Expressões"],
          rows: [
            ["Concordar forte", "Absolutely. / Exactly. / Couldn't agree more."],
            ["Concordar parcial", "I see your point, but… / That's fair, though…"],
            ["Discordar suave", "I'm not sure I agree. / I see it a bit differently."],
            ["Discordar direto", "I disagree. *(use com cuidado)*"],
            ["Propor alternativa", "What if we…? / Have you considered…?"],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "Discordância direta soa mais agressiva em inglês do que em português. *\u201cI disagree\u201d* seco pode congelar a sala. Prefira *\u201cI see it a bit differently.\u201d*",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Torne o pedido educado.",
          wrong: "Repeat, please.",
          answers: [
            "Could you repeat that, please?",
            "Sorry, could you say that again?",
            "Sorry, could you repeat that?",
          ],
          explanation:
            "Imperativo soa como ordem em inglês. Pedido educado usa `Could you…?`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Alguém diz *\"How are you?\"* ao passar por você no corredor. Melhor resposta:",
          options: [
            "I've been having some back pain and I didn't sleep well.",
            "Good, thanks — you?",
            "I am fine, thank you, and you, how are you?",
            "Why do you ask?",
          ],
          answer: 1,
          explanation:
            "É cumprimento, não consulta médica. Resposta curta, positiva, e devolva a pergunta.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Discorde de forma suave:",
          pt: "Eu vejo isso de um jeito um pouco diferente.",
          answers: [
            "I see it a bit differently.",
            "I see it slightly differently.",
          ],
          explanation:
            "Discordância suavizada é a norma em inglês corporativo. Direto demais soa hostil.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete a devolução da pergunta.",
          sentence: "Good, thanks! I went hiking. How ___ you?",
          answers: [["about"]],
          explanation:
            "`How about you?` ou `What about you?` mantém a conversa viva. Sem isso, ela morre.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Qual a função de cada expressão?",
          buckets: ["Pedir repetição", "Ganhar tempo", "Discordar"],
          items: [
            { text: "Sorry, I didn't catch that.", bucket: "Pedir repetição" },
            { text: "That's a good question.", bucket: "Ganhar tempo" },
            { text: "I see it a bit differently.", bucket: "Discordar" },
            { text: "Could you say that again?", bucket: "Pedir repetição" },
            { text: "Well, it depends.", bucket: "Ganhar tempo" },
            { text: "I'm not sure I agree.", bucket: "Discordar" },
          ],
          explanation:
            "Ter três frases prontas para cada função elimina o travamento em call.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é apropriado numa reunião de trabalho?",
          sentence: "Sorry — English isn't my first language. Could you rephrase that?",
          natural: true,
          explanation:
            "Totalmente aceitável e frequentemente apreciado. As pessoas ajustam o ritmo na hora.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "order",
          prompt: "Monte o pedido de clarificação.",
          tokens: ["Just so", "I'm clear", "you're saying", "we ship", "on Friday"],
          answers: [["Just so", "I'm clear", "you're saying", "we ship", "on Friday"]],
          explanation:
            "Reformular o que você entendeu é a técnica mais eficaz contra mal-entendido.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue a situação à expressão certa.",
          pairs: [
            { left: "A conexão falhou", right: "Sorry, you cut out." },
            { left: "Falaram rápido demais", right: "Could you slow down a bit?" },
            { left: "Não conhece a palavra", right: "Sorry, what does that mean?" },
            { left: "Precisa de um segundo", right: "Let me think about that." },
          ],
          explanation:
            "Ser específico sobre **o que** você não pegou ajuda muito mais do que um pedido genérico.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fix",
          prompt: "Suavize a discordância.",
          wrong: "No, you are wrong.",
          answers: [
            "I'm not sure I agree.",
            "I see it a bit differently.",
            "I'm not sure that's quite right.",
          ],
          explanation:
            "Dizer *you are wrong* em inglês é muito mais forte do que *você está errado* em português.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "fl-natives",
      number: "32",
      title: "What Natives Actually Say",
      titlePt: "O que nativos realmente dizem",
      priority: "useful",
      summary:
        "As expressões que aparecem em toda conversa real e que os livros de gramática ignoram.",
      tags: ["expressões", "idioms", "natives", "slang", "small talk", "reações"],
      blocks: [
        {
          kind: "heading",
          text: "Reações",
        },
        {
          kind: "table",
          headers: ["Situação", "O que se diz"],
          rows: [
            ["Boa notícia", "That's great! / Awesome. / Nice! / Good for you."],
            ["Má notícia", "That's too bad. / Sorry to hear that. / That sucks. 🗣️"],
            ["Surpresa", "No way! / Seriously? / You're kidding."],
            ["Concordância", "Exactly. / Totally. / For sure. / Tell me about it. 🗣️"],
            ["Entendimento", "Got it. / Makes sense. / Fair enough."],
            ["Empatia", "I know what you mean. / I've been there."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "*\u201cTell me about it!\u201d* **não** é um pedido de mais informação. Significa *\u201cnem me fale, sei exatamente como é\u201d*.",
        },
        {
          kind: "heading",
          text: "Expressões de trabalho que aparecem toda semana",
        },
        {
          kind: "pairs",
          items: [
            { term: "Let's circle back", meaning: "vamos retomar isso depois" },
            { term: "I'm swamped", meaning: "estou atolado de trabalho" },
            { term: "It's on my radar", meaning: "está no meu mapa, não esqueci" },
            { term: "Let's touch base", meaning: "vamos nos falar rapidinho" },
            { term: "Heads up", meaning: "aviso antecipado: *just a heads up*" },
            { term: "I'm out of the loop", meaning: "estou por fora" },
            { term: "Ballpark figure", meaning: "número aproximado" },
            { term: "Low-hanging fruit", meaning: "o que dá pra resolver rápido" },
            { term: "Bandwidth", meaning: "capacidade/tempo: *I don't have the bandwidth*" },
            { term: "Deep dive", meaning: "análise detalhada" },
          ],
        },
        {
          kind: "heading",
          text: "Amaciadores — a marca do inglês fluente",
        },
        {
          kind: "text",
          text: "Falantes nativos raramente afirmam coisas de forma nua. Eles envolvem a mensagem.",
        },
        {
          kind: "table",
          headers: ["Nu", "Envolvido"],
          rows: [
            ["This is wrong.", "I think there might be an issue here."],
            ["Do this.", "Would you mind doing this?"],
            ["I don't like it.", "I'm not a huge fan of it."],
            ["That won't work.", "I'm not sure that would work."],
            ["You're late.", "Just checking in — everything OK?"],
            ["Answer me.", "Any update on this?"],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Por que isso importa",
          text: "O português brasileiro já é indireto socialmente, mas usa **tom de voz** para isso. O inglês usa **estrutura**. Traduzir literalmente uma frase educada em português costuma gerar uma frase seca em inglês.",
        },
        {
          kind: "heading",
          text: "Small talk que funciona",
        },
        {
          kind: "pattern",
          lines: [
            "How's your week going?",
            "Any plans for the weekend?",
            "How's the project going?",
            "Long week?",
            "Did you catch the game?",
            "How's the weather over there?",
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Evite no small talk profissional: salário, idade, religião, política, estado civil, peso. A fronteira do aceitável é mais estreita nos EUA e no norte da Europa do que no Brasil.",
        },
        {
          kind: "heading",
          text: "Fechar conversas",
        },
        {
          kind: "pattern",
          lines: [
            "Anyway, I should get going.",
            "I'll let you go.",
            "Great catching up with you.",
            "Let's keep in touch.",
            "Talk soon.  /  Have a good one.",
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Alguém diz *\"Ugh, meetings all day.\"* e você concorda totalmente. O que responde?",
          options: [
            "Tell me about it.",
            "Tell me more about it.",
            "Explain it to me.",
            "Say it again.",
          ],
          answer: 0,
          explanation:
            "`Tell me about it!` é ironia fixa: *nem me fale*. Não é pedido de informação.",
          difficulty: 3,
        },
        {
          id: "e2",
          kind: "match",
          prompt: "Ligue a expressão corporativa ao significado.",
          pairs: [
            { left: "I'm swamped", right: "Estou atolado." },
            { left: "Let's circle back", right: "Vamos retomar depois." },
            { left: "Just a heads up", right: "Só avisando." },
            { left: "I don't have the bandwidth", right: "Não tenho capacidade agora." },
          ],
          explanation:
            "Essas aparecem toda semana em empresa internacional e nunca em livro de gramática.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Suavize para inglês profissional.",
          wrong: "This is wrong. Do it again.",
          answers: [
            "I think there might be an issue here. Could you take another look?",
            "I think there might be an issue here.",
          ],
          explanation:
            "Afirmação nua soa agressiva. O inglês profissional envolve a crítica em estrutura hipotética.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês natural:",
          pt: "Só avisando: a demo foi adiada.",
          answers: [
            "Just a heads up: the demo has been postponed.",
            "Just a heads up — the demo was postponed.",
            "Heads up: the demo has been postponed.",
          ],
          explanation:
            "`heads up` é o aviso antecipado padrão. Muito mais natural que [[Just warning you]].",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "É bom tema de small talk profissional?",
          buckets: ["Seguro", "Evite"],
          items: [
            { text: "How's your week going?", bucket: "Seguro" },
            { text: "How much do you earn?", bucket: "Evite" },
            { text: "Any plans for the weekend?", bucket: "Seguro" },
            { text: "Are you married?", bucket: "Evite" },
            { text: "How's the project going?", bucket: "Seguro" },
          ],
          explanation:
            "A fronteira do aceitável é mais estreita nos EUA e norte da Europa do que no Brasil.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso soa natural para encerrar uma conversa?",
          sentence: "Anyway, I should get going. Great catching up!",
          natural: true,
          explanation:
            "`Anyway` sinaliza o fechamento e `catching up` é a expressão padrão para reencontro.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete a reação a uma má notícia.",
          sentence: "Oh no, sorry ___ hear that.",
          answers: [["to"]],
          explanation:
            "`Sorry to hear that` é a resposta padrão para má notícia. Fixa, sem variação.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte o pedido suavizado de atualização.",
          tokens: ["Any", "update", "on", "this"],
          answers: [["Any", "update", "on", "this"]],
          explanation:
            "`Any update on this?` cobra sem cobrar. Muito melhor que [[Answer me]] ou [[Why haven't you replied?]].",
          difficulty: 1,
        },
      ],
    },
  ],
};
