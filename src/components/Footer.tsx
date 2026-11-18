import Link from "next/link";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="hover:text-accent">
            Privacy
          </Link>
          <span>Built with Next.js, TypeScript and Tailwind CSS.</span>
        </p>
      </div>
    </footer>
  );
}
