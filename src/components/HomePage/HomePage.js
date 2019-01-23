import React from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import SubHeader from '../SubHeader/SubHeader';
import { StyledDivider } from '../Divider/Divider.style';
import Footer from '../Footer/Footer'

const HomePage = props => (
    <>
        <Header />
        <Navigation />
        <Hero />
        <SubHeader />
        <StyledDivider />
        <Footer />
    </>
);

export default HomePage;
