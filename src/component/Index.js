import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Button from "react-bootstrap/Button";
import "../style/index.scss";

const Index = () => {
  return (
    <>
      <div id="hexcontainer">
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl1" href="">
              <div className="hexcover"></div>
              <h3>Beardface</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl2" href="">
              <div className="hexcover"></div>
              <h3>BK Museum</h3>

              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl3" href="">
              <div className="hexcover"></div>
              <h3>Banyan</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>

        <br />

        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl4" href="">
              <div className="hexcover"></div>
              <h3>Blueberries</h3>

              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl5" href="">
              <div className="hexcover"></div>
              <h3>Bourbon</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl6" href="">
              <div className="hexcover"></div>
              <h3>Boathouse Row</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl7" href="">
              <div className="hexcover"></div>
              <h3>Blue Velvet</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>

        <br />

        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl8" href="">
              <div className="hexcover"></div>
              <h3>Barren Landscape</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl9" href="">
              <div className="hexcover"></div>
              <h3>Bucheon Market</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
        <div className="hex1">
          <div className="hex2">
            <a className="hexlink" id="hl10" href="">
              <div className="hexcover"></div>
              <h3>Buddhist Temple</h3>
              <div className="plus"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
