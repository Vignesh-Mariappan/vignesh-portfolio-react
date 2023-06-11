import vignesh from "../assets/images/vignesh.jpeg";

const Header = () => {
  return (
    <header>
      <img src={vignesh} alt="Vignesh M" id="profile-pic" />
      <div className="title">
        <h1>VIGNESH M</h1>
        <h1>Front End Developer</h1>
      </div>
    </header>
  );
};

export default Header;
