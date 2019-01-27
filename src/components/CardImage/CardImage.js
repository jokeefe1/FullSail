import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { StyledLink } from '../CardImage/CardImage.style';

export default function CardImage(props) {
    return <StyledLink to="/">
            <div style={{ backgroundImage: `url(${props.image})` }}>
                <h3>{props.label}</h3>
            </div>
            <div>
                <p>
                    <span>
                        <FaRegPlayCircle />
                    </span>
                    {props.title}
                </p>
            </div>
        </StyledLink>;
}
