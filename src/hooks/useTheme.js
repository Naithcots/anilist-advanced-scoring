import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return { theme, switchTheme };
};

export default useTheme;
