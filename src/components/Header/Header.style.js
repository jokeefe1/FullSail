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

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.white};
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0 0.9rem;

    &:first-child {
        color: ${props => props.theme.yellow};
        &:hover {
            color: ${props => props.theme.white};
        }
    }
    &:hover {
        color: ${props => props.theme.yellow};
    }
    ${({theme}) => theme.tabletLarge`
        color: ${props => props.theme.darkGrey};
    `}
`;
