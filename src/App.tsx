import React, { useEffect } from "react";
import CssModules from "@/components/css-modules";
import PxToVw from "@/components/PX-vw";
import PxNoToVw from "@/components/px-no-vw";
// import Prettier from "./components/Prettier";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* React App */}
      {/* <Prettier /> */}
      {/* <CssModules /> */}
      <PxToVw />
      <PxNoToVw />
    </div>
  );
}

export default App;
