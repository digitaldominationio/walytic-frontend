// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(() => {
//     if (localStorage.getItem("theme")) {
//       return localStorage.getItem("theme");
//     }
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }
