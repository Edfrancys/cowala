import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import primary from '../../styles/themes/primary';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

export default function App():JSX.Element {
    return (
        <ThemeProvider theme={primary} >
            <GlobalStyle />
            <Header />
            <Main />
            
        </ThemeProvider>

    );
}

