import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
