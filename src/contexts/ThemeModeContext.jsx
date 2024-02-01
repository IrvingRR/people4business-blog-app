import { createContext, useState } from "react";

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {

    const storageMode = JSON.parse(localStorage.getItem('isDarkMode'));

    const [isDarkMode, setIsDarkMode] = useState(storageMode || false);

    const changeMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('isDarkMode', !isDarkMode);
    };

    return (
        <ThemeModeContext.Provider value={{ isDarkMode, changeMode }}>
            {children}
        </ThemeModeContext.Provider>
    );
};