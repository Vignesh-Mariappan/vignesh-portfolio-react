import SkillListItem from "./SkillListItem";
import { skills } from "../../assets/data/skills";

const SkillList = () => {
  return (
    <div className="SkillList">
      {skills.map((skill) => (
        <SkillListItem key={skill.id} skill={skill} />
      ))}
      <div className="skill" style={{ background: "#764abc", width: "170px" }} data-aos={"zoom-in-right"}>
        <div className="skill-icon">
          <span
            className="iconify"
            data-icon="simple-icons:redux"
            style={{ fontSize: "48px" }}
          ></span>
        </div>
        <h4>Redux</h4>
      </div>
    </div>
  );
};

export default SkillList;
