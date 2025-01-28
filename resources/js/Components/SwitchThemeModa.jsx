import React, { useContext } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { ThemeContext } from "@/Layouts/Theme";

export const SwitchThemeModa = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  return (
    <button onClick={handleChangeTheme} aria-label="Switch Theme">
      {theme === "light" ? <NightlightIcon /> : <WbSunnyIcon />}
    </button>
  );
};