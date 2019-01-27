import styled from 'styled-components';

export const StyledDiv = styled.div`
    & > div {
        bottom: 0px;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    & > div > h3 {
        background-color: ${({ theme }) => theme.yellow};
        padding: 1.5rem 3rem;
        text-transform: uppercase;
        color: ${({theme}) => theme.white};
        position: absolute;
        bottom: 0;

    }
    & > p {
        background-color: ${({ theme }) => theme.grey};
        color: ${({theme}) => theme.lightGrey};
        padding: 2rem;
        font-size: 2rem;
        height: auto;
    }
`;
