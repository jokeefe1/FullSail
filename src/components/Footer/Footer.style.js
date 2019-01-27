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
    ${({theme}) => theme.tabletLarge`
        padding: 2rem;
    `}
`;

export const FirstDiv = styled.div`
    font-size: 2rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.white};
    /* display: inline-block; */
    padding: 1rem;
`;

export const AllDiv = styled.div`
    display: flex;
    color: ${props => props.theme.white};
    font-size: 1.5rem;
    line-height: 1.5;
    padding-bottom: 2rem;
    & > section:first-child {
        & > div {
            padding-right: 8rem;
            border-right: 1px solid ${props => props.theme.lightGrey};
            & > p {
                padding: 0 0 2rem;
            }
            & > div {
                display: flex;
                justify-content: space - between;
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
            ${({ theme }) => theme.tabletLarge`
            display: flex;
            justify-content: baseline;
            & > * {
                padding: 2rem;
            }
        `}
        }
    }
    & > section:last-child {
        & > div {
            display: flex;
            background: red;
            list-style: none;
        }
    }
    ${({ theme }) => theme.tabletLarge`
            flex-direction: column;
            padding: 2rem;
        `}
`;

export const SubFooter = styled.div`
    background-color: ${props => props.theme.darkestGrey};
    color: ${props => props.theme.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    & > div {
        padding: 1rem;
        font-size: 1.2rem;
        & > * {
            padding: 0 2rem;
        }
    }
`;
