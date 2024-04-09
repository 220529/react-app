import React, { useState, useEffect } from "react";
import { useCountdown } from "../hooks";

const App = () => {
  const { countdown, startCountdown } = useCountdown(5);
  return (
    <div>
      <p>{countdown}</p>
      <button onClick={startCountdown}>开始</button>
    </div>
  );
};

export default App;
