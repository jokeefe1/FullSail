import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './App.GlobalStyle';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';

const theme = {
    white: '#fff',
    yellow: '#fdb913',
    grey: '#d6d6d6',
    darkGrey: '#505050'
}

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" component={Header} exact />
                    <Route path="/request-info" component={Header} exact />
                    <Route path="/chat-live" component={Header} exact />
                    <Route path="/Apply" component={Header} exact />
                    <Route component={NotFound} />
                </Switch>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        <Navigation />
                    </>
                </ThemeProvider>
            </>
        </BrowserRouter>
    );
}

export default App;
