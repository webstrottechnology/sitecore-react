import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
