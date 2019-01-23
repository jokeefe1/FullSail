import React from 'react';
import Carousel from 'nuka-carousel';
import { Container } from './Hero.style';

export default class extends React.Component {
    state = {
        slideIndex: 0
    };

    render() {
        return (
            <Container>
                <Carousel
                    slideIndex={this.state.slideIndex}
                    afterSlide={slideIndex => this.setState({ slideIndex })}
                >
                    <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_01.jpg" alt='campus'/>
                    <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931617/fullsail/slide_02.jpg" alt='dream'/>
                    <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_03.jpg" alt='study'/>
                </Carousel>
            </Container>
        );
    }
}
