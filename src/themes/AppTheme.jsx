import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './darkTheme';
import { purpleTheme } from './purpleTheme';



export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ darkTheme } >

            <CssBaseline />

            { children }

        </ThemeProvider>
    );
}
