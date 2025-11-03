import React from "react";

interface WorkExperienceItem {
  title: string;
  company?: string;
  date: string;
  achievements: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="p-6 md:p-8 border-b border-gray-200">
      <h2 className="bg-secondary text-white text-base md:text-lg font-bold px-4 py-2 -mx-6 md:-mx-8 mb-5 tracking-wide">
        WORK EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
              <div>
                <h3 className="font-bold text-sm text-primary">{exp.title}</h3>
                {exp.company && (
                  <p className="text-sm text-gray-600">{exp.company}</p>
                )}
              </div>
              <span className="text-sm text-gray-600 md:text-right">
                {exp.date}
              </span>
            </div>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-secondary before:font-bold"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
