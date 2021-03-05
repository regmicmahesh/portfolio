import React from "react";
import "./TopBar.css";

interface TopBarProps {
  closeTerminal: Function;
  dragger: any
}

const TopBar: React.FC<TopBarProps> = ({ closeTerminal, dragger }) => {
  return (
    <div className="item top-bar" draggable onDrag={dragger}>
      <div className="row">
        <div className="col-sm-1 item buttons">
          <div className="button-icons">
            <div className="icon red" onClick={() => closeTerminal()}></div>
            <div className="icon green"></div>
            <div className="icon yellow"></div>
          </div>
        </div>
        <div className="col-sm-11 titlebar">fish /home/regmicmahesh</div>
      </div>
    </div>
  );
};

export default TopBar;
