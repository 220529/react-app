import { createRoot } from "react-dom/client";
import App from "./App.jsx";

let root = null;
if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    root = createRoot(document.getElementById("root"));
    root.render(<App />);
  };
  window.__WUJIE_UNMOUNT = () => {
    root.unmount();
  };
} else {
  root = createRoot(document.getElementById("root"));
  root.render(<App />);
}
