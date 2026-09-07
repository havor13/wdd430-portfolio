export default async function ProjectsOverview() {
  // Fetch all projects from the API
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store", // ensures fresh data on each request
  });
  const projects = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <p className="text-lg text-gray-700 mb-6">
        Explore my open source and school projects below.
      </p>

      <ul className="space-y-4">
        {projects.map((project: any) => (
          <li key={project.id} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <p className="text-sm text-gray-500">
              Technologies: {project.technologies.join(", ")}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
