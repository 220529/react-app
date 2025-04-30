import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const handler = () => {
    // navigate("/wujie");
    window.$wujie?.bus.$emit("routeChange", "/test");
  };
  return (
    <div>
      <span>首页</span>
      <button onClick={handler}>跳转到关于页</button>
    </div>
  );
}

export default Home;
