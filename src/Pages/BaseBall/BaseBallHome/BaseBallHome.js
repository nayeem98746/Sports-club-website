import React from 'react';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BaseBallBanner from '../BaseBallBanner/BaseBallBanner';
import BaseBallMatch from '../BaseBallMatch/BaseBallMatch';
import BaseBallPlayers from '../BaseBallPlayers/BaseBallPlayers';
import BaseBallSlider from '../BaseBallSlider/BaseBallSlider';

const BaseBallHome = () => {
    return (
        <div>
            <Navigation />
            <BaseBallBanner />
            <BaseBallMatch />
            <BaseBallPlayers />            
            <BookingTactk />
            <BaseBallSlider/>
            <Footer />
        </div>
    );
};

export default BaseBallHome;