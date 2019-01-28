import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    background-image: url(${props => props.theme.url3});
    background-size: cover;
    background-repeat: no-repeat;
    color: ${props => props.theme.white};
    padding: 3rem 0;
`;

export const TopSection = styled.section`
           width: 70%;
           padding-left: 3rem;
           margin-left: 15rem;
           margin-bottom: 4rem;
           border-left: solid 3px ${props => props.theme.white};
           & > h1 {
               font-size: 6rem;
               padding-bottom: 2rem;
           }
           & > p {
               font-size: 1.5rem;
               width: 50%;
               padding-bottom: 2rem;
           }
           & > p:last-child {
               color: ${props => props.theme.yellow};
           }
           ${({ theme }) => theme.tabletLarge`
            margin-left: 5rem
            & > h1 {
                font-size: 4rem;
            }
            `}
           ${({ theme }) => theme.tablet`
            margin-left: 5rem
            & > h1 {
                font-size: 4rem;
            }
            `}
           ${({ theme }) => theme.phone`
            margin-left: 5rem
            & > h1 {
                font-size: 4rem;
            }
            `}
    
    `;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.yellow};
    text-transform: uppercase;
    text-decoration: none;
    padding-right: 1.5rem;
    &:hover {
        text-decoration: underline;
    }
`;

export const MiddleSection = styled.section`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    & > h2 {
        font-size: 2rem;
    }
    ${({ theme }) => theme.tablet`
        display: none;
    `}
`;

export const BottomSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    font-size: 4rem;
    padding-bottom: 5rem;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
            color: ${props => props.theme.yellow};
        }
        & > p {
            font-size: 1.3rem;
            padding-top: 1rem;
        }
    }
    ${({ theme }) => theme.tablet`
                display: none;
    `}
`;
