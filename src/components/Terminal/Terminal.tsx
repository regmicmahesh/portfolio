import React, { createRef, useState } from "react";
import PastOutput, { PastOutputProps } from "./PastOutput";
import "./Terminal.css";
import TopBar from "./TopBar";

export interface TerminalProps {
  onTerminalClose: Function
}

const Terminal: React.FC<TerminalProps> = ({onTerminalClose}) => {
  const terminalRef = createRef<HTMLDivElement>();
  const terminalInputRef = createRef<HTMLInputElement>();

  const [terminalInput, setTerminalInput] = useState("");
  const [pastOutputs, setPastOutputs] = useState<PastOutputProps[]>([
    {
      terminalInput: "help",
      output: (
        <>
          <div>
            These are the commands defined yet. <br /> <br />
            <b> info </b>
            <br />
            &nbsp; &nbsp; This command will let you view the short info about
            myself. <br /> <br />
            <b> github</b>
            <br />
            &nbsp; &nbsp; This commands will give you my github profile.
          </div>
        </>
      ),
    },
  ]);

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    switch (terminalInput) {
      case "clear":
        setPastOutputs([]);
        break;
      default:
        setPastOutputs([
          ...pastOutputs,
          { output: <>Unknown Command</>, terminalInput: terminalInput },
        ]);
        break;
    }

    setTerminalInput("");
  };

  const terminalInputChange = (e: any) => {
    setTerminalInput(e.target.value);
  };

  const onTerminalFocus = () => {
    terminalInputRef.current?.focus();
  };

  const onTerminalDrag = (evt: any) => {
    evt.target.style.display = "none";
    if (evt.clientX !== 0 || evt.clientY !== 0) {
      evt.target.style.left = `${evt.clientX}px`;
      evt.target.style.top = `${evt.clientY + 300}px`;
    } else {
      evt.target.style.display = "block";
    }
  };

  const onTerminalInputFocus = (evt: any) => {

    terminalRef.current!.style.backgroundColor = "black";
    terminalRef.current!.style.zIndex = "999";

  }

  const onTerminalInputBlur = (evt: any) => {

    terminalRef.current!.style.backgroundColor = "rgba(0,0,0,0.5)"
    terminalRef.current!.style.zIndex = "0";

  }

  return (
    <div
      className="terminal"
      ref={terminalRef}
      onClick={onTerminalFocus}
      draggable
      onDrag={onTerminalDrag}
    >
      <TopBar closeTerminal={onTerminalClose} />
      <div className="terminal-content">
        <input
          type="text"
          className="hidden-input"
          value={terminalInput}
          ref={terminalInputRef}
          onKeyPress={onKeyPressHandler}
          onChange={terminalInputChange}
          onFocus={onTerminalInputFocus}
          onBlur={onTerminalInputBlur}
        />
        {/* render old here */}
        {pastOutputs.map((el) => (
          <PastOutput {...el} />
        ))}
        <div className="terminal-segment row active">
          <div className="left-text col-sm-3 bold text-green">
            regmicmahesh@archlinux
          </div>

          <div className="right-box col-sm-9">
            <div className="input-box">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {terminalInput} █
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
