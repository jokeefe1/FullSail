import React from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import SubHeader from '../SubHeader/SubHeader';
import { StyledDivider } from '../Divider/Divider.style';

const HomePage = props => (
    <>
        <Header />
        <Navigation />
        <Hero />
        <SubHeader />
        <StyledDivider />
    </>
);

export default HomePage;
