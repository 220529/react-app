import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { fetchUserById } from "@/store/userSlice";
import Barrage from "@/components/barrage";
// import Marquee from "@/components/marquee";

const App: React.FC = () => {
  const { loading, userInfo } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <span>home</span>
      <div>
        <p>{loading ? "loading..." : ""}</p>
        <p>id: {userInfo.id}</p>
        <button aria-label="Increment value" onClick={() => dispatch(fetchUserById(123))}>
          异步
        </button>
      </div>
      <Barrage />
      {/* <Marquee /> */}
      {/* <Marquee>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Marquee> */}
    </div>
  );
};

export default App;
