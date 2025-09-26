import { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    const savedContrast = localStorage.getItem("highContrast") === "true";
    setDarkMode(savedDark);
    setHighContrast(savedContrast);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("highContrast", highContrast);

    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("high-contrast", highContrast);
  }, [darkMode, highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{ darkMode, setDarkMode, highContrast, setHighContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
