import React from "react";

interface EducationItem {
  degree: string;
  date: string;
  school: string;
  details: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="p-6 md:p-8 border-b border-gray-200">
      <h2 className="bg-secondary text-white text-base md:text-lg font-bold px-4 py-2 -mx-6 md:-mx-8 mb-5 tracking-wide">
        EDUCATION
      </h2>
      <div className="space-y-5">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <h3 className="font-bold text-sm text-primary">{edu.degree}</h3>
              <span className="text-sm text-gray-600">{edu.date}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{edu.school}</p>
            <ul className="space-y-1">
              {edu.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-secondary before:font-bold"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
