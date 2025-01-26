import React, {useEffect, useState} from "react";
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider} from "@mui/material/styles";

const TextFieldTheme = ({ size = '', className = '', id, disabled = false, value = '', hiddenLabel = false, multiline = false, rows = 0 }) => {

    const [mode, setMode] = useState('light');

    const darkTheme = createTheme({
        palette: {
            mode: mode,
            text: {
                primary: mode === 'dark' ? '#fff' : '#000',
            },
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&.Mui-disabled': {
                            borderColor: mode === 'dark' ? 'white' : '#ccc',
                        },
                    },
                },
            },
        },
    });


    useEffect(() => {
        setMode(localStorage.getItem('theme'));
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <TextField
                size={size}
                hiddenLabel={hiddenLabel}
                className={className}
                disabled={disabled}
                id={id}
                value={value}
                multiline={multiline}
                rows={rows}
            />
        </ThemeProvider>
    );
}

export default TextFieldTheme;