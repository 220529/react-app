import { useEffect } from "react";
import Xhr from "@/components/xhr";
import Test from "@/components/test";
import Error from "@/components/error";
import SetState from "@/components/setState";
import UseEffect from "@/components/use-effect";
// import CancelToken from "@/components/CancelToken";
import VirtualizedApp from "@/components/virtualized";
import DumiApp from "@/components/dumi-app";
import Counter from "@/components/counter";
import Xss from "@/components/xss";
import Widget from "@/components/widget";
import Event from "@/components/Event";
import RandomTextComponent from "@/components/RandomTextComponent";
import ScrollThrottleComponent from "@/components/ScrollThrottleComponent";

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
      <VirtualizedApp />
      {/* <VirtualizedListReact /> */}
      {/* <DumiApp /> */}
      {/* <Counter /> */}
      {/* <Xss /> */}
      {/* <Widget /> */}
      {/* <Event /> */}
      {/* <RandomTextComponent /> */}
      {/* <ScrollThrottleComponent /> */}
    </div>
  );
}

export default App;
