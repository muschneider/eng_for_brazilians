import type { Module } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Module 2 — Verbos                                                  */
/*  Source section 4 (+ 2.3 irregular and state verbs)                 */
/* ------------------------------------------------------------------ */

export const verbsModule: Module = {
  id: "verbs",
  title: "The Verb System",
  titlePt: "Verbos",
  description:
    "O inglês tem 12 tempos verbais, mas seis fazem quase todo o trabalho. Aqui você aprende os que importam — inclusive o Present Perfect, o pesadelo brasileiro.",
  icon: "verbs",
  lessons: [
    /* ------------------------------------------------------------- */
    {
      id: "v-present-simple",
      number: "4.1",
      title: "Present Simple",
      titlePt: "Presente simples",
      priority: "essential",
      summary:
        "Fatos, hábitos, rotinas — e, crucialmente, opiniões e estados agora. O `-s` da terceira pessoa é a regra mais esquecida do inglês.",
      tags: ["present simple", "presente", "rotina", "hábito", "state verbs", "-s"],
      blocks: [
        {
          kind: "text",
          text: "**Significado:** fatos, hábitos, rotinas, situações permanentes, horários — e, muito importante, **opiniões e estados agora**.",
        },
        {
          kind: "pattern",
          lines: [
            "+   I/you/we/they + VERB          He/she/it + VERB-s",
            "\u2013   I don't + VERB                He doesn't + VERB",
            "?   Do I/you/we/they + VERB?      Does he/she/it + VERB?",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I work for a fintech." },
            { marker: "good", text: "She manages three teams." },
            { marker: "good", text: "The office opens at 8." },
            { marker: "good", text: "I don't drink coffee." },
            { marker: "good", text: "Does this work on mobile?" },
            { marker: "good", text: "The train leaves at 6:15.", note: "horário = sentido de futuro" },
          ],
        },
        {
          kind: "text",
          text: "**Palavras-sinal:** always, usually, often, sometimes, never, every day/week, on Mondays, twice a month.",
        },
        {
          kind: "rule",
          title: "O `-s` da terceira pessoa é a regra mais esquecida por todo aprendiz.",
          text: "Ela quase não carrega significado, então as pessoas a derrubam. Nativos notam na hora. [[He work here]] soa claramente errado.",
        },
        {
          kind: "pairs",
          title: "Ortografia da forma com `-s`",
          items: [
            { term: "go → goes", meaning: "verbos terminados em -o ganham -es" },
            { term: "watch → watches", meaning: "-ch, -sh, -ss, -x ganham -es" },
            { term: "study → studies", meaning: "consoante + y vira -ies" },
            { term: "play → plays", meaning: "vogal + y mantém o y" },
            { term: "have → has", meaning: "irregular, decore" },
          ],
        },
        {
          kind: "examples",
          title: "Erros clássicos",
          items: [
            { marker: "bad", text: "He work here." },
            { marker: "good", text: "He works here." },
            { marker: "bad", text: "She doesn't works here." },
            { marker: "good", text: "She doesn't work here." },
            { marker: "bad", text: "Do he like it?" },
            { marker: "good", text: "Does he like it?" },
            { marker: "bad", text: "I am agree." },
            { marker: "good", text: "I agree.", note: "agree é verbo, não adjetivo — erro brasileiro gigante" },
          ],
        },
        {
          kind: "heading",
          text: "State verbs — verbos que rejeitam o `-ing`",
        },
        {
          kind: "text",
          text: "Alguns verbos descrevem **estados**, não ações. Eles normalmente **não** entram em tempos contínuos: *know, understand, believe, remember, forget, mean, need, want, like, love, hate, prefer, own, belong, seem, cost, contain, depend, matter, agree*.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I am knowing the answer." },
            { marker: "good", text: "I know the answer." },
            { marker: "bad", text: "I am wanting a coffee." },
            { marker: "good", text: "I want a coffee." },
            { marker: "bad", text: "Are you understanding?" },
            { marker: "good", text: "Do you understand?" },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "A armadilha do estado contínuo",
          text: "O português diz alegremente *\u201cEstou precisando\u201d*, *\u201cEstou querendo\u201d*, *\u201cEstou achando\u201d*. O inglês usa o Present Simple.",
        },
        {
          kind: "translation",
          pt: "Estou achando que não vai dar.",
          wrong: "I'm thinking that it won't work.",
          right: ["I don't think it'll work.", "I think it won't work."],
          note: "Note também que o inglês nega o verbo *think*, não a oração seguinte.",
        },
        {
          kind: "text",
          text: "Exceções que você vai ouvir (mudam o sentido para **ação**): [[I'm thinking about it]] (processo mental) × [[I think it's fine]] (opinião). [[I'm having lunch]] (comendo) × [[I have a car]] (posse).",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com a forma correta de *manage*.",
          sentence: "She ___ three teams in two countries.",
          answers: [["manages"]],
          explanation: "Terceira pessoa do singular no Present Simple sempre leva `-s`.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "She doesn't works on Mondays.",
          answers: ["She doesn't work on Mondays."],
          explanation:
            "`doesn't` já carrega a terceira pessoa. O verbo principal volta à forma base.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "fix",
          prompt: "Corrija o erro brasileiro clássico.",
          wrong: "I am agree with you.",
          answers: ["I agree with you."],
          explanation:
            "`agree` é verbo, não adjetivo. *Estou de acordo* → [[I agree]], sem `be`.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Estou precisando de ajuda.",
          answers: ["I need help.", "I need some help."],
          explanation:
            "`need` é state verb: nunca [[I'm needing]]. O gerúndio português não vira gerúndio inglês aqui.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "___ this work on mobile?",
          options: ["Do", "Does", "Is", "Are"],
          answer: 1,
          explanation:
            "Sujeito `this` = terceira pessoa singular → `Does`. E o verbo depois fica na base: `work`.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'm not understanding your point.",
          natural: false,
          correction: "I don't understand your point.",
          explanation:
            "`understand` é state verb. O contínuo aqui soa estrangeiro — use o Present Simple.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "categorize",
          prompt: "Qual verbo aceita o `-ing` normalmente e qual resiste?",
          buckets: ["Aceita -ing", "Resiste ao -ing (state verb)"],
          items: [
            { text: "work", bucket: "Aceita -ing" },
            { text: "know", bucket: "Resiste ao -ing (state verb)" },
            { text: "run", bucket: "Aceita -ing" },
            { text: "belong", bucket: "Resiste ao -ing (state verb)" },
            { text: "want", bucket: "Resiste ao -ing (state verb)" },
            { text: "write", bucket: "Aceita -ing" },
          ],
          explanation:
            "State verbs descrevem estados, não processos. Estado não tem duração observável, então não entra no contínuo.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com a grafia correta de *study*.",
          sentence: "He ___ English every morning before work.",
          answers: [["studies"]],
          explanation: "Consoante + `y` → troca por `-ies`. Compare com `play → plays`.",
          difficulty: 1,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a pergunta.",
          tokens: ["Does", "the office", "open", "at 8"],
          answers: [["Does", "the office", "open", "at 8"]],
          explanation: "`Does` + sujeito + verbo na base. O `-s` migrou para o auxiliar.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eu não bebo café.",
          answers: ["I don't drink coffee.", "I do not drink coffee."],
          explanation:
            "Hábito negativo → `don't` + verbo base. Nada de artigo antes de `coffee` aqui.",
          difficulty: 1,
        },
        {
          id: "e11",
          kind: "match",
          prompt: "Ligue o verbo à sua forma de terceira pessoa.",
          pairs: [
            { left: "go", right: "goes" },
            { left: "watch", right: "watches" },
            { left: "study", right: "studies" },
            { left: "have", right: "has" },
          ],
          explanation:
            "Quatro padrões de ortografia cobrem praticamente tudo. `have → has` é o único totalmente irregular.",
          difficulty: 1,
        },
        {
          id: "e12",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "The train leaves at 6:15 tomorrow.",
          natural: true,
          explanation:
            "Present Simple para horários e cronogramas, mesmo falando do futuro. Igual ao português *\u201co trem sai às 6h15\u201d*.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-present-continuous",
      number: "4.2",
      title: "Present Continuous",
      titlePt: "Presente contínuo",
      priority: "essential",
      summary:
        "Agora, temporário, e — o uso que brasileiros esquecem — compromissos futuros já marcados.",
      tags: ["present continuous", "gerúndio", "-ing", "agora", "arrangements"],
      blocks: [
        {
          kind: "text",
          text: "**Significado:** (1) acontecendo agora, (2) situação temporária, (3) **compromisso futuro já combinado**, (4) tendência em mudança, (5) reclamação com *always*.",
        },
        {
          kind: "pattern",
          lines: [
            "+   Subject + am/is/are + VERB-ing",
            "\u2013   Subject + am/is/are + not + VERB-ing",
            "?   Am/Is/Are + Subject + VERB-ing?",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I'm working from home today.", note: "temporário" },
            { marker: "good", text: "He's presenting right now.", note: "neste momento" },
            { marker: "good", text: "We're meeting the client on Thursday.", note: "futuro combinado — muito comum" },
            { marker: "good", text: "Prices are rising.", note: "tendência" },
            { marker: "spoken", text: "She's always interrupting me.", note: "reclamação" },
            { marker: "good", text: "Are you coming to the retro?" },
          ],
        },
        {
          kind: "text",
          text: "**Palavras-sinal:** now, right now, at the moment, today, this week, currently, these days.",
        },
        {
          kind: "pairs",
          title: "Ortografia do `-ing`",
          items: [
            { term: "make → making", meaning: "cai o `e` final" },
            { term: "run → running", meaning: "dobra a consoante (sílaba tônica curta)" },
            { term: "lie → lying", meaning: "`-ie` vira `-y`" },
            { term: "begin → beginning", meaning: "dobra a consoante" },
          ],
        },
        {
          kind: "heading",
          text: "Present Simple × Present Continuous",
        },
        {
          kind: "table",
          headers: ["Present Simple", "Present Continuous"],
          rows: [
            ["sempre / geralmente verdade", "temporário / agora"],
            ["I **work** in São Paulo. *(meu emprego)*", "I'**m working** in São Paulo. *(este mês)*"],
            ["He **speaks** three languages.", "He'**s speaking** to a client."],
            ["What **do** you **do**? *(profissão)*", "What **are** you **doing**? *(agora)*"],
            ["The app **crashes** on startup. *(sempre)*", "The app **is crashing** a lot lately. *(padrão recente)*"],
            ["I **live** in Lisbon.", "I'**m living** with my parents until June."],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "O par mais útil da língua",
          text: "[[What do you do?]] = *Qual é a sua profissão?* — [[What are you doing?]] = *O que você está fazendo?* Confundir os dois gera situações constrangedoras.",
        },
        {
          kind: "compare",
          left: {
            title: "Use o contínuo quando",
            tone: "good",
            items: [
              "a ação está em curso agora",
              "a situação é temporária",
              "é um compromisso já marcado",
              "algo está mudando ao longo do tempo",
            ],
          },
          right: {
            title: "NÃO use o contínuo com",
            tone: "bad",
            items: [
              "state verbs (know, want, need, believe)",
              "opiniões: [[I think it's fine]]",
              "posse: [[I have a car]]",
              "fatos permanentes",
            ],
          },
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Você quer saber a profissão da pessoa. O que pergunta?",
          options: [
            "What are you doing?",
            "What do you do?",
            "What is your work?",
            "What you do?",
          ],
          answer: 1,
          explanation:
            "[[What do you do?]] pergunta profissão. [[What are you doing?]] pergunta o que a pessoa faz neste instante.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com a forma correta de *work*.",
          sentence: "I usually work at the office, but this week I ___ from home.",
          answers: [["am working", "'m working", "im working"]],
          explanation:
            "*Esta semana* é temporário → Present Continuous. O hábito geral fica no simples.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês (compromisso já marcado):",
          pt: "A gente vai se encontrar com o cliente na quinta.",
          answers: [
            "We're meeting the client on Thursday.",
            "We are meeting the client on Thursday.",
            "We're going to meet the client on Thursday.",
          ],
          explanation:
            "Para compromisso agendado, o Present Continuous é a forma mais natural — mais até que `will` ou `going to`.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I'm having a car since 2019.",
          natural: false,
          correction: "I've had a car since 2019.",
          explanation:
            "`have` de posse nunca vai para o contínuo. E *desde 2019* exige Present Perfect.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Simples ou contínuo?",
          buckets: ["Present Simple", "Present Continuous"],
          items: [
            { text: "The office opens at 8 every day.", bucket: "Present Simple" },
            { text: "He's presenting right now.", bucket: "Present Continuous" },
            { text: "Water boils at 100°C.", bucket: "Present Simple" },
            { text: "Prices are rising.", bucket: "Present Continuous" },
            { text: "I live in Lisbon.", bucket: "Present Simple" },
          ],
          explanation:
            "Pergunte: isso é sempre verdade, ou é uma foto do momento? Sempre → simples. Foto → contínuo.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "fill",
          prompt: "Complete a grafia do gerúndio de *run*.",
          sentence: "Sorry I'm out of breath — I've been ___.",
          answers: [["running"]],
          explanation:
            "Sílaba tônica curta terminada em consoante → dobra a consoante antes do `-ing`.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I am thinking that this approach is wrong.",
          answers: [
            "I think this approach is wrong.",
            "I think that this approach is wrong.",
          ],
          explanation:
            "Opinião usa `think` no simples. [[I'm thinking about it]] só funciona no sentido de *estou refletindo*.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "order",
          prompt: "Monte a reclamação (com sentido de irritação).",
          tokens: ["She", "is", "always", "interrupting", "me"],
          answers: [["She", "is", "always", "interrupting", "me"]],
          explanation:
            "`always` + contínuo comunica irritação, não frequência. Compare com [[She always interrupts me]], que é neutro.",
          difficulty: 3,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue cada frase ao seu sentido.",
          pairs: [
            { left: "I work in São Paulo.", right: "É onde fica meu emprego." },
            { left: "I'm working in São Paulo.", right: "Estou lá temporariamente." },
            { left: "The app crashes on startup.", right: "Sempre, é um bug conhecido." },
            { left: "The app is crashing a lot.", right: "Padrão recente, começou agora." },
          ],
          explanation:
            "A escolha entre simples e contínuo muda o significado, não só o estilo.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "O que você está fazendo?",
          answers: ["What are you doing?"],
          explanation:
            "Ação neste instante → contínuo. Se você disser [[What do you do?]], está perguntando a profissão.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-past-simple",
      number: "4.3",
      title: "Past Simple",
      titlePt: "Passado simples",
      priority: "essential",
      summary:
        "Ação terminada em tempo terminado. Se o tempo acabou, é Past Simple — sem exceção.",
      tags: ["past simple", "passado", "irregular verbs", "-ed", "did"],
      blocks: [
        {
          kind: "rule",
          title: "Se o tempo acabou, use Past Simple.",
          text: "Ação terminada, em momento terminado. Essa é a regra inteira.",
        },
        {
          kind: "pattern",
          lines: [
            "+   Subject + VERB-ed / irregular past",
            "\u2013   Subject + didn't + BASE VERB",
            "?   Did + Subject + BASE VERB?",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "We deployed the fix yesterday." },
            { marker: "good", text: "She went to Berlin last year." },
            { marker: "good", text: "I didn't see your message." },
            { marker: "good", text: "Did you talk to him?" },
            { marker: "good", text: "The meeting started late and ended at 7." },
          ],
        },
        {
          kind: "text",
          text: "**Palavras-sinal:** yesterday, last week/month/year, ago, in 2019, when I was a kid, then, this morning *(se a manhã já acabou)*.",
        },
        {
          kind: "heading",
          text: "As três pronúncias de `-ed`",
        },
        {
          kind: "table",
          title: "Importa para a escuta, não para a escrita",
          headers: ["Som final do verbo", "`-ed` soa como", "Exemplos"],
          rows: [
            ["t / d", "**/ɪd/** — sílaba extra", "wanted, needed, started, decided"],
            ["surdo (p, k, f, s, sh, ch)", "**/t/**", "worked, stopped, watched, fixed"],
            ["todo o resto (sonoro)", "**/d/**", "called, played, opened, tried"],
          ],
        },
        {
          kind: "callout",
          tone: "warn",
          text: "Aprendizes costumam colocar sílaba extra em tudo (*\u201cwork-ed\u201d*), o que soa estranho. Só depois de **t/d** o `-ed` vira sílaba separada.",
        },
        {
          kind: "heading",
          text: "Os irregulares que realmente aparecem",
        },
        {
          kind: "text",
          text: "Você não precisa dos 200. Estes cobrem a esmagadora maioria do uso real.",
        },
        {
          kind: "table",
          headers: ["Base", "Passado", "Particípio"],
          rows: [
            ["be", "was / were", "been"],
            ["become", "became", "become"],
            ["begin", "began", "begun"],
            ["break", "broke", "broken"],
            ["bring", "brought", "brought"],
            ["buy", "bought", "bought"],
            ["choose", "chose", "chosen"],
            ["come", "came", "come"],
            ["do", "did", "done"],
            ["eat", "ate", "eaten"],
            ["find", "found", "found"],
            ["get", "got", "got / gotten 🇺🇸"],
            ["give", "gave", "given"],
            ["go", "went", "gone"],
            ["have", "had", "had"],
            ["know", "knew", "known"],
            ["leave", "left", "left"],
            ["make", "made", "made"],
            ["pay", "paid", "paid"],
            ["put", "put", "put"],
            ["read", "read *(soa \u201cred\u201d)*", "read *(soa \u201cred\u201d)*"],
            ["say", "said", "said"],
            ["see", "saw", "seen"],
            ["send", "sent", "sent"],
            ["speak", "spoke", "spoken"],
            ["take", "took", "taken"],
            ["teach", "taught", "taught"],
            ["tell", "told", "told"],
            ["think", "thought", "thought"],
            ["write", "wrote", "written"],
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Só um verbo carrega o tempo",
          text: "Depois de `did` / `didn't`, o verbo principal volta à base. Sempre.",
        },
        {
          kind: "examples",
          title: "Erros clássicos",
          items: [
            { marker: "bad", text: "I didn't went." },
            { marker: "good", text: "I didn't go." },
            { marker: "bad", text: "Did you saw it?" },
            { marker: "good", text: "Did you see it?" },
            { marker: "bad", text: "Yesterday I have finished." },
            { marker: "good", text: "Yesterday I finished." },
            { marker: "bad", text: "I was work there." },
            { marker: "good", text: "I worked there." },
          ],
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I didn't went to the meeting.",
          answers: ["I didn't go to the meeting.", "I did not go to the meeting."],
          explanation: "`didn't` já marca o passado. O verbo principal fica na base.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "Did you saw the release notes?",
          answers: ["Did you see the release notes?"],
          explanation: "Mesma regra na pergunta: `Did` + sujeito + verbo base.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete com o passado de *go*.",
          sentence: "She ___ to Berlin last year.",
          answers: [["went"]],
          explanation: "`go → went → gone`. Irregular de altíssima frequência.",
          difficulty: 1,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete com o passado de *buy* e de *pay*.",
          sentence: "We ___ the licenses and ___ for them upfront.",
          answers: [["bought"], ["paid"]],
          explanation: "`buy → bought`, `pay → paid`. Note que `paid` não é *payed*.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Como o `-ed` soa nestes verbos?",
          buckets: ["/ɪd/ — sílaba extra", "/t/ — surdo", "/d/ — sonoro"],
          items: [
            { text: "wanted", bucket: "/ɪd/ — sílaba extra" },
            { text: "worked", bucket: "/t/ — surdo" },
            { text: "called", bucket: "/d/ — sonoro" },
            { text: "decided", bucket: "/ɪd/ — sílaba extra" },
            { text: "stopped", bucket: "/t/ — surdo" },
            { text: "opened", bucket: "/d/ — sonoro" },
          ],
          explanation:
            "Só depois de **t** ou **d** o `-ed` vira sílaba nova. Isso muda drasticamente sua compreensão auditiva.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "match",
          prompt: "Ligue o verbo ao particípio.",
          pairs: [
            { left: "write", right: "written" },
            { left: "take", right: "taken" },
            { left: "speak", right: "spoken" },
            { left: "choose", right: "chosen" },
          ],
          explanation:
            "Uma família inteira de irregulares faz o particípio em `-en`. Reconhecer o padrão poupa memorização.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Nós subimos a correção para produção ontem.",
          answers: [
            "We deployed the fix to production yesterday.",
            "We deployed the fix yesterday.",
            "We shipped the fix to production yesterday.",
          ],
          explanation:
            "`yesterday` é tempo terminado → Past Simple obrigatório. Nunca Present Perfect com `yesterday`.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "Yesterday I have finished the migration.",
          natural: false,
          correction: "Yesterday I finished the migration.",
          explanation:
            "Marcador de tempo terminado (`yesterday`) força Past Simple. É proibido combiná-lo com Present Perfect.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["The meeting", "started", "late", "and", "ended", "at 7"],
          answers: [["The meeting", "started", "late", "and", "ended", "at 7"]],
          explanation:
            "Dois eventos terminados numa sequência: os dois no Past Simple.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "He ___ me the report on Friday.",
          options: ["sended", "sent", "send", "did sent"],
          answer: 1,
          explanation: "`send → sent → sent`. Não existe *sended*.",
          difficulty: 1,
        },
        {
          id: "e11",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I was work there for two years.",
          answers: [
            "I worked there for two years.",
            "I was working there for two years.",
          ],
          explanation:
            "`was` + verbo base não existe. Ou Past Simple (`worked`) ou Past Continuous (`was working`).",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-past-continuous",
      number: "4.4",
      title: "Past Continuous",
      titlePt: "Passado contínuo",
      priority: "useful",
      summary:
        "A ação longa que servia de pano de fundo quando algo curto aconteceu. When × while.",
      tags: ["past continuous", "when", "while", "was", "were"],
      blocks: [
        {
          kind: "text",
          text: "**Significado:** ação em progresso num momento do passado; pano de fundo para outro evento; duas ações simultâneas.",
        },
        {
          kind: "pattern",
          lines: ["Subject + was/were + VERB-ing"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I was working when the power went out." },
            { marker: "good", text: "What were you doing at 10 p.m.?" },
            { marker: "good", text: "They were arguing while I was trying to concentrate." },
            { marker: "good", text: "Sorry, I wasn't paying attention." },
          ],
        },
        {
          kind: "heading",
          text: "A combinação clássica",
        },
        {
          kind: "pattern",
          lines: [
            "While I was driving,   my phone rang.",
            "      [ação longa]      [ação curta]",
          ],
          caption: "Ação longa em Past Continuous, interrompida por ação curta em Past Simple.",
        },
        {
          kind: "rule",
          title: "`when` + Past Simple (curto) — `while` + Past Continuous (longo)",
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "When the phone rang, I was cooking." },
            { marker: "good", text: "While I was cooking, the phone rang." },
            { marker: "warn", text: "While the phone rang, I was cooking.", note: "gramatical, mas soa estranho — tocar é curto" },
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Past Simple",
            caption: "eventos completos, em sequência",
            tone: "brand",
            items: [
              "I opened the laptop and started working.",
              "primeiro isso, depois aquilo",
            ],
          },
          right: {
            title: "Past Continuous",
            caption: "cenário, moldura, duração",
            tone: "brand",
            items: [
              "I was working when she called.",
              "algo já estava em curso",
            ],
          },
        },
        {
          kind: "callout",
          tone: "warn",
          text: "State verbs continuam proibidos no contínuo: ❌ [[I was knowing the answer]] → ✅ [[I knew the answer]].",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fill",
          prompt: "Complete com Past Continuous ou Past Simple de *work* e *go out*.",
          sentence: "I ___ when the power ___.",
          answers: [["was working"], ["went out"]],
          explanation:
            "Ação longa em curso → contínuo. Evento curto que interrompe → simples.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Complete: ___ I was driving, my phone rang.",
          options: ["When", "While", "During", "Meanwhile"],
          answer: 1,
          explanation:
            "`while` acompanha a ação longa (Past Continuous). `during` precisa de substantivo, não de oração.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I was knowing the answer, but I didn't say anything.",
          natural: false,
          correction: "I knew the answer, but I didn't say anything.",
          explanation: "`know` é state verb — não entra em nenhum tempo contínuo.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "order",
          prompt: "Monte a frase com duas ações simultâneas.",
          tokens: ["They", "were arguing", "while", "I", "was trying", "to concentrate"],
          answers: [
            ["They", "were arguing", "while", "I", "was trying", "to concentrate"],
          ],
          explanation:
            "Duas ações longas ao mesmo tempo: as duas em Past Continuous, ligadas por `while`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Desculpa, eu não estava prestando atenção.",
          answers: [
            "Sorry, I wasn't paying attention.",
            "Sorry, I was not paying attention.",
          ],
          explanation:
            "Estado mental em curso num momento do passado → Past Continuous. Expressão fixa: [[pay attention]].",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Cada ação é longa (pano de fundo) ou curta (evento)?",
          buckets: ["Longa → Past Continuous", "Curta → Past Simple"],
          items: [
            { text: "driving home", bucket: "Longa → Past Continuous" },
            { text: "the phone rang", bucket: "Curta → Past Simple" },
            { text: "having dinner", bucket: "Longa → Past Continuous" },
            { text: "the lights went out", bucket: "Curta → Past Simple" },
          ],
          explanation:
            "Pense em duração: se dá pra ser interrompido, é longo. Se é um instante, é curto.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "What you were doing at 10 p.m.?",
          answers: ["What were you doing at 10 p.m.?"],
          explanation:
            "Pergunta exige inversão: `were` vem antes do sujeito. Manter a ordem afirmativa é erro brasileiro típico.",
          difficulty: 1,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com *was* ou *were*.",
          sentence: "They ___ waiting outside while she ___ finishing the call.",
          answers: [["were"], ["was"]],
          explanation:
            "`they` → `were`. `she` → `was`. Concordância simples, mas erra-se muito na fala rápida.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-present-perfect",
      number: "4.5",
      title: "Present Perfect",
      titlePt: "O tempo mais difícil para brasileiros",
      priority: "essential",
      summary:
        "Passado conectado ao agora. É a maior fonte de erro de falantes de português — e vale cada minuto de estudo.",
      tags: [
        "present perfect",
        "have",
        "has",
        "particípio",
        "for",
        "since",
        "already",
        "yet",
        "ever",
        "never",
      ],
      blocks: [
        {
          kind: "callout",
          tone: "danger",
          title: "Atenção máxima",
          text: "Esta é a maior fonte de erro de falantes de português, porque o *pretérito perfeito composto* (*\u201ctenho feito\u201d*) funciona de outro jeito. Não confie na intuição.",
        },
        {
          kind: "text",
          text: "**Significado:** uma ação passada **conectada ao agora**. Três usos principais:",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Experiência** (quando não importa): [[I've been to Japan.]]",
            "**Resultado agora**: [[I've lost my keys.]] → não estou com elas agora",
            "**Período não terminado**: [[I've had three meetings today.]] → hoje ainda não acabou",
          ],
        },
        {
          kind: "pattern",
          lines: [
            "+   Subject + have/has + PAST PARTICIPLE",
            "\u2013   Subject + haven't/hasn't + PAST PARTICIPLE",
            "?   Have/Has + Subject + PAST PARTICIPLE?",
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "Have you finished the report?" },
            { marker: "good", text: "She's worked here for six years.", note: "e continua" },
            { marker: "good", text: "We've just deployed the new version." },
            { marker: "good", text: "I've never used Kubernetes." },
            { marker: "good", text: "They haven't replied yet." },
            { marker: "good", text: "This is the best coffee I've ever had." },
          ],
        },
        {
          kind: "text",
          text: "**Palavras-sinal:** ever, never, already, yet, just, so far, recently, lately, since, for, this week/year, still (em negativas).",
        },
        {
          kind: "heading",
          text: "Past Simple × Present Perfect — a regra decisiva",
        },
        {
          kind: "pattern",
          lines: [
            "O TEMPO acabou?            \u2192 Past Simple",
            "O TEMPO ainda est\u00e1 aberto,",
            "ou o tempo \u00e9 irrelevante?   \u2192 Present Perfect",
          ],
        },
        {
          kind: "table",
          headers: ["Past Simple", "Present Perfect"],
          rows: [
            ["I **saw** him yesterday.", "I'**ve seen** him. *(em algum momento)*"],
            ["She **worked** here for 5 years. *(saiu)*", "She'**s worked** here for 5 years. *(ainda está)*"],
            ["**Did** you **eat**? *(no almoço, que já passou)*", "**Have** you **eaten**? *(hoje / está com fome agora)*"],
            ["We **launched** it in March.", "We'**ve launched** the beta. *(notícia, resultado agora)*"],
            ["I **lost** my phone last week.", "I'**ve lost** my phone. *(agora não acho)*"],
          ],
        },
        {
          kind: "rule",
          title: "Uma expressão de tempo terminado força Past Simple.",
          text: "yesterday, last week, in 2020, two days ago, when I was young — todas bloqueiam o Present Perfect.",
        },
        {
          kind: "examples",
          items: [
            { marker: "bad", text: "I have finished it yesterday." },
            { marker: "good", text: "I finished it yesterday." },
            { marker: "bad", text: "He has called me last night." },
            { marker: "good", text: "He called me last night." },
            { marker: "bad", text: "When have you arrived?" },
            { marker: "good", text: "When did you arrive?" },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "A armadilha do for / since",
          text: "O português usa o **presente** para duração em curso (*\u201cTrabalho aqui há cinco anos\u201d*). O inglês usa o **Present Perfect**.",
        },
        {
          kind: "translation",
          pt: "Trabalho aqui há cinco anos.",
          wrong: "I work here since five years. / I am working here for 5 years.",
          right: [
            "I've worked here for five years.",
            "I've been working here for five years.",
          ],
          note: "Mesma coisa para *Moro aqui há…* → [[I've lived here for…]] e *Conheço ele há…* → [[I've known him for…]]",
        },
        {
          kind: "pattern",
          title: "for × since",
          lines: [
            "for   + per\u00edodo de dura\u00e7\u00e3o  \u2192 for two hours, for a week, for ages",
            "since + ponto de partida   \u2192 since 2020, since Monday, since this morning",
          ],
        },
        {
          kind: "pairs",
          title: "As palavras-sinal que mudam tudo",
          items: [
            { term: "just", meaning: "acabou de acontecer: [[I've just sent it.]]" },
            { term: "already", meaning: "antes do esperado: [[He's already replied.]]" },
            { term: "yet", meaning: "só em negativas e perguntas, no fim: [[Have you finished yet?]]" },
            { term: "ever / never", meaning: "experiência de vida: [[Have you ever been to Japan?]]" },
            { term: "so far", meaning: "até agora: [[We've had no issues so far.]]" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "🇺🇸 × 🇬🇧",
          text: "Americanos usam Past Simple onde britânicos usam Present Perfect: *\u201cDid you eat yet?\u201d* 🇺🇸 × *\u201cHave you eaten yet?\u201d* 🇬🇧. Os dois são entendidos em qualquer lugar. Siga as regras acima e você acerta nas duas variantes.",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I have finished the report yesterday.",
          answers: ["I finished the report yesterday."],
          explanation:
            "`yesterday` é tempo terminado → força Past Simple. Present Perfect nunca aceita marcador de tempo fechado.",
          difficulty: 1,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I work here since 2019.",
          answers: [
            "I've worked here since 2019.",
            "I have worked here since 2019.",
            "I've been working here since 2019.",
          ],
          explanation:
            "Duração que começou no passado e continua → Present Perfect. O presente simples aqui é calco do português.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Moro aqui há três anos.",
          answers: [
            "I've lived here for three years.",
            "I have lived here for three years.",
            "I've been living here for three years.",
          ],
          explanation:
            "*Há três anos* = duração → `for`. E o tempo verbal é Present Perfect, não presente.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete com `for` ou `since`.",
          sentence: "She's been on the team ___ March, so about ___ six months.",
          answers: [["since"], ["for"]],
          explanation:
            "`since` marca o ponto de partida; `for` marca a extensão. Teste: se você pode responder *quando começou*, é `since`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "choice",
          prompt: "Qual está correto?",
          sentence: "___ you ever been to Japan?",
          options: ["Did", "Have", "Are", "Do"],
          answer: 1,
          explanation:
            "`ever` sinaliza experiência de vida sem tempo definido → Present Perfect com `have`.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "When have you arrived?",
          answers: ["When did you arrive?"],
          explanation:
            "`When` pergunta um momento específico — e momento específico é sempre Past Simple.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "categorize",
          prompt: "Past Simple ou Present Perfect?",
          buckets: ["Past Simple", "Present Perfect"],
          items: [
            { text: "…two days ago", bucket: "Past Simple" },
            { text: "…so far", bucket: "Present Perfect" },
            { text: "…in 2020", bucket: "Past Simple" },
            { text: "…since Monday", bucket: "Present Perfect" },
            { text: "…last night", bucket: "Past Simple" },
            { text: "…this week", bucket: "Present Perfect" },
          ],
          explanation:
            "A pergunta única: o período já fechou? Se fechou, Past Simple. Se ainda está aberto, Present Perfect.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "She's worked here for six years and she loves it.",
          natural: true,
          explanation:
            "Ela começou no passado e continua aqui → Present Perfect com `for`. Se ela tivesse saído, seria [[She worked here for six years]].",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "fill",
          prompt: "Complete com o particípio de *see*.",
          sentence: "I've never ___ that error before.",
          answers: [["seen"]],
          explanation: "`see → saw → seen`. Present Perfect sempre usa o particípio, nunca o passado.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["We've", "just", "deployed", "the new version"],
          answers: [["We've", "just", "deployed", "the new version"]],
          explanation:
            "`just` vai entre o auxiliar e o particípio. Nunca no fim da frase nesse sentido.",
          difficulty: 2,
        },
        {
          id: "e11",
          kind: "match",
          prompt: "Ligue cada frase ao que ela realmente comunica.",
          pairs: [
            { left: "I lost my phone last week.", right: "Aconteceu e acabou. Talvez eu já tenha achado." },
            { left: "I've lost my phone.", right: "Agora mesmo eu não estou com ele." },
            { left: "She worked here for 5 years.", right: "Ela não trabalha mais aqui." },
            { left: "She's worked here for 5 years.", right: "Ela ainda trabalha aqui." },
          ],
          explanation:
            "A diferença não é de tempo cronológico, é de **conexão com o presente**. Esse é o pulo do gato.",
          difficulty: 3,
        },
        {
          id: "e12",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eles ainda não responderam.",
          answers: [
            "They haven't replied yet.",
            "They have not replied yet.",
            "They haven't answered yet.",
            "They haven't responded yet.",
          ],
          explanation:
            "*Ainda não* → `haven't … yet`. O `yet` vai no fim da frase, sempre.",
          difficulty: 2,
        },
        {
          id: "e13",
          kind: "choice",
          prompt: "Você quer saber se a pessoa está com fome agora. O que pergunta?",
          options: [
            "Did you eat?",
            "Have you eaten?",
            "Are you eating?",
            "Do you eat?",
          ],
          answer: 1,
          explanation:
            "Resultado relevante agora → Present Perfect. [[Did you eat?]] pergunta sobre uma refeição específica que já passou.",
          difficulty: 3,
        },
        {
          id: "e14",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I know him since 2015.",
          answers: [
            "I've known him since 2015.",
            "I have known him since 2015.",
          ],
          explanation:
            "*Conheço ele desde…* → Present Perfect. E `know` é state verb, então nada de [[I've been knowing]].",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-present-perfect-continuous",
      number: "4.6",
      title: "Present Perfect Continuous",
      titlePt: "Duração da atividade",
      priority: "useful",
      summary:
        "Começou no passado, ainda está rolando, e o foco é o tempo gasto — não o resultado.",
      tags: ["present perfect continuous", "have been", "how long", "duração"],
      blocks: [
        {
          kind: "text",
          text: "**Significado:** atividade que começou no passado e **continua** (ou acabou de parar), com foco na **duração ou na atividade em si**, não no resultado.",
        },
        {
          kind: "pattern",
          lines: ["Subject + have/has + been + VERB-ing"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I've been working on this bug all morning." },
            { marker: "good", text: "How long have you been learning English?" },
            { marker: "good", text: "She's been trying to reach you." },
            { marker: "good", text: "Sorry I'm sweaty — I've been running." },
            { marker: "good", text: "We've been getting a lot of complaints lately." },
          ],
        },
        {
          kind: "heading",
          text: "Present Perfect × Present Perfect Continuous",
        },
        {
          kind: "table",
          headers: ["Present Perfect (resultado)", "Present Perfect Continuous (atividade)"],
          rows: [
            ["I'**ve written** three emails. *(pronto, contável)*", "I'**ve been writing** emails all day. *(atividade)*"],
            ["She'**s read** the report. *(terminou)*", "She'**s been reading** it. *(talvez não terminou)*"],
            ["We'**ve fixed** it. *(resultado)*", "We'**ve been fixing** bugs since Monday. *(em curso)*"],
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Foco em quantos / o que está pronto",
            tone: "brand",
            items: ["→ Present Perfect", "I've sent five emails."],
          },
          right: {
            title: "Foco em há quanto tempo / no que estive ocupado",
            tone: "brand",
            items: ["→ Present Perfect Continuous", "I've been sending emails all day."],
          },
        },
        {
          kind: "callout",
          tone: "tip",
          text: "Com **live, work, study, feel** os dois são praticamente intercambiáveis: [[I've lived here for 5 years]] = [[I've been living here for 5 years]].",
        },
        {
          kind: "callout",
          tone: "danger",
          text: "State verbs nunca vão para o contínuo: ❌ [[I've been knowing him for years]] → ✅ [[I've known him for years]].",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Qual foca na duração da atividade?",
          options: [
            "I've written three emails.",
            "I've been writing emails all day.",
            "I wrote three emails.",
            "I write emails.",
          ],
          answer: 1,
          explanation:
            "`have been + -ing` foca no tempo gasto. A versão com particípio foca no resultado contável.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I've been knowing him for years.",
          answers: ["I've known him for years.", "I have known him for years."],
          explanation: "`know` é state verb — proibido no contínuo em qualquer tempo.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "fill",
          prompt: "Complete a pergunta sobre duração.",
          sentence: "How long ___ you ___ learning English?",
          answers: [["have"], ["been"]],
          explanation:
            "`How long have you been + -ing?` é a pergunta padrão de duração em curso.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Estou trabalhando nesse bug a manhã toda.",
          answers: [
            "I've been working on this bug all morning.",
            "I have been working on this bug all morning.",
          ],
          explanation:
            "Começou antes e continua agora → Present Perfect Continuous, não presente contínuo.",
          difficulty: 3,
        },
        {
          id: "e5",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "She's been trying to reach you since this morning.",
          natural: true,
          explanation:
            "Atividade repetida e ainda em curso, com ponto de partida (`since`). Uso exemplar.",
          difficulty: 1,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "Resultado ou atividade?",
          buckets: ["Present Perfect (resultado)", "Present Perfect Continuous (atividade)"],
          items: [
            { text: "We've fixed the bug.", bucket: "Present Perfect (resultado)" },
            { text: "We've been fixing bugs since Monday.", bucket: "Present Perfect Continuous (atividade)" },
            { text: "She's read the report.", bucket: "Present Perfect (resultado)" },
            { text: "She's been reading it.", bucket: "Present Perfect Continuous (atividade)" },
          ],
          explanation:
            "Se dá para contar quantos, é resultado. Se a resposta natural é *há quanto tempo*, é atividade.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["We've", "been", "getting", "a lot of complaints", "lately"],
          answers: [["We've", "been", "getting", "a lot of complaints", "lately"]],
          explanation:
            "`lately` e `recently` combinam naturalmente com o Present Perfect Continuous.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com a forma mais natural de *run*.",
          sentence: "Sorry I'm sweaty — I've been ___.",
          answers: [["running"]],
          explanation:
            "A atividade acabou de parar, mas o efeito é visível agora. Uso clássico do Present Perfect Continuous.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-past-perfect",
      number: "4.7",
      title: "Past Perfect",
      titlePt: "O passado antes do passado",
      priority: "useful",
      summary:
        "Use só quando você precisa deixar a ordem dos eventos clara. Na fala, muitas vezes o Past Simple basta.",
      tags: ["past perfect", "had", "before", "after", "narrativa"],
      blocks: [
        {
          kind: "text",
          text: "**Significado:** o passado antes do passado. Use **apenas** quando você precisa tornar a **ordem** dos eventos explícita.",
        },
        {
          kind: "pattern",
          lines: ["Subject + had + PAST PARTICIPLE"],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "When I arrived, the meeting had already started." },
            { marker: "good", text: "She told me she had never used Docker." },
            { marker: "good", text: "The server crashed because we hadn't tested the release." },
            { marker: "good", text: "By 2020, they had opened ten offices." },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Dose de realidade",
          text: "Na fala cotidiana, as pessoas usam Past Simple com *before/after*, porque a ordem já está clara. [[I had eaten before he arrived]] e 🗣️ [[I ate before he arrived]] são igualmente naturais.",
        },
        {
          kind: "list",
          title: "Quando o Past Perfect é realmente necessário",
          items: [
            "quando **não há outra pista** sobre a ordem dos eventos",
            "em narrativa, para voltar no tempo",
            "em discurso indireto (*She said she **had** finished*)",
            "com `by + tempo` (*By 2020, they had…*)",
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Sem Past Perfect",
            tone: "neutral",
            items: [
              "When I arrived, the meeting started.",
              "→ eu cheguei e AÍ começou",
            ],
          },
          right: {
            title: "Com Past Perfect",
            tone: "neutral",
            items: [
              "When I arrived, the meeting had started.",
              "→ já tinha começado, perdi o início",
            ],
          },
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "choice",
          prompt: "Você chegou e perdeu o início da reunião. Qual frase diz isso?",
          options: [
            "When I arrived, the meeting started.",
            "When I arrived, the meeting had started.",
            "When I arrived, the meeting starts.",
            "When I had arrived, the meeting starts.",
          ],
          answer: 1,
          explanation:
            "`had started` coloca o início da reunião ANTES da sua chegada. Sem o Past Perfect, a leitura é sequencial.",
          difficulty: 3,
        },
        {
          id: "e2",
          kind: "fill",
          prompt: "Complete com o Past Perfect de *test*.",
          sentence: "The server crashed because we ___ the release.",
          answers: [["hadn't tested", "had not tested"]],
          explanation:
            "A causa aconteceu antes da consequência — o Past Perfect deixa isso explícito.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Ela me disse que nunca tinha usado Docker.",
          answers: [
            "She told me she had never used Docker.",
            "She told me she'd never used Docker.",
          ],
          explanation:
            "Discurso indireto empurra o tempo verbal um passo para trás: *never used* → `had never used`.",
          difficulty: 3,
        },
        {
          id: "e4",
          kind: "judge",
          prompt: "Isso é inglês aceitável na fala?",
          sentence: "I ate before he arrived.",
          natural: true,
          explanation:
            "`before` já deixa a ordem clara, então o Past Perfect é opcional. Os dois são naturais.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["By 2020", "they", "had", "opened", "ten offices"],
          answers: [["By 2020", "they", "had", "opened", "ten offices"]],
          explanation:
            "`by + data` pede Past Perfect: tudo aquilo já estava concluído naquele marco.",
          difficulty: 2,
        },
        {
          id: "e6",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "When I arrived, the meeting had already start.",
          answers: [
            "When I arrived, the meeting had already started.",
            "When I arrived, the meeting had already begun.",
          ],
          explanation: "Depois de `had` vem o **particípio**, não a forma base.",
          difficulty: 1,
        },
        {
          id: "e7",
          kind: "match",
          prompt: "Ligue cada frase ao que aconteceu primeiro.",
          pairs: [
            { left: "When she called, I had left.", right: "Eu saí primeiro." },
            { left: "When she called, I left.", right: "A ligação veio primeiro." },
            { left: "I had finished before the demo.", right: "Terminei antes da demo." },
            { left: "I finished after the demo.", right: "A demo veio primeiro." },
          ],
          explanation:
            "O Past Perfect é uma máquina de ordenar eventos. Use-o só quando a ordem não é óbvia.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com o particípio de *see*.",
          sentence: "I didn't recognize her — I had never ___ her without glasses.",
          answers: [["seen"]],
          explanation: "`see → saw → seen`. Depois de `had`, sempre o particípio.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-future",
      number: "4.8",
      title: "Future: will vs going to",
      titlePt: "Futuro",
      priority: "essential",
      summary:
        "A escolha depende de quando você decidiu e que evidência você tem. E: nunca use `will` depois de when/if.",
      tags: ["future", "will", "going to", "gonna", "when", "if", "futuro"],
      blocks: [
        {
          kind: "text",
          text: "Os dois falam do futuro. Escolher entre eles é sobre **quando você decidiu** e **que evidência você tem**.",
        },
        {
          kind: "pattern",
          lines: [
            "will:        Subject + will + BASE VERB        (I'll, he'll, won't)",
            "going to:    Subject + am/is/are + going to + BASE VERB",
          ],
        },
        {
          kind: "table",
          headers: ["Use `will`", "Use `be going to`"],
          rows: [
            ["Decisão tomada **agora**, falando", "Plano/intenção decidido **antes**"],
            ["Previsão baseada em opinião", "Previsão baseada em **evidência presente**"],
            ["Promessas, ofertas, recusas", "Algo já combinado"],
            ['"OK, I\'**ll** send it right now."', '"I\'**m going to** send it after lunch."'],
            ['"I think it\'**ll** rain tomorrow."', '"Look at those clouds — it\'**s going to** rain."'],
            ['"I\'**ll** help you." *(oferta)*', '"We\'**re going to** hire two people." *(decidido)*'],
          ],
        },
        {
          kind: "heading",
          text: "As outras formas de futuro que você realmente precisa",
        },
        {
          kind: "pairs",
          items: [
            {
              term: "Present Continuous",
              meaning: "compromissos fixos, muito comum: [[I'm meeting the client at 3.]] [[We're flying to Madrid on Sunday.]]",
            },
            {
              term: "Present Simple",
              meaning: "horários e cronogramas: [[The flight leaves at 7:40.]]",
            },
            {
              term: "gonna 🗣️",
              meaning: "= *going to* na fala. Entenda sempre; escreva `going to`.",
            },
          ],
        },
        {
          kind: "examples",
          title: "Erros clássicos",
          items: [
            { marker: "bad", text: "I will to call you." },
            { marker: "good", text: "I will call you." },
            { marker: "bad", text: "He wills come." },
            { marker: "good", text: "He will come." },
            { marker: "bad", text: "I go to send it tomorrow." },
            { marker: "good", text: "I'm going to send it tomorrow." },
          ],
        },
        {
          kind: "callout",
          tone: "br",
          title: "Erro top-5 de brasileiros",
          text: "O português usa futuro do subjuntivo (*\u201cQuando eu chegar\u201d*), que parece futuro. O inglês usa o **presente**.",
        },
        {
          kind: "translation",
          pt: "Quando eu chegar, eu te ligo.",
          wrong: "When I will arrive, I will call you.",
          right: ["When I arrive, I'll call you."],
          note: "Mesma regra com: *If it rains…*, *As soon as he calls…*, *Before you leave…*, *Until I finish…*",
        },
        {
          kind: "rule",
          title: "Nunca use `will` depois de when, if, as soon as, before, after, until.",
          text: "A oração dessas conjunções fica no **presente**, mesmo falando do futuro.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Formas que você só precisa reconhecer",
          text: "**Future Continuous** (`will be + -ing`): [[This time tomorrow I'll be flying to Chicago.]] e, útil em negócios, o convite suave: [[Will you be joining the call?]] **Future Perfect** (`will have + particípio`): [[By December, we'll have finished the migration.]]",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija o erro mais comum de brasileiros.",
          wrong: "When I will arrive, I will call you.",
          answers: [
            "When I arrive, I'll call you.",
            "When I arrive, I will call you.",
          ],
          explanation:
            "Depois de `when`, `if`, `as soon as`, `before`, `after`, `until` vem o **presente** — mesmo com sentido futuro.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "choice",
          prompt: "Você vê nuvens pesadas no céu. O que diz?",
          options: [
            "It will rain.",
            "It's going to rain.",
            "It rains.",
            "It would rain.",
          ],
          answer: 1,
          explanation:
            "Previsão com **evidência presente** → `be going to`. `will` seria só um palpite.",
          difficulty: 2,
        },
        {
          id: "e3",
          kind: "choice",
          prompt: "O telefone toca e você se oferece para atender. O que diz?",
          options: [
            "I'm going to get it.",
            "I'll get it.",
            "I get it.",
            "I would get it.",
          ],
          answer: 1,
          explanation:
            "Decisão tomada **no momento da fala** → `will`. `going to` implicaria que você já tinha planejado.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I will to send it tomorrow.",
          answers: [
            "I will send it tomorrow.",
            "I'll send it tomorrow.",
            "I'm going to send it tomorrow.",
          ],
          explanation: "Depois de `will` nunca vem `to`. Verbo na forma base, direto.",
          difficulty: 1,
        },
        {
          id: "e5",
          kind: "translate",
          prompt: "Diga em inglês (compromisso já marcado):",
          pt: "Vou me encontrar com o cliente às três.",
          answers: [
            "I'm meeting the client at 3.",
            "I'm meeting the client at three.",
            "I'm going to meet the client at 3.",
          ],
          explanation:
            "Compromisso agendado → Present Continuous é a forma mais natural em inglês falado.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "categorize",
          prompt: "`will` ou `going to`?",
          buckets: ["will", "going to"],
          items: [
            { text: "Decisão tomada agora mesmo", bucket: "will" },
            { text: "Plano decidido semana passada", bucket: "going to" },
            { text: "Oferta espontânea de ajuda", bucket: "will" },
            { text: "Previsão com evidência visível", bucket: "going to" },
            { text: "Promessa", bucket: "will" },
          ],
          explanation:
            "Resumo: `will` = espontâneo. `going to` = já estava na cabeça ou está na sua frente.",
          difficulty: 2,
        },
        {
          id: "e7",
          kind: "fill",
          prompt: "Complete com o verbo no tempo certo.",
          sentence: "As soon as he ___ (call), I'll let you know.",
          answers: [["calls"]],
          explanation:
            "`as soon as` proíbe `will`. Presente simples, com o `-s` da terceira pessoa.",
          difficulty: 3,
        },
        {
          id: "e8",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "The flight leaves at 7:40 tomorrow morning.",
          natural: true,
          explanation:
            "Horário fixo de transporte → Present Simple, mesmo se referindo ao futuro.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["We're", "going to", "hire", "two people", "next quarter"],
          answers: [["We're", "going to", "hire", "two people", "next quarter"]],
          explanation: "Decisão já tomada → `going to` + verbo base.",
          difficulty: 1,
        },
        {
          id: "e10",
          kind: "match",
          prompt: "Ligue cada situação à forma de futuro mais natural.",
          pairs: [
            { left: "Decisão neste instante", right: "I'll do it." },
            { left: "Plano já definido", right: "I'm going to do it." },
            { left: "Compromisso na agenda", right: "I'm meeting them at 3." },
            { left: "Horário de voo", right: "The flight leaves at 7:40." },
          ],
          explanation:
            "O inglês tem quatro futuros de uso corrente. Escolher bem é o que separa fluente de traduzido.",
          difficulty: 3,
        },
      ],
    },

    /* ------------------------------------------------------------- */
    {
      id: "v-used-to",
      number: "4.11",
      title: "used to / be used to / get used to",
      titlePt: "Três formas que parecem iguais",
      priority: "useful",
      summary:
        "Costumava, estar acostumado e se acostumar. Parecem gêmeas e significam coisas completamente diferentes.",
      tags: ["used to", "be used to", "get used to", "would", "have got", "hábito"],
      blocks: [
        {
          kind: "table",
          headers: ["Forma", "Significado", "Exemplo"],
          rows: [
            ["**used to + VERBO BASE**", "hábito passado que acabou (*costumava*)", "I **used to smoke**."],
            ["**be used to + SUBST./-ING**", "estar acostumado com", "I'**m used to working** late."],
            ["**get used to + SUBST./-ING**", "se acostumar (processo)", "You'll **get used to it**."],
          ],
        },
        {
          kind: "examples",
          items: [
            { marker: "good", text: "I used to live in Porto.", note: "não moro mais" },
            { marker: "good", text: "I'm used to living alone.", note: "hoje é normal pra mim" },
            { marker: "bad", text: "I'm used to live alone.", note: "mistura as duas — erro muito comum" },
            { marker: "good", text: "I'm getting used to the new system." },
          ],
        },
        {
          kind: "rule",
          title: "`used to` + base. `be/get used to` + `-ing`.",
          text: "Se tem `be` ou `get` na frente, o verbo seguinte ganha `-ing`. Sem eles, forma base.",
        },
        {
          kind: "callout",
          tone: "warn",
          title: "Negativa e pergunta de `used to`",
          text: "[[I didn't use to like it]] / [[Did you use to work there?]] — sem `-d` depois de `did`.",
        },
        {
          kind: "heading",
          text: "`would` para hábitos passados",
        },
        {
          kind: "examples",
          items: [
            { marker: "written", text: "When I was a kid, we would spend every summer at the beach." },
            { marker: "bad", text: "I would live in Porto.", note: "estado → precisa de used to" },
          ],
        },
        {
          kind: "text",
          text: "`would` só funciona para **ações repetidas**, nunca para estados. Para estados (*live, be, have, know*) use sempre `used to`.",
        },
        {
          kind: "heading",
          text: "`have` × `have got`",
        },
        {
          kind: "table",
          headers: ["", "Forma", "Registro"],
          rows: [
            ["Posse 🇺🇸", "I **have** a car. / Do you **have** a minute?", "neutro, padrão em todo lugar"],
            ["Posse 🇬🇧 🗣️", "I'**ve got** a car. / **Have** you **got** a minute?", "muito comum na fala, sobretudo britânica"],
          ],
        },
        {
          kind: "list",
          items: [
            "Os dois estão corretos. `have got` só existe no presente — o passado é sempre **had**.",
            "Não misture as perguntas: ❌ [[Do you have got…?]] ❌ [[Have you a car?]] *(arcaico)*",
            "🗣️ Americanos dizem [[I got a car]] no casual. Reconheça, não escreva.",
            "`have to` é outra coisa: obrigação. [[I have to go.]] 🗣️ [[I've got to go]] → *\u201cI gotta go.\u201d*",
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "`have` para ações",
          text: "*have breakfast/lunch/dinner, have a shower, have a break, have a look, have fun, have a meeting, have an idea*. Estes aceitam `do` na pergunta ([[Did you have lunch?]]) e aceitam contínuo ([[I'm having lunch]]).",
        },
      ],
      exercises: [
        {
          id: "e1",
          kind: "fix",
          prompt: "Corrija.",
          wrong: "I'm used to live alone.",
          answers: ["I'm used to living alone.", "I am used to living alone."],
          explanation:
            "`be used to` pede substantivo ou `-ing`. Só `used to` sozinho pede forma base.",
          difficulty: 2,
        },
        {
          id: "e2",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Eu costumava morar no Porto.",
          answers: ["I used to live in Porto."],
          explanation:
            "Hábito ou estado passado que acabou → `used to` + verbo base.",
          difficulty: 1,
        },
        {
          id: "e3",
          kind: "translate",
          prompt: "Diga em inglês:",
          pt: "Você vai se acostumar.",
          answers: [
            "You'll get used to it.",
            "You will get used to it.",
            "You'll get used to it soon.",
          ],
          explanation:
            "Processo de adaptação → `get used to`. O `it` é obrigatório: o inglês não deixa o verbo sem objeto aqui.",
          difficulty: 2,
        },
        {
          id: "e4",
          kind: "fill",
          prompt: "Complete a pergunta.",
          sentence: "Did you ___ to work there?",
          answers: [["use"]],
          explanation:
            "Depois de `did`, tudo volta à base — inclusive `used`, que vira `use`.",
          difficulty: 2,
        },
        {
          id: "e5",
          kind: "categorize",
          prompt: "Qual estrutura cada frase precisa?",
          buckets: ["used to (hábito que acabou)", "be/get used to (estar/ficar acostumado)"],
          items: [
            { text: "Eu fumava, mas parei.", bucket: "used to (hábito que acabou)" },
            { text: "Já me acostumei a trabalhar de madrugada.", bucket: "be/get used to (estar/ficar acostumado)" },
            { text: "A gente trabalhava junto.", bucket: "used to (hábito que acabou)" },
            { text: "Estou me acostumando com o sistema novo.", bucket: "be/get used to (estar/ficar acostumado)" },
          ],
          explanation:
            "Teste rápido: se dá para dizer *costumava*, é `used to`. Se dá para dizer *acostumado*, leva `be/get`.",
          difficulty: 3,
        },
        {
          id: "e6",
          kind: "judge",
          prompt: "Isso é inglês natural?",
          sentence: "I would live in Porto when I was younger.",
          natural: false,
          correction: "I used to live in Porto when I was younger.",
          explanation:
            "`would` só serve para ações repetidas. `live` é estado, então exige `used to`.",
          difficulty: 3,
        },
        {
          id: "e7",
          kind: "choice",
          prompt: "Qual pergunta está correta?",
          options: [
            "Do you have got a minute?",
            "Have you got a minute?",
            "Have you a minute?",
            "Do you got a minute?",
          ],
          answer: 1,
          explanation:
            "Ou `Do you have…?` ou `Have you got…?`. Nunca misture os dois, e `Have you…?` sozinho é arcaico.",
          difficulty: 2,
        },
        {
          id: "e8",
          kind: "fill",
          prompt: "Complete com a forma correta de *work*.",
          sentence: "I'm used to ___ late — it doesn't bother me anymore.",
          answers: [["working"]],
          explanation: "`be used to` sempre puxa `-ing`, porque o `to` aqui é preposição, não infinitivo.",
          difficulty: 2,
        },
        {
          id: "e9",
          kind: "match",
          prompt: "Ligue a expressão ao significado.",
          pairs: [
            { left: "I used to run.", right: "Eu corria antes, hoje não." },
            { left: "I'm used to running.", right: "Correr é normal pra mim." },
            { left: "I'm getting used to running.", right: "Estou me adaptando." },
            { left: "I have to run.", right: "Preciso correr." },
          ],
          explanation:
            "Quatro estruturas quase idênticas na forma e completamente diferentes no sentido.",
          difficulty: 3,
        },
        {
          id: "e10",
          kind: "order",
          prompt: "Monte a frase.",
          tokens: ["We", "used to", "work", "together", "at the same company"],
          answers: [["We", "used to", "work", "together", "at the same company"]],
          explanation: "`used to` + verbo base, sem `-ing` e sem `to` extra.",
          difficulty: 1,
        },
      ],
    },
  ],
};
