import React from 'react';
import { StyledSubHeader, StyledLink } from './SubHeader.style';
import { Container } from '../../App.GlobalStyle';

export default function SubHeader(props) {
    return <StyledSubHeader>
            <Container>
                <p>
                    Full Sail University offers <StyledLink to='/'>campus</StyledLink> and <StyledLink to='/'>online</StyledLink> degree programs that are designed for the world of entertainment, media, arts, and technology. Offering associate’s, bachelor’s, and master’s degrees, Full Sail’s approach is centered on real-world industry experience and creative problem solving.
                </p>
            </Container>
        </StyledSubHeader>;
}
