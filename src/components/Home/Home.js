import logo from "../../images/drinksGallery.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <p className="home__caption">
          <span className="home__caption_span">Welcome to </span>Seasonal Sips
        </p>
        <div className="home__container">
          <div className="">
            <p className="home__description">
              Seasonal Sips offers a curated list of locally popular libations
              and the places to find their ingredients or the places which serve
              them for making your next night in or out with your friends into a
              new and exciting adventure.
            </p>
            <p className="home__description">
              All while supporting local businesses you might never have thought
              to visit before.
            </p>
          </div>
          <div className="home__circle">
            <img src={logo} className="home__logo" alt="logo" />
          </div>
        </div>
        <button type="button" id="start-button" className="home__submit">
          Find Libation
        </button>
      </div>
    </div>
  );
};

export default Home;
