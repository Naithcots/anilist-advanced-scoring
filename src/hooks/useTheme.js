import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  const setLocalTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      const themeStr = JSON.parse(getTheme);
      setTheme(themeStr);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setLocalTheme(prefersDark ? "dark" : "light");
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setLocalTheme("dark");
    } else {
      setTheme("light");
      setLocalTheme("light");
    }
  };
  return { theme, switchTheme };
};

export default useTheme;
