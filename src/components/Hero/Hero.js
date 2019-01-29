import React from 'react';
import ImgOne from '../ImgOne/ImgOne';
import ImgThree from '../ImgThree/ImgThree';
import ImgTwo from '../ImgTwo/ImgTwo';
import { StyledCarousel } from './Hero.style';

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
                transitionMode="fade"
                wrapAround={true}
                autoGenerateStyleTag={true}
                dragging={true}
                swiping={true}
            >
                <ImgOne />
                <ImgTwo />
                <ImgThree />
            </StyledCarousel>
        );
    }
}
