import React from "react";
import { v4 as uuid } from "uuid";
import commands from "./commands.json";
import "./TerminalOutputGenerator.css";
import psAuxTable from "./outputElements/ps";
import minfo from "./outputElements/minfo";
import neofetch from "./outputElements/neofetch";

const getTerminalOutput = (input: string) => {
  const command = commands.find((el) => input.startsWith(el.input));
  if (command) {
    const { output } = command;
    return (
      <div>
        {output.map((el) => {
          return <div key={uuid()}>{el}</div>;
        })}
      </div>
    );
  }

  if(input.startsWith("ps")){
      return <div>
          {psAuxTable}
      </div>
  }

  if(input.startsWith("minfo")){
      return <div>
            {minfo}
      </div>
  }
  console.log(input);
  if(input.startsWith("neo")){
      return <div>
          {neofetch}
      </div>
  }

  return <div>Command Not Found</div>;
};

export default getTerminalOutput;
