import SectionHeading from "../shared/SectionHeading";
import CertificationList from "../components/certifications/CertificationList";

const Certifications = () => {
  return (
    <div className="Certifications">
      <SectionHeading secHeading="Certifications" />
      <CertificationList />
    </div>
  );
};

export default Certifications;
