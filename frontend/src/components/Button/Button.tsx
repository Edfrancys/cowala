import React from 'react';
import { Container } from './button.style';

export interface ButtonIt extends React.ComponentPropsWithoutRef<'button'>{
    children?: React.ReactNode,
    color: string,
    backgroundColor: string,
    className?: string,
    onClick?: () => void    
}

export const Button: React.FC<ButtonIt> = ({children, backgroundColor, color, className, onClick}) => {
    return (
        <Container onClick={onClick} className={className} backgroundColor={backgroundColor} color={color} >
            {children}
        </Container>
    );
};