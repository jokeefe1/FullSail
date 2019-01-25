import React from 'react';
import { ContainerHead } from '../../App.GlobalStyle'
import { NavBar,NavLinks,StyledLink,ImgDiv, StyledChevron} from './Navigation.style';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const Navigation = props => (
    <NavBar>
        <ContainerHead>
            <ImgDiv>
                <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931614/fullsail/logo.svg" alt="logo" />
            </ImgDiv>
            <NavLinks>
                <StyledLink to="/info">
                    Degree Programs <StyledChevron />
                </StyledLink>
                <StyledLink to="/chat">
                    Admissions <StyledChevron />
                </StyledLink>
                <StyledLink to="/apply">
                    We're different <StyledChevron />
                </StyledLink>
                <StyledLink to="#">
                    Campus & Online <StyledChevron />
                </StyledLink>
                <StyledLink to="/about">
                    About <StyledChevron />
                </StyledLink>
                <StyledLink to="/about">
                    <FaSearch />
                </StyledLink>
            </NavLinks>
        </ContainerHead>
    </NavBar>
);

export default Navigation;
