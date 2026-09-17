import Link from "next/link";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjects() {
  // Fetch only open source projects directly from the DB layer
  // (no more HTTP round trip to the app's own API route)
  const projects = await getProjects("opensource");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Open Source Projects</h2>
      <p className="text-gray-700 mb-6">
        Here are some of my open source contributions.
      </p>

      <ul className="space-y-4">
        {projects.map((project: any) => (
          <li key={project.id} className="border p-4 rounded-md shadow-sm">
            {/* Internal link to your portfolio detail page */}
            <Link
              href={`/projects/${project.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {project.title}
            </Link>

            <p className="text-gray-700">{project.description}</p>
            <p className="text-sm text-gray-500">
              Technologies: {project.technologies.join(", ")}
            </p>

            {/* External repo link from lib/projects-db.ts */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline"
              >
                {/* Optional GitHub icon for clarity */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 ..."/>
                </svg>
                View Repo
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
