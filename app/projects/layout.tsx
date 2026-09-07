import Link from "next/link";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <nav className="mb-6 space-x-4 text-blue-600">
        <Link href="/projects">Overview</Link>
        <Link href="/projects/opensource">Open Source</Link>
        <Link href="/projects/school">School</Link>
      </nav>
      {children}
    </section>
  );
}
