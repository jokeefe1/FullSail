import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './App.GlobalStyle';
import HomePage from './components/HomePage/HomePage';
import AppRouter from './router/AppRouter';
import media from './media'


const theme = {
    white: '#fff',
    darkWhite: '#f1f1f0',
    yellow: '#fdb913',
    orange: '##cc4b00',
    red: '#cc4b00',
    grey: '#d6d6d6',
    lightGrey: '#626262',
    darkGrey: '#505050',
    darkestGrey: '#454545',
    ...media,
    url1:
        'https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_01.jpg',
    url2:
        'https://res.cloudinary.com/john-okeefe/image/upload/v1547931617/fullsail/slide_02.jpg',
    url3:
        'https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_03.jpg'
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
