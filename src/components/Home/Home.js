import logo from "../../images/drinksGallery.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <p className="home__caption">Seasonal Sips</p>
        <img src={logo} className="home__logo" alt="logo" />
        <button type="button" id="start-button" className="home__submit">
          Find Libation
        </button>
      </div>
    </div>
  );
};

export default Home;