import { useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
