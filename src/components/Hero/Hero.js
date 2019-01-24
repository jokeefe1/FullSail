import Carousel from 'nuka-carousel';
import React from 'react';

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
                <img
                    src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_01.jpg"
                    alt="campus"
                />
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
