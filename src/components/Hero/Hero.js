import React from 'react';
import Carousel from 'nuka-carousel';
import { Container } from './Hero.style'


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
                    <img src="https://unsplash.it/800/" />
                    <img src="src/img/slide_01.jpg" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
                </Carousel>
            </Container>
        );
    }
}
