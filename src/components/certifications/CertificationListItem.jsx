const CertificateListItem = ({
  certificate: { certificateTitle, certificateProvider, certificateLink, aos }
}) => {
  return (
    <div className="certificate" data-aos={aos}>
      <i className="fa-solid fa-trophy"></i>
      <div className="certificate-title">{certificateTitle}</div>
      <div className="certificate-provider">{certificateProvider}</div>
      {certificateLink && (
        <a className="certificate-link" href={certificateLink}>
          View Certificate
        </a>
      )}
    </div> 
  );
};

export default CertificateListItem;
