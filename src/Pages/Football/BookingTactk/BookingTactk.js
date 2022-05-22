import React from 'react';
import { Button, Container} from 'react-bootstrap';
import './BookingTactk.css';
import { Link } from 'react-router-dom';
import image from '../../../Images/UPCOMINGEVENTS/360_F_377862753_rc1sOZWvNSfSwz9sgfP9JThzk0WdwLJe.jpg';

const BookingTactk = () => {
    return (
       

            <Container>
                <div className="BookingPart">
                        <div className="Text">
                        <h1>Why are you still waiting?</h1>
                    <p>Our <span style={{color: "rgb(19 7 62)"}} >Upcoming New Events  </span>Open Now</p>
                        </div>
                        
                        <div className="Bottun">
                            <Link to="/contestsregister" > <Button style={{background: "#E71E68", color: "#FFF", padding: "10px", border: "0px", marginTop: "20px"}}>Upcoming New Events </Button></Link>
                        </div>
                        <div className="Number">
                             <img style={{width: '300px', borderRadius: "10px"}} src={image} alt="" />
                        </div>
                </div>

            </Container>
       
    );
};

export default BookingTactk;