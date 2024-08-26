import React from "react";
// import ChildComponent from "./ChildComponent";
// import FunctionalDemo from "./FunctionalDemo";
import ClassDemo from "./ClassDemo";

function ParentComponent() {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      {/* <ChildComponent /> */}
      {/* <FunctionalDemo /> */}
      <ClassDemo />
    </div>
  );
}

export default ParentComponent;
