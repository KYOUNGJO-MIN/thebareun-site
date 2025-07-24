import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PdfView from "./pages/PdfView.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/im" element={<PdfView />} />
      </Routes>
    </Router>
  );
}

export default App;

