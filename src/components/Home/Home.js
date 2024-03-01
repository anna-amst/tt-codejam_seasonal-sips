import React, { useState } from "react";
import logo from "../../images/drinksGallery.png";
import "./Home.css";

const Home = (props) => {
  const setLocation = () => {
    const input = document.querySelector("#search-bar");
    if (input.value.length > 0) {
      props.setIsLocated(true);
      props.handleScroll("main");
      props.setAddress(input.value);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setLocation();
    }
  };

  return (
    <div className="home">
      <div className="home__header">
        <p className="home__caption">Seasonal Sips</p>
        <p className="home__caption-byline">Curating Seasonal Libations</p>
        <div className="home__container">
          <p className="home__description">
            Seasonal Sips offers a curated list of locally popular libations and
            the places to find their ingredients or the places which serve them
            for making your next night in or out with your friends into a new
            and exciting adventure.
          </p>
          <p className="home__description description_second-line">
            All while supporting local businesses you might never have thought
            to visit before.
          </p>
          <div className="home__circle"></div>
        </div>
        <input
          id="search-bar"
          type="text"
          placeholder="Enter ZipCode"
          className="home__search"
          onKeyDown={handleEnter}
          required
        />
        <button
          type="button"
          id="start-button"
          onClick={setLocation}
          className="home__submit"
        >
          Find Libation
        </button>
      </div>
    </div>
  );
};

export default Home;
