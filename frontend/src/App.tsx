import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import primary from './styles/themes/primary';


function App() {
    return (
        <ThemeProvider theme={primary} >
            <GlobalStyle />
            
        </ThemeProvider>

    );
}

export default App;
