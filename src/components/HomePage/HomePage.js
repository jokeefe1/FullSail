import React from 'react';
import { StyledDivider } from '../Divider/Divider.style';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';
import SubHeader from '../SubHeader/SubHeader';
import SupraFooter from '../SupraFooter/SupraFooter'
import PhoneMenu from '../PhoneMenu/PhoneMenu'
import PhoneButtons from '../PhoneButtons/PhoneButtons'

const HomePage = props => (
    <>
        <Header />
        <Navigation />
        <Hero />
        <PhoneMenu />
        <SubHeader />
        <StyledDivider />
        <SupraFooter />
        <Footer />
        <PhoneButtons />
    </>
);

export default HomePage;
