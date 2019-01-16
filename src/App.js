import React from 'react';

import GlobalStyle from './App.GlobalStyle'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Navigation />
        </>
    );
}

export default App;
