import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from './router/AppRouter';
import GlobalStyle from './App.GlobalStyle';
import Navigation from './components/Navigation/Navigation';

const theme = {
    white: '#fff',
    yellow: '#fdb913',
    grey: '#d6d6d6',
    darkGrey: '#505050'
};

function App() {
    return (
        <AppRouter>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Navigation />
                </>
            </ThemeProvider>
        </AppRouter>
    );
}

export default App;
