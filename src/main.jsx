import { createRoot } from "react-dom/client";
import App from "./App.jsx";

if (window.__POWERED_BY_WUJIE__) {
  let root = null;
  window.__WUJIE_MOUNT = () => {
    console.log("react mount");
    root = createRoot(document.getElementById("root"));
    root.render(<App />);
  };
  window.__WUJIE_UNMOUNT = () => {
    root.unmount();
  };
} else {
  createRoot(document.getElementById("root")).render(<App />);
}
