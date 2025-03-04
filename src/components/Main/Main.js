import "./Main.css";
import { drinksList } from "../../utils/drinksList";
// eslint-disable-next-line
import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Tags from "../Tags/tags";
// import ResourceCenter from "../ResourceCenter/ResourceCenter";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header address={props.address} />
        <div className="main__tag-selector">
          This is where you will select tags for drink choices.

          <div className="tag_container">
          {/* <Tags /> */}
          </div>
        </div>
      </section>
      <section id="map" className="main__map">
        <div className="main__map">
          <Map
            address={props.address}
            setPin={props.setPin}
            notFound={props.notFound}
            setNotFound={props.setNotFound}
          />
        </div>
      </section>
    </>
  );
};

export default Main;
