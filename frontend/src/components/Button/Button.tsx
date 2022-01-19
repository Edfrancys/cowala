import React from 'react';
import { Container } from './button.style';

export interface ButtonIt {
    children: React.ReactNode,
    color: string,
    backgroundColor: string,
    className?: string
}

export const Button: React.FC<ButtonIt> = ({children, backgroundColor, color, className}) => {
    return (
        <Container className={className} backgroundColor={backgroundColor} color={color} >
            {children}
        </Container>
    );
};