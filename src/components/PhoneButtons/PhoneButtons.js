import React from 'react';
import { FaInfo, FaPhoneVolume, FaRocketchat } from 'react-icons/fa';
import { StyledDiv, StyledLink } from '../PhoneButtons/PhoneButtons.style';

export default function PhoneButtons() {
    return <StyledDiv>
            <StyledLink to="/">
                <span>
                    <FaPhoneVolume />
                </span> Call
            </StyledLink>
            <StyledLink to="/">
                <span>
                    <FaRocketchat />
                </span>
                Chat
            </StyledLink>

            <StyledLink to="/">
                <span>
                    <FaInfo />
                </span>Request Info
            </StyledLink>
        </StyledDiv>;
}
