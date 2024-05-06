import React from "react";
import Header from "@/components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <span>home</span>
    </div>
  );
};

export default React.memo(App);
