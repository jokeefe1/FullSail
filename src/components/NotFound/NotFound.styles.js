import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background-color: ${({ theme }) => theme.darkWhite};
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        padding: 5rem;
        margin-top: 5rem;
        background-color: ${({ theme }) => theme.white};
        & > h1 {
            font-weight: 700;
            padding: 5rem 0 3rem;
            color: ${({ theme }) => theme.darkGrey};
        }
        & > h2 {
            text-align: center;
            padding-bottom: 2rem;
            color: ${({ theme }) => theme.darkGrey};
        }
        & > p {
            text-align: center;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.red};
            padding-bottom: 3rem;
        }
    }
`;

export const StyledButton = styled.button`
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.darkWhite};
    border: 3px solid ${({ theme }) => theme.grey};
    & > * {
        text-decoration: none;
        color: ${({ theme }) => theme.red};
    }
    &:hover {
        background-color: ${({ theme }) => theme.red};
        border: 3px solid ${({ theme }) => theme.grey};
        & > * {
            text-decoration: none;
            color: ${({ theme }) => theme.white};
        }
    }
`;
