import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 8 — Profissional                                            */
/*  Source sections 29, 30, 36                                         */
/* ------------------------------------------------------------------ */

export const professionalModule: Module = {
  id: "professional",
  title: "Professional English",
  titlePt: "Inglês Profissional",
  description:
    "E-mail, reunião e escrita clara. Onde o inglês corporativo brasileiro mais escorrega — e o resumo final de tudo.",
  icon: "professional",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "pr-writing",
      number: "29",
      title: "Writing Clearly",
      titlePt: "Escrever com clareza",
      priority: "essential",
      summary:
        "Frase curta não é inglês simples. É bom inglês. E o ponto principal vem primeiro, não no fim.",
      tags: ["writing", "escrita", "clareza", "vírgula", "concise", "voz ativa"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          title: "A regra que resolve 80%",
          text: "Uma ideia por frase. Ponto principal no começo. Voz ativa. Palavras curtas.",
        },
        {
          kind: "compare",
          left: {
            title: "⚠️ Estilo traduzido do português",
            tone: "bad",
            items: [
              "I hope this email finds you well. As you may know, we have been working on the migration project for several months now, and after many discussions with the team… [3 parágrafos] …so we need to postpone the launch.",
            ],
          },
          right: {
            title: "✅ Estilo inglês",
            tone: "good",
            items: [
              "We need to postpone the launch by two weeks.",
              "[Depois, explique o porquê.]",
            ],
          },
        },
        {
          kind: "heading",
          text: "Prefira voz ativa",
        },
        {
          kind: "examples",
          items: [
            { marker: "warn", text: "The decision was made to cancel the project." },
            { marker: "good", text: "We decided to cancel the project." },
            { marker: "warn", text: "Mistakes were made." },
            { marker: "good", text: "We made a mistake." },
          ],
        },
        {
          kind: "heading",
          text: "Corte palavras desnecessárias",
        },
        {
          kind: "table",
          headers: ["⚠️ Prolixo", "✅ Conciso"],
          rows: [
            ["due to the fact that", "because"],
            ["in order to", "to"],
            ["at this point in time", "now"],
            ["in the event that", "if"],
            ["has the ability to", "can"],
            ["it is necessary that you", "you need to"],
            ["I would like to inform you that", "*(só diga)*"],
            ["please be advised that", "*(só diga)*"],
            ["in my personal opinion", "I think"],
            ["a large number of", "many"],
            ["in the near future", "soon"],
            ["the reason is because", "the reason is / because"],
          ],
        },
        {
          kind: "heading",
          text: "Não traduza o ritmo do português",
        },
        {
          kind: "table",
          headers: ["⚠️ Português traduzido", "✅ Inglês"],
          rows: [
            ["Venho por meio deste solicitar…", "I'm writing to ask… / Could you…?"],
            ["Conforme conversado anteriormente…", "As discussed, …"],
            ["Aguardo seu retorno.", "Looking forward to hearing from you. / Let me know."],
            ["Desde já agradeço.", "Thanks in advance."],
            ["Segue em anexo.", "Here's the file. / Please find attached. ✍️"],
            ["Estou à disposição para eventuais dúvidas.", "Let me know if you have any questions."],
            ["Sem mais para o momento.", "*(omita completamente)*"],
            ["Prezado Senhor,", "Dear Mr. Silva, / Hi John,"],
            ["Atenciosamente,", "Best regards, / Best,"],
          ],
        },
        {
          kind: "heading",
          text: "As quatro regras de vírgula que importam",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Antes de conjunção que une duas frases completas:** [[We tested it, but it failed.]] *(não é preciso em frases curtas: \u201cI tried and failed.\u201d)*",
            "**Depois de elemento introdutório:** [[After the meeting, we updated the docs.]] [[However, the results were unclear.]]",
            "**Ao redor de informação não essencial:** [[Ana, who joined last month, is leading the project.]]",
            "**Em listas:** [[We need design, code, and testing.]] *(a vírgula antes do `and` é a Oxford comma — opcional, mas consistente)*",
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Ponto e vírgula",
          text: "Se você não tem certeza, não use. Duas frases separadas por ponto são sempre uma opção segura e geralmente melhor.",
        },
        {
          kind: "callout",
          tone: "br",
          text: "O inglês **não** usa vírgula entre sujeito e verbo. ❌ [[The team, decided to postpone.]] E não abre parágrafo com espaço em branco — usa linha em branco entre parágrafos.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Deixe conciso.",
          wrong: "Due to the fact that the tests failed, we were not able to deploy.",
          answers: [
            "Because the tests failed, we couldn't deploy.",
            "The tests failed, so we couldn't deploy.",
            "We couldn't deploy because the tests failed.",
          ],
          explanation:
            "`due to the fact that` → `because`. `were not able to` → `couldn't`. Cada palavra cortada melhora o texto.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Passe para voz ativa.",
          wrong: "The decision was made to cancel the project.",
          answers: [
            "We decided to cancel the project.",
            "We cancelled the project.",
            "We canceled the project.",
          ],
          explanation:
            "Passiva sem agente esconde quem decidiu e soa evasiva. Em texto direto, use ativa.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Escreva em inglês profissional:",
          pt: "Conforme conversado, segue em anexo o relatório.",
          answers: [
            "As discussed, here's the report.",
            "As discussed, I've attached the report.",
            "As discussed, please find the report attached.",
          ],
          explanation:
            "`As discussed` é o equivalente exato. `Here's the report` é mais natural que a versão formal.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual é o melhor fechamento de e-mail profissional?",
          options: [
            "Sem mais para o momento. Atenciosamente,",
            "I remain at your entire disposal for any eventual doubts.",
            "Let me know if you have any questions. Best,",
            "Awaiting your prompt return. Yours faithfully,",
          ],
          answer: 2,
          explanation:
            "Direto, útil e neutro. Fórmulas rebuscadas soam como tradução de carta comercial brasileira.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "fill",
          prompt: "Insira a vírgula depois do elemento introdutório.",
          sentence: "After the meeting ___ we updated the documentation.",
          answers: [[","]],
          explanation:
            "Elemento introdutório sempre pede vírgula: `After the meeting,` / `However,` / `If you agree,`.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "match",
          prompt: "Ligue a expressão prolixa à versão concisa.",
          pairs: [
            { left: "in order to", right: "to" },
            { left: "at this point in time", right: "now" },
            { left: "has the ability to", right: "can" },
            { left: "in the event that", right: "if" },
          ],
          explanation:
            "Cada uma dessas troca três a cinco palavras por uma. Somadas, transformam o texto.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso é boa escrita profissional em inglês?",
          sentence: "We need to postpone the launch by two weeks. Here's why.",
          natural: true,
          explanation:
            "Conclusão primeiro, contexto depois. É exatamente o que o leitor de inglês espera.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "fix",
          prompt: "Corrija a pontuação.",
          wrong: "The team, decided to postpone the release.",
          answers: ["The team decided to postpone the release."],
          explanation:
            "Nunca separe sujeito e verbo com vírgula. Esse hábito vem direto do português escrito.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase com informação não essencial entre vírgulas.",
          tokens: ["Ana,", "who joined last month,", "is leading", "the project"],
          answers: [["Ana,", "who joined last month,", "is leading", "the project"]],
          explanation:
            "Informação extra vai entre vírgulas. Sem elas, a oração passaria a **identificar** qual Ana.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "pr-email",
      number: "30.1",
      title: "Email",
      titlePt: "E-mail de trabalho",
      priority: "essential",
      summary:
        "Aberturas, pedidos, más notícias e cobranças. As frases prontas que resolvem 90% dos seus e-mails.",
      tags: ["email", "e-mail", "requests", "follow up", "greetings", "profissional"],
      blocks: [
        {
          kind: "table",
          title: "Abertura e fechamento",
          headers: ["Registro", "Abertura", "Fechamento"],
          rows: [
            ["Formal ✍️", "Dear Mr./Ms. Silva,", "Kind regards, / Sincerely,"],
            ["Profissional", "Hi John, / Hello Ana, / Hi all,", "Best regards, / Best, / Thanks,"],
            ["Casual", "Hey Marco, / Hi team,", "Cheers, 🇬🇧 / Thanks!"],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "**\u201cHi [Nome],\u201d** é o padrão seguro em negócios internacionais. Nunca: *Dear friend,* / *Hello Mr. John,* / *Dears,*. E evite *Hi guys* em grupo misto — use *Hi everyone* ou *Hi team*.",
        },
        {
          kind: "pattern",
          title: "Linhas de abertura",
          lines: [
            "I hope you're doing well.               (padr\u00e3o, seguro)",
            "Thanks for your quick reply.            (respondendo)",
            "Following up on my previous email.      (cobrando)",
            "As discussed in today's call, ...        (referenciando)",
            "Quick question about ...                 (e-mail curto)",
            "I'm reaching out about ...               (primeiro contato)",
          ],
        },
        {
          kind: "pattern",
          title: "Fazer pedidos",
          lines: [
            "Could you send me ... by [date]?",
            "Would you be able to review this before Friday?",
            "When you get a chance, could you ...?",
            "I'd appreciate it if you could ...",
            "Could you please confirm whether ...?",
            "Would it be possible to ...?",
          ],
        },
        {
          kind: "table",
          title: "Frases por função",
          headers: ["Função", "Frase"],
          rows: [
            ["Anexando", "I've attached the report. / Here's the file."],
            ["Referindo", "As mentioned, … / Regarding your question about …"],
            ["Acrescentando", "Also, … / One more thing: …"],
            ["Pedindo desculpa", "Sorry for the delay. / Apologies for the confusion."],
            ["Má notícia", "Unfortunately, … / I'm afraid … / I wanted to let you know that …"],
            ["Boa notícia", "Good news: … / I'm happy to report that …"],
            ["Cobrando", "Just following up on this. / Any update on this?"],
            ["Escalando", "I want to flag a risk. / We need a decision by X."],
            ["Adiando", "Let me look into it and get back to you."],
            ["Fechando", "Let me know if you have any questions."],
            ["Copiando alguém", "I'm copying Ana, who's leading this."],
            ["Encaminhando", "Forwarding for visibility. / FYI."],
          ],
        },
        {
          kind: "heading",
          text: "Três níveis do mesmo pedido",
        },
        {
          kind: "pattern",
          lines: [
            "Direto:    Send me the numbers today.",
            "Padr\u00e3o:    Could you send me the numbers by end of day?",
            "Suave:     Would you be able to get me the numbers today?",
            "           Let me know if that's tight.",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "O imperativo é mais duro em inglês",
          text: "*\u201cMe manda o arquivo\u201d* é neutro em português. [[Send me the file.]] num e-mail soa ríspido. Use `Could you…?` por padrão.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Prazos: seja explícito",
          text: "❌ *\u201cSend it ASAP\u201d* é vago e pressiona. ✅ [[Could you send it by Thursday EOD?]] Sempre dê uma data e um horário.",
        },
        {
          kind: "pairs",
          title: "Siglas que você vai encontrar",
          items: [
            { term: "EOD / EOW", meaning: "end of day / end of week" },
            { term: "FYI", meaning: "for your information — só informativo" },
            { term: "ASAP", meaning: "as soon as possible — evite, é vago e agressivo" },
            { term: "OOO", meaning: "out of office" },
            { term: "TL;DR", meaning: "too long; didn't read — resumo no topo" },
            { term: "LMK", meaning: "let me know 🗣️" },
            { term: "COB", meaning: "close of business" },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Deixe o pedido apropriado para e-mail.",
          wrong: "Send me the numbers today.",
          answers: [
            "Could you send me the numbers by end of day?",
            "Could you send me the numbers today?",
            "Would you be able to send me the numbers today?",
          ],
          explanation:
            "Imperativo em e-mail soa ríspido em inglês. `Could you…?` é o padrão neutro.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Qual saudação é mais segura em negócios internacionais?",
          options: ["Dears,", "Hi John,", "Hello Mr. John,", "Dear friend,"],
          answer: 1,
          explanation:
            "`Hi [Nome],` funciona em quase todo contexto profissional. As outras três soam estranhas ou erradas.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Escreva em inglês:",
          pt: "Só passando para cobrar aquilo que conversamos.",
          answers: [
            "Just following up on what we discussed.",
            "Just following up on this.",
            "Any update on what we discussed?",
          ],
          explanation:
            "`Just following up` é a cobrança educada padrão. O `just` amacia sem tirar a clareza.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Deixe o prazo explícito.",
          wrong: "Please send it ASAP.",
          answers: [
            "Could you send it by Thursday EOD?",
            "Could you send it by end of day Thursday?",
            "Could you send it by Friday?",
          ],
          explanation:
            "`ASAP` é vago e pressiona sem informar. Dê uma data concreta — é mais educado e mais eficaz.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "match",
          prompt: "Ligue a sigla ao significado.",
          pairs: [
            { left: "EOD", right: "end of day" },
            { left: "FYI", right: "for your information" },
            { left: "OOO", right: "out of office" },
            { left: "TL;DR", right: "resumo no topo" },
          ],
          explanation:
            "Essas aparecem todo dia em empresa internacional. Reconhecer é obrigatório; usar é opcional.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Qual a função de cada frase?",
          buckets: ["Má notícia", "Cobrança", "Fechamento"],
          items: [
            { text: "Unfortunately, we can't make that date.", bucket: "Má notícia" },
            { text: "Any update on this?", bucket: "Cobrança" },
            { text: "Let me know if you have any questions.", bucket: "Fechamento" },
            { text: "I'm afraid there's been a delay.", bucket: "Má notícia" },
            { text: "Just following up on this.", bucket: "Cobrança" },
          ],
          explanation:
            "Ter duas frases prontas por função elimina o bloqueio na hora de escrever.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso funciona bem num e-mail profissional?",
          sentence: "I'm afraid we won't be able to make that deadline. Here's what we can do instead.",
          natural: true,
          explanation:
            "`I'm afraid` suaviza a má notícia, e oferecer alternativa é padrão profissional em inglês.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete a frase de encaminhamento de responsabilidade.",
          sentence: "Let me look ___ it and get back ___ you.",
          answers: [["into"], ["to"]],
          explanation:
            "`look into` = investigar. `get back to someone` = retornar. Duas expressões essenciais de e-mail.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte o pedido educado.",
          tokens: ["Would", "you", "be able to", "review this", "before Friday"],
          answers: [["Would", "you", "be able to", "review this", "before Friday"]],
          explanation:
            "`Would you be able to…?` é ainda mais suave que `Could you…?` — bom para pedidos grandes.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "pr-meetings",
      number: "30.2",
      title: "Meetings & Calls",
      titlePt: "Reuniões e calls",
      priority: "essential",
      summary:
        "Entrar na conversa, interromper educadamente, adiar assunto e fechar com clareza.",
      tags: ["meetings", "reunião", "call", "interrupt", "agenda", "offline"],
      blocks: [
        {
          kind: "pattern",
          title: "Abrindo",
          lines: [
            "Thanks everyone for joining.",
            "Let's get started. / Shall we get started?",
            "Can everyone hear me? / Can you see my screen?",
            "The agenda today is: first ..., then ..., and finally ...",
            "We have 30 minutes, so let's keep it focused.",
          ],
        },
        {
          kind: "table",
          title: "Participando",
          headers: ["Função", "Frases"],
          rows: [
            ["Pegar a palavra", "Can I jump in here? / If I could add something… / Just a quick point —"],
            ["Interromper educadamente", "Sorry to interrupt, but… / Sorry, can I just clarify something?"],
            ["Ceder a vez", "Sorry, go ahead. / You first. / No, please continue."],
            ["Voltar a um tópico", "Coming back to what Ana said… / Going back to the earlier point…"],
            ["Seguir adiante", "Let's move on to the next item. / Shall we move on?"],
            ["Adiar um assunto", "Let's take that offline. / Can we park that for now?"],
            ["Olhar o relógio", "We're running low on time. / We have five minutes left."],
            ["Resumir", "So to summarize: … / The key takeaways are… / So we've agreed that…"],
            ["Atribuir tarefa", "Who can take this? / I'll take that. / Can you own this one?"],
            ["Encerrar", "Thanks everyone. / I'll send out the notes."],
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "`take it offline` não é sobre internet",
          text: "Significa *vamos tratar disso fora desta reunião*. Uma das expressões corporativas mais úteis — e mais mal-entendidas por brasileiros.",
        },
        {
          kind: "heading",
          text: "Videochamada",
        },
        {
          kind: "pattern",
          lines: [
            "You're on mute.                    Sorry, you cut out.",
            "Can you hear me now?               I think there's a lag.",
            "Let me share my screen.            Can you see my screen?",
            "Sorry, go ahead \u2014 you first.        I'll drop off now.",
            "Let's do a quick round \u2014 Ana, you want to start?",
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Interromper é aceitável — e esperado",
          text: "Em reunião internacional, quem não interrompe não fala. Esperar uma pausa educada pode significar ficar em silêncio a reunião inteira. Use [[Can I jump in here?]] sem culpa.",
        },
        {
          kind: "heading",
          text: "Dar atualização de status",
        },
        {
          kind: "pattern",
          lines: [
            "On track          \u2192 We're on track for Friday.",
            "Blocked           \u2192 I'm blocked on the API keys.",
            "At risk           \u2192 This is at risk \u2014 we need a decision by Wednesday.",
            "Done              \u2192 That's done and deployed.",
            "In progress       \u2192 It's in progress, about halfway.",
            "Pushed back       \u2192 We pushed it to next sprint.",
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Não esconda o problema",
          text: "Em cultura corporativa anglófona, avisar cedo sobre risco é sinal de competência, não de fracasso. [[I want to flag a risk]] é uma frase que gera respeito.",
        },
        {
          kind: "heading",
          text: "Entrevistas — as três perguntas que sempre caem",
        },
        {
          kind: "pairs",
          items: [
            { term: "Tell me about yourself.", meaning: "Não é biografia. 90 segundos: o que você faz, uma conquista, por que essa vaga." },
            { term: "What's your biggest weakness?", meaning: "Escolha algo real, mostre o que você faz a respeito." },
            { term: "Do you have any questions for us?", meaning: "Sempre tenha duas. Dizer *no* é lido como desinteresse." },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "translate",
          prompt: "Peça a palavra numa reunião:",
          pt: "Posso entrar aqui rapidinho?",
          answers: [
            "Can I jump in here?",
            "Can I jump in?",
            "Sorry, can I jump in here?",
          ],
          explanation:
            "`jump in` é a forma padrão de pegar a palavra. Educado e assertivo ao mesmo tempo.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "O que significa *\"Let's take that offline\"*?",
          options: [
            "Vamos desligar a internet.",
            "Vamos tratar disso fora desta reunião.",
            "Vamos gravar essa parte.",
            "Vamos cancelar esse assunto.",
          ],
          answer: 1,
          explanation:
            "Nada a ver com conexão. Significa tirar o assunto da pauta e resolver separadamente.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete o aviso de risco.",
          sentence: "I want to ___ a risk: we may not hit the deadline.",
          answers: [["flag"]],
          explanation:
            "`flag a risk` = sinalizar um risco. Avisar cedo é visto como competência, não como fracasso.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "match",
          prompt: "Ligue a situação à frase de call.",
          pairs: [
            { left: "A pessoa está muda", right: "You're on mute." },
            { left: "A voz falhou", right: "Sorry, you cut out." },
            { left: "Você vai sair da call", right: "I'll drop off now." },
            { left: "Vai mostrar a tela", right: "Let me share my screen." },
          ],
          explanation:
            "Cinco frases resolvem 90% dos problemas técnicos de videochamada em inglês.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Qual a função de cada frase?",
          buckets: ["Pegar a palavra", "Adiar assunto", "Encerrar"],
          items: [
            { text: "Can I jump in here?", bucket: "Pegar a palavra" },
            { text: "Let's take that offline.", bucket: "Adiar assunto" },
            { text: "I'll send out the notes.", bucket: "Encerrar" },
            { text: "Can we park that for now?", bucket: "Adiar assunto" },
            { text: "Just a quick point —", bucket: "Pegar a palavra" },
          ],
          explanation:
            "Ter essas frases automatizadas evita que você fique calado a reunião inteira.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é apropriado numa reunião internacional?",
          sentence: "Sorry to interrupt, but I think we're missing something important here.",
          natural: true,
          explanation:
            "Interromper com `Sorry to interrupt, but…` é totalmente normal e esperado.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "fix",
          prompt: "Reporte o bloqueio de forma natural.",
          wrong: "I am stopped because I don't have the API keys.",
          answers: [
            "I'm blocked on the API keys.",
            "I'm blocked because I don't have the API keys.",
          ],
          explanation:
            "`blocked on X` é o termo padrão. `stopped` não é usado nesse sentido em contexto de trabalho.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte o resumo final.",
          tokens: ["So", "to summarize", "we've agreed", "to postpone", "the launch"],
          answers: [["So", "to summarize", "we've agreed", "to postpone", "the launch"]],
          explanation:
            "Resumir no fim é esperado de quem conduz. Deixa as decisões explícitas para todos.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "A gente está no prazo para sexta.",
          answers: [
            "We're on track for Friday.",
            "We are on track for Friday.",
          ],
          explanation:
            "`on track` é a expressão padrão de status. O oposto é `at risk` ou `behind schedule`.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "pr-fifty-things",
      number: "36",
      title: "The 50 Things",
      titlePt: "Se você lembrar de 50 coisas",
      priority: "essential",
      summary:
        "O resumo de tudo. Se você só tiver dez minutos na vida, gaste aqui.",
      tags: ["resumo", "summary", "50 regras", "revisão", "essencial"],
      blocks: [
        {
          kind: "callout",
          tone: "key",
          text: "Este é o destilado de todo o curso. Volte aqui sempre que quiser recalibrar.",
        },
        {
          kind: "heading",
          text: "Estrutura",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "O inglês é **Sujeito + Verbo + Objeto**, e essa ordem não é negociável.",
            "**Sempre inclua o sujeito.** ❌ [[Is raining]] → ✅ [[It is raining]].",
            "**`There is / there are`** para existência, nunca `have`.",
            "**Adjetivos vêm antes do substantivo** e nunca levam `-s`.",
            "**Nunca separe o verbo do objeto.** ❌ [[I like very much this]].",
            "**Advérbio de frequência** vem antes do verbo principal, depois do `be`.",
            "**Lugar antes de tempo,** os dois no fim: [[at the office at 3]].",
          ],
        },
        {
          kind: "heading",
          text: "Verbos",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Perguntas e negativas precisam de auxiliar.** Sem auxiliar na frase? Chame `do/does/did`.",
            "**O auxiliar carrega o tempo; o verbo principal volta à base.** ❌ [[Did you went?]]",
            "**Não esqueça o `-s` da terceira pessoa.** Pequeno, sem significado, notado na hora.",
            "**Responda com o auxiliar,** não com o verbo: *\u201cYes, I do.\u201d*",
            "**Tempo terminado força Past Simple.** ❌ [[I have finished it yesterday]].",
            "**`for` + duração, `since` + ponto de partida,** com Present Perfect.",
            "**Sem `will` depois de `if, when, as soon as, before, after, until`.**",
            "**`used to + verbo`** ≠ **`be used to + -ing`**.",
            "**State verbs não aceitam `-ing`.** ❌ [[I'm needing]] → ✅ [[I need]].",
            "**Modais levam verbo base:** sem `to`, sem `-s`.",
            "**`mustn't` (proibido) ≠ `don't have to` (opcional).** São opostos.",
            "**`should have + particípio`** para arrependimento.",
          ],
        },
        {
          kind: "heading",
          text: "Palavras que mudam o sentido",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**`too` ≠ `very`.** *Too expensive* = não dá pra comprar.",
            "**`by` = prazo, `until` = continuando.**",
            "**`hard` = com esforço, `hardly` = quase não.**",
            "**`borrow` = pegar, `lend` = dar.**",
            "**`remind` = fazer alguém lembrar, `remember` = lembrar você mesmo.**",
            "**`actually` = na verdade,** não *atualmente* (isso é `currently`).",
            "**`pretend` = fingir, `realize` = perceber.**",
            "**`make` = criar, `do` = executar.**",
            "**`ask a question`, `take a look`, `have a meeting`.** Nunca *make a question*.",
            "**`I have a question`, não `I have a doubt`.**",
            "**`tell` precisa de pessoa; `say` não.**",
            "**`-ing` descreve a coisa, `-ed` descreve a pessoa.** *The meeting is boring; I am bored.*",
            "**`really` modifica verbos; `very` não.** ❌ [[I very like it]].",
          ],
        },
        {
          kind: "heading",
          text: "Palavrinhas de grande impacto",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Sem artigo em generalizações.** [[I like music]], [[Life is short]], [[Brazil is big]].",
            "**Você precisa de `a/an` antes de profissão.** [[She's a doctor.]]",
            "**`go home`, `go to work`, `at home`** — sem artigo, e sem `to` antes de `home`.",
            "**`information`, `advice`, `news`, `feedback`, `work`, `furniture` são incontáveis.**",
            "**`how many` para contável, `how much` para incontável.**",
            "**Uma negativa por oração.** ❌ [[I didn't see nobody]].",
            "**Preposições se decoram, não se traduzem:** *depend on, listen to, wait for, good at, married to*.",
            "**Estes verbos não levam preposição:** *discuss, enter, answer, marry, call, join, attend*.",
            "**`its` = posse, `it's` = it is.**",
          ],
        },
        {
          kind: "heading",
          text: "Comunicação",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Em perguntas indiretas, use ordem de afirmativa.** [[Do you know where he is?]]",
            "**Amaciadores são gramática, não decoração.** `Could you…` não é opcional em inglês.",
            "**Discorde de forma indireta:** *\u201cI see your point, but…\u201d*",
            "**Contrações são inglês normal.** Evitá-las soa duro.",
            "**Entenda `gonna`, `wanna`, `kinda`, `dunno` — mas escreva por extenso.**",
            "**A fala nativa comprime tudo que não é tônico.** Você não vai ouvir cada palavra, e não precisa.",
            "**Pedir repetição é habilidade, não fracasso.**",
            "**Frases curtas vencem.** Uma ideia por frase.",
            "**Aprenda frases, não palavras.** *make a decision, meet a deadline, get back to you.*",
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Nota final",
          text: "Fluência não é ausência de erros. É a capacidade de dizer o que você quer dizer, ser entendido e manter a conversa andando. Quem diz *\u201cI have a doubt about the deadline\u201d* com confiança e bom ritmo comunica melhor do que quem constrói uma frase perfeita depois de oito segundos de silêncio.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Aplique a regra 12.",
          wrong: "I have finished the report yesterday.",
          answers: ["I finished the report yesterday."],
          explanation: "Tempo terminado (`yesterday`) força Past Simple. Sem exceção.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Aplique a regra 32.",
          wrong: "I very like this approach.",
          answers: [
            "I really like this approach.",
            "I like this approach very much.",
          ],
          explanation:
            "`very` não modifica verbo. Para intensificar verbo, use `really`.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Aplique a regra 29.",
          wrong: "I have a doubt about the requirements.",
          answers: [
            "I have a question about the requirements.",
            "I have a few questions about the requirements.",
          ],
          explanation:
            "`doubt` em inglês é desconfiança. Para perguntar, use `question`.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "choice",
          prompt: "Qual frase segue a regra 42 (perguntas indiretas)?",
          options: [
            "Do you know where is the file?",
            "Do you know where the file is?",
            "Do you know where does the file is?",
            "Do you know where is he the file?",
          ],
          answer: 1,
          explanation:
            "Pergunta indireta usa ordem de afirmativa: sujeito antes do verbo, sem `do`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Qual regra cada erro viola?",
          buckets: ["Ordem das palavras", "Escolha de palavra", "Tempo verbal"],
          items: [
            { text: "I like very much this.", bucket: "Ordem das palavras" },
            { text: "I have a doubt.", bucket: "Escolha de palavra" },
            { text: "I have finished it yesterday.", bucket: "Tempo verbal" },
            { text: "Where you work?", bucket: "Ordem das palavras" },
            { text: "He hardly works. (querendo dizer que trabalha muito)", bucket: "Escolha de palavra" },
          ],
          explanation:
            "Ordem e escolha de palavra causam mais dano que tempo verbal. Priorize nessa ordem.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "translate",
          prompt: "Aplique as regras 13 e 33:",
          pt: "Trabalho aqui há cinco anos e gosto do trabalho.",
          answers: [
            "I've worked here for five years and I like the work.",
            "I have worked here for five years and I like the work.",
            "I've been working here for five years and I like the work.",
          ],
          explanation:
            "Duração em curso → Present Perfect com `for`. E `the work` aqui é específico, então o artigo cabe.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "judge",
          prompt: "Isso segue as regras deste resumo?",
          sentence: "There's a problem with the deployment, so I'd like to flag it now.",
          natural: true,
          explanation:
            "`There's` para existência, contração natural, e amaciador `I'd like to`. Três regras aplicadas.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "match",
          prompt: "Ligue o par ao que os distingue.",
          pairs: [
            { left: "too / very", right: "impedimento × intensidade" },
            { left: "by / until", right: "prazo × continuidade" },
            { left: "hard / hardly", right: "muito × quase nada" },
            { left: "borrow / lend", right: "receber × dar" },
            { left: "remind / remember", right: "avisar alguém × lembrar sozinho" },
          ],
          explanation:
            "Estes cinco pares são os que mais causam mal-entendido real. Se você acertar só isso, já ganhou muito.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase seguindo lugar antes de tempo.",
          tokens: ["I'll", "meet", "you", "at the office", "at 3"],
          answers: [["I'll", "meet", "you", "at the office", "at 3"]],
          explanation: "Regra 7: lugar antes de tempo, os dois no fim da frase.",
          difficulty: 2,
        },
        {
          id: "e10",
          kind: "fill",
          prompt: "Aplique a regra 14.",
          sentence: "When I ___ (arrive), I'll call you.",
          answers: [["arrive"]],
          explanation:
            "Nada de `will` depois de `when`. A oração temporal fica no presente.",
          difficulty: 2,
        },
      ],
    },
  ],
};
