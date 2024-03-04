import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
    }

    export const ThemeModeProvider = ({ children}) => {
        const [isLightTheme, setIsLightTheme] = useState(true);
    

    const toggleTheme = () => {
        setIsLightTheme((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
    };