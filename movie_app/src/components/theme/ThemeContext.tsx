import React, { useContext, useEffect, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = React.createContext(themes.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeChange = ({ children }: any) => {
  console.log(children)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") || "") : themes.light
  );
  const [position, setPosition] = useState(
    localStorage.getItem("position") ? JSON.parse(localStorage.getItem("position") || "") : themes.row
  );
  const [link, setLink] = useState(
    localStorage.getItem("link") ? JSON.parse(localStorage.getItem("link") || "") : themes.link
  );
  const [burger, setBurger] = useState(
    localStorage.getItem("burger") ? JSON.parse(localStorage.getItem("burger") || "") : "dark"
  );

  const toggleTheme = () => {
    setTheme(theme.type === "light" ? themes.dark : themes.light);
    setLink(theme.color === "white" ? themes.noLink : themes.link);
    setPosition(position.type === "column" ? themes.row : themes.column);
    setBurger(burger === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("position", JSON.stringify(position));
    localStorage.setItem("link", JSON.stringify(link));
    localStorage.setItem("burger", JSON.stringify(burger));
  }, [theme, theme, link, burger]);

  return (
    <ThemeContext.Provider
      value={{
        changeTheme: theme,
        changePosition: position,
        changeLink: link,
        changeBurger: burger,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
