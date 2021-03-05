import React from "react";

export interface PastOutputProps {
  terminalInput: string;
  output: React.ReactNode | string;
}

const PastOutput: React.FC<PastOutputProps> = ({ terminalInput, output }) => {
  return (
    <div className="terminal-segment row active">
      <div className="left-text col-sm-3 bold text-green">
        regmicmahesh@archlinux
      </div>

      <div className="right-box col-sm-9">
        <div className="input-box">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; {terminalInput}
        </div>
        <div className="output-box">{output}</div>
      </div>
    </div>
  );
};

export default PastOutput;
