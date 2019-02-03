import React, { Component } from 'react';
import cardData from './cardData'
import CardImage from '../CardImage/CardImage'
import { ImgContainer } from '../Card/Card.style'


class Card extends Component {

    state = {
        data: cardData
    };

    render() {
        const { data } = this.state
        const card = data.map( item => {
            const { id, image, label, title, video } = item
            return (
                <CardImage key={id} image={image} label={label} title={title} video={video}/>
            )
        })

        return <ImgContainer>{card}</ImgContainer>;
    }
}

export default Card;