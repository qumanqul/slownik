import { useState } from "react";
import { useAccessibility } from "../contexts/AccessibilityContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode, highContrast, setHighContrast } =
    useAccessibility();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://wbpg.org.pl/">
          <img src="/WMBP-lg-duze.jpg" alt="Logo" className="logo" />
        </a>
      </div>

      <div className="navbar-center">
        <a id="slownik" href="/">
          Słownik
        </a>
      </div>

      <div className="navbar-right">
        <a href="/writers">Pisarze</a>
        <div className="accessibility">
          <button onClick={() => setOpen(!open)}>Dostępność</button>
          {open && (
            <div className="accessibility-menu">
              <label>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                Tryb ciemny
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={() => setHighContrast(!highContrast)}
                />
                Wysoki kontrast
              </label>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
