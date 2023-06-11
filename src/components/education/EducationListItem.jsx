const EducationListItem = ({
  educationDetail: { course, institution, yearOfPassing, location, aos }
}) => {
  return (
    <div className="education-item" data-aos={aos}>
      <h3>{course}</h3>
      <h4>{institution}</h4>
      <p>{yearOfPassing}</p>
      <p>{location}</p>
    </div>
  );
};

export default EducationListItem;
