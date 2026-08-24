import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 4 — Estrutura da Frase                                      */
/*  Source sections 6, 7, 14, 15, 20, 21                               */
/* ------------------------------------------------------------------ */

export const structureModule: Module = {
  id: "structure",
  title: "Sentence Structure",
  titlePt: "Estrutura da Frase",
  description:
    "Erro de gramática faz você parecer aprendiz. Erro de ordem das palavras faz você parecer confuso. Aqui está a diferença entre ser entendido e soar natural.",
  icon: "structure",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "s-questions",
      number: "6",
      title: "Questions",
      titlePt: "Perguntas",
      priority: "essential",
      summary:
        "Uma fórmula cobre quase tudo. E a pergunta indireta — a mais educada e a mais errada por brasileiros.",
      tags: ["questions", "perguntas", "wh", "indirect questions", "tag questions", "do"],
      blocks: [
        {
          kind: "pattern",
          title: "A fórmula universal",
          lines: ["(WH-word) + AUXILIAR + SUJEITO + VERBO ... ?"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Are you free tomorrow?" },
            { marker: "good", text: "Do you have a minute?" },
            { marker: "good", text: "Where do you work?" },
            { marker: "good", text: "When did they release it?" },
            { marker: "good", text: "How long have you been here?" },
          ],
        },
        {
          kind: "heading",
          text: "Perguntas de sujeito — sem auxiliar",
        },
        {
          kind: "text",
          text: "Quando *who/what/which* **é** o sujeito, não inverta nada e não acrescente `do`.",
        },
        {
          kind: "table",
          headers: ["Pergunta de sujeito (sem `do`)", "Pergunta de objeto (com `do`)"],
          rows: [
            ["**Who called** you?", "**Who did** you **call**?"],
            ["**What happened**?", "**What did** you **do**?"],
            ["**Who wants** coffee?", "**Who do** you **work** with?"],
            ["**What caused** the outage?", "**What did** it **cause**?"],
          ],
        },
        {
          kind: "heading",
          text: "Preposição no fim",
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português coloca a preposição na frente (*Com quem você falou?*). O inglês falado coloca no fim.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Who are you talking to?" },
            { marker: "warn", text: "With whom are you speaking?", note: "correto, mas muito formal" },
            { marker: "good", text: "What are you looking for?" },
            { marker: "good", text: "Which project are you working on?" },
            { marker: "good", text: "Where are you from?" },
          ],
        },
        {
          kind: "heading",
          text: "Perguntas indiretas — subutilizadas por brasileiros",
        },
        {
          kind: "rule",
          title: "Dentro de uma pergunta indireta, use a ordem de AFIRMATIVA.",
          text: "Sem inversão, sem `do/does/did`.",
        },
        {
          kind: "table",
          headers: ["Direta", "Indireta / educada"],
          rows: [
            ["Where is the office?", "Could you tell me **where the office is**?"],
            ["What time does it start?", "Do you know **what time it starts**?"],
            ["Did he call?", "I was wondering **if he called**."],
            ["Why did they cancel?", "I'd like to know **why they cancelled**."],
            ["Is she available?", "Do you know **whether she's available**?"],
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Could you tell me where is the office?" },
            { marker: "good", text: "Could you tell me where the office is?" },
          ],
        },
        {
          kind: "pattern",
          title: "Aberturas úteis",
          lines: [
            "Could you tell me ...          Do you know ...",
            "I was wondering if ...         Would you mind telling me ...",
            "I'd like to know ...           Do you happen to know ...",
          ],
        },
        {
          kind: "heading",
          text: "Question tags",
        },
        {
          kind: "pattern",
          lines: [
            "Afirmativa \u2192 tag negativa:  You're coming, aren't you?",
            "Negativa   \u2192 tag positiva:  He didn't call, did he?",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's ready, isn't it?" },
            { marker: "good", text: "You work with Ana, don't you?" },
            { marker: "good", text: "I'm late, aren't I?", note: "irregular" },
            { marker: "good", text: "Let's start, shall we?" },
            { marker: "spoken", text: "You sent it, right?", note: "muito mais fácil e sempre aceitável" },
          ],
        },
        {
          kind: "table",
          title: "Erros de brasileiros em perguntas",
          headers: ["❌", "✅", "Por quê"],
          rows: [
            ["Where you work?", "Where **do** you work?", "falta auxiliar"],
            ["What means this?", "What **does this mean**?", "ordem + auxiliar"],
            ["How is called this?", "What **is this called**?", "palavra interrogativa errada"],
            ["Did he came?", "Did he **come**?", "verbo base depois de `did`"],
            ["Do you know where is he?", "Do you know where **he is**?", "ordem em pergunta indireta"],
            ["How much people?", "How **many** people?", "contável → many"],
            ["What hour is it?", "**What time** is it?", "tradução literal"],
            ["Who is the responsible?", "**Who's responsible?**", "adjetivo não é substantivo"],
            ["Why you didn't call?", "Why **didn't you** call?", "falta inversão"],
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija a pergunta indireta.",
          wrong: "Could you tell me where is the meeting room?",
          answers: [
            "Could you tell me where the meeting room is?",
            "Could you tell me where the meeting room is",
          ],
          explanation:
            "Depois de `Could you tell me`, volta a ordem de afirmativa: sujeito antes do verbo.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "What means this error?",
          answers: [
            "What does this error mean?",
            "What does this mean?",
          ],
          explanation:
            "Verbo normal exige `do/does`, e o sujeito vem antes do verbo principal.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Qual está correta?",
          options: [
            "Who did call you?",
            "Who called you?",
            "Who do called you?",
            "Who does called you?",
          ],
          answer: 1,
          explanation:
            "`Who` é o sujeito da frase → nada de auxiliar. Compare com [[Who did you call?]], onde `who` é objeto.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês, do jeito natural:",
          pt: "Com quem você está falando?",
          answers: [
            "Who are you talking to?",
            "Who are you speaking to?",
          ],
          explanation:
            "Preposição no fim. [[With whom are you speaking?]] está certo, mas soa como advogado do século XIX.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "fill",
          prompt: "Complete a tag question.",
          sentence: "You're coming to the retro, ___ ___?",
          answers: [["aren't"], ["you"]],
          explanation:
            "Afirmativa → tag negativa, repetindo o auxiliar (`are`) e o sujeito.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "order",
          prompt: "Monte a pergunta.",
          tokens: ["How long", "have", "you", "been", "working", "here"],
          answers: [["How long", "have", "you", "been", "working", "here"]],
          explanation:
            "WH + auxiliar + sujeito + resto. O `have` sobe antes do sujeito.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I was wondering if you had a minute to talk.",
          natural: true,
          explanation:
            "Pergunta indireta com ordem de afirmativa. É a forma mais educada e mais usada no trabalho.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Why you didn't tell me?",
          answers: ["Why didn't you tell me?"],
          explanation:
            "Pergunta direta exige inversão: o auxiliar negativo vem antes do sujeito.",
          difficulty: 1,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue a pergunta direta à versão educada.",
          pairs: [
            { left: "Where is he?", right: "Do you know where he is?" },
            { left: "Did he call?", right: "I was wondering if he called." },
            { left: "How much is it?", right: "Can you tell me how much it is?" },
            { left: "Why did they cancel?", right: "I'd like to know why they cancelled." },
          ],
          explanation:
            "A versão indireta soa mais suave — e nela o verbo volta para depois do sujeito.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "choice",
          prompt: "Você quer perguntar as horas. O que diz?",
          options: [
            "What hour is it?",
            "What time is it?",
            "How much hours is it?",
            "Which hour is now?",
          ],
          answer: 1,
          explanation:
            "*Que horas são?* → [[What time is it?]]. `hour` significa a duração de 60 minutos, não o relógio.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "s-negation",
      number: "7",
      title: "Negation",
      titlePt: "Negação",
      priority: "essential",
      summary:
        "Uma negativa por oração. E a armadilha da resposta a pergunta negativa, onde o português leva você direto ao erro.",
      tags: ["negação", "negation", "not", "any", "no", "double negative", "hardly"],
      blocks: [
        {
          kind: "rule",
          title: "Coloque `not` depois do primeiro auxiliar. Se não houver, chame `do/does/did`.",
        },
        {
          kind: "table",
          headers: ["Tempo", "Negativa"],
          rows: [
            ["Present Simple", "I **don't** know. / He **doesn't** know."],
            ["Past Simple", "We **didn't** finish."],
            ["`be`", "It **isn't** ready. / They **weren't** there."],
            ["Present Perfect", "She **hasn't** replied."],
            ["Future", "I **won't** be late."],
            ["Modal", "You **shouldn't** do that."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Uma negativa por oração",
          text: "O português dobra a negativa (*Não vi ninguém*). O inglês não.",
        },
        {
          kind: "translation",
          pt: "Não tenho nada para dizer.",
          wrong: "I don't have nothing to say.",
          right: ["I have nothing to say.", "I don't have anything to say."],
          note: "`no/nothing/nobody` é mais enfático; `not … any` é mais neutro e mais comum na fala.",
        },
        {
          kind: "pattern",
          lines: [
            "verbo negativo + palavra com ANY   \u2192  I didn't see anyone.",
            "verbo positivo + palavra com NO    \u2192  I saw no one.",
            "                                       nunca os dois",
          ],
        },
        {
          kind: "heading",
          text: "Negativas duplas legítimas ✍️",
        },
        {
          kind: "text",
          text: "Negativa + prefixo negativo = um positivo suave. É formal e muito útil em contexto profissional.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's not uncommon.", note: "= é bastante comum, dito com cautela" },
            { marker: "good", text: "I don't disagree.", note: "= concordo em parte" },
            { marker: "good", text: "That's not impossible." },
          ],
        },
        {
          kind: "heading",
          text: "A armadilha das perguntas negativas",
        },
        {
          kind: "callout",
          tone: "br",
          title: "O inglês responde aos FATOS, não à pergunta",
          text: 'Em português, *\u201cVocê não vai?\u201d — \u201cNão, eu vou.\u201d* funciona. Em inglês isso vira contradição pura.',
        },
        {
          kind: "examples",
          items: [
            { marker: "neutral", text: '"Didn\'t you send it?"' },
            { marker: "good", text: '"Yes, I did."', note: "se você enviou" },
            { marker: "good", text: '"No, I didn\'t."', note: "se você não enviou" },
            { marker: "bad", text: '"No, I sent it."', note: "contradição — confunde o interlocutor" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Estratégia de segurança",
          text: "Não responda só com yes/no. Acrescente o verbo: *\u201cYes, I sent it this morning.\u201d* Isso elimina toda a ambiguidade.",
        },
        {
          kind: "heading",
          text: "Negativas suavizadas para o trabalho",
        },
        {
          kind: "table",
          headers: ["Direto", "Mais suave (profissional)"],
          rows: [
            ["No.", "I'm afraid not."],
            ["That's wrong.", "I'm not sure that's quite right."],
            ["I can't.", "I'd love to, but I can't. / I won't be able to."],
            ["I don't agree.", "I see it a bit differently."],
            ["We can't do that.", "That might be tricky."],
            ["No, it doesn't work.", "Actually, it's not working on my end."],
          ],
        },
        {
          kind: "pairs",
          title: "Expressões negativas de alta frequência",
          items: [
            { term: "not at all", meaning: '"Thanks!" — "Not at all." / "Would you mind?" — "Not at all."' },
            { term: "not really 🗣️", meaning: 'um "não" suave: "Do you like it?" — "Not really."' },
            { term: "not yet", meaning: '"Have you finished?" — "Not yet."' },
            { term: "not anymore", meaning: "I don't work there anymore." },
            { term: "hardly / barely", meaning: "quase negativo: I hardly ever go out." },
            { term: "no longer ✍️", meaning: "This feature is no longer supported." },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Escuta: can × can't",
          text: "No inglês americano, `can` é átono e reduzido (/kən/), enquanto `can't` é tônico e claro. Se você ouve um *can* **forte e nítido**, provavelmente é `can't`.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija a dupla negativa.",
          wrong: "I don't have nothing to say.",
          answers: [
            "I have nothing to say.",
            "I don't have anything to say.",
          ],
          explanation:
            "Uma negativa por oração. Ou o verbo é negativo e a palavra vira `any-`, ou o verbo é positivo e a palavra vira `no-`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Alguém pergunta *\"Didn't you send the invoice?\"* e você enviou. O que responde?",
          options: [
            "No, I sent it.",
            "Yes, I did — this morning.",
            "No, I did.",
            "Yes, I didn't.",
          ],
          answer: 1,
          explanation:
            "O inglês responde ao fato, não à polaridade da pergunta. Você enviou → `Yes`.",
          difficulty: 3,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete com `anything` ou `nothing`.",
          sentence: "I couldn't find ___ in the logs.",
          answers: [["anything"]],
          explanation:
            "`couldn't` já é a negativa da oração → a palavra seguinte vira `any-`.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Recuse de forma profissional:",
          pt: "Não vou conseguir.",
          answers: [
            "I won't be able to.",
            "I'm afraid I won't be able to.",
            "I'd love to, but I can't.",
          ],
          explanation:
            "Um `No.` seco soa ríspido em inglês. Suavizadores como `I'm afraid` são padrão no trabalho.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "It's not uncommon for the build to fail on Fridays.",
          natural: true,
          explanation:
            "Negativa + prefixo negativo = positivo cauteloso. Recurso muito usado em texto profissional.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Cada frase é negativa dupla errada ou inglês correto?",
          buckets: ["Errado", "Correto"],
          items: [
            { text: "I didn't see nobody.", bucket: "Errado" },
            { text: "I saw no one.", bucket: "Correto" },
            { text: "I don't disagree.", bucket: "Correto" },
            { text: "She doesn't know nothing.", bucket: "Errado" },
            { text: "She knows nothing.", bucket: "Correto" },
          ],
          explanation:
            "Duas negativas gramaticais se cancelam. Já negativa + prefixo (*dis-*, *un-*) é estilístico e aceito.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I don't work there no more.",
          answers: [
            "I don't work there anymore.",
            "I don't work there any more.",
          ],
          explanation: "Com verbo negativo, use `anymore`. `no more` exigiria verbo positivo.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["This feature", "is", "no longer", "supported"],
          answers: [["This feature", "is", "no longer", "supported"]],
          explanation:
            "`no longer` vai depois do `be` (ou antes do verbo principal). Registro formal.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue a recusa direta à versão profissional.",
          pairs: [
            { left: "No.", right: "I'm afraid not." },
            { left: "That's wrong.", right: "I'm not sure that's quite right." },
            { left: "I don't agree.", right: "I see it a bit differently." },
            { left: "We can't do that.", right: "That might be tricky." },
          ],
          explanation:
            "Em inglês corporativo, discordar direto demais é lido como agressivo. O suavizador não é hipocrisia — é convenção.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "s-connectors",
      number: "14",
      title: "Connectors",
      titlePt: "Conectivos",
      priority: "essential",
      summary:
        "Contraste, causa, resultado e tempo. Inclui as três armadilhas: because × because of, despite × although, in case × if.",
      tags: ["conectivos", "connectors", "however", "although", "despite", "because", "so"],
      blocks: [
        { kind: "heading", text: "Contraste" },
        {
          kind: "table",
          headers: ["Conectivo", "Gramática", "Registro", "Exemplo"],
          rows: [
            ["**but**", "+ oração", "todos", "It's slow, **but** it works."],
            ["**however**", "início, com vírgula", "neutro-formal", "**However,** the cost is high."],
            ["**although / though**", "+ oração", "todos", "**Although** it's slow, it works."],
            ["**despite / in spite of**", "+ substantivo ou `-ing`", "neutro", "**Despite** the delay, we shipped."],
            ["**whereas / while**", "+ oração (comparação)", "neutro-formal", "He's fast, **whereas** she's careful."],
            ["**on the other hand**", "início", "neutro", "**On the other hand,** it's cheaper."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "A armadilha nº 1: despite × although",
          text: "`although` pede **oração** (sujeito + verbo). `despite` pede **substantivo** ou `-ing`.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Despite it was late, we finished." },
            { marker: "good", text: "Although it was late, we finished." },
            { marker: "good", text: "Despite the late hour, we finished." },
            { marker: "good", text: "Despite being late, we finished." },
            { marker: "bad", text: "Despite of the delay, we shipped." },
            { marker: "good", text: "In spite of the delay, we shipped." },
          ],
        },
        { kind: "heading", text: "Causa e razão" },
        {
          kind: "table",
          headers: ["Conectivo", "Gramática", "Exemplo"],
          rows: [
            ["**because**", "+ oração", "…**because** the disk was full."],
            ["**because of**", "+ substantivo", "…**because of** the disk space."],
            ["**since / as**", "+ oração (razão conhecida)", "**Since** you're here, can you review this?"],
            ["**due to** ✍️", "+ substantivo", "**Due to** technical issues, the call was cancelled."],
            ["**the reason is that**", "+ oração", "**The reason is that** the cache wasn't invalidated."],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "because × because of",
          text: "❌ [[because of it was late]] → ✅ [[because it was late]]. ❌ [[because the traffic]] → ✅ [[because of the traffic]]. Regra: `of` só entra quando vem substantivo.",
        },
        { kind: "heading", text: "Resultado" },
        {
          kind: "table",
          headers: ["Conectivo", "Registro", "Exemplo"],
          rows: [
            ["**so**", "todos (o mais comum)", "It broke, **so** I fixed it."],
            ["**therefore**", "formal ✍️", "The test failed. **Therefore,** we cannot release."],
            ["**as a result**", "neutro-formal", "**As a result,** delivery was delayed."],
            ["**that's why**", "conversacional", "**That's why** we use Postgres."],
            ["**which is why**", "neutro", "The API changed, **which is why** it broke."],
            ["**so that**", "propósito, não resultado", "I wrote a script **so that** we don't repeat this."],
          ],
        },
        { kind: "heading", text: "Tempo" },
        {
          kind: "table",
          headers: ["Conectivo", "Significado", "Exemplo"],
          rows: [
            ["**as soon as**", "assim que", "I'll let you know **as soon as** I hear back."],
            ["**until / till**", "até o momento em que", "Wait **until** I confirm."],
            ["**once**", "depois que algo se completa", "**Once** it's deployed, we'll test."],
            ["**by the time**", "quando chegou o momento", "**By the time** I arrived, it was over."],
            ["**meanwhile / in the meantime**", "enquanto isso", "**In the meantime,** use the old version."],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Sem `will` depois de conectivo de tempo",
          text: "❌ [[I'll call you when I will arrive.]] → ✅ [[…when I arrive.]] ❌ [[As soon as he will finish…]] → ✅ [[As soon as he finishes…]]",
        },
        { kind: "heading", text: "Escolhendo o registro" },
        {
          kind: "table",
          headers: ["Ideia", "🗣️ Conversacional", "Neutro", "✍️ Formal"],
          rows: [
            ["Contraste", "but, though", "however", "nevertheless"],
            ["Resultado", "so, that's why", "as a result", "therefore, consequently"],
            ["Razão", "because, 'cause", "since, as", "due to, owing to"],
            ["Adição", "and, plus, also", "in addition", "moreover, furthermore"],
            ["Exemplo", "like", "for example", "for instance, such as"],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          text: "Em e-mails e reuniões, `however`, `therefore`, `moreover` são seguros mas um pouco duros. Profissionais nativos escrevem *but*, *so*, *also*. Não force formalidade.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Começar frase com And / But / So",
          text: "Livros dizem que não. A realidade: nativos fazem isso o tempo todo, na fala e na escrita profissional moderna. Evite apenas em documento acadêmico ou jurídico.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Despite it was late, we finished the release.",
          answers: [
            "Although it was late, we finished the release.",
            "Despite the late hour, we finished the release.",
            "Even though it was late, we finished the release.",
          ],
          explanation:
            "`despite` só aceita substantivo ou `-ing`. Com oração completa, use `although` ou `even though`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com `because` ou `because of`.",
          sentence: "The call was cancelled ___ technical issues, not ___ nobody showed up.",
          answers: [["because of"], ["because"]],
          explanation:
            "Substantivo → `because of`. Oração com sujeito e verbo → `because`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'll call you as soon as I will arrive.",
          answers: [
            "I'll call you as soon as I arrive.",
            "I'll call you as soon as I get there.",
          ],
          explanation:
            "Conectivo de tempo (`when`, `as soon as`, `until`, `before`, `after`) proíbe `will` na sua oração.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "___ of the delay, we still shipped on time.",
          options: ["Despite", "In spite", "Although", "However"],
          answer: 1,
          explanation:
            "A forma é `in spite of`. `despite` já vem sem `of`: ❌ [[despite of]].",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Cada conectivo pede o quê depois dele?",
          buckets: ["+ oração (sujeito + verbo)", "+ substantivo ou -ing"],
          items: [
            { text: "although", bucket: "+ oração (sujeito + verbo)" },
            { text: "despite", bucket: "+ substantivo ou -ing" },
            { text: "because", bucket: "+ oração (sujeito + verbo)" },
            { text: "due to", bucket: "+ substantivo ou -ing" },
            { text: "since", bucket: "+ oração (sujeito + verbo)" },
            { text: "instead of", bucket: "+ substantivo ou -ing" },
          ],
          explanation:
            "Essa é a única distinção que importa. Se você acertar isso, acerta 90% dos conectivos.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Leve um carregador, caso a bateria acabe.",
          answers: [
            "Bring a charger in case the battery dies.",
            "Take a charger in case the battery dies.",
            "Bring a charger in case the battery runs out.",
          ],
          explanation:
            "`in case` = precaução antecipada. Com `if`, você só levaria o carregador depois da bateria acabar.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso soa bem num e-mail de trabalho?",
          sentence: "Furthermore, it is imperative that we commence the process forthwith.",
          natural: false,
          correction: "Also, we should start as soon as possible.",
          explanation:
            "Formalidade excessiva soa artificial. Profissionais nativos escrevem `also` e `so`, não `furthermore` e `forthwith`.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue o conectivo informal ao equivalente formal.",
          pairs: [
            { left: "but", right: "however" },
            { left: "so", right: "therefore" },
            { left: "because", right: "due to" },
            { left: "also", right: "moreover" },
          ],
          explanation:
            "Saber o par te dá controle de registro: você escolhe o tom em vez de ser refém de uma única palavra.",
          difficulty: 1,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["The API changed", "which is why", "the integration", "broke"],
          answers: [["The API changed", "which is why", "the integration", "broke"]],
          explanation:
            "`which is why` liga uma consequência à oração inteira anterior. Muito usado em explicação técnica.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com `instead` ou `instead of`.",
          sentence: "Don't call me. Email me ___. And use Redis ___ Memcached.",
          answers: [["instead"], ["instead of"]],
          explanation:
            "`instead` fica sozinho no fim. `instead of` exige objeto logo depois.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "s-relative",
      number: "15",
      title: "Relative Clauses",
      titlePt: "Pronomes relativos",
      priority: "useful",
      summary:
        "who, which, that, whose. A vírgula muda o significado — e o `which` que se refere à frase inteira é ouro no inglês profissional.",
      tags: ["relative", "who", "which", "that", "whose", "defining", "vírgula"],
      blocks: [
        {
          kind: "pattern",
          lines: [
            "Pessoas  \u2192 who   (ou that em ora\u00e7\u00f5es definidoras)",
            "Coisas   \u2192 which (ou that em ora\u00e7\u00f5es definidoras)",
            "Posse    \u2192 whose (pessoas E coisas)",
            "Lugar    \u2192 where",
          ],
        },
        {
          kind: "heading",
          text: "A vírgula muda o significado",
        },
        {
          kind: "compare",
          left: {
            title: "Sem vírgula — definidora",
            caption: "identifica de qual você fala",
            tone: "brand",
            items: [
              "The engineers who worked overtime got a bonus.",
              "→ só esses ganharam. Os outros não.",
            ],
          },
          right: {
            title: "Com vírgula — explicativa",
            caption: "informação extra sobre todos",
            tone: "brand",
            items: [
              "The engineers, who worked overtime, got a bonus.",
              "→ todos trabalharam a mais e todos ganharam.",
            ],
          },
        },
        {
          kind: "list",
          title: "Três regras que decorrem disso",
          ordered: true,
          items: [
            "**`that` só existe em orações definidoras.** ❌ [[Ana, that wrote the parser, …]] → ✅ [[Ana, who wrote the parser, …]]",
            "**Orações explicativas exigem `who`/`which`/`whose`/`where`, com vírgulas.**",
            "**Em definidoras, você pode omitir o pronome se ele for objeto.** ✅ [[The file you sent is corrupted.]]",
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "O teste da omissão",
          text: "Se logo depois vem **sujeito + verbo** (*you sent*, *I met*), pode omitir. Se vem **verbo direto** (*broke*, *wrote*), não pode: [[The file that broke the build]] — o `that` é obrigatório.",
        },
        { kind: "heading", text: "`whose`" },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The developer whose code broke the build is fixing it." },
            { marker: "good", text: "A company whose products I really like." },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "`whose` ≠ `who's`. **`who's` = who is / who has.** [[Who's calling?]] *(who is)* × [[The man whose car was stolen.]] *(posse)*",
        },
        { kind: "heading", text: "`which` para a ideia inteira" },
        {
          kind: "text",
          text: "Muito útil em inglês profissional: `which` pode se referir à **oração inteira** anterior (sempre com vírgula).",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The build failed, which means we can't deploy today." },
            { marker: "good", text: "She resigned last week, which surprised everyone." },
            { marker: "good", text: "They cut the budget, which is why the project stalled." },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Não use `what` aqui",
          text: "O português usa *o que* para os dois casos, então brasileiros escrevem ❌ [[The build failed, what means…]] Em inglês é sempre `which`.",
        },
        {
          kind: "translation",
          pt: "O build falhou, o que significa que não podemos subir hoje.",
          wrong: "The build failed, what means that we can't deploy today.",
          right: ["The build failed, which means we can't deploy today."],
        },
        {
          kind: "heading",
          text: "Preposição no fim",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "The tool I told you about." },
            { marker: "good", text: "The person I spoke to." },
            { marker: "written", text: "The tool about which I told you.", note: "formal, quase jurídico" },
          ],
        },
        {
          kind: "table",
          title: "Erros comuns",
          headers: ["❌", "✅"],
          rows: [
            ["The man which called", "The man **who/that** called"],
            ["The book who I read", "The book **which/that** I read"],
            ["Ana, that is my manager, …", "Ana, **who** is my manager, …"],
            ["The house where I live in it", "The house **where** I live"],
            ["The file that you sent it", "The file **(that) you sent**"],
            ["The reason because it failed", "The reason **why** it failed"],
            ["People who works here", "People who **work** here"],
            ["I have a friend he lives in NY", "I have a friend **who** lives in NY"],
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "The build failed, what means we can't deploy.",
          answers: [
            "The build failed, which means we can't deploy.",
            "The build failed, which means we cannot deploy.",
          ],
          explanation:
            "Para se referir à oração inteira, o inglês usa `which`. `what` nunca funciona nessa posição.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "Ana, ___ wrote the parser, is on vacation.",
          options: ["that", "who", "which", "whose"],
          answer: 1,
          explanation:
            "Oração explicativa (entre vírgulas) nunca aceita `that`. Para pessoas, use `who`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija o objeto duplicado.",
          wrong: "The file that you sent it is corrupted.",
          answers: [
            "The file you sent is corrupted.",
            "The file that you sent is corrupted.",
          ],
          explanation:
            "O pronome relativo já é o objeto. Repetir com `it` é calco do português falado.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "judge",
          prompt: "As duas frases significam a mesma coisa? *The engineers who worked overtime got a bonus.*",
          sentence: "The engineers, who worked overtime, got a bonus.",
          natural: false,
          correction: "The engineers who worked overtime got a bonus.",
          explanation:
            "Com vírgulas, TODOS trabalharam a mais. Sem vírgulas, só o subgrupo que fez hora extra ganhou.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "fill",
          prompt: "Complete com `whose` ou `who's`.",
          sentence: "The developer ___ code broke the build is the one ___ fixing it.",
          answers: [["whose"], ["who's", "who is"]],
          explanation:
            "`whose` é posse. `who's` é contração de *who is*. Teste: se dá para expandir para *who is*, leva apóstrofo.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Pode omitir o pronome relativo?",
          buckets: ["Pode omitir", "Não pode omitir"],
          items: [
            { text: "The file (that) you sent", bucket: "Pode omitir" },
            { text: "The file that broke the build", bucket: "Não pode omitir" },
            { text: "The person (who) I met", bucket: "Pode omitir" },
            { text: "The person who called me", bucket: "Não pode omitir" },
          ],
          explanation:
            "Se logo depois vem sujeito + verbo, pode cortar. Se vem verbo direto, o pronome é o sujeito e é obrigatório.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eu tenho um amigo que mora em Nova York.",
          answers: [
            "I have a friend who lives in New York.",
            "I have a friend that lives in New York.",
          ],
          explanation:
            "O inglês exige o relativo. ❌ [[I have a friend he lives in NY]] é frase quebrada.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["The tool", "I", "told", "you", "about", "is free"],
          answers: [["The tool", "I", "told", "you", "about", "is free"]],
          explanation:
            "Pronome omitido e preposição no fim — a forma mais natural em inglês falado.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue o antecedente ao relativo correto.",
          pairs: [
            { left: "uma pessoa", right: "who" },
            { left: "uma coisa", right: "which" },
            { left: "posse", right: "whose" },
            { left: "um lugar", right: "where" },
          ],
          explanation:
            "`that` cobre pessoas e coisas, mas só em orações definidoras (sem vírgula).",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "s-word-order",
      number: "20",
      title: "Word Order",
      titlePt: "Ordem das palavras",
      priority: "essential",
      summary:
        "Erro de gramática soa aprendiz. Erro de ordem soa confuso. Nunca separe o verbo do seu objeto.",
      tags: ["word order", "ordem", "adjetivos", "advérbios", "explain me", "very much"],
      blocks: [
        {
          kind: "pattern",
          title: "O molde mestre",
          lines: ["SUBJECT + VERB + OBJECT + MANNER + PLACE + TIME"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "She explained the problem clearly to the team in the meeting yesterday." },
            { marker: "good", text: "I've been working on this remotely from Lisbon all week." },
            { marker: "good", text: "Yesterday, she explained the problem to the team.", note: "tempo pode ir para a frente" },
          ],
        },
        {
          kind: "rule",
          title: "Nunca separe o verbo do seu objeto.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I like very much this design." },
            { marker: "good", text: "I like this design very much." },
            { marker: "good", text: "I really like this design." },
            { marker: "bad", text: "She speaks fluently English." },
            { marker: "good", text: "She speaks English fluently." },
            { marker: "bad", text: "We discussed yesterday the budget." },
            { marker: "good", text: "We discussed the budget yesterday." },
          ],
        },
        { kind: "heading", text: "Adjetivo antes do substantivo" },
        {
          kind: "pattern",
          lines: [
            "\u274c a solution simple        \u2705 a simple solution",
            "\u274c ideas interesting        \u2705 interesting ideas",
            "\u274c the file more recent     \u2705 the most recent file",
          ],
        },
        {
          kind: "text",
          text: "Exceções em que o adjetivo vem depois: após verbos de ligação ([[The solution is simple]]) e em expressões fixas: *something new, anything else, nothing special, the person responsible, ten years old*.",
        },
        { kind: "heading", text: "Ordem de vários adjetivos" },
        {
          kind: "pattern",
          lines: [
            "Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Color \u2192 Origin \u2192 Material \u2192 Purpose \u2192 NOUN",
          ],
          caption: "Na prática: opinião primeiro, depois fatos físicos.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "a great little Italian restaurant" },
            { marker: "bad", text: "an Italian little great restaurant" },
          ],
        },
        { kind: "heading", text: "Advérbios de frequência" },
        {
          kind: "pattern",
          lines: [
            "antes do verbo principal / depois do `be` / depois do primeiro auxiliar",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I go always to the gym." },
            { marker: "good", text: "I always go to the gym." },
            { marker: "bad", text: "He is late always." },
            { marker: "good", text: "He is always late." },
            { marker: "bad", text: "I never have been there." },
            { marker: "good", text: "I have never been there." },
          ],
        },
        { kind: "heading", text: "Objetos indiretos" },
        {
          kind: "pattern",
          lines: [
            "verbo + PESSOA + COISA           \u2192  I sent Ana the file.",
            "verbo + COISA + to/for + PESSOA  \u2192  I sent the file to Ana.",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Erro top-5 de brasileiros",
          text: "Verbos que **exigem** `to`: *explain, describe, say, suggest, mention, recommend, announce, introduce, report*. O português permite *\u201cme explica o processo\u201d*; o inglês não.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Explain me the process." },
            { marker: "good", text: "Explain the process to me." },
            { marker: "bad", text: "He suggested me a solution." },
            { marker: "good", text: "He suggested a solution to me." },
            { marker: "bad", text: "Can you describe me the problem?" },
            { marker: "good", text: "Can you describe the problem to me?" },
          ],
        },
        {
          kind: "rule",
          title: "Lugar antes de tempo.",
          text: "✅ [[I'll meet you at the office at 3.]] ⚠️ [[I'll meet you at 3 at the office.]]",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I like very much this design.",
          answers: [
            "I like this design very much.",
            "I really like this design.",
          ],
          explanation:
            "Nada pode entrar entre o verbo e o objeto. Ou o advérbio vai para o fim, ou você usa `really` antes do verbo.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Explain me the process, please.",
          answers: [
            "Explain the process to me, please.",
            "Could you explain the process to me?",
          ],
          explanation:
            "`explain` exige `to` antes da pessoa. Mesma regra para `describe`, `suggest`, `mention` e `recommend`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "order",
          prompt: "Monte a frase na ordem natural.",
          tokens: ["She", "explained", "the problem", "clearly", "to the team", "yesterday"],
          answers: [
            ["She", "explained", "the problem", "clearly", "to the team", "yesterday"],
          ],
          explanation: "Sujeito + verbo + objeto + modo + lugar/pessoa + tempo.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "order",
          prompt: "Coloque os adjetivos na ordem correta.",
          tokens: ["a", "great", "little", "Italian", "restaurant"],
          answers: [["a", "great", "little", "Italian", "restaurant"]],
          explanation:
            "Opinião (`great`) → tamanho (`little`) → origem (`Italian`). Inverter soa imediatamente estrangeiro.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "fix",
          prompt: "Corrija a posição do advérbio.",
          wrong: "I go always to the gym before work.",
          answers: ["I always go to the gym before work."],
          explanation:
            "Advérbio de frequência vem **antes** do verbo principal. Depois do `be`, se o verbo for `be`.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She speaks fluently English.",
          answers: [
            "She speaks English fluently.",
            "She speaks fluent English.",
          ],
          explanation:
            "O advérbio não pode separar verbo e objeto. Alternativa: transforme em adjetivo (`fluent English`).",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'll meet you at 3 at the office.",
          natural: false,
          correction: "I'll meet you at the office at 3.",
          explanation:
            "Lugar vem antes de tempo. A frase é compreensível, mas soa levemente errada para nativos.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "choice",
          prompt: "Qual está correto?",
          options: [
            "Send me it as soon as you can.",
            "Send it to me as soon as you can.",
            "Send to me it as soon as you can.",
            "Send me it to as soon as you can.",
          ],
          answer: 1,
          explanation:
            "Quando a coisa é pronome (`it`), o inglês exige a versão com `to`. Regra mecânica.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["I", "have", "never", "been", "to Japan"],
          answers: [["I", "have", "never", "been", "to Japan"]],
          explanation:
            "Advérbio de frequência vai depois do **primeiro** auxiliar. ❌ [[I never have been]].",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Ele me sugeriu uma solução melhor.",
          answers: [
            "He suggested a better solution to me.",
            "He suggested a better solution.",
          ],
          explanation:
            "`suggest` nunca leva pessoa direto. Ou use `to me`, ou omita a pessoa se estiver óbvia.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "s-patterns",
      number: "21",
      title: "Patterns Worth Memorizing",
      titlePt: "Padrões prontos",
      priority: "essential",
      summary:
        "Fluência vem de blocos pré-fabricados, não de montar gramática em tempo real. Decore o molde, troque o conteúdo.",
      tags: ["patterns", "chunks", "I'd rather", "I don't think", "supposed to", "fluência"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Fluência vem de **blocos pré-fabricados**, não de montar gramática em tempo real. Decore o padrão; troque o conteúdo.",
        },
        {
          kind: "pattern",
          title: "Vontades, necessidades, intenções",
          lines: [
            "I want to + VERBO           I want to talk about the timeline.",
            "I want you to + VERBO       I want you to review this before Friday.",
            "I'd like to + VERBO         I'd like to suggest a different approach.",
            "I'd rather + VERBO base     I'd rather do it tomorrow.",
            "I'd rather not + VERBO      I'd rather not commit to that yet.",
            "I'm about to + VERBO        I'm about to join the call.",
            "I'm supposed to + VERBO     I'm supposed to send it today.",
            "I was going to + VERBO      I was going to call you.",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "❌ [[I want that you…]] é tradução direta de *quero que você…* e está errado. ✅ [[I want you to…]] / [[I'd like you to…]] / [[I need you to…]]",
        },
        {
          kind: "pattern",
          title: "Opiniões e suavização — extremamente útil no trabalho",
          lines: [
            "I think (that) + ora\u00e7\u00e3o        I think we should wait.",
            "I don't think + ora\u00e7\u00e3o        I don't think it'll work.",
            "It seems (to me) that ...      It seems that the cache isn't clearing.",
            "It looks like ...              It looks like a permissions issue.",
            "It sounds like ...             It sounds like a good plan.",
            "As far as I know, ...          As far as I know, nothing's changed.",
            "I'd say ...                    I'd say it'll take two weeks.",
            "I'm not sure if/whether ...    I'm not sure if that's the right approach.",
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "`I don't think` é obrigatório",
          text: "O inglês move a negativa para o **primeiro** verbo.",
        },
        {
          kind: "translation",
          pt: "Acho que não vai funcionar.",
          wrong: "I think it won't work.",
          right: ["I don't think it'll work."],
          note: "O mesmo vale para *I don't believe…*, *I don't suppose…*, *I don't expect…*",
        },
        {
          kind: "pattern",
          title: "Causas e explicações",
          lines: [
            "The reason is that ...        The reason is that the API changed.",
            "It depends on ...             It depends on the payload size.",
            "It has to do with ...         It has to do with how we cache requests.",
            "It comes down to ...          It comes down to cost.",
            "The problem is (that) ...     The problem is we don't have the data.",
            "The thing is, ... \ud83d\udde3\ufe0f          The thing is, nobody tested it.",
            "What happened was ...         What happened was the disk filled up.",
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "`It depends **on**` — nunca *depends of*. E sozinho: [[It depends.]] com `it`, nunca *depends* pelado.",
        },
        {
          kind: "pattern",
          title: "Incerteza",
          lines: [
            "I'm not sure how long it'll take.",
            "I have no idea why it's slow.",
            "It's hard to say without more data.",
            "I'd have to check the logs.",
            "Off the top of my head, around 200 users.",
            "I might be wrong, but that looks like a typo.",
          ],
        },
        {
          kind: "pattern",
          title: "Pedidos, ofertas, sugestões",
          lines: [
            "Could you + VERBO?              Could you take a look at this?",
            "Would you mind + -ING?          Would you mind sending it again?",
            "Do you want me to + VERBO?      Do you want me to set that up?",
            "How about + -ING?               How about meeting at 3?",
            "Why don't we + VERBO?           Why don't we split this into two tasks?",
            "It might be worth + -ING        It might be worth testing it first.",
            "Have you considered + -ING?     Have you considered using a queue?",
          ],
        },
        {
          kind: "pairs",
          title: "Padrões avulsos de alto retorno",
          items: [
            { term: "It's worth + -ing", meaning: "vale a pena: [[It's worth trying.]]" },
            { term: "The more…, the more…", meaning: "[[The more we test, the fewer bugs we ship.]]" },
            { term: "end up + -ing", meaning: "acabar fazendo: [[We ended up rewriting it.]]" },
            { term: "be supposed to", meaning: "era pra: [[It was supposed to be automatic.]]" },
            { term: "make sure (that)", meaning: "garantir que: [[Make sure the tests pass.]]" },
            { term: "no wonder", meaning: "não é à toa: [[No wonder it's slow.]]" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I think it won't work.",
          answers: ["I don't think it'll work.", "I don't think it will work."],
          explanation:
            "O inglês nega o verbo de opinião, não a oração seguinte. Vale para `think`, `believe`, `suppose`, `expect`.",
          difficulty: 3,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "It depends of the payload size.",
          answers: ["It depends on the payload size."],
          explanation:
            "`depend` sempre pede `on`. O `de` do português não se traduz como `of` aqui.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Prefiro não me comprometer com isso ainda.",
          answers: [
            "I'd rather not commit to that yet.",
            "I would rather not commit to that yet.",
          ],
          explanation:
            "`I'd rather not` + verbo base. Note que a negativa não usa `don't`.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete o padrão de expectativa frustrada.",
          sentence: "It was ___ ___ be automatic, but we still do it by hand.",
          answers: [["supposed"], ["to"]],
          explanation:
            "`be supposed to` = *era pra*. Um dos padrões mais úteis e menos ensinados.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual é a sugestão mais natural?",
          options: [
            "What about we meet at 3?",
            "How about meeting at 3?",
            "How about to meet at 3?",
            "What if meeting at 3?",
          ],
          answer: 1,
          explanation:
            "`How about` e `What about` sempre pedem `-ing` ou substantivo, nunca infinitivo.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "order",
          prompt: "Monte o padrão comparativo.",
          tokens: ["The more", "we test", "the fewer", "bugs", "we ship"],
          answers: [["The more", "we test", "the fewer", "bugs", "we ship"]],
          explanation:
            "Estrutura fixa `The more…, the more/less/fewer…`. Muito usada e quase nunca ensinada.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "We ended up rewriting the whole service.",
          natural: true,
          explanation:
            "`end up + -ing` = acabar fazendo algo não planejado. Altíssima frequência na fala real.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue o padrão ao seu uso.",
          pairs: [
            { left: "I'm about to…", right: "Vou fazer agora mesmo." },
            { left: "I was going to…", right: "Eu ia, mas não fiz." },
            { left: "I'm supposed to…", right: "Esperam isso de mim." },
            { left: "I'd rather…", right: "Eu prefiro." },
          ],
          explanation:
            "Quatro padrões parecidos com nuances de tempo e obrigação completamente distintas.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Suavize a opinião em inglês:",
          pt: "Pelo que eu sei, nada mudou.",
          answers: [
            "As far as I know, nothing's changed.",
            "As far as I know, nothing has changed.",
          ],
          explanation:
            "`As far as I know` protege você de estar errado — recurso essencial em reunião técnica.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com a forma correta de *try*.",
          sentence: "It's worth ___ before we rewrite everything.",
          answers: [["trying"]],
          explanation: "`worth` sempre pede `-ing`. ❌ [[It's worth to try.]]",
          difficulty: 2,
        },
      ],
    },
  ],
};
