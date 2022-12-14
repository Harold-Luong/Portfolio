import React from "react";
import "../style/hex-infor.scss";
const HexInfor = () => {
  return (
    <>
      <div class="wrap">
        <div class="clip-block">
          <div class="clip-each clip-solid">
            <div class="social-share-block">
              <span class="social-each">
                <strong>10</strong>
              </span>
              <span>&hearts;</span>
            </div>
          </div>
        </div>
        {/* <!-- /clip-block --> */}

        <div class="clip-block">
          <a href="#" class="clip-each clip-gradient">
            <div class="clip-caption">work</div>
          </a>
          <a href="#" class="clip-each clip-border">
            <div class="clip-caption">life</div>
          </a>
        </div>

        {/* <!-- /clip-block --> */}

        {/* <div class="clip-block">
          <a href="#" class="clip-each clip-border">
            <div class="clip-caption">life</div>
          </a>
        </div> */}

        {/* <!-- /clip-block --> */}
        <svg class="clip-svg">
          <defs>
            <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
              <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
            </clipPath>
          </defs>
        </svg>

        <svg class="clip-svg">
          <defs>
            <clipPath id="triangle-clip" clipPathUnits="objectBoundingBox">
              <polygon points="1 0.03, 0.17 1, 1 1" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default HexInfor;
