import React, {useEffect, useState} from "react";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const SwitchThemeModa = () => {

    const [darkMode, setDarkModa] = useState('');

    const handleChangeTheme = () => {
        if(darkMode == 'dark'){
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
            setDarkModa('light');
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkModa('dark');
        }
    };

    useEffect(() => {
        setDarkModa(localStorage.getItem("theme"));
        if(localStorage.getItem("theme") == 'dark'){
            setDarkModa('dark');
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <button onClick={handleChangeTheme}>
            {darkMode == 'light' ? (
                <NightlightIcon />
            ) : (
                <WbSunnyIcon />
            )}
        </button>
    );
};