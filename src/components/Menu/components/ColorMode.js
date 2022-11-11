import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("Configure me first!");
  },
  toggleMode: () => {
    alert("Configure me first!");
  },
});

export function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

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
