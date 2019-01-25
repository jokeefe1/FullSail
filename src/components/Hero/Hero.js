import Carousel from 'nuka-carousel';
import React from 'react';
import { StyledDiv, TopSection, MiddleSection } from './Hero.style';
import { FaItunes, FaMegaport, FaHornbill, FaRev, FaAdjust, FaStroopwafel, FaRev, FaShopware} from 'react-icons/fa'

export default class extends React.Component {
    state = {
        slideIndex: 0
    };

    render() {
        return (
            <Carousel
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
                pauseOnHover={true}
                autoplay={false}
                initialSlideHeight={10}
                transitionMode="fade"
                wrapAround={true}
                autoGenerateStyleTag={true}
                dragging={true}
                swiping={true}
                style={{ height: 480 }}
            >
                <StyledDiv>
                    <TopSection>
                        <h1>Our Campus</h1>
                        <p>
                            With acres of studios, labs, performance venues and
                            production environments, Full Sail's campus is
                            anything but typical.
                        </p>
                        <p>Explor our campus</p>
                    </TopSection>
                    <MiddleSection>
                        <h2>
                            Explore Degrees in Entertainment, Media, Arts, and
                            Technology:
                        </h2>
                    </MiddleSection>
                    <BottomSection>

                    </BottomSection>
                </StyledDiv>

                <img
                    src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931617/fullsail/slide_02.jpg"
                    alt="dream"
                />
                <img
                    src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_03.jpg"
                    alt="study"
                />
            </Carousel>
        );
    }
}
