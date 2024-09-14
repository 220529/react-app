import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect...", this);
  }, []);

  useEffect(() => {
    console.log("effect...1", count);
    return () => {
      console.log("effect...2", count);
    };
  }, [count]);

  return (
    <div id="counter">
      <button onClick={handleIncrement}>{count}</button>
    </div>
  );
};

export default Counter;
