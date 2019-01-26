import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledDiv = styled.div`
    background-image: url(${props => props.theme.url3});
    background-size: cover;
    background-repeat: no-repeat;
    color: ${props => props.theme.white};
`;

export const TopSection = styled.section`
    padding: 5rem;
    margin-left: 15rem;
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
        font-size: 2.5rem;
    }
`;

export const BottomSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    font-size: 6rem;
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
            font-size: 1.5rem;
            padding-top: 1rem;
        }
    }
`;
