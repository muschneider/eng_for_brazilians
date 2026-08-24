# Practical English

Aplicação interativa de inglês para falantes de português, construída a partir de
`practical-english-reference.md` / `Practical-English.pdf`.

**48 lições · 667 blocos de conteúdo · 474 exercícios corrigidos na hora.**

O progresso fica inteiramente no `localStorage` do navegador — sem backend, sem
banco de dados, sem variáveis de ambiente.

---

## O que a aplicação faz

| Área | Descrição |
|---|---|
| **Trilha** | 8 módulos, dos fundamentos ao inglês profissional, com prioridade **essencial / útil / depois** herdada do documento original. |
| **Lições** | Conteúdo renderizado a partir de dados tipados: tabelas, padrões em mono, comparações lado a lado, exemplos com marcadores ❌ ⚠️ ✅ 🗣️ ✍️ 🇧🇷 e blocos “português → inglês”. |
| **Exercícios** | 8 tipos com validação: múltipla escolha, completar lacunas, corrigir frase, traduzir, ordenar palavras, relacionar pares, julgar naturalidade e classificar em categorias. |
| **Correção** | Tolerante ao que não importa (maiúsculas, pontuação final, aspas curvas, contrações `I'm`/`I am`) e a erros de digitação leves; rígida no que a lição ensina. |
| **Revisão** | Repetição espaçada estilo Leitner (6 caixas, intervalos de 0 a 16 dias), mais um modo “pontos fracos” e prática livre. |
| **Referência** | 10 fichas de consulta rápida (tempos, modais, pronomes, preposições, verbos irregulares, falsos cognatos, colocações, reduções da fala, frases de e-mail). |
| **Progresso** | XP, níveis, sequência de dias, precisão, desempenho por módulo, exportação/importação em JSON e reset. |
| **Busca** | Palette com `⌘K` / `Ctrl+K` sobre todo o conteúdo, com índice pré-computado. |
| **Tema** | Escuro (padrão) e claro “papel”, sem flash na primeira pintura. |

---

## Rodando localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

Outros comandos:

```bash
npm run build        # build de produção
npm run start        # serve o build
npm run check        # typecheck + lint + validação de conteúdo
npm run validate     # só a checagem de integridade dos exercícios
```

---

## Deploy na Vercel (plano gratuito)

O projeto foi construído para caber no Hobby sem nenhum ajuste:

- **100% estático.** Todas as 55 rotas são pré-renderizadas em build
  (`○ Static` / `● SSG`). Nenhuma Serverless Function, nenhum Edge Middleware.
- **Sem variáveis de ambiente**, sem banco, sem chaves de API.
- **Sem `next/image` com loader remoto**, então não há consumo de otimização de
  imagens.
- **Sem cron, sem ISR, sem streaming** — nada que gere cobrança ou limite.

Passos:

```bash
git init && git add -A && git commit -m "Practical English"
git remote add origin <seu-repo>
git push -u origin main
```

Depois, em vercel.com → **Add New → Project → Import**. A Vercel detecta o
Next.js sozinho:

- Framework preset: **Next.js**
- Build command: `next build` (padrão)
- Output directory: padrão
- Install command: `npm install` (padrão)

Ou pelo CLI:

```bash
npx vercel        # preview
npx vercel --prod # produção
```

---

## Estrutura

```
app/
  layout.tsx              shell, fontes, script anti-flash de tema
  page.tsx                dashboard
  lessons/                catálogo + [slug] (generateStaticParams)
  practice/               revisão espaçada
  reference/              fichas de consulta
  progress/               estatísticas, ajustes, backup

components/
  blocks.tsx              renderiza os blocos de conteúdo (server component)
  exercise-views.tsx      uma view por tipo de exercício
  exercise-session.tsx    orquestra responder → feedback → próximo
  progress-provider.tsx   contexto sobre useSyncExternalStore
  search-dialog.tsx       command palette
  ...

lib/
  types.ts                modelo de conteúdo e de progresso (fonte da verdade)
  answer.ts               normalização e checagem de respostas
  progress.ts             XP, streak, Leitner, serialização defensiva
  store.ts                store externo do localStorage
  content/
    index.ts              registro, navegação, índice de busca
    reference.ts          fichas de consulta rápida
    modules/01..08        o curso inteiro, como dados tipados

scripts/
  validate-content.ts     checagem semântica dos exercícios
```

### Adicionando ou editando conteúdo

Todo o curso é um grafo de objetos tipados. Para editar, mexa em
`lib/content/modules/*.ts` e rode:

```bash
npm run validate
```

O validador garante, entre outras coisas, que:

- toda lacuna `___` de um exercício `fill` tem um conjunto de respostas;
- toda resposta de `order` é uma permutação exata dos tokens;
- todo item de `categorize` aponta para um bucket existente;
- todo `judge` marcado como não-natural traz a correção;
- não há ids duplicados de lição ou de exercício.

---

## Tipografia

Todos os tamanhos vêm de uma escala única declarada no topo de
`app/globals.css`, em `rem` — então o app respeita a preferência de tamanho de
fonte do navegador, e subir/descer a escala inteira é editar uma linha.

```
0.6875rem  11px   rótulos micro
0.75rem    12px   eyebrows, badges
0.8125rem  13px   metadados
0.875rem   14px   UI secundária
0.9375rem  15px   UI padrão
1.0625rem  17px   corpo de texto
1.125rem   18px   parágrafo de abertura
1.3125rem  21px   subtítulos
1.5rem     24px   títulos de seção
2.25rem    36px   títulos de página
2.625rem   42px   hero
```

Frases em inglês usam mono com um ajuste óptico de `0.94em` (`.en`), porque a
monoespaçada lê menor que a sans no mesmo corpo.

---

## Decisões de projeto

- **Conteúdo como dados, não como MDX.** Isso permite validar semanticamente,
  gerar o índice de busca em build e reaproveitar os mesmos blocos nas fichas de
  referência.
- **`useSyncExternalStore` em vez de `useState` + `useEffect`.** O `localStorage`
  é um sistema externo; usar o primitivo certo elimina renders em cascata, resolve
  hidratação e dá sincronização entre abas de graça.
- **Estado dos exercícios resetado por `key`, não por efeito.** Cada exercício
  remonta ao avançar, então não existe bookkeeping de limpeza.
- **Inglês em monoespaçada.** Toda frase-espécime aparece em fonte mono, o que
  separa visualmente “a língua sendo estudada” de “o texto que explica”.

---

## Privacidade

Nenhum dado sai do navegador. Não há analytics, cookies ou requisições a
terceiros em tempo de execução (as fontes são auto-hospedadas pelo `next/font`).
Limpar os dados do site apaga o progresso — use **Progresso → Exportar** para
guardar um backup.
