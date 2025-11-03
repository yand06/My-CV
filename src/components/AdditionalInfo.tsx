import React from "react";

interface AdditionalInfoProps {
  info: {
    skills: string;
    languages: string;
    tools: string;
  };
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ info }) => {
  return (
    <section className="p-6 md:p-8">
      <h2 className="bg-secondary text-white text-base md:text-lg font-bold px-4 py-2 -mx-6 md:-mx-8 mb-5 tracking-wide">
        ADDITIONAL INFORMATION
      </h2>
      <ul className="space-y-3">
        <li className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-secondary before:font-bold">
          <span className="font-bold text-primary">Technical Skills:</span>{" "}
          {info.skills}
        </li>
        <li className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-secondary before:font-bold">
          <span className="font-bold text-primary">Languages:</span>{" "}
          {info.languages}
        </li>
        <li className="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-secondary before:font-bold">
          <span className="font-bold text-primary">Tools & Technologies:</span>{" "}
          {info.tools}
        </li>
      </ul>
    </section>
  );
};

export default AdditionalInfo;
