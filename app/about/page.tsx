import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I’m Sampson Havor, a Computer Science student and developer passionate about productivity tools and full‑stack development.
      </p>
      <SkillCard skill="Full‑Stack Development" level="Intermediate" />
    </main>
  );
}
