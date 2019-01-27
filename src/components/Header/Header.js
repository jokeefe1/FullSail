import React from 'react';
import { FaInfo, FaPencilAlt, FaRocketchat } from 'react-icons/fa';
import { ContainerHead } from '../../App.GlobalStyle';
import { ImgDiv, NavBar, NavLinks, StyledLink } from './Header.style';

const Header = props => (
    <NavBar>
        <ContainerHead>
            <ImgDiv>
                <img
                    src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931614/fullsail/logo.svg"
                    alt="logo"
                />
            </ImgDiv>
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
        </ContainerHead>
    </NavBar>
);

export default Header;
