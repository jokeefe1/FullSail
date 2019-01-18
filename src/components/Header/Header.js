import React from 'react';
import { NavBar, NavLinks, StyledLink, Container } from './Header.style';
import { FaInfo, FaRocketchat, FaPencilAlt } from 'react-icons/fa';

const Header = props => (
    <NavBar>
        <Container>
            <div></div>
            <NavLinks>
                <StyledLink to="/info">
                    Request Info <FaInfo />
                </StyledLink>
                <StyledLink to="/chat">
                    Chat Live <FaRocketchat />
                </StyledLink>
                <StyledLink to="/apply">
                    Apply <FaPencilAlt />
                </StyledLink>
                <StyledLink to="#">800.226.7625</StyledLink>
            </NavLinks>
        </Container>
    </NavBar>
);

export default Header;
