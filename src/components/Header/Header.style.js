import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
    line-height: 40px;
    left: 0;
    background-color: #454545;
    border-bottom: solid 1px #d6d6d6;
    ${({ theme }) => theme.tabletLarge`
         background-color: ${props => props.theme.white};
   `}
`;

export const ImgDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    & > img {
        width: 20rem;
        margin-left: 4rem;
        &:hover {
            opacity: 0.5;
        }
        ${({ theme }) => theme.desktop`
        display: none;
    `}
        ${({ theme }) => theme.tabletLarge`
        display: flex;
    `}
    }
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    ${({ theme }) => theme.phone`
        display: none;
    `}
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.white};
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.4rem;

    &:first-child {
        color: ${props => props.theme.yellow};
        &:hover {
            color: ${props => props.theme.white};
            ${({ theme }) => theme.tabletLarge`
            color: ${props => props.theme.darkGrey};
        `}
        }
    }
    &:hover {
        color: ${props => props.theme.yellow};
    }
    ${({ theme }) => theme.tabletLarge`
        color: ${props => props.theme.darkGrey};
    `}
    ${({ theme }) => theme.tablet`
        display: none;
    `}
`;

export const MobileMenu = styled.div`
    display: none;
    ${({ theme }) => theme.phone`
        display: inline-block;
        color: ${({ theme }) => theme.yellow};
        font-size: 4rem;
    `}
     ${({ theme }) => theme.tablet`
        display: inline-block;
        color: ${({ theme }) => theme.yellow};
        font-size: 4rem;
    `}
    ${({ theme }) => theme.tabletLarge`
        display: inline-block;
        color: ${({ theme }) => theme.yellow};
        font-size: 4rem;
    `}
`;
