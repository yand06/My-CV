import React from "react";

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <section className="p-6 md:p-8 border-b border-gray-200">
      <h2 className="bg-secondary text-white text-base md:text-lg font-bold px-4 py-2 -mx-6 md:-mx-8 mb-5 tracking-wide">
        SUMMARY
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
        {text}
      </p>
    </section>
  );
};

export default Summary;
