import Header from "./components/Header";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import AdditionalInfo from "./components/AdditionalInfo";
import { cvData } from "./data/cvData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-none md:rounded-lg overflow-hidden">
        <Header
          name={cvData.name}
          photo={cvData.photo}
          contact={cvData.contact}
        />
        <Summary text={cvData.summary} />
        <WorkExperience experiences={cvData.workExperience} />
        <Education education={cvData.education} />
        <AdditionalInfo info={cvData.additionalInfo} />
      </div>
    </div>
  );
}

export default App;
