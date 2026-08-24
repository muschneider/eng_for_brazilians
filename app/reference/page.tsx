import type { Metadata } from "next";
import { referenceSheets } from "@/lib/content/reference";
import { ReferenceBrowser } from "@/components/reference-browser";

export const metadata: Metadata = {
  title: "Referência rápida",
  description:
    "Tabelas de consulta: tempos verbais, modais, pronomes, preposições, verbos irregulares, falsos cognatos e frases de e-mail.",
};

export default function ReferencePage() {
  return <ReferenceBrowser sheets={referenceSheets} />;
}
