import styled from 'styled-components';

interface RowProps {
    justifyContent: string
}

export const Section = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: var(--backgroundSecondaryColor);
    width: 80vw;
    margin-top: 69px;
    padding: 59px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width: 541px;
`;

export const Group = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    //margin-bottom: 20px;

    label {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;        

        margin-bottom: 5px;
    }
    input {
        font-size: 18px;

        width: 100%;
        height: 44px;
        padding: 0 14px;

        border: none;

        display: flex;
        justify-content: center;
    }

    input:disabled {
        cursor: not-allowed;
        background-color: var(--backgroundColor);
    }
`;

export const Row = styled.div<RowProps>`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: ${props => props.justifyContent};

    margin-top: 20px;
    gap: 30px;

    .ip {
        width: 58%;
    }

    button.ip {
        width: 42%;
    }
`;