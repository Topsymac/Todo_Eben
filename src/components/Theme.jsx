// import { ThemeContext } from "./context/ThemeContext";

let theme;
export const setTheme = (e) => {
  localStorage.setItem("theme", e);
  theme = localStorage.getItem("theme");
};

theme = localStorage.getItem("theme");

export default theme;
