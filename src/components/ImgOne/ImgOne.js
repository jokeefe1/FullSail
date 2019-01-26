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
} from './ImgOne.style';


export default function ImgOne() {
    return (
        <StyledDiv>
            <TopSection>
                <h1>Our Campus</h1>
                <p>
                    With acres of studios, labs, performance venues and
                    production environments, Full Sail's campus is anything but
                    typical.
                </p>
                <p><StyledLink to='/'>Explor our campus</StyledLink><FaChevronRight /></p>
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
