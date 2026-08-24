import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 3 — Modais e Estruturas                                     */
/*  Source sections 5, 22, 23, 24, 25                                  */
/* ------------------------------------------------------------------ */

export const moodModule: Module = {
  id: "mood",
  title: "Modals & Complex Structures",
  titlePt: "Modais e Estruturas",
  description:
    "Modais controlam obrigação, possibilidade e educação. Depois vêm as estruturas que separam inglês traduzido de inglês de verdade: gerúndio × infinitivo, condicionais, passiva e discurso indireto.",
  icon: "nuance",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "m-modals-core",
      number: "5.1",
      title: "Modal Verbs — the system",
      titlePt: "Modais: o sistema",
      priority: "essential",
      summary:
        "Nove verbinhos que controlam capacidade, permissão, probabilidade, obrigação e educação. Três regras nunca mudam.",
      tags: ["modais", "modal verbs", "can", "should", "must", "would", "may", "might"],
      blocks: [
        {
          kind: "text",
          text: "Os modais: `can, could, may, might, must, should, would, will, shall`. Eles não descrevem ações — descrevem a **atitude** do falante sobre a ação.",
        },
        {
          kind: "list",
          title: "As três regras que nunca mudam",
          ordered: true,
          items: [
            "**Nunca `to` depois deles:** ✅ [[I can swim.]] ❌ [[I can to swim.]]",
            "**Nunca `-s` na terceira pessoa:** ✅ [[She can.]] ❌ [[She cans.]]",
            "**Eles são o próprio auxiliar:** [[Can you?]] / [[He can't.]] — nunca use `do` com modal.",
          ],
        },
        {
          kind: "callout",
          tone: "key",
          text: "Se você internalizar essas três regras, elimina metade dos erros com modais de uma vez.",
        },
        {
          kind: "heading",
          text: "Capacidade",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I can drive." },
            { marker: "good", text: "I could drive when I was 18.", note: "capacidade geral no passado" },
            { marker: "good", text: "I'll be able to help tomorrow.", note: "capacidade no futuro" },
            { marker: "bad", text: "I will can help tomorrow." },
            { marker: "bad", text: "Yesterday I could finish the task." },
            { marker: "good", text: "Yesterday I was able to finish the task.", note: "sucesso pontual no passado" },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "A pegadinha do could",
          text: "`could` serve para capacidade **geral** no passado. Para um sucesso **específico**, use `was/were able to` ou `managed to`.",
        },
        {
          kind: "heading",
          text: "Possibilidade — uma escala",
        },
        {
          kind: "table",
          headers: ["Certeza", "Modal", "Exemplo"],
          rows: [
            ["100% (dedução positiva)", "**must**", "It **must be** a config issue."],
            ["~70%", "**should**", "It **should work** now."],
            ["~50%", "**may / might / could**", "It **might be** a network problem."],
            ["~0% (dedução negativa)", "**can't**", "It **can't be** the database — I just checked."],
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Dedução negativa",
          text: "O oposto de `must be` **não** é `mustn't be`. É `can't be`. ❌ [[It mustn't be true.]] → ✅ [[It can't be true.]]",
        },
        {
          kind: "heading",
          text: "Obrigação e proibição",
        },
        {
          kind: "table",
          headers: ["Forma", "Significado"],
          rows: [
            ["**have to / must**", "obrigação — é necessário"],
            ["**mustn't**", "proibição — é proibido"],
            ["**don't have to**", "**ausência** de obrigação — não precisa"],
            ["**should**", "conselho — é uma boa ideia"],
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "O erro mais caro da lista",
          text: "`mustn't` e `don't have to` são **opostos**, não sinônimos. [[You mustn't tell him]] = é proibido contar. [[You don't have to tell him]] = você não é obrigado a contar.",
        },
        {
          kind: "heading",
          text: "A escada da educação",
        },
        {
          kind: "table",
          headers: ["Nível", "Fórmula"],
          rows: [
            ["Direto", "Send me the file."],
            ["Normal", "**Can you** send me the file?"],
            ["Educado", "**Could you** send me the file?"],
            ["Mais educado", "**Would you mind** sending me the file?"],
            ["Muito formal ✍️", "**I would appreciate it if you could** send the file."],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Depois de `Would you mind` vem **`-ing`**, nunca infinitivo: ❌ [[Would you mind to help?]] → ✅ [[Would you mind helping?]]",
        },
        {
          kind: "pairs",
          title: "Usos de `would` que valem decorar",
          items: [
            { term: "I'd like", meaning: 'um "eu quero" educado: [[I\'d like a coffee.]] [[I\'d like to speak to Ana.]]' },
            { term: "Would you like…?", meaning: "oferta educada" },
            { term: "I'd rather", meaning: "eu prefiro: [[I'd rather work from home.]] [[I'd rather not talk about it.]]" },
            { term: "I'd say…", meaning: "opinião suavizada: [[I'd say it's about 20%.]]" },
            { term: "We'd meet every Friday", meaning: "hábito no passado" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She cans help you with that.",
          answers: ["She can help you with that."],
          explanation: "Modal nunca leva `-s` na terceira pessoa. Regra 2, sem exceções.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Do you can come to the meeting?",
          answers: ["Can you come to the meeting?"],
          explanation:
            "Modal é o próprio auxiliar — basta invertê-lo com o sujeito. Nunca combine `do` com modal.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "É proibido fumar aqui. O que você diz?",
          options: [
            "You don't have to smoke here.",
            "You mustn't smoke here.",
            "You shouldn't must smoke here.",
            "You haven't to smoke here.",
          ],
          answer: 1,
          explanation:
            "`mustn't` = proibição. `don't have to` significaria apenas que não é obrigatório fumar.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "A reunião foi cancelada, então ninguém é obrigado a ir. O que você diz?",
          options: [
            "You mustn't come.",
            "You don't have to come.",
            "You can't come.",
            "You shouldn't come.",
          ],
          answer: 1,
          explanation:
            "Ausência de obrigação → `don't have to`. `mustn't` proibiria a pessoa de aparecer.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I will can finish it tomorrow.",
          answers: [
            "I'll be able to finish it tomorrow.",
            "I will be able to finish it tomorrow.",
          ],
          explanation:
            "Dois modais nunca se combinam. Para capacidade futura use `will be able to`.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Would you mind to help me with this?",
          answers: [
            "Would you mind helping me with this?",
            "Would you mind helping me?",
          ],
          explanation:
            "`mind` sempre pede `-ing`. Aqui o pedido educado é [[Would you mind + verbo-ing]].",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "categorize",
          prompt: "Que grau de certeza cada frase comunica?",
          buckets: ["Quase certeza", "Possibilidade", "Certeza de que NÃO"],
          items: [
            { text: "It must be a config issue.", bucket: "Quase certeza" },
            { text: "It might be a network problem.", bucket: "Possibilidade" },
            { text: "It can't be the database.", bucket: "Certeza de que NÃO" },
            { text: "It could be a caching bug.", bucket: "Possibilidade" },
            { text: "That must be her now.", bucket: "Quase certeza" },
          ],
          explanation:
            "`must` e `can't` são os dois extremos da dedução. `may/might/could` ficam no meio.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "translate",
          prompt: "Peça de forma educada:",
          pt: "Você poderia revisar isso?",
          answers: [
            "Could you review this?",
            "Could you take a look at this?",
            "Would you mind reviewing this?",
          ],
          explanation:
            "`Could you…?` é o pedido educado padrão. O passado do modal sinaliza educação, não tempo.",
          difficulty: 1,
        },
        {
          id: "e9",
          kind: "fill",
          prompt: "Complete com o modal certo para sucesso pontual no passado.",
          sentence: "It took all night, but I ___ ___ ___ finish the migration.",
          answers: [["was"], ["able"], ["to"]],
          explanation:
            "Para um sucesso específico no passado usa-se `was able to`, não `could`.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'd rather not talk about it right now.",
          natural: true,
          explanation:
            "`I'd rather` + verbo base. A negativa é `I'd rather not`, sem `don't`.",
          difficulty: 2,
        },
        {
          id: "e11",
          kind: "match",
          prompt: "Ligue cada modal à sua função.",
          pairs: [
            { left: "You should update the docs.", right: "Conselho — dá pra ignorar." },
            { left: "You have to update the docs.", right: "Obrigação — tem consequência." },
            { left: "You mustn't update the docs.", right: "Proibição." },
            { left: "You don't have to update the docs.", right: "Opcional." },
          ],
          explanation:
            "Quatro frases quase idênticas com quatro consequências práticas diferentes.",
          difficulty: 3,
        },
        {
          id: "e12",
          kind: "order",
          prompt: "Monte o pedido muito educado.",
          tokens: ["Would", "you", "mind", "sending", "me", "the file"],
          answers: [["Would", "you", "mind", "sending", "me", "the file"]],
          explanation: "Estrutura fixa: `Would you mind` + `-ing`.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "m-modals-nuance",
      number: "5.3",
      title: "Modal Nuance & Past Modals",
      titlePt: "Nuances e modais no passado",
      priority: "useful",
      summary:
        "must × have to, may × might, will × would — e o `should have` que serve para arrependimento e crítica.",
      tags: ["must", "have to", "may", "might", "should have", "must have", "could have"],
      blocks: [
        { kind: "heading", text: "`must` × `have to`" },
        {
          kind: "table",
          headers: ["", "must", "have to"],
          rows: [
            ["Origem", "autoridade do falante / regra escrita", "circunstância externa"],
            ["Registro", "mais formal, mais escrito", "cotidiano, qualquer situação"],
            ["Exemplo", "You **must** submit by Friday. *(regra)*", "I **have to** submit by Friday. *(exigem de mim)*"],
            ["Passado", "❌ não tem → use **had to**", "I **had to** rewrite it."],
            ["Futuro", "❌ → use **will have to**", "We'**ll have to** wait."],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Conselho prático",
          text: "Na fala, use **have to** quase sempre. `must` falado pode soar mandão ou dramático. Guarde `must` para regras escritas e para dedução ([[it must be broken]]).",
        },
        { kind: "heading", text: "`can` × `could`" },
        {
          kind: "list",
          items: [
            "**Capacidade:** [[I can drive]] agora × [[I could drive at 18]] no passado.",
            "**Pedidos:** `could` é mais educado. Os dois funcionam entre colegas.",
            "**Possibilidade:** `can` = possibilidade geral ([[It can get cold here in June]]); `could` = possibilidade específica agora ([[It could be a network issue]]).",
          ],
        },
        { kind: "heading", text: "`may` × `might`" },
        {
          kind: "list",
          items: [
            "Para possibilidade são praticamente intercambiáveis. `might` é um pouco menos certo e muito mais comum na fala.",
            "`may` também significa permissão formal ([[May I?]]); `might` não.",
            "✍️ Em texto formal/jurídico, `may` = permissão ou possibilidade: [[Users may cancel at any time.]]",
            "**Regra de bolso:** falando → `might`. Escrita formal → `may`.",
          ],
        },
        { kind: "heading", text: "`will` × `would`" },
        {
          kind: "table",
          headers: ["will", "would"],
          rows: [
            ["futuro real", "hipotético / irreal"],
            ["I'**ll** help you.", "I'**d** help you if I had time."],
            ["He **won't** answer. *(recusa / futuro)*", "He **wouldn't** answer. *(recusou, passado)*"],
            ["That **will** be $30.", "That **would** be great."],
            ["pedido direto: *Will you…?*", "pedido educado: *Would you…?*"],
          ],
        },
        { kind: "heading", text: "Modais no passado" },
        {
          kind: "table",
          headers: ["Presente", "Passado", "Significado"],
          rows: [
            ["can", "could / was able to", "capacidade"],
            ["must *(obrigação)*", "**had to**", "obrigação"],
            ["must *(dedução)*", "**must have + particípio**", "She **must have forgotten**."],
            ["might / may", "**might have + particípio**", "He **might have missed** the train."],
            ["should", "**should have + particípio**", "I **should have** tested it. *(arrependimento)*"],
            ["shouldn't", "**shouldn't have + particípio**", "You **shouldn't have said** that."],
            ["can't *(dedução)*", "**can't have + particípio**", "She **can't have known**."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "`should have` é ouro",
          text: "Serve para arrependimento e crítica, e aparece o tempo todo. 🗣️ Soa como *\u201cshoulda\u201d*. Nunca escreva *\u201cshould of\u201d* — é erro até de nativo.",
        },
        {
          kind: "examples",
          title: "Erros clássicos com modais",
          items: [
            { marker: "bad", text: "I must to go." },
            { marker: "good", text: "I must go. / I have to go." },
            { marker: "bad", text: "You don't must smoke here." },
            { marker: "good", text: "You mustn't smoke here. / You can't smoke here." },
            { marker: "bad", text: "I'd like drink something." },
            { marker: "good", text: "I'd like to drink something. / I'd like a drink." },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com o passado de *must* (obrigação).",
          sentence: "The build broke, so we ___ ___ roll back.",
          answers: [["had"], ["to"]],
          explanation: "`must` não tem passado. A obrigação no passado é sempre `had to`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "translate",
          prompt: "Expresse arrependimento em inglês:",
          pt: "Eu deveria ter testado antes.",
          answers: [
            "I should have tested it first.",
            "I should have tested it before.",
            "I should've tested it first.",
          ],
          explanation:
            "`should have + particípio` é a estrutura padrão de arrependimento sobre o passado.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "Ela não respondeu o e-mail. Você deduz que ela esqueceu. O que diz?",
          options: [
            "She must forget.",
            "She must have forgotten.",
            "She should have forgotten.",
            "She had to forget.",
          ],
          answer: 1,
          explanation:
            "Dedução sobre algo que já aconteceu → `must have + particípio`.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I must to leave early today.",
          answers: [
            "I must leave early today.",
            "I have to leave early today.",
          ],
          explanation: "Nunca `to` depois de modal. E na fala, `have to` soa mais natural.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "You shouldn't have merged that PR without a review.",
          natural: true,
          explanation:
            "`shouldn't have + particípio` = crítica sobre algo que já foi feito. Uso perfeito.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "`must` ou `have to`?",
          buckets: ["must (regra escrita / dedução)", "have to (circunstância, fala)"],
          items: [
            { text: "All passengers must wear a seatbelt.", bucket: "must (regra escrita / dedução)" },
            { text: "I have to be at the airport by six.", bucket: "have to (circunstância, fala)" },
            { text: "It must be broken.", bucket: "must (regra escrita / dedução)" },
            { text: "We had to cancel the trip.", bucket: "have to (circunstância, fala)" },
          ],
          explanation:
            "`must` vem da autoridade ou da lógica. `have to` vem do mundo empurrando você.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete com o modal mais natural na fala.",
          sentence: "I'm not sure — it ___ be a caching issue.",
          answers: [["might", "could", "may"]],
          explanation:
            "Possibilidade incerta. `might` é o mais comum na fala; `may` fica melhor por escrito.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue a frase ao que ela comunica.",
          pairs: [
            { left: "He won't answer.", right: "Ele se recusa / não vai responder." },
            { left: "He wouldn't answer.", right: "Ele se recusou, no passado." },
            { left: "That would be great.", right: "Reação educada a uma oferta." },
            { left: "That will be $30.", right: "É quanto custa." },
          ],
          explanation:
            "`would` é o modal da irrealidade e da educação; `will` é o do futuro concreto.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a dedução negativa sobre o passado.",
          tokens: ["She", "can't", "have", "known", "about it"],
          answers: [["She", "can't", "have", "known", "about it"]],
          explanation:
            "Dedução negativa usa `can't have`, nunca `mustn't have`.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'd like drink something cold.",
          answers: [
            "I'd like to drink something cold.",
            "I'd like a cold drink.",
          ],
          explanation:
            "`would like` sempre pede `to` + verbo, ou um substantivo direto. Nunca verbo pelado.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "m-gerund-infinitive",
      number: "22",
      title: "Gerunds & Infinitives",
      titlePt: "-ing ou to + verbo?",
      priority: "essential",
      summary:
        "Depois de preposição, sempre `-ing`. Depois de certos verbos, sempre `to`. E há um grupo onde a escolha muda o significado.",
      tags: ["gerund", "infinitive", "-ing", "to", "preposição", "want", "look forward to"],
      blocks: [
        {
          kind: "rule",
          title: "Depois de preposição vem sempre `-ing`.",
          text: "O `-ing` é a única forma verbal que pode seguir uma preposição em inglês. Sem exceções.",
        },
        {
          kind: "pattern",
          lines: [
            "interested in learning        good at solving problems",
            "tired of waiting              instead of rewriting",
            "before starting               after finishing",
            "without asking                by automating",
            "look forward to hearing       used to working",
            "capable of handling           responsible for maintaining",
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "A armadilha do `to`",
          text: "Em *look forward to*, *be used to*, *object to*, *be committed to*, o `to` é **preposição**, não infinitivo — então pede `-ing`.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I look forward to hearing from you." },
            { marker: "bad", text: "I look forward to hear from you." },
            { marker: "good", text: "I'm used to working late." },
            { marker: "good", text: "We're committed to improving the process." },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Teste infalível",
          text: "Dá para colocar um substantivo depois? *\u201cI look forward to **the meeting**\u201d* → dá → então é preposição → use `-ing`.",
        },
        { kind: "heading", text: "Verbo + verbo: quem pede o quê" },
        {
          kind: "compare",
          left: {
            title: "Pedem `-ing`",
            tone: "brand",
            items: [
              "enjoy, avoid, finish, keep, mind",
              "suggest, consider, practise, miss",
              "It's worth / It's no use",
              "I enjoy reading.",
            ],
          },
          right: {
            title: "Pedem `to + verbo`",
            tone: "brand",
            items: [
              "want, need, decide, hope, plan",
              "promise, agree, offer, refuse, learn",
              "manage, seem, afford, pretend",
              "I decided to go.",
            ],
          },
        },
        { kind: "heading", text: "`want` + pessoa + `to`" },
        {
          kind: "callout",
          tone: "br",
          title: "O erro do `want that`",
          text: "O português usa *que* + subjuntivo. O inglês usa **objeto + infinitivo**.",
        },
        {
          kind: "translation",
          pt: "Quero que você me envie isso.",
          wrong: "I want that you send it to me.",
          right: ["I want you to send it to me."],
          note: "Mesma estrutura com: [[She asked me to send it.]] [[They told us to wait.]] [[Remind me to call him.]]",
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Grupo especial: sem `to`",
          text: "`make`, `let`, `have` (causativo) e `help` (opcional) não levam `to`: ✅ [[Let me know.]] ❌ [[Let me to know.]] ✅ [[That makes me think.]] ✅ [[I had him look at it.]]",
        },
        { kind: "heading", text: "Quando o significado muda" },
        {
          kind: "table",
          headers: ["Estrutura", "Significado", "Exemplo"],
          rows: [
            ["remember **to** do", "não esquecer de fazer", "**Remember to lock** the door."],
            ["remember **doing**", "ter a lembrança", "I **remember locking** the door."],
            ["stop **to** do", "parar para fazer outra coisa", "I **stopped to smoke**."],
            ["stop **doing**", "parar de fazer", "I **stopped smoking**."],
            ["try **to** do", "tentar, esforçar-se", "I **tried to open** it."],
            ["try **doing**", "experimentar como teste", "**Try restarting** it."],
          ],
        },
        { kind: "heading", text: "O `-ing` como sujeito" },
        {
          kind: "callout",
          tone: "br",
          text: "O português usa o infinitivo aqui (*\u201cTrabalhar de casa economiza tempo\u201d*), então brasileiros escrevem ⚠️ [[To work from home saves time]] — possível, mas soa formal e estranho. Prefira: ✅ [[Working from home saves time.]]",
        },
        {
          kind: "table",
          title: "Resumo dos erros mais comuns",
          headers: ["❌", "✅"],
          rows: [
            ["I look forward to hear from you.", "I look forward to **hearing** from you."],
            ["I'm used to work late.", "I'm used to **working** late."],
            ["He suggested me to call.", "He **suggested calling** / **suggested that I call**."],
            ["I want that you help me.", "I **want you to help** me."],
            ["Let me to explain.", "**Let me explain.**"],
            ["I enjoy to read.", "I **enjoy reading**."],
            ["Thanks for help me.", "Thanks for **helping** me."],
            ["It's worth to try.", "It's **worth trying**."],
            ["I avoid to use it.", "I **avoid using** it."],
            ["I decided going.", "I **decided to go**."],
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija o fechamento de e-mail mais errado do Brasil.",
          wrong: "I look forward to hear from you.",
          answers: ["I look forward to hearing from you."],
          explanation:
            "Nesse `to` é preposição, não infinitivo. Teste: [[I look forward to the meeting]] funciona → logo, `-ing`.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I want that you send me the report.",
          answers: [
            "I want you to send me the report.",
            "I want you to send the report to me.",
          ],
          explanation:
            "O inglês não aceita `want that`. A estrutura é `want` + pessoa + `to` + verbo.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete com a forma correta de *wait*.",
          sentence: "I'm tired of ___ for their approval.",
          answers: [["waiting"]],
          explanation: "`of` é preposição → obrigatoriamente `-ing`.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Você quer sugerir que a pessoa reinicie a máquina, como teste. O que diz?",
          options: [
            "Try to restart it.",
            "Try restarting it.",
            "Try that you restart it.",
            "Try restart it.",
          ],
          answer: 1,
          explanation:
            "`try + -ing` = experimente isso como solução. `try to` = esforce-se para conseguir.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "match",
          prompt: "Ligue cada frase ao seu significado.",
          pairs: [
            { left: "I stopped smoking.", right: "Larguei o cigarro." },
            { left: "I stopped to smoke.", right: "Parei o que fazia para fumar." },
            { left: "Remember to lock the door.", right: "Não esqueça de trancar." },
            { left: "I remember locking the door.", right: "Tenho a lembrança de ter trancado." },
          ],
          explanation:
            "Nesses verbos, `-ing` olha para trás (memória, hábito) e `to` olha para frente (intenção).",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Let me to explain the architecture.",
          answers: ["Let me explain the architecture."],
          explanation:
            "`let`, `make` e `have` causativo nunca levam `to`. O verbo vem pelado.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Vale a pena tentar.",
          answers: ["It's worth trying.", "It is worth trying.", "It's worth a try."],
          explanation: "`worth` sempre pede `-ing`. ❌ [[It's worth to try.]]",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "categorize",
          prompt: "Cada verbo pede o quê?",
          buckets: ["pede -ing", "pede to + verbo"],
          items: [
            { text: "enjoy", bucket: "pede -ing" },
            { text: "decide", bucket: "pede to + verbo" },
            { text: "avoid", bucket: "pede -ing" },
            { text: "promise", bucket: "pede to + verbo" },
            { text: "keep", bucket: "pede -ing" },
            { text: "manage", bucket: "pede to + verbo" },
          ],
          explanation:
            "Não há lógica — é lista. Mas vale notar: verbos de intenção e futuro tendem a `to`; verbos de experiência tendem a `-ing`.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "To work from home saves me two hours a day.",
          natural: false,
          correction: "Working from home saves me two hours a day.",
          explanation:
            "Como sujeito da frase, o inglês prefere `-ing`. O infinitivo aqui é calco do português.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Complete com a forma correta de *help*.",
          sentence: "Thanks for ___ me with the deployment.",
          answers: [["helping"]],
          explanation: "`for` é preposição → `-ing`. ❌ [[Thanks for help me.]]",
          difficulty: 1,
        },
        {
          id: "e11",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["She", "asked", "me", "to send", "the file"],
          answers: [["She", "asked", "me", "to send", "the file"]],
          explanation:
            "`ask` + pessoa + `to` + verbo. Mesmo padrão de `want`, `tell` e `remind`.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "m-conditionals",
      number: "23",
      title: "Conditionals",
      titlePt: "Condicionais",
      priority: "useful",
      summary:
        "Esqueça a numeração. São três situações práticas — e uma regra que brasileiros quebram todo dia: nunca `will` depois de `if`.",
      tags: ["conditionals", "if", "would", "unless", "condicional", "se"],
      blocks: [
        {
          kind: "text",
          text: "Esqueça o sistema de numeração se ele te confunde. Existem basicamente **três situações práticas**.",
        },
        {
          kind: "heading",
          text: "A. Real / sempre verdade",
        },
        {
          kind: "pattern",
          lines: ["If + PRESENTE, + PRESENTE"],
          caption: "Fatos, regras, resultados automáticos. Aqui `if` = `when`.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "If you press this button, it restarts." },
            { marker: "good", text: "If the disk is full, the service crashes." },
            { marker: "good", text: "Water boils if you heat it to 100°C." },
          ],
        },
        {
          kind: "heading",
          text: "B. Possibilidade real no futuro",
        },
        {
          kind: "pattern",
          lines: ["If + PRESENTE, + WILL / CAN / MIGHT / SHOULD + VERBO"],
          caption: "A condicional mais útil do dia a dia.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "If it rains, we'll cancel the event." },
            { marker: "good", text: "If you finish early, you can leave." },
            { marker: "good", text: "If we don't fix this today, we might miss the deadline." },
            { marker: "good", text: "Call me if you need help.", note: "imperativo também funciona" },
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Nunca `will` dentro do `if`",
          text: "O português usa futuro do subjuntivo (*se precisar*, *se vier*), que **parece** futuro. O inglês usa o presente. Este é um dos erros mais frequentes de falantes de português.",
        },
        {
          kind: "translation",
          pt: "Se você precisar, me liga. / Se ele vier, avisa.",
          wrong: "If you will need… / If he will come…",
          right: ["If you need anything, call me.", "If he comes, let me know."],
        },
        {
          kind: "heading",
          text: "C. Irreal / hipotético no presente",
        },
        {
          kind: "pattern",
          lines: ["If + PASSADO, + WOULD / COULD / MIGHT + VERBO"],
          caption: "O passado aqui não indica tempo — indica **irrealidade**.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "If I had more time, I'd rewrite it.", note: "não tenho tempo" },
            { marker: "good", text: "If I were you, I'd wait.", note: "padrão clássico de conselho" },
            { marker: "good", text: "If we hired two more people, we could ship faster." },
            { marker: "good", text: "It would be great if you could join." },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          text: "[[If I were you]] é a forma tradicional. [[If I was you]] é muito comum na fala e hoje amplamente aceito. Escreva `were`.",
        },
        {
          kind: "heading",
          text: "D. Arrependimento sobre o passado",
        },
        {
          kind: "pattern",
          lines: ["If + PAST PERFECT, + WOULD HAVE + PARTIC\u00cdPIO"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "If we had tested it, we wouldn't have broken production." },
            { marker: "good", text: "If I'd known, I would have told you." },
          ],
        },
        {
          kind: "pairs",
          title: "Outras conjunções condicionais",
          items: [
            { term: "unless", meaning: "= if not: [[I won't go unless you come with me.]]" },
            { term: "as long as / provided that", meaning: "desde que: [[You can use it as long as you credit us.]]" },
            { term: "in case", meaning: "por precaução: [[Take an umbrella in case it rains.]]" },
            { term: "even if", meaning: "mesmo que: [[I'd say no even if they paid double.]]" },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "`unless` já é negativo. ❌ [[Unless you don't come]] → ✅ [[Unless you come]].",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "If you will need anything, call me.",
          answers: [
            "If you need anything, call me.",
            "If you need anything, just call me.",
          ],
          explanation:
            "A oração com `if` fica no presente, mesmo falando do futuro. `will` só na outra metade da frase.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete a condicional real de futuro.",
          sentence: "If it ___ tomorrow, we ___ cancel the event.",
          answers: [["rains"], ["will", "'ll"]],
          explanation:
            "Presente no `if`, `will` no resultado. Nunca os dois com `will`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Dê um conselho em inglês:",
          pt: "Se eu fosse você, eu esperaria.",
          answers: [
            "If I were you, I'd wait.",
            "If I were you, I would wait.",
            "If I was you, I'd wait.",
          ],
          explanation:
            "Padrão fixo de conselho. O `were` é a forma tradicional, inclusive com `I`.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual frase expressa arrependimento sobre o passado?",
          options: [
            "If we test it, we won't break production.",
            "If we tested it, we wouldn't break production.",
            "If we had tested it, we wouldn't have broken production.",
            "If we will test it, we don't break production.",
          ],
          answer: 2,
          explanation:
            "Passado irreal → `If + had + particípio`, resultado com `would have + particípio`.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "fix",
          prompt: "Corrija a dupla negativa.",
          wrong: "I won't go unless you don't come with me.",
          answers: [
            "I won't go unless you come with me.",
            "I won't go if you don't come with me.",
          ],
          explanation:
            "`unless` já significa *se não*. Negar de novo inverte o sentido da frase.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Real ou hipotético?",
          buckets: ["Real / possível", "Hipotético / irreal"],
          items: [
            { text: "If it rains, we'll cancel.", bucket: "Real / possível" },
            { text: "If I had more time, I'd rewrite it.", bucket: "Hipotético / irreal" },
            { text: "If you finish early, you can leave.", bucket: "Real / possível" },
            { text: "If we hired two people, we could ship faster.", bucket: "Hipotético / irreal" },
          ],
          explanation:
            "Presente no `if` = acho que pode acontecer. Passado no `if` = sei que não é o caso.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "Take an umbrella in case it rains.",
          natural: true,
          explanation:
            "`in case` = por precaução, e vem seguido de presente. Diferente de `if`, que é condição.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte a condicional hipotética.",
          tokens: ["If", "I", "had", "more time", "I'd", "rewrite", "it"],
          answers: [["If", "I", "had", "more time", "I'd", "rewrite", "it"]],
          explanation:
            "Passado no `if` + `would` no resultado. O passado sinaliza que não é verdade agora.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fill",
          prompt: "Complete com `unless` ou `as long as`.",
          sentence: "You can use the API ___ you stay under the rate limit.",
          answers: [["as long as", "provided that", "provided", "so long as"]],
          explanation:
            "Condição positiva de permissão → `as long as`. `unless` daria o sentido inverso.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Se a gente tivesse testado, não teria quebrado a produção.",
          answers: [
            "If we had tested it, we wouldn't have broken production.",
            "If we'd tested it, we wouldn't have broken production.",
          ],
          explanation:
            "Arrependimento sobre o passado: `had + particípio` de um lado, `would have + particípio` do outro.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "m-passive",
      number: "24",
      title: "Passive Voice",
      titlePt: "Voz passiva",
      priority: "useful",
      summary:
        "Quando quem fez não importa, não se sabe, ou é óbvio. Domina documentação técnica e comunicação corporativa.",
      tags: ["passive", "passiva", "be", "particípio", "by", "get passive"],
      blocks: [
        {
          kind: "pattern",
          lines: ["Subject + BE (no tempo certo) + PAST PARTICIPLE (+ by + agente)"],
        },
        {
          kind: "text",
          text: "Use a passiva quando **quem fez** não importa, não se sabe, ou é óbvio pelo contexto. O foco vai para o que aconteceu.",
        },
        {
          kind: "table",
          title: "A passiva em cada tempo",
          headers: ["Tempo", "Forma", "Exemplo"],
          rows: [
            ["Present Simple", "am/is/are + PP", "The request **is validated** first."],
            ["Past Simple", "was/were + PP", "The invoice **was sent** last week."],
            ["Present Continuous", "am/is/are being + PP", "The issue **is being investigated**."],
            ["Present Perfect", "have/has been + PP", "The changes **have been approved**."],
            ["Past Perfect", "had been + PP", "The file **had been deleted**."],
            ["Future", "will be + PP", "You **will be notified**."],
            ["Modal", "modal + be + PP", "It **must be tested** first."],
            ["Infinitivo", "to be + PP", "It needs **to be reviewed**."],
            ["Gerúndio", "being + PP", "I hate **being interrupted**."],
          ],
        },
        {
          kind: "heading",
          text: "Onde a passiva realmente domina",
        },
        {
          kind: "examples",
          title: "Documentação técnica",
          items: [
            { marker: "good", text: "Passwords are hashed using bcrypt." },
            { marker: "good", text: "This method is deprecated and will be removed in v3." },
            { marker: "good", text: "The container is restarted automatically if it crashes." },
          ],
        },
        {
          kind: "examples",
          title: "Comunicação corporativa",
          items: [
            { marker: "good", text: "Your request has been received." },
            { marker: "good", text: "The meeting has been rescheduled to Thursday." },
            { marker: "good", text: "You will be contacted within 48 hours." },
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Quando NÃO usar",
          text: "Em texto comum, a passiva enfraquece a frase e esconde responsabilidade. ⚠️ [[Mistakes were made.]] → ✅ [[We made a mistake.]] Se você sabe quem fez e isso importa, use a ativa.",
        },
        {
          kind: "compare",
          left: {
            title: "Ativa — prefira por padrão",
            tone: "good",
            items: [
              "We deployed the fix.",
              "The team missed the deadline.",
              "I broke the build.",
            ],
          },
          right: {
            title: "Passiva — use com intenção",
            tone: "neutral",
            items: [
              "The fix was deployed.",
              "The deadline was missed.",
              "The build was broken.",
            ],
          },
        },
        {
          kind: "heading",
          text: "A passiva com `get` 🗣️",
        },
        {
          kind: "examples",
          items: [
            { marker: "spoken", text: "My laptop got stolen.", note: "mais informal que was stolen" },
            { marker: "spoken", text: "He got fired last month." },
            { marker: "spoken", text: "We got interrupted twice." },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Cuidado com o `se` do português",
          text: "*Fala-se inglês aqui* não vira ❌ [[Speaks English here]]. Vira ✅ [[English is spoken here]] ou, mais natural, ✅ [[We speak English here.]]",
        },
        {
          kind: "pairs",
          title: "Construções impessoais úteis ✍️",
          items: [
            { term: "It is said that…", meaning: "Dizem que…" },
            { term: "It is believed that…", meaning: "Acredita-se que…" },
            { term: "It is estimated that…", meaning: "Estima-se que…" },
            { term: "It is expected that…", meaning: "Espera-se que…" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Passe para a passiva: *Two engineers review the application.*",
          sentence: "The application ___ ___ by two engineers.",
          answers: [["is"], ["reviewed"]],
          explanation: "Present Simple passivo = `is/are` + particípio.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A reunião foi remarcada para quinta.",
          answers: [
            "The meeting has been rescheduled to Thursday.",
            "The meeting was rescheduled to Thursday.",
            "The meeting has been moved to Thursday.",
          ],
          explanation:
            "Quem remarcou não importa → passiva. Present Perfect passivo enfatiza que a mudança vale agora.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija a tradução literal do `se` impessoal.",
          wrong: "Speaks English here.",
          answers: [
            "English is spoken here.",
            "We speak English here.",
          ],
          explanation:
            "O inglês não tem `se` impessoal. Ou você usa a passiva, ou inventa um sujeito (`we`, `they`).",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual soa melhor num post-mortem honesto?",
          options: [
            "Mistakes were made.",
            "We made a mistake in the rollout.",
            "It was mistaken.",
            "Mistakes have been being made.",
          ],
          answer: 1,
          explanation:
            "A passiva sem agente esconde responsabilidade e soa evasiva. Em texto direto, prefira a ativa.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "The issue is being investigated by the platform team.",
          natural: true,
          explanation:
            "Passiva contínua: `is being` + particípio. Comum em status updates.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Ativa ou passiva é a melhor escolha aqui?",
          buckets: ["Ativa", "Passiva"],
          items: [
            { text: "Eu quebrei o build.", bucket: "Ativa" },
            { text: "Senhas são criptografadas com bcrypt.", bucket: "Passiva" },
            { text: "Nosso time entregou a feature.", bucket: "Ativa" },
            { text: "Você será notificado em 48h.", bucket: "Passiva" },
          ],
          explanation:
            "Se o agente é conhecido e relevante, use ativa. Se é irrelevante ou genérico, passiva.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "order",
          prompt: "Monte a frase na passiva com modal.",
          tokens: ["It", "must", "be", "tested", "before release"],
          answers: [["It", "must", "be", "tested", "before release"]],
          explanation: "Modal + `be` + particípio. O modal nunca muda de forma.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete a passiva com gerúndio.",
          sentence: "I hate ___ interrupted during deep work.",
          answers: [["being"]],
          explanation:
            "Depois de `hate` vem `-ing`; na passiva isso vira `being` + particípio.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue o tempo verbal à forma passiva.",
          pairs: [
            { left: "Past Simple", right: "was / were + particípio" },
            { left: "Present Perfect", right: "have / has been + particípio" },
            { left: "Future", right: "will be + particípio" },
            { left: "Modal", right: "modal + be + particípio" },
          ],
          explanation:
            "A passiva é sempre `be` no tempo desejado + particípio. Só o `be` muda.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "m-reported-speech",
      number: "25",
      title: "Reported Speech",
      titlePt: "Discurso indireto",
      priority: "useful",
      summary:
        "Contar o que alguém disse. Uma regra de recuo de tempo, uma exceção que os nativos usam o tempo todo, e say × tell.",
      tags: ["reported speech", "say", "tell", "discurso indireto", "backshift"],
      blocks: [
        {
          kind: "pattern",
          lines: [
            "say   + (that) + ora\u00e7\u00e3o              He said (that) he was busy.",
            "tell  + PESSOA + (that) + ora\u00e7\u00e3o     He told me (that) he was busy.",
            "ask   + (PESSOA) + if/WH + ora\u00e7\u00e3o    She asked if I was available.",
          ],
        },
        {
          kind: "rule",
          title: "`say` não leva pessoa. `tell` exige pessoa.",
          text: "❌ [[He said me]] → ✅ [[He told me]] ou ✅ [[He said to me]].",
        },
        { kind: "heading", text: "A regra do recuo de tempo" },
        {
          kind: "table",
          headers: ["Direto", "Indireto"],
          rows: [
            ['"I **am** busy."', "He said he **was** busy."],
            ['"I **work** here."', "She said she **worked** there."],
            ['"I **saw** it."', "He said he **had seen** it."],
            ['"I\'**ve finished**."', "She said she **had finished**."],
            ['"I **will** call."', "He said he **would** call."],
            ['"I **can** help."', "She said she **could** help."],
            ['"I **may** be late."', "He said he **might** be late."],
          ],
        },
        {
          kind: "text",
          text: "**Também mudam:** *I → he/she*, *my → his/her*, *here → there*, *this → that*, *now → then*, *today → that day*, *tomorrow → the next day*, *yesterday → the day before*.",
        },
        {
          kind: "callout",
          tone: "key",
          title: "A exceção que mais importa",
          text: "**Não recue o tempo se a informação ainda é verdade**, ou se foi dita há pouco. Nativos fazem isso o tempo todo.",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "She said she lives in Porto.", note: "ela ainda mora lá" },
            { marker: "good", text: "He just told me the server is down.", note: "ainda está" },
            { marker: "good", text: "They said the meeting is at 3.", note: "ainda não aconteceu" },
          ],
        },
        { kind: "heading", text: "Perguntas indiretas" },
        {
          kind: "pattern",
          lines: [
            "Pergunta sim/n\u00e3o  \u2192  ask + if/whether + ORDEM DE AFIRMATIVA",
            "Pergunta WH      \u2192  ask + WH-word + ORDEM DE AFIRMATIVA",
          ],
        },
        {
          kind: "callout",
          tone: "danger",
          title: "Sem inversão e sem `do`",
          text: "❌ [[He asked where was the file.]] → ✅ [[He asked where the file was.]] ❌ [[She asked if did I finish.]] → ✅ [[She asked if I had finished.]]",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: '"Are you free?" → She asked if I was free.' },
            { marker: "good", text: '"Where is the file?" → He asked where the file was.' },
            { marker: "good", text: '"What time does it start?" → I asked what time it started.' },
          ],
        },
        { kind: "heading", text: "Ordens e pedidos" },
        {
          kind: "pattern",
          lines: ["tell / ask + PESSOA + to + VERBO"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: '"Send the report." → He told me to send the report.' },
            { marker: "good", text: '"Please wait." → She asked me to wait.' },
            { marker: "good", text: '"Don\'t touch that." → He told me not to touch it.' },
          ],
        },
        {
          kind: "pairs",
          title: "Verbos melhores que `said`",
          items: [
            { term: "explain", meaning: "He **explained that** the API had changed." },
            { term: "mention", meaning: "She **mentioned that** they're hiring." },
            { term: "suggest", meaning: "He **suggested using** a queue." },
            { term: "point out", meaning: "She **pointed out that** the test was flaky." },
            { term: "admit", meaning: "He **admitted that** he had missed it." },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "He said me that the deploy failed.",
          answers: [
            "He told me that the deploy failed.",
            "He told me the deploy failed.",
            "He said that the deploy failed.",
          ],
          explanation:
            "`say` não aceita objeto de pessoa direto. Com pessoa, use `tell`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija a pergunta indireta.",
          wrong: "He asked where was the file.",
          answers: ["He asked where the file was."],
          explanation:
            "Pergunta indireta perde a inversão e volta para a ordem de afirmativa.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Passe para o indireto: *\"I will call you.\"*",
          sentence: "He said he ___ call me.",
          answers: [["would"]],
          explanation: "`will` recua para `would` no discurso indireto.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Ela me pediu para esperar.",
          answers: [
            "She asked me to wait.",
            "She asked me to hold on.",
          ],
          explanation:
            "Pedido indireto → `ask` + pessoa + `to` + verbo. Nunca [[asked me that I wait]].",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "He just told me the server is down.",
          natural: true,
          explanation:
            "A informação ainda é verdade agora, então não se recua o tempo. Nativos fazem isso o tempo todo.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "choice",
          prompt: "Como reportar *\"Don't touch that.\"*?",
          options: [
            "He told me don't touch that.",
            "He told me not to touch it.",
            "He told me to don't touch it.",
            "He said me not touch it.",
          ],
          answer: 1,
          explanation:
            "Ordem negativa indireta = `told me not to` + verbo. O `not` vem antes do `to`.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "match",
          prompt: "Ligue o tempo direto ao seu recuo.",
          pairs: [
            { left: '"I am busy."', right: "he was busy" },
            { left: '"I saw it."', right: "he had seen it" },
            { left: '"I can help."', right: "she could help" },
            { left: '"I have finished."', right: "she had finished" },
          ],
          explanation:
            "Tudo recua um passo: presente → passado, passado → past perfect, modal → forma de passado.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte a pergunta indireta.",
          tokens: ["She", "asked", "if", "I", "was", "available"],
          answers: [["She", "asked", "if", "I", "was", "available"]],
          explanation:
            "`ask if` + ordem de afirmativa. Nada de `did` e nada de inversão.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "categorize",
          prompt: "`say` ou `tell`?",
          buckets: ["say", "tell"],
          items: [
            { text: "He ___ that it was fine.", bucket: "say" },
            { text: "He ___ me the truth.", bucket: "tell" },
            { text: "She ___ she was tired.", bucket: "say" },
            { text: "Don't ___ him about it.", bucket: "tell" },
          ],
          explanation:
            "Regra mecânica: se aparece a pessoa que ouviu, é `tell`. Se não aparece, é `say`.",
          difficulty: 2,
        },
      ],
    },
  ],
};
