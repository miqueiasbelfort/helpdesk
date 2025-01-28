import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        const theme = localStorage.getItem("theme") || "light";
        document.documentElement.classList.toggle("dark", theme === "dark");
        setDarkMode(theme);
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme: darkMode,
                setTheme: setDarkMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}