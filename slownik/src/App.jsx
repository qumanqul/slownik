import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./pages/Main.jsx";
import Writers from "./pages/Writers.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import WriterDetail from "./pages/WriterDetail.jsx";
import { AccessibilityProvider } from "./contexts/AccessibilityContext.jsx";

function App() {
  return (
    <>
      <AccessibilityProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>404 — Nie znaleziono strony</h2>} />
          <Route path="/writers/:id" element={<WriterDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AccessibilityProvider>
    </>
  );
}

export default App;
