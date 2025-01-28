import React, { useMemo, useContext } from "react";
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@/Layouts/Theme";


const TextFieldTheme = ({
    size = '',
    className = '',
    id,
    disabled = false,
    value = '',
    hiddenLabel = false,
    multiline = false,
    rows = 0,
    label = '',
    onChange = (e) => e
}) => {

    const { theme } = useContext(ThemeContext);

    const darkTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: theme,
                    text: {
                        primary: theme === "dark" ? "#fff" : "#000",
                    },
                },
                components: {
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: {
                                "&.Mui-disabled": {
                                    borderColor: theme === "dark" ? "white" : "#ccc",
                                },
                            },
                        },
                    },
                },
            }),
        [theme]
    );

    return (
        <ThemeProvider theme={darkTheme}>
            <TextField
                size={size}
                hiddenLabel={hiddenLabel}
                label={label}
                className={className}
                disabled={disabled}
                id={id}
                value={value}
                multiline={multiline}
                rows={rows}
                onChange={e => onChange(e.target.value)}
            />
        </ThemeProvider>
    );
}

export default TextFieldTheme;