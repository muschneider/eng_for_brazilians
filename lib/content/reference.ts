import type { ContentBlock } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Quick-reference sheets (source section 35).                        */
/*  Not lessons — no exercises, no progress. Pure lookup.              */
/* ------------------------------------------------------------------ */

export interface ReferenceSheet {
  id: string;
  title: string;
  titlePt: string;
  blurb: string;
  blocks: ContentBlock[];
}

export const referenceSheets: ReferenceSheet[] = [
  {
    id: "tenses",
    title: "Tenses",
    titlePt: "Tempos verbais",
    blurb: "Os dez tempos que aparecem no uso real, com estrutura e exemplo.",
    blocks: [
      {
        kind: "table",
        headers: ["Tempo", "Estrutura", "Uso", "Exemplo"],
        rows: [
          ["Present Simple", "V / V-s", "hábitos, fatos, estados, opiniões", "She **works** here."],
          ["Present Continuous", "am/is/are + V-ing", "agora, temporário, compromisso", "She'**s working** now."],
          ["Past Simple", "V-ed / irregular", "passado terminado", "She **worked** yesterday."],
          ["Past Continuous", "was/were + V-ing", "em curso no passado", "She **was working** at 6."],
          ["Present Perfect", "have/has + PP", "passado ligado ao agora", "She'**s worked** here for 5 years."],
          ["Pres. Perf. Cont.", "have/has been + V-ing", "duração em curso", "She'**s been working** all day."],
          ["Past Perfect", "had + PP", "antes de outro passado", "She'**d worked** there before."],
          ["Future `will`", "will + V", "decisão agora, previsão", "She'**ll work** on it."],
          ["Future `going to`", "am/is/are going to + V", "plano, evidência", "She'**s going to work** on it."],
          ["Future Continuous", "will be + V-ing", "em curso no futuro", "She'**ll be working** at 9."],
        ],
      },
      {
        kind: "callout",
        tone: "key",
        title: "A pergunta decisiva",
        text: "O tempo já terminou? → **Past Simple**. Ainda está aberto ou é irrelevante? → **Present Perfect**.",
      },
    ],
  },

  {
    id: "modals",
    title: "Modal verbs",
    titlePt: "Modais",
    blurb: "Função, exemplo e forma no passado de cada modal.",
    blocks: [
      {
        kind: "table",
        headers: ["Modal", "Função", "Exemplo", "Passado"],
        rows: [
          ["can", "capacidade, permissão, pedido", "**Can** you help?", "could / was able to"],
          ["could", "pedido educado, possibilidade", "**Could** you help?", "could have + PP"],
          ["may", "permissão formal, possibilidade", "**May** I?", "might have + PP"],
          ["might", "possibilidade", "It **might** rain.", "might have + PP"],
          ["must", "obrigação (regra), dedução", "You **must** sign.", "had to / must have + PP"],
          ["have to", "obrigação (externa)", "I **have to** go.", "had to"],
          ["should", "conselho, expectativa", "You **should** rest.", "should have + PP"],
          ["would", "hipotético, pedido educado", "I **would** wait.", "would have + PP"],
          ["will", "futuro, promessa", "I'**ll** call.", "would"],
          ["need to", "necessidade", "You **need to** check.", "needed to"],
          ["be able to", "capacidade (todos os tempos)", "I'**ll be able to** join.", "was able to"],
        ],
      },
      {
        kind: "pattern",
        title: "Escala de certeza",
        lines: ["must (100%)  >  should (90%)  >  may / might / could (50%)  >  can't (0%)"],
      },
      {
        kind: "callout",
        tone: "danger",
        text: "`mustn't` (proibido) e `don't have to` (opcional) são **opostos**, não sinônimos.",
      },
    ],
  },

  {
    id: "pronouns",
    title: "Pronouns",
    titlePt: "Pronomes",
    blurb: "O mapa completo, mais os indefinidos some-/any-/no-/every-.",
    blocks: [
      {
        kind: "table",
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
      {
        kind: "table",
        title: "Indefinidos",
        headers: ["", "pessoas", "coisas", "lugares"],
        rows: [
          ["**some-** (afirmativa)", "someone / somebody", "something", "somewhere"],
          ["**any-** (pergunta/negativa)", "anyone / anybody", "anything", "anywhere"],
          ["**no-** (negativa)", "no one / nobody", "nothing", "nowhere"],
          ["**every-** (todos)", "everyone / everybody", "everything", "everywhere"],
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        text: "Todos os `-one / -body / -thing` são **singulares**: ✅ [[Everyone is ready.]]",
      },
    ],
  },

  {
    id: "questions",
    title: "Question words",
    titlePt: "Palavras interrogativas",
    blurb: "O que cada uma pergunta, com exemplo.",
    blocks: [
      {
        kind: "pattern",
        lines: ["WH + AUXILIAR + SUJEITO + VERBO ?", "exceto perguntas de sujeito: Who called?"],
      },
      {
        kind: "table",
        headers: ["Palavra", "Pergunta sobre", "Exemplo"],
        rows: [
          ["what", "coisa / ação", "What do you do?"],
          ["where", "lugar", "Where is it?"],
          ["when", "tempo", "When did it start?"],
          ["who", "pessoa (sujeito)", "Who called?"],
          ["whose", "posse", "Whose is this?"],
          ["which", "escolha dentro de um conjunto", "Which one?"],
          ["why", "razão", "Why not?"],
          ["how", "modo / método", "How does it work?"],
          ["how much", "quantidade / preço", "How much is it?"],
          ["how many", "número", "How many people?"],
          ["how long", "duração", "How long does it take?"],
          ["how often", "frequência", "How often do you go?"],
          ["how far", "distância", "How far is it?"],
          ["what time", "hora do relógio", "What time is the call?"],
          ["what kind of", "tipo", "What kind of issue?"],
        ],
      },
    ],
  },

  {
    id: "prepositions",
    title: "Prepositions",
    titlePt: "Preposições",
    blurb: "at / on / in para tempo e lugar, mais as essenciais de prazo e duração.",
    blocks: [
      {
        kind: "table",
        headers: ["", "at", "on", "in"],
        rows: [
          [
            "**Tempo**",
            "horas, noon, night, the moment",
            "dias, datas, manhãs específicas",
            "meses, anos, estações, morning/afternoon/evening",
          ],
          [
            "**Lugar**",
            "pontos, endereços com número",
            "superfícies, andares, ruas, transporte",
            "espaços fechados, cidades, países, carros",
          ],
        ],
      },
      {
        kind: "table",
        title: "As outras essenciais",
        headers: ["Preposição", "Tempo", "Lugar / movimento"],
        rows: [
          ["since", "ponto de partida", "—"],
          ["for", "duração", "—"],
          ["during", "dentro de um período", "—"],
          ["until", "até um momento", "—"],
          ["by", "prazo", "perto de"],
          ["from … to", "intervalo", "origem → destino"],
          ["to", "—", "destino"],
          ["into / onto", "—", "entrando / sobre uma superfície"],
        ],
      },
      {
        kind: "callout",
        tone: "danger",
        title: "by × until",
        text: "`by Friday` = o prazo é sexta. `until Friday` = continua acontecendo até sexta. Confundir isso muda o combinado.",
      },
      {
        kind: "pattern",
        title: "Preposições que grudam no verbo",
        lines: [
          "depend on      listen to      wait for       look for",
          "focus on       rely on        insist on      consist of",
          "participate in arrive at/in   belong to      deal with",
          "",
          "SEM preposi\u00e7\u00e3o: discuss, enter, answer, marry, call, join, attend",
        ],
      },
    ],
  },

  {
    id: "irregulars",
    title: "Irregular verbs",
    titlePt: "Verbos irregulares",
    blurb: "Os ~50 que cobrem a maior parte do uso real.",
    blocks: [
      {
        kind: "table",
        headers: ["Base", "Passado", "Particípio"],
        rows: [
          ["be", "was / were", "been"],
          ["become", "became", "become"],
          ["begin", "began", "begun"],
          ["break", "broke", "broken"],
          ["bring", "brought", "brought"],
          ["build", "built", "built"],
          ["buy", "bought", "bought"],
          ["catch", "caught", "caught"],
          ["choose", "chose", "chosen"],
          ["come", "came", "come"],
          ["cost", "cost", "cost"],
          ["do", "did", "done"],
          ["drive", "drove", "driven"],
          ["eat", "ate", "eaten"],
          ["fall", "fell", "fallen"],
          ["feel", "felt", "felt"],
          ["find", "found", "found"],
          ["forget", "forgot", "forgotten"],
          ["get", "got", "got / gotten 🇺🇸"],
          ["give", "gave", "given"],
          ["go", "went", "gone"],
          ["grow", "grew", "grown"],
          ["have", "had", "had"],
          ["hear", "heard", "heard"],
          ["keep", "kept", "kept"],
          ["know", "knew", "known"],
          ["leave", "left", "left"],
          ["let", "let", "let"],
          ["lose", "lost", "lost"],
          ["make", "made", "made"],
          ["mean", "meant", "meant"],
          ["meet", "met", "met"],
          ["pay", "paid", "paid"],
          ["put", "put", "put"],
          ["read", "read *(soa \u201cred\u201d)*", "read *(soa \u201cred\u201d)*"],
          ["run", "ran", "run"],
          ["say", "said", "said"],
          ["see", "saw", "seen"],
          ["sell", "sold", "sold"],
          ["send", "sent", "sent"],
          ["sit", "sat", "sat"],
          ["speak", "spoke", "spoken"],
          ["spend", "spent", "spent"],
          ["stand", "stood", "stood"],
          ["take", "took", "taken"],
          ["teach", "taught", "taught"],
          ["tell", "told", "told"],
          ["think", "thought", "thought"],
          ["understand", "understood", "understood"],
          ["wear", "wore", "worn"],
          ["win", "won", "won"],
          ["write", "wrote", "written"],
        ],
      },
    ],
  },

  {
    id: "false-friends",
    title: "False friends",
    titlePt: "Falsos cognatos",
    blurb: "Os que causam confusão de verdade — consulte antes de mandar o e-mail.",
    blocks: [
      {
        kind: "table",
        headers: ["Inglês", "Significa", "Parece (PT)", "Para o sentido do PT"],
        rows: [
          ["**actually**", "na verdade", "atualmente", "currently, nowadays"],
          ["**eventually**", "no final", "eventualmente", "occasionally, possibly"],
          ["**pretend**", "fingir", "pretender", "intend, plan to"],
          ["**realize**", "perceber", "realizar", "carry out, hold"],
          ["**parents**", "pai e mãe", "parentes", "relatives"],
          ["**assist**", "ajudar", "assistir", "watch, attend"],
          ["**library**", "biblioteca", "livraria", "bookstore"],
          ["**college**", "faculdade 🇺🇸", "colégio", "high school"],
          ["**fabric**", "tecido", "fábrica", "factory"],
          ["**support**", "apoiar, sustentar", "suportar", "stand, put up with"],
          ["**sensible**", "sensato", "sensível", "sensitive"],
          ["**sympathetic**", "solidário", "simpático", "nice, friendly"],
          ["**educated**", "instruído", "educado", "polite"],
          ["**compromise**", "acordo com concessões", "compromisso", "commitment"],
          ["**discussion**", "conversa, debate", "discussão (briga)", "argument"],
          ["**terrific**", "ótimo", "terrível", "terrible"],
          ["**exquisite**", "requintado", "esquisito", "strange, weird"],
          ["**prejudice**", "preconceito", "prejuízo", "loss, damage"],
          ["**policy**", "política (diretriz)", "polícia", "police"],
          ["**novel**", "romance (livro)", "novela", "soap opera"],
          ["**data**", "dados", "data", "date"],
          ["**tax**", "imposto", "taxa", "fee, rate"],
          ["**large**", "grande", "largo", "wide"],
          ["**lunch**", "almoço", "lanche", "snack"],
          ["**notice**", "perceber; aviso", "notícia", "news"],
          ["**idiom**", "expressão idiomática", "idioma", "language"],
          ["**injury**", "lesão", "injúria", "insult"],
          ["**resume**", "retomar", "resumir", "summarize"],
          ["**preservative**", "conservante", "preservativo", "condom"],
        ],
      },
    ],
  },

  {
    id: "collocations",
    title: "Collocations",
    titlePt: "Colocações",
    blurb: "As combinações fixas que fazem o inglês soar natural.",
    blocks: [
      {
        kind: "pattern",
        title: "make × do",
        lines: [
          "make: a decision, a mistake, money, a plan, progress,",
          "      an effort, sense, sure, an appointment, a difference",
          "",
          "do:   business, homework, research, a favor, the dishes,",
          "      exercise, your job, the right thing, damage",
        ],
      },
      {
        kind: "pattern",
        title: "take / have / get / give",
        lines: [
          "take:  care of, part in, a break, a look, action, into account",
          "have:  a problem, a meeting, a look, lunch, fun, access to",
          "get:   ready, better, in touch, started, involved, approval",
          "give:  advice, feedback, a presentation, a hand, an example",
        ],
      },
      {
        kind: "pattern",
        title: "Verbos de reunião",
        lines: [
          "meet a deadline / requirements / expectations",
          "reach an agreement / a conclusion / out to someone",
          "raise a question / concerns / awareness",
          "set a deadline / a goal / priorities / up a meeting",
          "run a business / a test / late / out of time",
        ],
      },
      {
        kind: "pattern",
        title: "Adjetivo + substantivo",
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
        text: "❌ [[make a favor]] → ✅ `do a favor`. ❌ [[strong rain]] → ✅ `heavy rain`. ❌ [[I have a doubt]] → ✅ `I have a question`.",
      },
    ],
  },

  {
    id: "spoken",
    title: "Spoken reductions",
    titlePt: "Reduções da fala",
    blurb: "Para reconhecer no áudio. Escreva sempre a forma completa.",
    blocks: [
      {
        kind: "table",
        headers: ["Escrito", "Falado", "Exemplo"],
        rows: [
          ["going to", "gonna", "I'm **gonna** check."],
          ["want to", "wanna", "Do you **wanna** grab lunch?"],
          ["got to", "gotta", "I **gotta** go."],
          ["have to", "hafta", "I **hafta** finish this."],
          ["kind of", "kinda", "It's **kinda** slow."],
          ["let me", "lemme", "**Lemme** check."],
          ["give me", "gimme", "**Gimme** a sec."],
          ["out of", "outta", "We're **outta** time."],
          ["don't know", "dunno", "I **dunno**."],
          ["what do you", "whaddya", "**Whaddya** think?"],
          ["did you", "didja", "**Didja** see that?"],
          ["would you", "wouldja", "**Wouldja** mind?"],
          ["because", "'cause / cuz", "**'Cause** it's broken."],
          ["them", "'em", "Tell **'em** I'm coming."],
          ["should have", "shoulda", "I **shoulda** known."],
          ["would have", "woulda", "I **woulda** told you."],
          ["could have", "coulda", "We **coulda** shipped it."],
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        text: "`gonna` é **pronúncia, não palavra**. Nativos escrevem *going to*. E `gonna` só substitui *going to + verbo*: ❌ [[I'm gonna the office.]]",
      },
    ],
  },

  {
    id: "email",
    title: "Email phrases",
    titlePt: "Frases de e-mail",
    blurb: "Copiar e colar. Aberturas, pedidos, más notícias e fechamentos.",
    blocks: [
      {
        kind: "table",
        headers: ["Registro", "Abertura", "Fechamento"],
        rows: [
          ["Formal ✍️", "Dear Mr./Ms. Silva,", "Kind regards, / Sincerely,"],
          ["Profissional", "Hi John, / Hi all,", "Best regards, / Best, / Thanks,"],
          ["Casual", "Hey Marco, / Hi team,", "Cheers, / Thanks!"],
        ],
      },
      {
        kind: "pattern",
        title: "Pedidos",
        lines: [
          "Could you send me ... by [date]?",
          "Would you be able to review this before Friday?",
          "When you get a chance, could you ...?",
          "I'd appreciate it if you could ...",
          "Would it be possible to ...?",
        ],
      },
      {
        kind: "table",
        title: "Por função",
        headers: ["Função", "Frase"],
        rows: [
          ["Anexando", "I've attached the report. / Here's the file."],
          ["Referindo", "As discussed, … / Regarding your question about …"],
          ["Desculpando", "Sorry for the delay. / Apologies for the confusion."],
          ["Má notícia", "Unfortunately, … / I'm afraid …"],
          ["Boa notícia", "Good news: … / I'm happy to report that …"],
          ["Cobrando", "Just following up on this. / Any update on this?"],
          ["Escalando", "I want to flag a risk. / We need a decision by X."],
          ["Adiando", "Let me look into it and get back to you."],
          ["Fechando", "Let me know if you have any questions."],
        ],
      },
      {
        kind: "table",
        title: "Português → inglês",
        headers: ["⚠️ Traduzido", "✅ Natural"],
        rows: [
          ["Venho por meio deste solicitar…", "I'm writing to ask…"],
          ["Conforme conversado…", "As discussed, …"],
          ["Aguardo seu retorno.", "Looking forward to hearing from you."],
          ["Desde já agradeço.", "Thanks in advance."],
          ["Segue em anexo.", "Here's the file."],
          ["Estou à disposição para dúvidas.", "Let me know if you have any questions."],
          ["Sem mais para o momento.", "*(omita)*"],
          ["Atenciosamente,", "Best regards, / Best,"],
        ],
      },
    ],
  },
];

export const referenceById = new Map(referenceSheets.map((s) => [s.id, s]));
