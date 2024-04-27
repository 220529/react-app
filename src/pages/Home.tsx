import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
// import { fetchUserById } from "@/store/userSlice";

const App: React.FC = () => {
  const { loading, userInfo } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <span>home</span>
      <div>
        <p>{loading ? "loading..." : ""}</p>
        <p>id: {userInfo.id}</p>
        {/* <button aria-label="Increment value" onClick={() => dispatch(fetchUserById(123))}>
          异步
        </button> */}
      </div>
    </div>
  );
};

export default App;
