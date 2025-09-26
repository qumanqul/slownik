import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./pages/Main.jsx";
import Writers from "./pages/Writers.jsx";
import WriterDetail from "./pages/WriterDetail.jsx";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";

function App() {
  return (
    <AccessibilityProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/writers/:id" element={<WriterDetail />} />
        <Route path="*" element={<h2>404 — Nie znaleziono strony</h2>} />
      </Routes>
    </AccessibilityProvider>
  );
}

export default App;
