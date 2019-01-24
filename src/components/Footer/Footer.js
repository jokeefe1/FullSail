import React from 'react';
import { ContainerLarge } from '../../App.GlobalStyle';
import { AllDiv, ImgDiv, StyledFooter, StyledLink } from './Footer.style';
import { FaInstagram, FaFacebookF, FaTwitter,FaPlay, FaGlobe} from 'react-icons/fa'

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
                            <p>
                                Phone <br />
                                <span>800.226.7625</span>
                            </p>
                            <p>
                                Local <br />
                                <span>407.679.6333</span>
                            </p>
                        </div>
                        <button>Contact Us</button>
                    </div>
                    <div>
                        <div>
                            <StyledLink to='/'>Full Sail Stories</StyledLink>
                            <StyledLink to='/'>Explore Scholorships</StyledLink>
                            <StyledLink to='/'>Launch</StyledLink>
                            <StyledLink to='/'>Online Store</StyledLink>
                            <StyledLink to='/'>Artist Relations</StyledLink>
                        </div>
                        <div>
                            <StyledLink to='/'>Student Login</StyledLink>
                            <StyledLink to='/'>Alumni Network</StyledLink>
                            <StyledLink to='/'>Careers At Full Sail</StyledLink>
                            <StyledLink to='/'>Hire Our Grads</StyledLink>
                            <StyledLink to='/'>Full Sail Labs</StyledLink>
                        </div>
                        <div>
                            <StyledLink to='/'>Request Information</StyledLink>
                            <StyledLink to='/'>Apply Now</StyledLink>
                            <StyledLink to='/'>Press Room</StyledLink>
                            <StyledLink to='/'>SchoolsApp</StyledLink>
                            <StyledLink to='/'>Connect With Us</StyledLink>
                        </div>
                        <div>
                            <StyledLink to='/'><FaInstagram />Instagram</StyledLink>
                            <StyledLink to='/'><FaFacebookF />Facebook</StyledLink>
                            <StyledLink to='/'><FaTwitter />Twitter</StyledLink>
                            <StyledLink to='/'><FaPlay />YouTube</StyledLink>
                            <StyledLink to='/'>Virtual Tour</StyledLink>
                        </div>
                    </div>
                </AllDiv>
            </ContainerLarge>
        </StyledFooter>
    );
}
