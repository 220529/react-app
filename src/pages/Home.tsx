import React, { useEffect } from "react";
import { useUserStore } from "@/hooks/store";
import { fetchUserInfo } from "@/store/userSlice";
import Header from "@/components/header";

const App: React.FC = () => {
  const { dispatch, user } = useUserStore();
  useEffect(() => {
    if (user.access_token) {
      dispatch(fetchUserInfo());
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <span>home</span>
    </div>
  );
};

export default App;
