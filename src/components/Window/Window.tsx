import React, { createRef, useState } from "react";
import TopBar from "./TopBar/TopBar";
import "./Window.css";

export interface WindowProps {
  onWindowClose: Function;
}

const BaseWindow: React.FC<WindowProps> = (props) => {
  const windowRef = createRef<HTMLDivElement>();
  const contentInputRef = createRef<HTMLDivElement>();

  const onWindowDrag = (evt: any) => {
    evt.target.style.display = "none";
    if (evt.clientX !== 0 || evt.clientY !== 0) {
      evt.target.style.left = `${evt.clientX}px`;
      evt.target.style.top = `${evt.clientY + 300}px`;
    } else {
      evt.target.style.display = "block";
    }
  };

  return (
    <div className="terminal" ref={windowRef} draggable onDrag={onWindowDrag}>
      <TopBar closeTerminal={props.onWindowClose} />
      <div ref={windowRef} />
      {React.cloneElement(props.children as React.ReactElement, { windowRef })}
    </div>
  );
};

export default BaseWindow;
