import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";
import { v4 as uuid } from "uuid";

interface IWindow {
  windowId: string;
  windowElement: React.ReactNode;
}

function App() {
  const removeWindow = (id: string) => {
    setWindows(windows.filter((el) => el.windowId !== id));
  };

  const defaultUuid = uuid()
  const [windows, setWindows] = useState<IWindow[]>([
    {
      windowId: defaultUuid,
      windowElement: <Terminal key={0} onWindowClose={() => removeWindow(defaultUuid)} />,
    },
  ]);

  const addWindow = () => {
    const newUuid = uuid();
    setWindows([
      ...windows,
      {
        windowId: newUuid,
        windowElement: (
          <Terminal key={newUuid} onWindowClose={() => removeWindow(newUuid)} />
        ),
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
