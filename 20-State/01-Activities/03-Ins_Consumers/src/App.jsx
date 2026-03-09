import { useEffect } from "react";
import "./App.css";
import ThemePanel from "./components/ThemePanel";
import ThemeProvider from "./utils/ThemeContext";

export default function App() {
  useEffect(() => {
    document.title = "Unit 20: Theme Consumers";
  }, []);

  return (
    <ThemeProvider>
      <ThemePanel />
    </ThemeProvider>
  );
}
