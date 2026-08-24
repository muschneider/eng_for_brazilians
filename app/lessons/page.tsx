import type { Metadata } from "next";
import { LessonCatalog } from "@/components/lesson-catalog";

export const metadata: Metadata = {
  title: "Lições",
  description:
    "Todas as lições do curso, organizadas em 8 módulos — dos fundamentos ao inglês profissional.",
};

export default function LessonsPage() {
  return <LessonCatalog />;
}
