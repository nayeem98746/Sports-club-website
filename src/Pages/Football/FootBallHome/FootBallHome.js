import React from "react";
import ControledSlider from "../../ControledSlider/ControledSlider";
import CountSlider from "../../CountSlider/CountSlider";
import NextMathTimer from "../../NextMathTimer/NextMathTimer";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BookingTactk from "../BookingTactk/BookingTactk";


const FootBallHome = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <NextMathTimer />
      <ControledSlider />      
      <BookingTactk />
      <CountSlider />
      <Footer />
    </div>
  );
};

export default FootBallHome;