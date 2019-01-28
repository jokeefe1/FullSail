import React from 'react';
import { ContainerLarge } from '../../App.GlobalStyle';
import { StyledLink, StyledSubHeader } from './SubHeader.style';

export default function SubHeader(props) {
    return (
        <StyledSubHeader>
            <ContainerLarge>
                <p>
                    Full Sail University offers{' '}
                    <StyledLink to="/campus">campus</StyledLink> and{' '}
                    <StyledLink to="/online">online</StyledLink> degree programs
                    that are designed for the world of entertainment, media,
                    arts, and technology. Offering associate’s, bachelor’s, and
                    master’s degrees, Full Sail’s approach is centered on
                    real-world industry experience and creative problem solving.
                </p>
            </ContainerLarge>
        </StyledSubHeader>
    );
}
