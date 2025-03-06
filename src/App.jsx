import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectCardPage from "./pages/SelectCardPage";
import InterpretationPage from "./pages/InterpretationPage";
import ResultPage from "./pages/ResultPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectCardPage />} />
        <Route path="/interpretation" element={<InterpretationPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
