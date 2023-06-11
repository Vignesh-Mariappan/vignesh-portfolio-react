import ExperienceListItem from "./ExperienceListItem";
import { workExperience } from "../../assets/data/work-experience";

const ExperienceList = () => {
  return (
    <div className="ExperienceList">
      {workExperience.map((work) => (
        <ExperienceListItem key={work.id} work={work} />
      ))}
    </div>
  );
};

export default ExperienceList;
