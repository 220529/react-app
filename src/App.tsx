import { useEffect } from "react";
import Xhr from "@/components/xhr";
import Test from "@/components/test";
import Error from "@/components/error";
import SetState from "@/components/setState";
import UseEffect from "@/components/use-effect";
// import CancelToken from "@/components/CancelToken";
// import VirtualizedList from "@/components/virtualized";
// import VirtualizedList from "@/components/virtualized-list";
import DumiApp from "@/components/dumi-app";
import Counter from "@/components/counter";
import Xss from "@/components/xss";

function App() {
  useEffect(() => {
    console.log("app..");
  }, []);
  return (
    <div className="App">
      {/* <Xhr /> */}
      {/* <Test /> */}
      {/* <Error /> */}
      {/* <SetState /> */}
      {/* <UseEffect /> */}
      {/* <CancelToken /> */}
      {/* <VirtualizedList /> */}
      {/* <DumiApp /> */}
      {/* <Counter /> */}
      <Xss />
    </div>
  );
}

export default App;
