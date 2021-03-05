import React, { createRef, useEffect, useState } from "react";
import PastOutput, { PastOutputProps } from "./PastOutput";
import { v4 as uuid } from "uuid";
import getTerminalOutput from "./TerminalOutputGenerator";
interface TerminalContentProps {
  windowRef: any;
}

const TerminalContent: React.FC<TerminalContentProps> = ({ windowRef }) => {
  const inputRef = createRef<HTMLInputElement>();
  const contentRef = createRef<HTMLDivElement>();
  const [terminalInput, setTerminalInput] = useState("");
  const [pastOutputs, setPastOutputs] = useState<PastOutputProps[]>([
    { terminalInput: "neofetch", output: getTerminalOutput("neofetch") },
  ]);

  useEffect(() => {
    contentRef.current!.scrollTop = contentRef.current!.scrollHeight;
  }, [pastOutputs]);

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (terminalInput == "clear") {
      setPastOutputs([]);
    } else {
      const output = getTerminalOutput(terminalInput);
      setPastOutputs([...pastOutputs, { terminalInput, output }]);
    }

    setTerminalInput("");
  };

  const onWindowFocus = () => {
    inputRef.current?.focus();
  };

  const terminalInputChange = (e: any) => {
    setTerminalInput(e.target.value);
  };

  const onTerminalInputFocus = (evt: any) => {
    windowRef.current!.style.backgroundColor = "black";
    windowRef.current!.style.zIndex = "999";
  };

  const onTerminalInputBlur = (evt: any) => {
    windowRef.current!.style.backgroundColor = "rgba(0,0,0,0.5)";
    windowRef.current!.style.zIndex = "0";
  };

  return (
    <div className="window-content" ref={contentRef} onClick={onWindowFocus}>
      <input
        type="text"
        className="hidden-input"
        value={terminalInput}
        ref={inputRef}
        onKeyPress={onKeyPressHandler}
        onChange={terminalInputChange}
        onFocus={onTerminalInputFocus}
        onBlur={onTerminalInputBlur}
      />
      {/* render old here */}
      {pastOutputs.map((el) => (
        <PastOutput key={uuid()} {...el} />
      ))}
      <div className="terminal-segment row active">
        <div className="left-text col-sm-3 bold text-green">
          regmicmahesh@archlinux
        </div>

        <div className="right-box col-sm-9">
          <div className="input-box">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {terminalInput} █
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalContent;
