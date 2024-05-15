import React, { useEffect } from "react";
import { sa } from "@ns-library/monitor";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    sa.beforeUpload = () => {
      console.log("beforeUpload...");
    };
    sa.afterUpload = () => {
      console.log("afterUpload...");
    };
    sa.platTrack("click", { pid: "iiii", aid: "发来的；fks" });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
