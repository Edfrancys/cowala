import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* Estilização Global */
    :root {
        --primaryColor: #0A1633;
        --secondaryColor: #00D9D0;
        --backgroundColor: #f6f6f6;
        --backgroundSecondaryColor: #EDEDED;
        --boxShadow: 0px 4px 4px 0px rgba(0; 0, 0, 0,25),
        --textColor: #000000;
        --textButonPrimary: #fff;
        --textButonSecondary: #000;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, sans-serif;
        background: ${props => props.theme.colorTheme.backgroundColor};
        font-size: 1rem;
    }
`;