import React, { useState, useEffect } from "react";
import { print } from "@ns-widget/sa";

const App = () => {
  useEffect(() => {
    console.log("print", print);
  }, []);
  return (
    <div>
      <button onClick={print}>print</button>
    </div>
  );
};

export default App;
