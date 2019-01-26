import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.darkGrey};
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ImgDiv = styled.div`
    display: block;
    & > img {
        width: 22rem;
        padding: 4rem 0 3rem;
    }
`;

export const FirstDiv = styled.div`
    font-size: 2rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.white};
`;

export const AllDiv = styled.div`
    display: flex;
    color: ${props => props.theme.white};
    font-size: 1.5rem;
    line-height: 1.5;
    padding-bottom: 2rem;
    & > div:first-child {
        padding-right: 8rem;
        border-right: 1px solid ${props => props.theme.lightGrey};
        ${({theme}) => theme.tabletLarge`
            background-color: red;
        `}
        & > p {
            padding: 0 0 2rem;
        }
        & > div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 3rem;
            & > p {
                padding-right: 2rem;
                & > span {
                    color: ${props => props.theme.yellow};
                }
            }
        }
        & > button {
            padding: 1rem;
            width: 12rem;
            height: 5rem;
            text-align: center;
            font-size: 1.3rem;
            font-weight: bold;
            text-transform: uppercase;
            border: none;
            color: ${props => props.theme.white};
            background-color: ${props => props.theme.darkestGrey};
            &:hover {
                background-color: ${props => props.theme.yellow};
            }
        }
    }
    & > div:last-child {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 2rem;
        font-size: 1.3rem;
        & > div {
            display: flex;
            flex-direction: column;
            line-height: 3;
            &:last-child {
                span {
                    padding: 1rem;
                }
            }
        }
    }
`;

export const SubFooter = styled.div`
    background-color: ${props => props.theme.darkestGrey};
    color: ${props => props.theme.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > div {
        padding: 1rem;
        font-size: 1.2rem;
        & > * {
            padding: 0 2rem;
        }
    }
`;
