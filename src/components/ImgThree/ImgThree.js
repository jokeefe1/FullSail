import React from 'react';
import {
    FaAdjust,
    FaHornbill,
    FaItunes,
    FaMegaport,
    FaRev,
    FaShopware,
    FaStroopwafel,
        FaChevronRight

} from 'react-icons/fa';
import { Container } from '../../App.GlobalStyle';
import {
    BottomSection,
    MiddleSection,
    StyledDiv,
    TopSection,
    StyledLink
} from './ImgThree.style';

export default function ImgOne() {
    return (
        <StyledDiv>
            <TopSection>
                <h1>Learning Online</h1>
                <p>
                   Full Sail's online degrees are delivered through our media-rich, human-focused learning platform.
                </p>
                <p><StyledLink to='/'>Explore the online experience</StyledLink><FaChevronRight /></p>
            </TopSection>
            <MiddleSection>
                <h2>
                    Explore Degrees in Entertainment, Media, Arts, and
                    Technology:
                </h2>
            </MiddleSection>
            <Container>
                <BottomSection>
                    <div>
                        <FaItunes />
                        <p>Music and Recording</p>
                    </div>
                    <div>
                        <FaMegaport />
                        <p>Games</p>
                    </div>
                    <div>
                        <FaHornbill />
                        <p>Art & Design</p>
                    </div>
                    <div>
                        <FaRev />
                        <p>Film & Television</p>
                    </div>
                    <div>
                        <FaAdjust />
                        <p>Technology</p>
                    </div>
                    <div>
                        <FaStroopwafel />
                        <p>Media & Communications</p>
                    </div>
                    <div>
                        <FaRev />
                        <p>Business</p>
                    </div>
                    <div>
                        <FaShopware />
                        <p>Sports</p>
                    </div>
                </BottomSection>
            </Container>
        </StyledDiv>
    );
}
