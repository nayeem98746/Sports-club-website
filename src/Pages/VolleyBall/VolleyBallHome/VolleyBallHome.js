import React from 'react';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import VolleyBallBanner from '../VolleyBallBanner/VolleyBallBanner';
import VolleyBallMatch from '../VolleyBallMatch/VolleyBallMatch';
import VolleyBallPlayers from '../VolleyBallPlayers/VolleyBallPlayers';
import VolleyBallSlider from '../VolleyBallSlider/VolleyBallSlider';

const VolleyBallHome = () => {
    return (
        <div>
            <Navigation />
            <VolleyBallBanner />
            <VolleyBallMatch />
            <BookingTactk />
            <VolleyBallPlayers />           
            <VolleyBallSlider />
            <Footer />
        </div>
    );
};

export default VolleyBallHome;