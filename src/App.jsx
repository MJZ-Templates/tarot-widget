import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResultPage, InterpretationPage, SelectCardPage } from "./pages";
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
