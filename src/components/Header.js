import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h1>PIZZA RESTAURANT</h1>
            <p>
              The best pizza of the city are here !
              Quality/price very interesting !
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIVERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;