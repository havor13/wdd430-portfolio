// app/projects/[id]/page.tsx
import { getProjectById } from "@/lib/projects-db";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Unwrap the params promise
  const { id: idParam } = await params;
  const id = parseInt(idParam, 10);

  const project = await getProjectById(id);

  if (!project) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold">Project not found</h2>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        Technologies: {project.technologies.join(", ")}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Repo
        </a>
      )}
    </main>
  );
}
