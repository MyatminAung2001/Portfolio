import { createContext, useState, useEffect } from "react";

const themes = {
    light: {
        backgroundColor: "#ffffff",
        color: "#222222",
        tagsBgColor: "#E2EFEF",
    },
    dark: {
        backgroundColor: "#222222",
        color: "#ffffff",
        tagsBgColor: "#2f313a",
    },
};

export const ThemeContext = createContext(themes);

export const ThemeContextProvider = ({ children }) => {

    const [isLight, setIsLight] = useState(false);

    const toggleTheme = () => {
        localStorage.setItem("lightMode", JSON.stringify(!isLight));
        setIsLight(!isLight);
    };

    const theme = isLight ? themes.light : themes.dark;

    useEffect(() => {
        const isLight = localStorage.getItem("lightMode") === "true";
        setIsLight(isLight);
    }, []);

    return (
        <ThemeContext.Provider value={[{ theme, isLight }, toggleTheme]}>
            { children }
        </ThemeContext.Provider>
    )
};