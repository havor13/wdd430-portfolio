export default async function SchoolProjects() {
  // Fetch only school projects
  const res = await fetch("http://localhost:3000/api/projects?type=school", {
    cache: "no-store", // always get fresh data
  });
  const projects = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      <p className="text-gray-700 mb-6">
        These are projects I built during my coursework.
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
