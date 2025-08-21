import ExperienceCard from "../_components/ExperienceCard";
import { experiences } from "../_data/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}
