import { useEffect } from "react";
import Xhr from "@/components/xhr";
import Test from "@/components/test";
import Error from "@/components/error";
import SetState from "@/components/setState";
import UseEffect from "@/components/use-effect";
// import CancelToken from "@/components/CancelToken";
import VirtualizedList from "@/components/virtualized";
import VirtualizedList2 from "@/components/virtualized2";
import VirtualizedList3 from "@/components/virtualized3";
import VirtualizedList4 from "@/components/virtualList4";
// import VirtualizedList from "@/components/virtualized-list";
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
      <VirtualizedList />
      {/* <VirtualizedList2 /> */}
      {/* <VirtualizedList3 /> */}
      {/* <VirtualizedList4 /> */}
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
