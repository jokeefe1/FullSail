import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 90px;
    line-height: 40px;
    left: 0;
    background-color: ${props => props.theme.white};
    border-bottom: solid 1px #d6d6d6;
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.darkGrey};
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0.7rem;

    &:hover {
        color: ${props => props.theme.yellow};
    }
    &:last-child {
        color: ${props => props.theme.yellow};
        font-size: 1.8rem;
    }
`;

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;