import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I’m Sampson Havor, a Software Development student and developer passionate 
        about productivity tools, mobile apps, and full‑stack development. My work spans 
        web, backend, mobile, and cloud projects — many of which are showcased on my GitHub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard skill="Full‑Stack Development" level="Intermediate" />
        <SkillCard skill="Frontend (React, Next.js, Tailwind)" level="Advanced" />
        <SkillCard skill="Backend (Node.js, Django, Express)" level="Intermediate" />
        <SkillCard skill="Databases (MongoDB, PostgreSQL)" level="Intermediate" />
        <SkillCard skill="Mobile Development (Kotlin, Jetpack Compose)" level="Beginner" />
        <SkillCard skill="Cloud & Deployment (Vercel, Render, Google Cloud)" level="Intermediate" />
        <SkillCard skill="Version Control (Git & GitHub)" level="Advanced" />
      </div>
    </main>
  );
}
