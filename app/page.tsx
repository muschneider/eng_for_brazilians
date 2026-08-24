import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Practical English — inglês que funciona",
};

export default function HomePage() {
  return <Dashboard />;
}
