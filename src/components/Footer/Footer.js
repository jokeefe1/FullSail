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
                        src="https://res.cloudinary.com/john-okeefe/image/upload/v1548646796/fullsail/logo2.svg"
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
                                        <StyledLink to="/stories">
                                            Full Sail Stories
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/scholarships">
                                            Explore Scholarships
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/launch">
                                            Launch
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/store">
                                            Online Store
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/artist">
                                            Artist Relations
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/login">
                                            Student Login
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/alumni">
                                            Alumni Network
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/careers">
                                            Careers At Full Sail
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/grads">
                                            Hire Our Grads
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/labs">
                                            Full Sail Labs
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/info">
                                            Request Information
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/apply">
                                            Apply Now
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/press">
                                            Press Room
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/app">
                                            SchoolsApp
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/connect">
                                            Connect With Us
                                        </StyledLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <StyledLink to="/instagram">
                                            <span>
                                                <FaInstagram />
                                            </span>
                                            Instagram
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/facebook">
                                            <span>
                                                <FaFacebookF />
                                            </span>
                                            Facebook
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/twitter">
                                            <span>
                                                <FaTwitter />
                                            </span>
                                            Twitter
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/youtube">
                                            <span>
                                                <FaPlay />
                                            </span>
                                            YouTube
                                        </StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/tour">
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
                            <StyledLink to="/acreditation">
                                Acreditation
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="privacy">
                                Your Privacy Rights
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/disclosure">
                                Consumer Disclosure
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/calc">
                                Net Price Calculator
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/terms">
                                SMS Terms & Conditions
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/disability-services">
                                Disability Services
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/safety">Campus Safety</StyledLink>
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
