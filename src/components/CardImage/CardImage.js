import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { StyledLink } from '../CardImage/CardImage.style';

export default function CardImage(props) {
    const switchTitle = props.video ? (
        <div>
            <p>
                <span>
                    <FaRegPlayCircle />
                </span>
                {props.title}
            </p>
        </div>
    ) : (
        <div>
            <div>
                {props.title}
                <h3>Read More</h3>
                <div />
            </div>
        </div>
    );

    return (
        <StyledLink to="/card-image">
            <div style={{ backgroundImage: `url(${props.image})` }}>
                <h3>{props.label}</h3>
            </div>
            {switchTitle}
        </StyledLink>
    );
}
