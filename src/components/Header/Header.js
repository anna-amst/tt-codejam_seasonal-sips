import "./Header.css";
import logo from "../../images/tumbler.png";

export default function Header(props) {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Seasonal logo"
      ></img>
      <div className="header__container">
        <h1 className="header__container-title">Seasonal Sips</h1>
        <p className="header__container-description">
          Curating Seasonal Libations
        </p>
      </div>
    </div>
  );
}
