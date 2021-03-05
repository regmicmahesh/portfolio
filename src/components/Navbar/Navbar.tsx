import React, { useState } from "react";

//logo imports
import archLogo from "./assets/archlogo.png";
import terminalLogo from "./assets/terminal.png";
import wifiLogo from "./assets/wifilogo.png";
import speakerLogo from "./assets/speakerlogo.png";
import profileLogo from "./assets/profilelogo.png";


//widgets import
import Wifi from "./widgets/Wifi/Wifi";

export interface NavbarProps{
  addTerminal: Function
}
const Navbar: React.FC<NavbarProps> = ({addTerminal}) => {
  const [wifiShown, setWifiShown] = useState(false);
  return (
    <section id="topNav">
      <div className="row">
        <div className="col-sm-11 icon-tab left-icons">
          <img
            id="navicon"
            src={archLogo}
          />
          <img
            id="navicon"
            src={terminalLogo}
            onClick={() => addTerminal()}
          />
        </div>
        <div className="col-sm-1 icon-tab right-icons">
          <img
            id="navicon"
            className="filter-invert"
            src={wifiLogo}
            alt=""
            onClick={() => setWifiShown(!wifiShown)}
          />
          {wifiShown && <Wifi hide={() => setWifiShown(false)}  />}
          <img
            id="navicon"
            className="filter-invert"
            src={speakerLogo}
            alt=""
          />
          <img
            id="navicon"
            className="filter-invert"
            src={profileLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
