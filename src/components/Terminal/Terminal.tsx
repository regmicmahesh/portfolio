import React from "react";
import BaseWindow from "../Window/Window";
import TerminalContent from "./TerminalContent";

interface ITerminalProps {
  onWindowClose: Function;
}

const Terminal: React.FC<ITerminalProps> = (props) => {
  return (
    <BaseWindow onWindowClose={props.onWindowClose}>
      <TerminalContent windowRef={"WILL BE REPLACED BY BASE WINDOW"} />
    </BaseWindow>
  );
};

export default Terminal;
