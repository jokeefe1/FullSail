import React from 'react';
import { FaFacebookF, FaGlobe, FaInstagram, FaPlay, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { ContainerLarge } from '../../App.GlobalStyle';
import { AllDiv, ImgDiv, StyledFooter, StyledLink, SubFooter, Container } from './Footer.style';

export default function Footer(props) {
    return (
        <StyledFooter>
            <Container>
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
                            <StyledLink to='/'><span><FaInstagram /></span>Instagram</StyledLink>
                            <StyledLink to='/'><span><FaFacebookF /></span>Facebook</StyledLink>
                            <StyledLink to='/'><span><FaTwitter /></span>Twitter</StyledLink>
                            <StyledLink to='/'><span><FaPlay /></span>YouTube</StyledLink>
                            <StyledLink to='/'><span><FaGlobe /></span>Virtual Tour</StyledLink>
                        </div>
                    </div>
                </AllDiv>
            </Container>
                <SubFooter>
                    <div>
                        <StyledLink to='/'>Acreditation</StyledLink>
                        <StyledLink to='/'>Your Privacy Rights</StyledLink>
                        <StyledLink to='/'>Consumer Disclosure</StyledLink>
                        <StyledLink to='/'>Net Price Calculator</StyledLink>
                        <StyledLink to='/'>SMS Terms & Conditions</StyledLink>
                        <StyledLink to='/'>Disability Services</StyledLink>
                        <StyledLink to='/'>Campus Safety</StyledLink>
                    </div>
                    <div>
                    <p><FaRegCopyright />2019 Full Sail, LLC. All Rights Reserved</p>
                    </div>
                </SubFooter>
        </StyledFooter>
    );
}
