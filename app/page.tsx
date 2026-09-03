import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Smart Study Planner",
    description:
      "A Next.js app that helps students organize tasks, deadlines, and study schedules with a MongoDB backend.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/havor13/smart-study-planner",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack Next.js app for managing products, orders, and analytics with a responsive UI.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/havor13/ecommerce_store",
  },
  
  {
    title: "StudentTrackerApp",
    description:
      "An Android app built with Kotlin and Jetpack Compose that allows users to input student names, save them using DataStore persistence, and view the stored list on a second screen.",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "DataStore"],
    link: "https://github.com/havor13/StudentTrackerApp",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I’m Sampson Havor, a Computer Science student and developer passionate
          about productivity tools, mobile apps, and full‑stack development. Here are some of
          my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
