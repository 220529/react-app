import React, { useState } from "react";
import SanitizedHTML from "./SanitizedHTML";

const App = () => {
  const [userInput, setUserInput] = useState("<img src=x onerror=alert(1)>");

  return (
    <div>
      <h1>Test DOMPurify in React</h1>
      <textarea rows="5" value={userInput} onChange={e => setUserInput(e.target.value)} />
      <SanitizedHTML htmlContent={userInput} />
    </div>
  );
};

export default App;
