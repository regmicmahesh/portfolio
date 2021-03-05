import React from "react";

import wifiLogo from "../../assets/wifilogo.png";

import "./Wifi.css";

interface WifiProps {
  hide: Function;
}

const Wifi: React.FC<WifiProps> = ({ hide }) => {
  return (
    <div>
      <div className="wifi-content" onMouseLeave={() => hide()}>
        <h4 className="topic">Ethernet Network (Realtek Adapter)</h4>
        <div className="muted-text">Disconnected.</div>
        <h4 className="topic">Wifi Networks</h4>
        <div className="row">
          <div className="col-sm-6">regmicmahesh_network</div>
          <div className="col-sm-6 right-flex">
            <img src={wifiLogo} className="filter-invert" id="navicon" alt="" />
          </div>
        </div>
        <button className="dc-button">disconnect</button>
      </div>
    </div>
  );
};

export default Wifi;
