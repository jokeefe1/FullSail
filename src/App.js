import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import GlobalStyle from './App.GlobalStyle';
import HomePage from './components/HomePage/HomePage';

const theme = {
    white: '#fff',
    yellow: '#fdb913',
    orange: '##cc4b00',
    red: '#cc4b00',
    grey: '#d6d6d6',
    darkGrey: '#505050'
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <AppRouter>
                    <HomePage />
                </AppRouter>
            </>
        </ThemeProvider>
    );
}

export default App;
