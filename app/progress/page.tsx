import type { Metadata } from "next";
import { ProgressPanel } from "@/components/progress-panel";

export const metadata: Metadata = {
  title: "Progresso",
  description:
    "Estatísticas de estudo, desempenho por módulo, configurações e backup dos seus dados.",
};

export default function ProgressPage() {
  return <ProgressPanel />;
}
