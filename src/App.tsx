import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Work from "@/pages/work";
import Editor from "@/pages/editor/index";
import Template from "@/pages/Template";
import Login from "@/pages/login/index";
import ErrorBoundary from "@/components/error-boundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<Work />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/template" element={<Template />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
