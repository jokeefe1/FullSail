import React from 'react';
import {
    FaFacebookF,
    FaGlobe,
    FaInstagram,
    FaPlay,
    FaRegCopyright,
    FaTwitter
} from 'react-icons/fa';
import {
    AllDiv,
    Container,
    ImgDiv,
    StyledFooter,
    StyledLink,
    SubFooter
} from './Footer.style';

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
                    <section>
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
                    </section>

                    <section>
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/">
                                            Full Sail Stories
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Explore Scholorships
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">Launch</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Online Store
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Artist Relations
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/">
                                            Student Login
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Alumni Network
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Careers At Full Sail
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Hire Our Grads
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Full Sail Labs
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/">
                                            Request Information
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Apply Now
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Press Room
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            SchoolsApp
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            Connect With Us
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/">
                                            <span>
                                                <FaInstagram />
                                            </span>
                                            Instagram
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            <span>
                                                <FaFacebookF />
                                            </span>
                                            Facebook
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            <span>
                                                <FaTwitter />
                                            </span>
                                            Twitter
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            <span>
                                                <FaPlay />
                                            </span>
                                            YouTube
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/">
                                            <span>
                                                <FaGlobe />
                                            </span>
                                            Virtual Tour
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </AllDiv>
            </Container>
            <SubFooter>
                <div>
                    <ul>
                        <li>
                            <StyledLink to="/">Acreditation</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">Your Privacy Rights</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">Consumer Disclosure</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">Net Price Calculator</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">
                                SMS Terms & Conditions
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">Disability Services</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">Campus Safety</StyledLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>
                        <FaRegCopyright />
                        2019 Full Sail, LLC. All Rights Reserved
                    </p>
                </div>
            </SubFooter>
        </StyledFooter>
    );
}
