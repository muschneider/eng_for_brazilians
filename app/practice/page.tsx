import type { Metadata } from "next";
import { PracticeHub } from "@/components/practice-hub";

export const metadata: Metadata = {
  title: "Revisão",
  description:
    "Repetição espaçada: revise o que você errou e o que está prestes a esquecer.",
};

export default function PracticePage() {
  return <PracticeHub />;
}
