import React from 'react';
import { StyledDiv, StyledLink } from '../PhoneButtons/PhoneButtons.style';

export default function PhoneButtons() {
    return (
        <StyledDiv>
            <StyledLink to='/'>Call</StyledLink>
            <StyledLink to='/'>Chat</StyledLink>
            <StyledLink to='/'>Request Info</StyledLink>
        </StyledDiv>
    );
}
