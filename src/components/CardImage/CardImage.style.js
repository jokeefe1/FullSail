import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: ${({theme}) => theme.white};
    & > div:nth-child(1) {
        bottom: 0px;
        height: 25rem;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    & > div > h3 {
        background-color: ${({ theme }) => theme.yellow};
        padding: 1.5rem 3rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.white};
        position: absolute;
        bottom: 0;
    }
    & > div > p {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${({ theme }) => theme.darkWhite};
        color: ${({ theme }) => theme.lightGrey};
        padding: 2rem;
        font-size: 2rem;
        height: 10rem;
        border-left: 0.1rem solid ${({ theme }) => theme.grey};
        border-bottom: 0.1rem solid ${({ theme }) => theme.grey};

        & > span {
            color: ${({ theme }) => theme.yellow};
            font-size: 5rem;
            padding-right: 1rem;
            text-decoration: none;
        }
    }
`;
