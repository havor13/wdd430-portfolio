interface SkillCardProps {
  skill: string;
  level: string;
}

export default function SkillCard({ skill, level }: SkillCardProps) {
  return (
    <div className="p-6 bg-white rounded shadow-md border border-gray-200 mb-4">
      <h3 className="text-xl font-semibold text-blue-600">{skill}</h3>
      <p className="text-gray-700">Level: {level}</p>
    </div>
  );
}
