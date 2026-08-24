import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 6 — Precisão                                                */
/*  Source sections 16, 17, 26, 27, 33, 34                             */
/* ------------------------------------------------------------------ */

export const precisionModule: Module = {
  id: "precision",
  title: "Precision & Word Choice",
  titlePt: "Precisão e Escolha de Palavras",
  description:
    "Distinções que mudam o sentido, phrasal verbs, falsos cognatos e os erros que marcam um falante de português a três metros de distância.",
  icon: "nuance",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "p-confusing-pairs",
      number: "16.1",
      title: "High-Value Distinctions I",
      titlePt: "Pares que confundem — parte 1",
      priority: "essential",
      summary:
        "make × do, say × tell, borrow × lend, remember × remind. Errar aqui não é sotaque, é mudança de sentido.",
      tags: ["make", "do", "say", "tell", "borrow", "lend", "remember", "remind", "just", "only"],
      blocks: [
        { kind: "heading", text: "`make` × `do`" },
        {
          kind: "pattern",
          lines: [
            "make = criar, produzir, causar algo a existir",
            "do   = executar uma atividade, a\u00e7\u00f5es gerais",
          ],
        },
        {
          kind: "table",
          headers: ["make", "do"],
          rows: [
            ["make a decision", "do business"],
            ["make a mistake", "do homework"],
            ["make money", "do research"],
            ["make a plan", "do a favor"],
            ["make progress", "do the dishes"],
            ["make an effort", "do exercise"],
            ["make sense", "do your job"],
            ["make sure", "do the right thing"],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "O português usa *fazer* para tudo. ❌ [[do a decision]] → ✅ [[make a decision]]. ❌ [[make a favor]] → ✅ [[do a favor]].",
        },
        { kind: "heading", text: "`say` × `tell`" },
        {
          kind: "rule",
          title: "`tell` precisa de uma pessoa logo depois. `say` não aceita pessoa direto.",
        },
        {
          kind: "table",
          headers: ["✅", "❌"],
          rows: [
            ["He **said** he was late.", "He said me he was late."],
            ["He **told me** he was late.", "He told he was late."],
            ["She **said** \u201cno\u201d.", "She told \u201cno\u201d."],
            ["What did he **say**?", "What did he tell?"],
            ["**Tell** me the truth.", "Say me the truth."],
          ],
        },
        {
          kind: "pairs",
          title: "Expressões fixas",
          items: [
            { term: "com `tell`", meaning: "tell a story, tell a joke, tell the truth, tell a lie, tell the time, tell the difference" },
            { term: "com `say`", meaning: "say hello/goodbye, say sorry, say a word, say please, say yes/no" },
          ],
        },
        { kind: "heading", text: "`borrow` × `lend`" },
        {
          kind: "pattern",
          lines: [
            "borrow = pegar emprestado (eu recebo)   I borrowed his charger.",
            "lend   = emprestar (eu dou)             He lent me his charger.",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Can you borrow me your charger?" },
            { marker: "good", text: "Can you lend me your charger?" },
            { marker: "good", text: "Can I borrow your charger?" },
          ],
        },
        { kind: "heading", text: "`remember` × `remind`" },
        {
          kind: "pattern",
          lines: [
            "remember = lembrar (eu, sozinho)        I remembered to call.",
            "remind   = lembrar algu\u00e9m (eu aviso)    Remind me to call.",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "Remember me to call the client." },
            { marker: "good", text: "Remind me to call the client." },
            { marker: "good", text: "This reminds me of my old job." },
          ],
        },
        { kind: "heading", text: "`just` × `only`" },
        {
          kind: "table",
          headers: ["Sentido de `just`", "Exemplo", "Português"],
          rows: [
            ["Recentemente", "I'**ve just** finished.", "acabei de"],
            ["Apenas, simplesmente", "It's **just** a suggestion.", "só, apenas"],
            ["Exatamente", "That's **just** what I needed.", "exatamente"],
            ["Amaciador 🗣️", "I **just** wanted to check in.", "(suaviza o pedido)"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "O `just` amaciador é ouro profissional",
          text: "Em e-mails e chat, `just` deixa o pedido menos exigente: [[I just wanted to follow up on this.]] [[Just a quick question.]] ⚠️ Use uma vez por mensagem, não quatro — senão soa inseguro.",
        },
        {
          kind: "pattern",
          title: "A posição de `only` muda o sentido",
          lines: [
            "Only I sent the report.        \u2192 ningu\u00e9m mais enviou",
            "I only sent the report.        \u2192 s\u00f3 enviei, n\u00e3o fiz mais nada",
            "I sent only the report.        \u2192 n\u00e3o enviei mais nada",
            "I sent the report only to Ana. \u2192 para mais ningu\u00e9m",
          ],
        },
        { kind: "heading", text: "`kind of` — o amaciador nº 1 🗣️" },
        {
          kind: "text",
          text: "Falantes de inglês raramente dão opiniões negativas de forma direta. `kind of` é uma das principais ferramentas de suavização.",
        },
        {
          kind: "table",
          headers: ["Direto demais", "Suavizado"],
          rows: [
            ["The design is bad.", "The design is **kind of** confusing."],
            ["I disagree.", "I **kind of** disagree."],
            ["That's wrong.", "That's **sort of** missing the point."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "🗣️ Na fala vira *kinda* /ˈkaɪndə/ e *sorta* /ˈsɔːrtə/. Reconheça na escuta; escreva por extenso.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "We need to do a decision by Friday.",
          answers: ["We need to make a decision by Friday."],
          explanation:
            "Decisão se **cria** → `make`. Regra prática: se o resultado é algo novo, é `make`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Can you borrow me your laptop for an hour?",
          answers: [
            "Can you lend me your laptop for an hour?",
            "Can I borrow your laptop for an hour?",
          ],
          explanation:
            "`lend` = dar emprestado. `borrow` = pegar emprestado. Quem tem o objeto usa `lend`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Remember me to send the invoice tomorrow.",
          answers: ["Remind me to send the invoice tomorrow."],
          explanation:
            "`remind` = lembrar alguém. `remember` é o que você faz sozinho, na sua cabeça.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete com `make` ou `do`.",
          sentence: "Could you ___ me a favor and ___ sure the tests pass?",
          answers: [["do"], ["make"]],
          explanation:
            "`do a favor`, `make sure`. São colocações fixas — não há lógica, só uso.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "`make` ou `do`?",
          buckets: ["make", "do"],
          items: [
            { text: "___ a mistake", bucket: "make" },
            { text: "___ research", bucket: "do" },
            { text: "___ progress", bucket: "make" },
            { text: "___ business", bucket: "do" },
            { text: "___ sense", bucket: "make" },
            { text: "___ the dishes", bucket: "do" },
          ],
          explanation:
            "`make` cria algo que não existia. `do` executa uma atividade que já tem nome.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "choice",
          prompt: "Qual está correto?",
          options: [
            "He said me the deploy failed.",
            "He told me the deploy failed.",
            "He told the deploy failed.",
            "He said me that the deploy failed.",
          ],
          answer: 1,
          explanation:
            "Com a pessoa logo depois, o verbo é `tell`. `say` só aceita pessoa com `to`: [[He said to me…]]",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "match",
          prompt: "Ligue cada posição de `only` ao seu significado.",
          pairs: [
            { left: "Only I sent it.", right: "Ninguém mais enviou." },
            { left: "I only sent it.", right: "Só enviei, não fiz mais nada." },
            { left: "I sent only the report.", right: "Não enviei mais nada junto." },
            { left: "I sent it only to Ana.", right: "Para mais ninguém." },
          ],
          explanation:
            "`only` modifica o que vem logo depois dele. Mover a palavra muda a frase inteira.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Suavize a crítica em inglês:",
          pt: "Achei o design meio confuso.",
          answers: [
            "I found the design kind of confusing.",
            "The design is kind of confusing.",
            "I thought the design was a bit confusing.",
          ],
          explanation:
            "`kind of` e `a bit` são os amaciadores padrão. Crítica direta soa agressiva em inglês corporativo.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "judge",
          prompt: "Isso é inglês natural num e-mail?",
          sentence: "I just wanted to follow up on my last message.",
          natural: true,
          explanation:
            "`just` como amaciador é padrão profissional. Reduz a pressão sem tirar a clareza.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com `tell` ou `say`.",
          sentence: "Don't ___ me a story — just ___ what happened.",
          answers: [["tell"], ["say"]],
          explanation:
            "`tell a story` é expressão fixa com pessoa. `say` aparece sem pessoa logo depois.",
          difficulty: 2,
        },
        {
          id: "e11",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["This", "reminds", "me", "of", "my old job"],
          answers: [["This", "reminds", "me", "of", "my old job"]],
          explanation:
            "`remind someone of something` = fazer lembrar. Nunca [[remember me of]].",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "p-more-distinctions",
      number: "16.2",
      title: "High-Value Distinctions II",
      titlePt: "Pares que confundem — parte 2",
      priority: "useful",
      summary:
        "so × such, speak × talk, other × another, e as duplas que aparecem em toda reunião.",
      tags: ["so", "such", "speak", "talk", "other", "another", "look", "watch", "see"],
      blocks: [
        { kind: "heading", text: "`so` × `such`" },
        {
          kind: "pattern",
          lines: [
            "so   + adjetivo/adv\u00e9rbio        It was so cold.",
            "such + (a/an) + adjetivo + subst.  It was such cold weather.",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "It's so good." },
            { marker: "good", text: "It's such a good idea." },
            { marker: "bad", text: "It's so a good idea." },
            { marker: "bad", text: "It's such good." },
            { marker: "good", text: "It was so expensive that we cancelled." },
            { marker: "good", text: "It was such an expensive project that we cancelled." },
          ],
        },
        { kind: "heading", text: "`speak` × `talk`" },
        {
          kind: "table",
          headers: ["speak", "talk"],
          rows: [
            ["um pouco mais formal", "mais conversacional"],
            ["idiomas: *I speak Portuguese*", "❌ I talk Portuguese"],
            ["um sentido só: *She spoke at the conference*", "mão dupla: *We talked for an hour*"],
            ["*speak up* (mais alto), *speaking of…*", "*talk about, talk it over*"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "[[Let's talk about it tomorrow]] soa mais natural que *speak about*. Mas [[Can I speak to Ana?]] e [[Can I talk to Ana?]] são igualmente bons.",
        },
        { kind: "heading", text: "`see` × `look` × `watch`" },
        {
          kind: "pattern",
          lines: [
            "see   \u2192 perceber com os olhos (passivo)   I saw her at the office.",
            "look  \u2192 dirigir o olhar (ativo, + at)     Look at this graph.",
            "watch \u2192 observar algo que se move          I watched the demo.",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          text: "*Assistir a um filme* → [[watch a movie]], nunca [[assist a movie]]. `assist` significa **ajudar**.",
        },
        { kind: "heading", text: "`other` × `another` × `the other`" },
        {
          kind: "table",
          headers: ["Forma", "Sentido", "Exemplo"],
          rows: [
            ["**another**", "mais um, indefinido (singular)", "Can I have **another** coffee?"],
            ["**other**", "outros, indefinido (plural)", "**Other** teams use Slack."],
            ["**the other**", "o outro específico (de dois)", "**The other** option is cheaper."],
            ["**others**", "pronome, sem substantivo", "Some agreed, **others** didn't."],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "`another` já contém o `an` — nunca escreva ❌ [[an another]]. E é sempre singular: ❌ [[another options]].",
        },
        { kind: "heading", text: "Duplas de reunião" },
        {
          kind: "table",
          headers: ["Par", "Diferença"],
          rows: [
            ["**win × earn × gain**", "win a game / earn money / gain experience"],
            ["**job × work**", "*job* é contável (o cargo); *work* é incontável (a atividade)"],
            ["**economic × economical**", "econômico (da economia) × que economiza"],
            ["**effective × efficient**", "que dá resultado × que gasta pouco"],
            ["**historic × historical**", "que fez história × relativo à história"],
            ["**price × cost × fee × rate**", "preço × custo × taxa de serviço × tarifa"],
            ["**check × verify × confirm**", "dar uma olhada × validar tecnicamente × confirmar oficialmente"],
          ],
        },
        {
          kind: "pairs",
          title: "Confusões rápidas",
          items: [
            { term: "lose × loose", meaning: "perder × frouxo" },
            { term: "affect × effect", meaning: "afetar (verbo) × efeito (substantivo)" },
            { term: "advice × advise", meaning: "conselho (subst.) × aconselhar (verbo)" },
            { term: "practice × practise", meaning: "🇺🇸 sempre *practice*; 🇬🇧 subst. *practice*, verbo *practise*" },
            { term: "then × than", meaning: "então/depois × do que (comparação)" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "It's so a good idea.",
          answers: ["It's such a good idea.", "It's so good."],
          explanation:
            "`so` acompanha adjetivo sozinho. Se entra substantivo, o correto é `such a`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com `so` ou `such`.",
          sentence: "It was ___ expensive that we cancelled — it was ___ a bad deal.",
          answers: [["so"], ["such"]],
          explanation:
            "`so + adjetivo`, `such a + adjetivo + substantivo`. A presença do substantivo decide.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija o falso cognato.",
          wrong: "I assisted the presentation yesterday.",
          answers: [
            "I attended the presentation yesterday.",
            "I watched the presentation yesterday.",
          ],
          explanation:
            "`assist` = ajudar. Para *assistir*, use `attend` (comparecer) ou `watch` (ver).",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "Can I have ___ coffee, please?",
          options: ["an another", "another", "other", "the another"],
          answer: 1,
          explanation:
            "`another` = mais um, singular indefinido. Ele já contém o artigo, então nunca leva `an`.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "`see`, `look` ou `watch`?",
          buckets: ["see", "look at", "watch"],
          items: [
            { text: "Percebi ela no corredor.", bucket: "see" },
            { text: "Olhe este gráfico.", bucket: "look at" },
            { text: "Assisti à demo inteira.", bucket: "watch" },
            { text: "Você viu meu e-mail?", bucket: "see" },
          ],
          explanation:
            "`see` é passivo, `look` é intencional, `watch` acompanha algo em movimento ao longo do tempo.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "match",
          prompt: "Ligue o par à distinção correta.",
          pairs: [
            { left: "effective", right: "dá o resultado esperado" },
            { left: "efficient", right: "gasta pouco recurso" },
            { left: "economic", right: "relativo à economia" },
            { left: "economical", right: "que economiza dinheiro" },
          ],
          explanation:
            "Sufixos parecidos, sentidos distintos. Errar isso em contexto de negócios é caro.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I talk Portuguese and Spanish.",
          natural: false,
          correction: "I speak Portuguese and Spanish.",
          explanation:
            "Idiomas sempre vão com `speak`. `talk` é sobre a interação, não sobre a língua.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com `job` ou `work`.",
          sentence: "I have a lot of ___ this week, but I love my ___.",
          answers: [["work"], ["job"]],
          explanation:
            "`work` é incontável (a atividade). `job` é contável (a posição). ❌ [[a lot of works]].",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A outra opção é mais barata.",
          answers: ["The other option is cheaper."],
          explanation:
            "Quando há duas opções conhecidas, é `the other`. `another` seria uma terceira, indefinida.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["Speaking of", "deadlines", "when", "is it", "due"],
          answers: [["Speaking of", "deadlines", "when", "is it", "due"]],
          explanation:
            "`Speaking of X` é o conector padrão para puxar um assunto relacionado numa conversa.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "p-phrasal-verbs",
      number: "17",
      title: "Phrasal Verbs",
      titlePt: "Phrasal verbs",
      priority: "useful",
      summary:
        "Você não precisa produzir muitos. Mas precisa entender todos, porque nativos usam o tempo todo.",
      tags: ["phrasal verbs", "get", "separable", "look up", "figure out", "put up with"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          title: "Estratégia prática",
          text: "Você **não precisa produzir** muitos phrasal verbs — os sinônimos formais são inglês perfeitamente bom. Mas precisa **entender**, porque nativos usam constantemente. Priorize reconhecimento; produção vem depois.",
        },
        {
          kind: "table",
          title: "Phrasal verb × sinônimo formal",
          headers: ["Phrasal (falado)", "Formal (escrito)"],
          rows: [
            ["find out", "discover"],
            ["figure out", "determine, solve"],
            ["look into", "investigate"],
            ["go over", "review"],
            ["come up with", "devise, generate"],
            ["deal with", "handle, address"],
            ["get rid of", "eliminate"],
            ["turn down", "reject, decline"],
            ["point out", "indicate"],
            ["leave out", "omit"],
            ["put off", "postpone"],
            ["set up", "arrange, configure"],
          ],
        },
        { kind: "heading", text: "Separável × inseparável" },
        {
          kind: "pattern",
          lines: [
            "Separ\u00e1vel:    turn on the light  =  turn the light on",
            "MAS com pronome, o pronome VAI NO MEIO obrigatoriamente:",
            "              turn it on   \u2705      turn on it   \u274c",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Pick me up at 8." },
            { marker: "bad", text: "Pick up me at 8." },
            { marker: "good", text: "I'll call you back." },
            { marker: "bad", text: "I'll call back you." },
            { marker: "good", text: "Throw it away." },
            { marker: "bad", text: "Throw away it." },
          ],
        },
        {
          kind: "text",
          text: "**Inseparáveis** nunca se dividem: *look for, look after, look forward to, run into, come across, deal with, go through, get over, count on, run out of*. ✅ [[I'm looking for it.]] ❌ [[I'm looking it for.]]",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Regra de sobrevivência",
          text: "Na dúvida, coloque o objeto **depois** do phrasal verb inteiro — a não ser que seja pronome, aí tente no meio. Se soar errado dos dois jeitos, use o sinônimo de uma palavra.",
        },
        { kind: "heading", text: "A partícula importa mais que o verbo" },
        {
          kind: "text",
          text: "*Turn up* (aparecer / aumentar volume), *turn down* (recusar / abaixar), *turn into* (virar), *turn out* (acabar sendo), *turn over* (virar), *turn off* (desligar). Mesmo verbo, seis sentidos.",
        },
        {
          kind: "pairs",
          title: "Sentidos frouxos das partículas",
          items: [
            { term: "up", meaning: "conclusão ou aumento: finish up, speed up, use up" },
            { term: "out", meaning: "remover ou descobrir: find out, throw out, sort out, run out" },
            { term: "off", meaning: "separar ou parar: take off, call off, put off, log off" },
            { term: "on", meaning: "continuar: carry on, go on, hold on, move on" },
            { term: "down", meaning: "reduzir ou registrar: slow down, turn down, write down" },
            { term: "back", meaning: "retornar: call back, get back, come back, pay back" },
          ],
        },
        { kind: "heading", text: "A família `get` — a mais útil do inglês" },
        {
          kind: "table",
          headers: ["Phrasal", "Significado", "Exemplo"],
          rows: [
            ["**get back to**", "retornar contato", "I'll **get back to** you. *(essencial no trabalho)*"],
            ["**get along with**", "se dar bem com", "I **get along** well with my team."],
            ["**get over**", "se recuperar de", "It took a week to **get over** the flu."],
            ["**get through**", "terminar / conseguir contato", "I couldn't **get through** to support."],
            ["**get rid of**", "eliminar", "We need to **get rid of** this legacy code."],
            ["**get by**", "se virar", "I **get by** with basic Spanish."],
            ["**get around to**", "finalmente fazer", "I never **got around to** fixing it."],
            ["**get together**", "se encontrar", "Let's **get together** next week."],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Não decore *\u201cput off = postpone\u201d*. Decore a frase inteira: [[Let's put the meeting off until next week.]] Phrasal verb solto na cabeça não vira fala.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija a posição do pronome.",
          wrong: "Can you pick up me at 8?",
          answers: ["Can you pick me up at 8?"],
          explanation:
            "Em phrasal verb separável, o pronome é **obrigado** a ficar no meio.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'm looking it for in the logs.",
          answers: [
            "I'm looking for it in the logs.",
          ],
          explanation:
            "`look for` é inseparável — nada entra no meio, nem pronome.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "match",
          prompt: "Ligue o phrasal verb ao sinônimo formal.",
          pairs: [
            { left: "figure out", right: "determine" },
            { left: "look into", right: "investigate" },
            { left: "put off", right: "postpone" },
            { left: "turn down", right: "reject" },
            { left: "come up with", right: "devise" },
          ],
          explanation:
            "Em texto formal, o sinônimo latino é preferível. Na fala, o phrasal soa muito mais natural.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete o phrasal verb mais usado em e-mail de trabalho.",
          sentence: "I'll look into it and get ___ ___ you by Friday.",
          answers: [["back"], ["to"]],
          explanation:
            "`get back to someone` = retornar o contato. Uma das expressões mais úteis do inglês corporativo.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual está correto?",
          options: [
            "I can't put up this anymore.",
            "I can't put up with this anymore.",
            "I can't put this up with anymore.",
            "I can't put with up this anymore.",
          ],
          answer: 1,
          explanation:
            "Phrasal de três palavras é sempre inseparável. O objeto vem depois do bloco inteiro.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "O que a partícula sugere?",
          buckets: ["Descobrir / remover (out)", "Adiar / parar (off)", "Retornar (back)"],
          items: [
            { text: "find out", bucket: "Descobrir / remover (out)" },
            { text: "call off", bucket: "Adiar / parar (off)" },
            { text: "call back", bucket: "Retornar (back)" },
            { text: "sort out", bucket: "Descobrir / remover (out)" },
            { text: "put off", bucket: "Adiar / parar (off)" },
            { text: "pay back", bucket: "Retornar (back)" },
          ],
          explanation:
            "As partículas têm padrões frouxos de sentido. Reconhecê-los ajuda a adivinhar phrasals novos.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "We came up with a simpler solution.",
          natural: true,
          explanation:
            "`come up with` = bolar, inventar. Inseparável e altíssima frequência em contexto técnico.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A gente precisa se livrar desse código legado.",
          answers: [
            "We need to get rid of this legacy code.",
            "We have to get rid of this legacy code.",
          ],
          explanation:
            "`get rid of` = se livrar de. Três palavras, sempre juntas, sempre nessa ordem.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase com o pronome na posição certa.",
          tokens: ["Can", "you", "turn", "it", "off"],
          answers: [["Can", "you", "turn", "it", "off"]],
          explanation:
            "Pronome sempre no meio em phrasal separável. [[Turn off it]] não existe.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com a partícula certa.",
          sentence: "The meeting was called ___ because half the team was sick.",
          answers: [["off"]],
          explanation:
            "`call off` = cancelar. Compare com `call back` (retornar ligação) e `call up` (ligar).",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "p-br-mistakes",
      number: "26",
      title: "Portuguese-Speaker Mistakes",
      titlePt: "Os erros que te entregam",
      priority: "essential",
      summary:
        "Os erros que causam mal-entendido de verdade, e as traduções literais que ninguém entende.",
      tags: ["erros", "mistakes", "brasileiro", "tradução literal", "very", "too", "pronúncia"],
      blocks: [
        {
          kind: "callout",
          tone: "danger",
          title: "Tier 1 — causam mal-entendido de verdade",
          text: "Estes não são detalhes de sotaque. Eles mudam o que a outra pessoa entende.",
        },
        {
          kind: "translation",
          pt: "Esse notebook é muito caro.",
          wrong: "This laptop is too expensive.",
          right: ["This laptop is very expensive."],
          note: "`too expensive` significa *caro demais, não vamos comprar*.",
        },
        {
          kind: "translation",
          pt: "Você não precisa vir.",
          wrong: "You mustn't come.",
          right: ["You don't have to come."],
          note: "`mustn't` significa *é proibido vir*.",
        },
        {
          kind: "translation",
          pt: "Preciso disso até sexta.",
          wrong: "I need it until Friday.",
          right: ["I need it by Friday."],
        },
        {
          kind: "translation",
          pt: "Ele trabalha muito.",
          wrong: "He hardly works.",
          right: ["He works hard."],
          note: "`hardly` significa *quase não*.",
        },
        {
          kind: "table",
          title: "Tier 1 completo",
          headers: ["Português", "❌", "✅"],
          rows: [
            ["Me empresta seu carregador?", "Can you borrow me…", "Can you **lend** me…"],
            ["Me lembra de ligar.", "Remember me to call.", "**Remind** me to call."],
            ["Puxe a porta.", "Push the door.", "**Pull** the door."],
            ["\u201cVocê não enviou?\u201d — \u201cNão, eu enviei.\u201d", "No, I sent it.", "**Yes, I did** — I sent it."],
          ],
        },
        {
          kind: "heading",
          text: "Tier 2 — traduções literais que ninguém entende",
        },
        {
          kind: "table",
          headers: ["Expressão", "❌ Literal", "✅ Inglês natural"],
          rows: [
            ["Nossa!", "Our!", "Wow! / Oh my God!"],
            ["Pois é.", "Then is.", "Yeah. / Right. / Exactly."],
            ["Beleza!", "Beauty!", "Cool. / Sounds good."],
            ["Me dá um retorno.", "Give me a return.", "Let me know. / Get back to me."],
            ["Vamos combinar.", "Let's combine.", "Let's set a time."],
            ["Fica à vontade.", "Stay at will.", "Feel free. / Make yourself at home."],
            ["Deu certo.", "Gave right.", "It worked out."],
            ["Não deu.", "Didn't give.", "It didn't work out."],
            ["Que pena!", "What pity!", "That's too bad. / What a shame."],
            ["Com certeza.", "With certainty.", "Definitely. / For sure."],
            ["Tanto faz.", "So much makes.", "Whatever. / It doesn't matter."],
            ["Como assim?", "How like this?", "What do you mean?"],
            ["Sei lá.", "Know there.", "I don't know. / No idea."],
            ["Marcar uma reunião", "mark a meeting", "schedule / set up a meeting"],
            ["Estou por fora.", "I'm outside.", "I'm out of the loop."],
            ["Quebrar um galho", "break a branch", "help out / do a favor"],
          ],
        },
        {
          kind: "heading",
          text: "Tier 3 — pronúncia que vale corrigir",
        },
        {
          kind: "table",
          headers: ["Problema", "Erro típico", "Correção"],
          rows: [
            ["`-e` final", "*\u201clike-e\u201d*, *\u201cnight-e\u201d*", "palavras terminam de forma abrupta, sem vogal extra"],
            ["`-ed`", "*\u201cwork-ed\u201d* com 3 sílabas", "só depois de t/d vira sílaba: *wanted* ✅, *worked* = \u201cworkt\u201d"],
            ["`s` + consoante inicial", "*\u201ce-school\u201d*, *\u201ce-Spain\u201d*", "sem vogal antes: **school**, **Spain**"],
            ["`-tion`", "*\u201cinforma-see-on\u201d*", "= /ʃən/ — \u201cinforma-shun\u201d"],
            ["Acento tônico", "*DE-velop-ment*", "de-**VEL**-op-ment, **COM**-fort-a-ble"],
            ["`-age`", "*\u201cman-ah-ge\u201d*", "= /ɪdʒ/ — \u201cMAN-ij\u201d, \u201cMESS-ij\u201d"],
            ["/i/ curto × longo", "*sheet/shit*, *beach/bitch*", "tensão e duração importam — e podem constranger"],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Prioridade",
          text: "Acento tônico e as terminações `-e`/`-ed` prejudicam mais a compreensão do que o som do `th`. Ninguém confunde *sink* com *think* no contexto, mas acento errado numa palavra-chave destrói a frase.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Os erros que NÃO importam",
          text: "Não gaste energia com: `a/an/the` em casos limítrofes, *at/on the weekend*, *different from/than*, `th` perfeito, `who`/`whom`, `less`/`fewer` na fala, grafia americana × britânica, sotaque leve. **Fluência e clareza vencem precisão.**",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija — você só quer dizer que é caro, não que é inviável.",
          wrong: "This laptop is too expensive.",
          answers: ["This laptop is very expensive."],
          explanation:
            "`too` = além do aceitável, tem consequência. `very` é só intensidade.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija — a reunião é opcional.",
          wrong: "You mustn't come to the meeting.",
          answers: ["You don't have to come to the meeting."],
          explanation:
            "`mustn't` proíbe. Para dizer que não é obrigatório, use `don't have to`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês natural:",
          pt: "Me dá um retorno até amanhã.",
          answers: [
            "Let me know by tomorrow.",
            "Get back to me by tomorrow.",
            "Could you let me know by tomorrow?",
          ],
          explanation:
            "*Dar um retorno* → `let me know` ou `get back to me`. Tradução literal não existe em inglês.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês natural:",
          pt: "Vamos marcar uma reunião.",
          answers: [
            "Let's set up a meeting.",
            "Let's schedule a meeting.",
            "Let's set a time.",
          ],
          explanation:
            "*Marcar* vira `set up` ou `schedule`. ❌ [[mark a meeting]] não significa nada.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "match",
          prompt: "Ligue a expressão brasileira ao equivalente natural.",
          pairs: [
            { left: "Com certeza.", right: "Definitely." },
            { left: "Tanto faz.", right: "Whatever." },
            { left: "Como assim?", right: "What do you mean?" },
            { left: "Deu certo.", right: "It worked out." },
            { left: "Que pena!", right: "That's too bad." },
          ],
          explanation:
            "Expressões idiomáticas nunca se traduzem palavra por palavra. Aprenda o equivalente funcional.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "choice",
          prompt: "Qual erro de pronúncia mais atrapalha a compreensão?",
          options: [
            "Trocar o som do th por s",
            "Acentuar a sílaba errada numa palavra-chave",
            "Sotaque brasileiro leve",
            "Usar pronúncia britânica de algumas palavras",
          ],
          answer: 1,
          explanation:
            "O ouvinte nativo localiza a palavra pelo padrão de acento. Acento errado deixa a palavra irreconhecível.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'm out of the loop on this project.",
          natural: true,
          explanation:
            "`out of the loop` = por fora, sem as informações. Expressão corporativa comum.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "categorize",
          prompt: "Vale a pena corrigir ou não?",
          buckets: ["Corrija primeiro", "Não perca tempo"],
          items: [
            { text: "borrow × lend", bucket: "Corrija primeiro" },
            { text: "at the weekend × on the weekend", bucket: "Não perca tempo" },
            { text: "by × until", bucket: "Corrija primeiro" },
            { text: "different from × than", bucket: "Não perca tempo" },
            { text: "very × too", bucket: "Corrija primeiro" },
            { text: "who × whom", bucket: "Não perca tempo" },
          ],
          explanation:
            "Priorize o que causa mal-entendido. Detalhe estilístico não impede comunicação.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Can you borrow me five minutes of your time?",
          answers: [
            "Can you spare me five minutes of your time?",
            "Can you lend me five minutes of your time?",
            "Do you have five minutes?",
          ],
          explanation:
            "Quem cede usa `lend` (ou `spare`, mais natural aqui). `borrow` é sempre quem recebe.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete a resposta correta a *\"Didn't you send the report?\"* — você enviou.",
          sentence: "___, I did — this morning.",
          answers: [["Yes"]],
          explanation:
            "O inglês responde ao fato, não à polaridade da pergunta. Você enviou → `Yes`.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "p-false-friends",
      number: "27",
      title: "False Friends",
      titlePt: "Falsos cognatos",
      priority: "essential",
      summary:
        "actually não é atualmente. pretend não é pretender. E preservative definitivamente não é o que você acha.",
      tags: ["false friends", "falsos cognatos", "actually", "pretend", "realize", "eventually"],
      blocks: [
        {
          kind: "callout",
          tone: "danger",
          title: "Os dez críticos",
          text: "Estes aparecem o tempo todo e causam confusão real.",
        },
        {
          kind: "table",
          headers: ["Palavra", "Significa de verdade", "Brasileiro acha que é", "Para o sentido do PT, diga"],
          rows: [
            ["**actually**", "na verdade, de fato", "atualmente", "**currently, nowadays**"],
            ["**eventually**", "no final, com o tempo", "eventualmente (às vezes)", "**occasionally, possibly**"],
            ["**pretend**", "fingir", "pretender", "**intend, plan to**"],
            ["**realize**", "perceber, dar-se conta", "realizar (fazer)", "**carry out, hold, perform**"],
            ["**parents**", "pais (mãe e pai)", "parentes", "**relatives**"],
            ["**assist**", "ajudar", "assistir (ver)", "**watch, attend**"],
            ["**library**", "biblioteca", "livraria", "**bookstore**"],
            ["**college**", "faculdade 🇺🇸", "colégio (ensino médio)", "**high school**"],
            ["**fabric**", "tecido", "fábrica", "**factory, plant**"],
            ["**push / pull**", "empurrar / puxar", "(invertidos)", "—"],
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I pretend to finish it today." },
            { marker: "good", text: "I intend to finish it today." },
            { marker: "bad", text: "We realized a meeting." },
            { marker: "good", text: "We held a meeting." },
            { marker: "bad", text: "I assisted the presentation." },
            { marker: "good", text: "I attended the presentation." },
          ],
        },
        {
          kind: "heading",
          text: "Os que causam os piores acidentes",
        },
        {
          kind: "table",
          headers: ["Palavra", "Por que importa"],
          rows: [
            ["**preservative**", "significa *conservante*. Nunca use para *preservativo* (isso é **condom**)."],
            ["**exquisite**", "*\u201cYour idea is exquisite\u201d* é elogio (refinado), não \u201cesquisita\u201d."],
            ["**terrific**", "*\u201cThat's terrific!\u201d* = excelente. O ruim é **terrible**."],
            ["**support**", "*\u201cI can't support this noise\u201d* → diga **stand / put up with**."],
            ["**discussion**", "é neutro em inglês. Para briga, diga **argument**."],
            ["**sympathetic**", "= solidário, compassivo. Para *simpático*, diga **nice / friendly**."],
            ["**educated**", "= com instrução. Para *educado*, diga **polite / well-mannered**."],
            ["**compromise**", "= acordo com concessões. Para *compromisso*, diga **commitment**."],
            ["**sensible**", "= sensato. *Sensível* é **sensitive**."],
          ],
        },
        {
          kind: "heading",
          text: "Lista de trabalho — os mais frequentes",
        },
        {
          kind: "table",
          headers: ["Inglês", "Sentido real", "Parece (PT)", "Para o sentido do PT"],
          rows: [
            ["**agenda**", "pauta", "agenda (caderno)", "diary, planner"],
            ["**anticipate**", "prever", "antecipar (adiantar)", "bring forward, move up"],
            ["**appointment**", "consulta, compromisso", "apontamento", "note"],
            ["**balcony**", "varanda", "balcão", "counter"],
            ["**cafeteria**", "refeitório", "cafeteria", "coffee shop, café"],
            ["**costume**", "fantasia", "costume (hábito)", "habit, custom"],
            ["**data**", "dados", "data (calendário)", "date"],
            ["**deception**", "engano, fraude", "decepção", "disappointment"],
            ["**idiom**", "expressão idiomática", "idioma", "language"],
            ["**injury**", "lesão", "injúria", "insult"],
            ["**large**", "grande", "largo", "wide, broad"],
            ["**lunch**", "almoço", "lanche", "snack"],
            ["**notice**", "perceber; aviso", "notícia", "news"],
            ["**novel**", "romance (livro)", "novela", "soap opera"],
            ["**policy**", "política (diretriz)", "polícia", "police"],
            ["**prejudice**", "preconceito", "prejuízo", "loss, damage"],
            ["**resume**", "retomar", "resumir", "summarize"],
            ["**tax**", "imposto", "taxa", "fee, rate"],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Cognatos em que você PODE confiar",
          text: "*important, possible, necessary, different, problem, project, system, decision, experience, professional, technology, communication, responsible, opportunity, development, environment, document, process*. Palavras de origem latina transferem bem em registro **formal/técnico**. As armadilhas se concentram no vocabulário **cotidiano**.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I pretend to finish the migration this week.",
          answers: [
            "I intend to finish the migration this week.",
            "I plan to finish the migration this week.",
          ],
          explanation:
            "`pretend` = fingir. Para *pretender*, use `intend` ou `plan to`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Actually I work at a fintech in São Paulo.",
          answers: [
            "Currently I work at a fintech in São Paulo.",
            "I currently work at a fintech in São Paulo.",
            "These days I work at a fintech in São Paulo.",
          ],
          explanation:
            "`actually` = *na verdade*. Para *atualmente*, use `currently` ou `these days`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Como se diz *Realizamos uma reunião ontem*?",
          options: [
            "We realized a meeting yesterday.",
            "We held a meeting yesterday.",
            "We assisted a meeting yesterday.",
            "We pretended a meeting yesterday.",
          ],
          answer: 1,
          explanation:
            "`realize` = perceber. Para *realizar* no sentido de fazer acontecer, use `hold`, `carry out` ou `run`.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "match",
          prompt: "Ligue a palavra em inglês ao seu significado real.",
          pairs: [
            { left: "sympathetic", right: "solidário, compassivo" },
            { left: "educated", right: "com instrução formal" },
            { left: "sensible", right: "sensato" },
            { left: "terrific", right: "ótimo, excelente" },
            { left: "exquisite", right: "requintado" },
          ],
          explanation:
            "Todos esses parecem uma coisa e significam outra. Confundir gera confusão social, não só gramatical.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Não aguento mais esse barulho.",
          answers: [
            "I can't stand this noise anymore.",
            "I can't put up with this noise anymore.",
          ],
          explanation:
            "`support` não significa *suportar/aguentar*. Use `stand` ou `put up with`.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Falso cognato ou cognato confiável?",
          buckets: ["Falso cognato", "Cognato confiável"],
          items: [
            { text: "actually", bucket: "Falso cognato" },
            { text: "important", bucket: "Cognato confiável" },
            { text: "pretend", bucket: "Falso cognato" },
            { text: "responsible", bucket: "Cognato confiável" },
            { text: "library", bucket: "Falso cognato" },
            { text: "opportunity", bucket: "Cognato confiável" },
          ],
          explanation:
            "Vocabulário técnico e formal transfere bem. As armadilhas se concentram no dia a dia.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso comunica o que a pessoa quis dizer? *(ela queria dizer que assistiu à apresentação)*",
          sentence: "I assisted the presentation.",
          natural: false,
          correction: "I attended the presentation.",
          explanation:
            "`assist` = ajudar. A frase diz que você **ajudou** a fazer a apresentação.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com a palavra certa.",
          sentence: "My ___ live in Recife, and my other ___ are in Salvador.",
          answers: [["parents"], ["relatives"]],
          explanation:
            "`parents` = pai e mãe apenas. Para *parentes* em geral, use `relatives`.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "We had a big discussion and she left angry.",
          answers: [
            "We had a big argument and she left angry.",
            "We had a big fight and she left angry.",
          ],
          explanation:
            "`discussion` em inglês é neutro — uma conversa. Para briga, use `argument`.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["I", "bought", "it", "at", "the bookstore"],
          answers: [["I", "bought", "it", "at", "the bookstore"]],
          explanation:
            "`library` é biblioteca (empresta). `bookstore` é livraria (vende).",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "p-collocations",
      number: "34",
      title: "Collocations",
      titlePt: "Colocações",
      priority: "essential",
      summary:
        "Palavras que andam juntas. Gramática correta com colocação errada ainda soa estrangeiro.",
      tags: ["collocations", "colocações", "make", "take", "heavy rain", "strong coffee"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Colocação é a combinação que nativos usam por convenção, não por lógica. [[strong coffee]] e [[heavy rain]] estão certos; [[strong rain]] e [[heavy coffee]] estão errados — sem nenhuma razão gramatical.",
        },
        {
          kind: "pattern",
          title: "`take`",
          lines: [
            "take care of        take part in        take a break",
            "take a look         take action         take into account",
            "take a taxi/bus     take medicine       take responsibility",
          ],
        },
        {
          kind: "pattern",
          title: "`have`",
          lines: [
            "have a problem      have a meeting      have a look",
            "have lunch/dinner   have fun            have an impact",
            "have access to      have experience     have trouble (doing)",
          ],
        },
        {
          kind: "pattern",
          title: "`get`",
          lines: [
            "get ready           get better          get in touch",
            "get started         get involved        get feedback",
            "get approval        get results         get access",
          ],
        },
        {
          kind: "pattern",
          title: "`give`",
          lines: [
            "give advice         give feedback       give a presentation",
            "give a hand         give someone a call give an example",
            "give it a try       give priority to    give permission",
          ],
        },
        {
          kind: "pattern",
          title: "`keep` / `save` / `spend` / `pay`",
          lines: [
            "keep in mind        keep in touch       keep track of",
            "keep an eye on      keep someone posted keep calm",
            "save time           save money          save a file",
            "spend time          spend money         pay attention",
          ],
        },
        {
          kind: "heading",
          text: "Verbos que aparecem em toda reunião",
        },
        {
          kind: "table",
          headers: ["Verbo", "Colocações"],
          rows: [
            ["**meet**", "meet a deadline, meet requirements, meet expectations"],
            ["**reach**", "reach an agreement, reach a conclusion, reach out to"],
            ["**raise**", "raise a question, raise concerns, raise awareness"],
            ["**run**", "run a business, run a test, run late, run out of"],
            ["**hold**", "hold a meeting, hold a position"],
            ["**set**", "set a deadline, set a goal, set up a meeting, set priorities"],
            ["**draw**", "draw a conclusion, draw attention to"],
            ["**break**", "break a promise, break the rules, break the news"],
          ],
        },
        {
          kind: "heading",
          text: "Adjetivo + substantivo",
        },
        {
          kind: "pattern",
          lines: [
            "strong  coffee / opinion / evidence / argument",
            "heavy   rain / traffic / workload / accent",
            "deep    sleep / concern / knowledge / breath",
            "high    priority / risk / quality / expectations",
            "tight   deadline / budget / schedule",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Colocações que brasileiros erram",
          text: "❌ [[make a favor]] → ✅ `do a favor`. ❌ [[take a decision]] ⚠️ → ✅ `make a decision`. ❌ [[have doubts]] ⚠️ → ✅ `have questions`. ❌ [[strong rain]] → ✅ `heavy rain`. ❌ [[do a mistake]] → ✅ `make a mistake`.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Como aprender",
          text: "Nunca guarde uma palavra sozinha. Guarde a frase inteira. Em vez de anotar *deadline*, anote [[We missed the deadline]] e [[a tight deadline]].",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com o verbo certo.",
          sentence: "Could you ___ me a favor and ___ a look at this PR?",
          answers: [["do"], ["take", "have"]],
          explanation:
            "`do a favor` e `take/have a look`. Verbo errado aqui soa estrangeiro na hora.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija a colocação.",
          wrong: "There was a strong rain during the demo.",
          answers: ["There was heavy rain during the demo."],
          explanation:
            "Chuva forte é `heavy rain`. `strong` combina com *coffee*, *opinion*, *evidence*.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "match",
          prompt: "Ligue o adjetivo ao substantivo que combina.",
          pairs: [
            { left: "heavy", right: "traffic" },
            { left: "strong", right: "opinion" },
            { left: "tight", right: "deadline" },
            { left: "deep", right: "knowledge" },
            { left: "high", right: "priority" },
          ],
          explanation:
            "Não há lógica: é convenção. Guarde os pares inteiros, nunca as palavras soltas.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "categorize",
          prompt: "Qual verbo acompanha?",
          buckets: ["make", "take", "have"],
          items: [
            { text: "___ a decision", bucket: "make" },
            { text: "___ care of", bucket: "take" },
            { text: "___ a meeting", bucket: "have" },
            { text: "___ a mistake", bucket: "make" },
            { text: "___ part in", bucket: "take" },
            { text: "___ access to", bucket: "have" },
          ],
          explanation:
            "`make` cria, `take` pega/assume, `have` possui ou experimenta. É um padrão frouxo, mas ajuda.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A gente não vai conseguir bater o prazo.",
          answers: [
            "We're not going to meet the deadline.",
            "We won't meet the deadline.",
            "We're not going to make the deadline.",
          ],
          explanation:
            "*Bater o prazo* → `meet the deadline`. ❌ [[beat the deadline]] significaria terminar bem antes.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I have some doubts about the architecture.",
          answers: [
            "I have some questions about the architecture.",
            "I have a few questions about the architecture.",
          ],
          explanation:
            "`doubt` em inglês significa *desconfiança*, não *dúvida*. Para perguntar, use `question`.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "Let's keep in touch and I'll keep you posted.",
          natural: true,
          explanation:
            "`keep in touch` e `keep someone posted` são colocações fixas de altíssima frequência profissional.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com o verbo certo.",
          sentence: "We need to ___ an agreement before we ___ a deadline.",
          answers: [["reach"], ["set"]],
          explanation:
            "`reach an agreement`, `set a deadline`. Verbos diferentes para ações que em português usariam *chegar* e *definir*.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["Please", "keep", "that", "in mind", "for the next release"],
          answers: [["Please", "keep", "that", "in mind", "for the next release"]],
          explanation:
            "`keep something in mind` = ter em mente. O objeto vai no meio da expressão.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "choice",
          prompt: "Qual está correto?",
          options: [
            "I want to make you a question.",
            "I want to ask you a question.",
            "I want to do you a question.",
            "I want to make a doubt.",
          ],
          answer: 1,
          explanation:
            "Perguntas se **fazem** com `ask`, não com `make` nem `do`. *Fazer uma pergunta* → [[ask a question]].",
          difficulty: 2,
        },
      ],
    },
  ],
};
