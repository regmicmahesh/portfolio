import React from "react";

import wifiLogo from "../../assets/speakerlogo.png";
import "./Volume.css";

interface WifiProps {
  hide: Function;
}

const Volume: React.FC<WifiProps> = ({ hide }) => {
  return (
    <div>
      <div className="wifi-content volume" onMouseLeave={() => hide()}>
          <input type="range" />
      </div>
    </div>
  );
};

export default Volume;
