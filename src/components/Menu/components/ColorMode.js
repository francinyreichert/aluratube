import React, { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {},
  toggleMode: () => {},
});

export function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
      }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
