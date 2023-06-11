import EducationListItem from "./EducationListItem";
import { educationDetails } from "../../assets/data/education-details";

const EducationList = () => {
  return (
    <div className="education-container" data-aos="fade-up">
      {educationDetails.map((educationDetail) => (
        <EducationListItem
          key={educationDetail.id}
          educationDetail={educationDetail}
        />
      ))}
    </div>
  );
};

export default EducationList;
