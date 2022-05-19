import React from 'react';
import './Banner.css';
import banner from '../../../Images/FootBall/Players/football-banner-1.jpg';
import { Container} from "react-bootstrap";


const Banner = () => {
    return (
        <div className='Banner'>
            <img src={banner} alt="" />
            
            <Container>
            
            </Container>
            
        </div>
    );
};

export default Banner;