import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {    
        title: string,

        colorTheme: {
            primaryColor: string,
            secondaryColor: string,
            backgroundColor: string,
            backgroundSecondaryColor: string,
            boxShadow: string,
            textColor: string
        }
    }
}