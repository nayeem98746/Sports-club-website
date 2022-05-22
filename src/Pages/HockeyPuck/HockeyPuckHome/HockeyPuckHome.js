import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HockeyPuckBanner from '../HockeyPuckBanner/HockeyPuckBanner';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import HockeyPuckMatch from '../HockeyPuckMatch/HockeyPuckMatch';
import HockeyPuckPlayer from '../HockeyPuckPlayer/HockeyPuckPlayer';
import HockeyPuckSlider from '../HockeyPuckSlider/HockeyPuckSlider';

const HockeyPuckHome = () => {
    return (
        <div>
            <Navigation />
            <HockeyPuckBanner />
            <HockeyPuckMatch />
            <HockeyPuckPlayer />           
            <BookingTactk />
            <HockeyPuckSlider />
            <Footer />
        </div>
    );
};

export default HockeyPuckHome;