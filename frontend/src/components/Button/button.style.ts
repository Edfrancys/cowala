import styled from 'styled-components';
import { ButtonIt } from './Button';

export const Container = styled.button<ButtonIt>`
    font-size: 18px;
    height: 44px;
    padding: 0 37px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`;