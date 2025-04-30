import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home";
import Api from "@/components/api";
import Wujie from "@/pages/wujie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/wujie" element={<Wujie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
