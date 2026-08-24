import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, getNeighbors, lessons, moduleByLessonId } from "@/lib/content";
import { LessonView } from "@/components/lesson-view";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return lessons.map((l) => ({ slug: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lição não encontrada" };
  return {
    title: `${lesson.titlePt} — ${lesson.title}`,
    description: lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const mod = moduleByLessonId.get(lesson.id)!;
  const { prev, next } = getNeighbors(lesson.id);

  return (
    <LessonView
      lesson={lesson}
      moduleTitle={mod.titlePt}
      moduleIcon={mod.icon}
      prev={prev ? { id: prev.id, title: prev.titlePt } : null}
      next={next ? { id: next.id, title: next.titlePt } : null}
    />
  );
}
