import React, { useContext } from "react";
import { AppContext } from "../../App";

const ExperienceListItem = ({
  work: { company, role, experience, location, aos }
}) => {
  const { mode } = useContext(AppContext);

  return (
    <div
      className="ExperienceListItem"
      style={{
        backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
      }}
      data-aos={aos}
    >
      <h3>{role}</h3>
      <h4>{company}</h4>
      <p>{experience}</p>
      <p>{location}</p>
    </div>
  );
};

export default ExperienceListItem;
