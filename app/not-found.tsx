import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-md flex-col items-center justify-center text-center">
      <p className="font-[family-name:var(--font-display)] text-[4.5rem] leading-none font-bold text-[var(--brand)]">
        404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-[1.625rem] font-semibold text-[var(--fg-strong)]">
        Página não encontrada
      </h1>
      <p className="mt-2 text-[1.0625rem] text-[var(--fg-muted)]">
        O link pode estar quebrado ou a lição foi renomeada.
      </p>
      <div className="mt-6 flex gap-2.5">
        <Link href="/" className="btn btn-primary">
          Ir para o início
        </Link>
        <Link href="/lessons" className="btn btn-soft">
          Ver lições
        </Link>
      </div>
    </div>
  );
}
