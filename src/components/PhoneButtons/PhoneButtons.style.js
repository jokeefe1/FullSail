import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
           display: none;
          
           background-color: ${({ theme }) => theme.darkGrey};
           font-size: 1.5rem;
           width: 100%;
           position: fixed;
           bottom: 0;
           ${({ theme }) => theme.tablet`
        display: flex;
    `}
           ${({ theme }) => theme.phone`
        display: flex;
    `}`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 25%;
    padding: 1.3rem;
    background-color: ${({ theme }) => theme.white};
    border-top: 3px solid ${({ theme }) => theme.yellow};
    border-bottom: 3px solid ${({ theme }) => theme.yellow};
    border-left: 3px solid ${({ theme }) => theme.yellow};
    text-decoration: none;
    color: ${({ theme }) => theme.darkGrey};
    text-transform: uppercase;

    &:nth-child(2) {
        border-right: 3px solid ${({ theme }) => theme.yellow};
    }
    &:last-child {
        width: 50%;
        border: none;
        text-align: center;
        background-color: ${({ theme }) => theme.darkGrey};
        color: ${({ theme }) => theme.white};
        & > span {
            color: ${({theme}) => theme.white};
        }
    }
    & > span {
        font-size: 2rem;
        color: ${({theme}) => theme.yellow};
    }
`;
