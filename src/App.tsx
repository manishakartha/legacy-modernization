import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CodeGen from "./pages/CodeGen";
import SourcePage from "./pages/SourcePage";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import Transformations from "./pages/Transformations";
// import other pages here...

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/source" />} />
            <Route path="/source" element={<SourcePage />} />
            <Route path="/codegen" element={<CodeGen />} />
            <Route path="/technicalanalysis" element={<TechnicalAnalysis />} />
            <Route path="/transformations" element={<Transformations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
