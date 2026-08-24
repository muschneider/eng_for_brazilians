import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { ProgressProvider } from "@/components/progress-provider";
import { SiteNav } from "@/components/site-nav";
import { STORAGE_KEY } from "@/lib/progress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Practical English — inglês que funciona",
    template: "%s · Practical English",
  },
  description:
    "Curso interativo de inglês para falantes de português. 48 lições, 470+ exercícios com correção, e progresso salvo no seu navegador.",
  applicationName: "Practical English",
  authors: [{ name: "Practical English" }],
  keywords: [
    "inglês",
    "curso de inglês",
    "inglês para brasileiros",
    "gramática inglesa",
    "exercícios de inglês",
  ],
  openGraph: {
    title: "Practical English",
    description:
      "Inglês para usar: ler, escrever, falar e ser entendido. 48 lições e mais de 470 exercícios.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d13" },
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Applies the saved theme before first paint. Without this the page
 * flashes dark-then-light for users who chose light mode.
 */
const themeScript = `
(function(){
  try {
    var raw = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    var t = raw ? (JSON.parse(raw).settings || {}).theme : null;
    if (t !== "light" && t !== "dark") {
      t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ProgressProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--brand)] focus:px-4 focus:py-2 focus:text-[#0a0a12]"
          >
            Pular para o conteúdo
          </a>
          <SiteNav />
          <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:px-6">
            {children}
          </main>
          <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
            <div className="border-t border-[var(--line-soft)] pt-6 text-[0.8125rem] text-[var(--fg-faint)]">
              <p>
                Practical English — uma referência prática para quem fala
                português. Seu progresso fica salvo apenas neste navegador.
              </p>
            </div>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
