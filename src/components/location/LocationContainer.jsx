const LocationContainer = () => {
  return (
    <div className="location-container">
      <div className="google-map">
        <iframe
          title="google-map"
          src="https://maps.google.com/maps?q=Gachibowli, Hyderabad, India&t=&z=10&ie=UTF8&iwloc=&output=embed"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address">
        <div className="current-address">
          <h3>Current Address</h3>
          <p>203, Sree Sai Adobe, Park Avenue colony, </p>
          <p>Golden Tulip estate, Kondapur, </p>
          <p>Hyderabad, Telangana </p>
          <p>Pin - 500084 </p>
        </div>
        <div className="permanent-address">
          <h3>Permanent Address</h3>
          <p>111, Thiru nagar, 3rd street, </p>
          <p>Kovilpatti, Tuticorin</p>
          <p>Pin - 628501 </p>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
