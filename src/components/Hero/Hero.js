import Carousel from 'nuka-carousel';
import React from 'react';
import ImgOne from '../ImgOne/ImgOne';
import ImgTwo from '../ImgTwo/ImgTwo'
import ImgThree from '../ImgThree/ImgThree'
import { StyledCarousel } from './Hero.style'

export default class extends React.Component {
    state = {
        slideIndex: 0
    };

    render() {
        return (
            <StyledCarousel
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
                pauseOnHover={true}
                autoplay={true}
                initialSlideHeight={10}
                transitionMode="fade"
                wrapAround={true}
                autoGenerateStyleTag={true}
                dragging={true}
                swiping={true}
                style={{ height: 400 }}
            >
                <ImgOne />
                <ImgTwo />
                <ImgThree />
            </StyledCarousel>
        );
    }
}
