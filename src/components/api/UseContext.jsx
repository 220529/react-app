import React, { useState, useContext } from "react";

function color() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
}

// 创建 Context
const ThemeContext = React.createContext({}); // 初始值

function ThemeContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }}>
      useContext
    </button>
  );
}

function ThemeButton() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setTheme({
          color: color(),
          background: color(),
        })
      }
    >
      button
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeContent></ThemeContent>
      <ThemeButton></ThemeButton>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState({
    color: color(),
    background: color(),
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

export default App;
