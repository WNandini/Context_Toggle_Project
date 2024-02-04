import React, { useState } from 'react';
import { createContext } from 'react';
import ToggleSwitch from './switch';

export const ToggleContext = createContext('');

const ToggleMain = () => {
    const [theme, setTheme] = useState("black");
    const [fontColor, setFontColor] = useState("white");

    const darkTheme = () => {
        setTheme("black");
        setFontColor("white")
    };
    const lightTheme = () => {
        setTheme("white");
        setFontColor("Black")
    };

    return (
        <ToggleContext.Provider value={{theme, fontColor, darkTheme, lightTheme}}>
            <ToggleSwitch/>
        </ToggleContext.Provider>
    )
}

export default ToggleMain;