import React from "react";
import "./LNB.css";

const LNB = () => {
  return (
    <div id="lnb">
      <img
        src={process.env.PUBLIC_URL + "/logo192.png"}
        alt="copy url"
        style={{ height: 20, width: 20 }}
      />
      <ul>
        <li>
          <a href="#none">1Depth</a>
          <ul>
            <li>
              <a href="#none">- 2Depth</a>
              <ul>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
              <ul>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#none">1Depth</a>
          <ul>
            <li>
              <a href="#none">- 2Depth</a>
              <ul>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
              <ul>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
                <li>
                  <a href="#none">- 3Depth</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none">1Depth</a>
          <ul>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none">1Depth</a>
          <ul>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
            <li>
              <a href="#none">- 2Depth</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LNB;
