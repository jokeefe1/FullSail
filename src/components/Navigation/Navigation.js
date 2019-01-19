import React from 'react';
import { Container } from '../../App.GlobalStyle'
import { NavBar,NavLinks,StyledLink,ImgDiv, StyledChevron} from './Navigation.style';
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
                    Degree Programs{' '}
                    <StyledChevron />
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
        </Container>
    </NavBar>
);

export default Navigation;
