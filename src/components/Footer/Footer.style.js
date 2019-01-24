import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.darkGrey};
`;

export const ImgDiv = styled.div`
    display: block;
    & > img {
        width: 22rem;
        padding: 4rem 0 3rem;
    }
`;

export const AllDiv = styled.div`
    display: flex;
    color: ${props => props.theme.white};
    font-size: 1.5rem;
    line-height: 1.5;
    padding-bottom: 4rem;
    & > div:first-child {
        padding-right: 8rem;
        border-right: 1px solid ${props => props.theme.lightGrey};
        & > p {
            padding: 0 0 2rem;
        }
        & > div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 2rem;
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
        }
    }
`;

export const FirstDiv = styled.div`
    font-size: 2rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.white};
`;