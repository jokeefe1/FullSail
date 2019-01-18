import React from 'react';

import {
    NavBar,
    NavLinks,
    StyledLink,
    Container,
    ImgDiv
} from './Navigation.style';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import Image from '../../img/svg/Logo';

const Navigation = props => (
    <NavBar>
        <Container>
            <ImgDiv>
                <Image />
            </ImgDiv>
            <NavLinks>
                <StyledLink to="/info">
                    Degree Programs <FaChevronDown />
                </StyledLink>
                <StyledLink to="/chat">
                    Admissions <FaChevronDown />
                </StyledLink>
                <StyledLink to="/apply">
                    We're different <FaChevronDown />
                </StyledLink>
                <StyledLink to="#">
                    Campus & Online <FaChevronDown />
                </StyledLink>
                <StyledLink to="/about">
                    About <FaChevronDown />
                </StyledLink>
                <StyledLink to="/about">
                    <FaSearch />
                </StyledLink>
            </NavLinks>
        </Container>
    </NavBar>
);

export default Navigation;
