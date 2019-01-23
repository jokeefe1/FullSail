import React from 'react';
import { ContainerLarge } from '../../App.GlobalStyle';
import { Image, CloudinaryContext } from 'cloudinary-react';
import { StyledFooter, AllDiv, ImgDiv, FirstDiv } from './Footer.style';

export default function Footer(props) {
    return (
        <StyledFooter>
            <ContainerLarge>
                <ImgDiv>
                    <img
                        src="https://res.cloudinary.com/john-okeefe/image/upload/v1547931614/fullsail/logo.svg"
                        alt="logo"
                    />
                </ImgDiv>
                <AllDiv>
                    <div>
                        <p>
                            3300 University Boulevard
                            <br />
                            Winter Park, Florida 32792
                        </p>
                        <div>
                            <p>Phone 800.226.7625</p>
                            <p>Local 407.679.6333</p>
                        </div>
                        <button>Contact Us</button>
                    </div>
                    <div>Some Text</div>
                    <div>Some Text</div>
                    <div>Some Text</div>
                </AllDiv>
            </ContainerLarge>
        </StyledFooter>
    );
}
