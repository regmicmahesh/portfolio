import React, { createRef, useState } from "react";
import TopBar from "./TopBar/TopBar";
import "./Window.css";

export interface WindowProps {
  onWindowClose: Function;
}

const BaseWindow: React.FC<WindowProps> = (props) => {
  const windowRef = createRef<HTMLDivElement>();

  const onWindowDrag = (evt: any) => {
    if (evt.clientX !== 0 || evt.clientY !== 0) {
      windowRef.current!.style.left = `${evt.clientX}px`;
      windowRef.current!.style.top = `${evt.clientY + 300}px`;
    } else {
    }
  };

  return (
    <div className="terminal" ref={windowRef}>
      <TopBar dragger={onWindowDrag} closeTerminal={props.onWindowClose} />
      <div ref={windowRef} />
      {React.cloneElement(props.children as React.ReactElement, { windowRef })}
    </div>
  );
};

export default BaseWindow;
