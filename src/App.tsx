import { useState, useEffect } from "react";
import OldLifecycleComponent from "./components/OldLifecycleComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect...");
  }, []);
  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          react-19 count is {count}
        </button>
        <OldLifecycleComponent />
      </div>
    </div>
  );
}

export default App;
