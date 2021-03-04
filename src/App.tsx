import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";

interface ITerminal {
  terminalId: number;
  terminalElement: React.ReactNode;
}

function App() {
  const [tId, setTId] = useState(0);
  const removeTerminal = (id: number) => {
    setTerminals(terminals.filter((el) => el.terminalId !== id));
  };
  const [terminals, setTerminals] = useState<ITerminal[]>([
    {
      terminalId: 0,
      terminalElement: <Terminal onTerminalClose={() => removeTerminal(0)} />,
    },
  ]);

  const addTerminal = () => {
    setTId(tId + 1);
    setTerminals([
      ...terminals,
      {
        terminalId: tId,
        terminalElement: <Terminal onTerminalClose={() => removeTerminal(0)} />,
      },
    ]);
  };

  return (
    <div className="App">
      <Navbar addTerminal={addTerminal} />
      {terminals.map((el) => el.terminalElement)}
    </div>
  );
}

export default App;
