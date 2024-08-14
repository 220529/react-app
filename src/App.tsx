import React, { useState } from "react";
import logo from "./logo.svg";
import Time from "./components/time";
import Uuid from "./components/uuid";
import Sa from "./components/sa";
import Count from "./components/Count";

// import ClickCounter from './components-hooks/ClickCounter'
// import LifeCycles from './components-hooks/LifeCycles'
// import FriendStatus from "./components-hooks/FriendStatus";
// import UseRefDemo from './components-hooks/UseRefDemo'
// import UseContextDemo from './components-hooks/UseContextDemo'
// import UseReducerDemo from './components-hooks/UseReducerDemo'
// import UseMemoDemo from './components-hooks/UseMemoDemo'
// import UseCallbackDemo from './components-hooks/UseCallbackDemo'
// import CustomHookUsage from './components-hooks/CustomHookUsage'
// import Teach from './components-hooks/Teach'
// import UseStateTrap from './components-hooks/UseStateTrap'
// import UseEffectChangeState from './components-hooks/UseEffectChangeState'
// import SCUDemo2 from './components-hooks/SCUDemo2'
// import EventDemo from './components-hooks/EventDemo'
import ErrorComponent from './components-hooks/ErrorComponent'

function App() {
  const [flag, setFlag] = useState(true);
  const [id, setId] = useState(1);
  return (
    <div className="App">
      {/* <Time /> */}
      {/* <Uuid /> */}
      {/* <Sa /> */}
      {/* <Count /> */}

      {/* <div>
        <button onClick={() => setFlag(false)}>flag = false</button>
        <button onClick={() => setId(id + 1)}>id++</button>
      </div> */}

      <hr></hr>
      {/* <ClickCounter/> */}
      {/* {flag && <LifeCycles/>} */}
      {/* {flag && <FriendStatus friendId={id} />} */}
      {/* <UseRefDemo/> */}
      {/* <UseContextDemo/> */}
      {/* <UseReducerDemo/> */}
      {/* <UseMemoDemo/> */}
      {/* <UseCallbackDemo/> */}
      {/* {flag && <CustomHookUsage/>} */}
      {/* <Teach couseName="《前端框架》"/> */}
      {/* <UseStateTrap/> */}
      {/* <UseEffectChangeState/> */}
      {/* <SCUDemo2 /> */}
      {/* <EventDemo /> */}
      {/* <CustomHookUsage /> */}
      <ErrorComponent />
    </div>
  );
}

export default App;
