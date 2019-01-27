import React from 'react';
import { StyledDiv } from '../CardImage/CardImage.style';
import { FaRegPlayCircle } from 'react-icons/fa'

export default function CardImage(props) {
    return (
        <StyledDiv>
            <div style={{ backgroundImage: `url(${props.image})` }}>
                <h3>{props.label}</h3>
            </div>
        <p>
          <span>

          <FaRegPlayCircle />
          </span>
          {props.title}
          </p>
        </StyledDiv>
    );
}
