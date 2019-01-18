import React from 'react';
import { NavBar, NavLinks, StyledLink } from './Header.style';
import { FaInfo, FaRocketchat, FaPencilAlt } from 'react-icons/fa';

const Header = props => (
    <NavBar>
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
    </NavBar>
);

export default Header;
