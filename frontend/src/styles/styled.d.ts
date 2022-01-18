import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {    
        title: string,

        colorTheme: {
            primaryColor: string,
            backgroundColor: string,
            textColor: string
        }
    }
}