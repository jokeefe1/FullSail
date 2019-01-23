import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
    state = {
        slideIndex: 0
    };

    render() {
        return (
            <Carousel
                slideIndex={this.state.slideIndex}
                initialSlideHeight={300}
                afterSlide={slideIndex => this.setState({ slideIndex })}
            >
                <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_01.jpg" />
                <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_02.jpg" />
                <img src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_03.jpg" />
            </Carousel>
        );
    }
}
