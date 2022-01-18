import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    /* Estilização Global */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: ${props => props.theme.colorTheme.backgroundColor};
        font-size: 1rem;
    }
`;