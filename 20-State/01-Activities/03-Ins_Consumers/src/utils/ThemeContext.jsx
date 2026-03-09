import { createContext, useContext, useState } from "react";

// Create a context for our shared theme data.
export const ThemeContext = createContext();

// Custom hook for easier access to theme values.
export const useTheme = () => useContext(ThemeContext);

// Provider component that stores and shares theme state.
export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  // Toggle between dark mode and light mode.
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
