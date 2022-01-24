import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 121px;
    background-color: var(--primaryColor);

    display: flex;
    align-items: center;
    padding: 0 28px;

    & img.logo {
        height: 96px;
    }
    & img.logoSencondary {
        height: 63px;
        margin-left: 24px;
    }

    @media (max-width: 600px){
        & img.logo {
            height: 81px;
        }
        & img.logoSencondary {
            height: 48px;
            margin-left: 24px;
        }
    }
    
`;
