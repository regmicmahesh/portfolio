import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";

interface IWindow {
  windowId: number;
  windowElement: React.ReactNode;
}

function App() {
  const [windowId, setWindowId] = useState(0);
  const removeWindow = (id: number) => {
    setWindows(windows.filter((el) => el.windowId !== id));
  };
  const [windows, setWindows] = useState<IWindow[]>([
    {
      windowId: 0,
      windowElement: <Terminal key={0} onWindowClose={() => removeWindow(0)} />,
    },
  ]);

  const addWindow = () => {
    setWindowId(windowId + 1);
    setWindows([
      ...windows,
      {
        windowId: windowId,
        windowElement: <Terminal key={windowId} onWindowClose={() => removeWindow(0)} />,
      },
    ]);
  };

  return (
    <div className="App">
      <Navbar addTerminal={addWindow} />
      {windows.map((el) => el.windowElement)}
    </div>
  );
}

export default App;
