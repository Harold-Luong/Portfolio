import React from "react";
import "../style/hex.scss";

const Hexagon = () => {
  return (
    <div className="center">
      <div className="hexagon-container">
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-twitter">1</i>
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-twitter">2</i>
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-instagram">3</i>
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-instagram">4</i>
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-instagram">5</i>
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <i className="fab fa-instagram">6</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
