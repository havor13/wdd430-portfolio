interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}
