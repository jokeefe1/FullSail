import React, { Component } from 'react';
import { Link } from 'react-router';
// import Nav from './Nav';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';

class Card extends Component {

    state = { images: [] };

    getImages() {
        fetch('http://res.cloudinary.com/john-okeefe/images/')
            .then(res => {
                console.log(res.data);
                this.setState({ images: res.data });
            });
    }

    componentDidMount() {
        this.getImages();
    }

    render() {

        const { images } = this.state;

        return <div>
                <div />
                <h3 className="text-center">
                    {' '}
                    Latest Videos on Miniflix{' '}
                </h3>
                <hr />

                <div>
                    {/* <CloudinaryContext cloudName="john-okeefe">
                        {images.map((data, index) => (
                            <div key={index}>
                                <div>
                                    <Video
                                        publicId={data.public_id}
                                        width="300"
                                        height="300"
                                        controls
                                    />
                                </div>
                                <div>
                                    {' '}
                                    Created at {data.created_at}{' '}
                                </div>
                            </div>
                        ))}
                    </CloudinaryContext> */}
                </div>
            </div>;
    }
}

export default Card;