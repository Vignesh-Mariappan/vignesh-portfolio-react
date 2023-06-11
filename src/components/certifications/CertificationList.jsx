import CertficationListItem from "./CertificationListItem";

const certifications = [
  {
    id: "certificate1",
    certificateTitle: "Problem Solving (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/7e04926894f2",
    aos: "flip-left"
  },
  {
    id: "certificate2",
    certificateTitle: "JavaScript (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/0cd45215faa4",
    aos: "flip-right"
  },
  {
    id: "certificate3",
    certificateTitle: "JavaScript (Intermediate)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/24387bc19f09",
    aos: "flip-up"
  },
  {
    id: "certificate4",
    certificateTitle: "React (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/c6c2e061cd71",
    aos: "flip-down"
  },
  {
    id: "certificate5",
    certificateTitle: "Evangelist Award",
    certificateProvider: "Dassault Systemes",
    aos: "flip-left"
  },
  {
    id: "certificate6",
    certificateTitle: "Pat on the back Award",
    certificateProvider: "Pragmatic Play",
    aos: "flip-right"
  }
];

const CertificationsList = () => {
  return (
    <div className="certifications-container">
      {certifications.map((certificate) => (
        <CertficationListItem certificate={certificate} key={certificate.id} />
      ))}
    </div>
  );
};

export default CertificationsList;
