import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 90px;
    line-height: 40px;
    left: 0;
    background-color: ${props => props.theme.white};
    border-bottom: solid 1px #d6d6d6;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
    ${({ theme }) => theme.tabletLarge`
      display: none;
   `}
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.darkGrey};
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0.7rem;

    &:hover {
        color: ${props => props.theme.yellow};
        & > * {
            color: ${props => props.theme.yellow};
        }
    }
    &:last-child {
        color: ${props => props.theme.yellow};
        font-size: 1.8rem;
    }
`;

export const ImgDiv = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;
    & > img {
        width: 22rem;
    }
    & > img:hover {
        opacity: 0.5;
    }
`;

export const StyledChevron = styled(FaChevronDown)`
    color: ${props => props.theme.red};
`;
