import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/iconCricket/australia.png';
import img3 from '../../../Images/iconCricket/india.png';
import { default as img2, default as img4 } from '../../../Images/iconCricket/new-zealand.png';
import img5 from '../../../Images/iconCricket/pakistan.png';
import logo from '../../../Images/next match/UEFA-Champions-League-Logo-PNG-White-1024x939.png';
import BaseBallVideoSlider from '../BaseBallVideoSlider/BaseBallVideoSlider';
import './BaseBallMatch.css';

const BaseBallMatch = () => {
   


    return (
        <div  className="container ">


            <div className="row text-dark">
                <div className="col-md-4">
                    <Card className='my-5 MatchListItam' style={{ width: '100%', background: "none", border: "2px solid rgb(66 39 163)", fontFamily: "Poppins", height: "600px", boxShadow: "rgb(71 40 167) 0px 8px 24px" }}>
                        <Card.Body style={{color: "#F3F3F3"}}>
                            <h2 style={{fontSize: "24px", margin: "30px 20px 30px 20px"}}>Leage and Compitations</h2>
                            <ul style={{listStyleType: "none"}}>
                                
                                <li>FIFA World Cup 2022</li>
                                <li>UEFA Champions League</li>
                                <li>UEFA European Championship</li>
                                <li>Copa America</li>
                                <li>Copa Libertadores</li>
                                <li>UEFA Europa League</li>
                                <li>Africa Cup of Nations</li>
                                <li>CAF Champions League</li>
                                <li>CONMEBOL Copa Libertadores</li> 
                                </ul>                           

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 d-flex">

                    <Col>
                    <Card className='my-5' style={{ width: '100%', background: '#004C64', padding: "20px", textAlign: "center"}}>

                        <div style={{position: "relative", marginBottom: "20px"}}>
                            <div className='text-white'>
                                <div style={{display: "inline-block"}}  className="TableImages">
                                <img style={{width: "100px", margin: "20px", display: "inline-block"}} src={logo} alt="" />
                                </div>
                                
                                
                                <div style={{display: "inline-block", textAlign: "left"}} className="TableHadeer">
                                <p style={{marginTop: "0px"}}>UEFA Champions League</p>
                                <h2 style={{lineHeight: "30px"}}>Next Matches</h2>
                                </div>
                                

                                <div className="Textcenter">
                                    <p>SAT 21.06.2022</p>
                                    <p>Cambridgeshire UK</p>
                                    <p>01.30 PM</p>
                                </div>


                           

                               
                            </div>

                            <div className='NextFootballMatchs'>
                                <div style={{display: "flex", marginLeft: "130px"}}>
                                <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />
                                <h3 style={{ fontSize: '20px', lineHeight: "50px" , marginLeft: "10px" }}>UVANTUS</h3>
                                </div>
                                
                                <div>                              
                                <h3 style={{ fontSize: '40px',lineHeight: "50px" }}> VS </h3>
                                </div>


                                <div style={{display: "flex", marginRight: "160px"}}>
                               
                                <h3 style={{ fontSize: '20px', lineHeight: "50px"}}>Chalenger</h3>
                                <img style={{width: '50px', height: "50px" , marginLeft: "10px"  }} src={img2} alt="" />
                                </div>

                            </div>
                           
                        </div>

                        <Link style={{textAlign: "center"}} to="/booking"> <Button type="submit">Book your ticket</Button></Link>

                    </Card>


                    
                   
                

                <div className="UpcameingMatch">

                    <div style={{textAlign: "center", color: "#F3F3F3"}}>
                        <h2 style={{marginBottom: "50px"}}>All upcoming matches</h2>
                       



                            


                            


                            <div className="d-flex  justify-content-evenly align-items-center m-3">
                            <h3 style={{ fontSize: '20px' }}>Mon 01.01.2023</h3>
                                <img className='logoimage' src={img2} alt="" />
                                <h3 style={{ fontSize: '20px' }}>UVANTUS</h3>
                                <h3 style={{ fontSize: '20px'}}> VS </h3>
                                 <h3 style={{ fontSize: '20px' }}>European</h3> 
                                <img className='logoimage' src={img5} alt="" />
                                <h3 style={{ fontSize: '20px' }}>02.30 PM</h3>
                            </div>



                            <div className="d-flex  justify-content-evenly align-items-center m-3">
                            <h3 style={{ fontSize: '20px' }}>SUN 25.09.2022</h3>
                                <img className='logoimage' src={img3} alt="" />
                                <h3 style={{ fontSize: '20px' }}>JUVENTAS</h3>
                                <h3 style={{ fontSize: '20px'}}> VS </h3>
                                 <h3 style={{ fontSize: '20px' }}>European</h3> 
                                <img className='logoimage' src={img4} alt="" />
                                <h3 style={{ fontSize: '20px' }}>01.30 PM</h3>
                            </div>



                            <div className="d-flex  justify-content-evenly align-items-center m-3">
                            <h3 style={{ fontSize: '20px' }}>SUN 25.09.2022</h3>
                                <img className='logoimage' src={img2} alt="" />
                                <h3 style={{ fontSize: '20px' }}>UVANTUS</h3>
                                <h3 style={{ fontSize: '20px'}}> VS </h3>
                                 <h3 style={{ fontSize: '20px' }}>JUVENTAS</h3> 
                                <img className='logoimage' src={img5} alt="" />
                                <h3 style={{ fontSize: '20px' }}>01.30 PM</h3>
                            </div>



                    </div>
                    
                                


                            </div>

                            </Col>
            </div>
            </div>


            <BaseBallVideoSlider />


            <div className="ManiRainking">

<div className="Renking">
    <h1>FIFA Player Rangking</h1>

    <div className="RenkingTable">
        <div className="SingleItam">
            <h3> Player Names</h3>
            <h3>Club</h3>
            <h3>Positon</h3>
            <h3>Points</h3>
        </div>


        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>


        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>


        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>




        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>




        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>




        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>




        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>




        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>


        <div className="SinglePlayer">

            <div className="Player">
                <div className="Nmbers">

                <h5 style={{marginRight: "15px"}}>01</h5>
                </div>

                <div className="TextPlayer">
                <h5>Lional Massi</h5>
                <h5>Argentena</h5>

                </div>
            </div>
            
            <h5>PSG</h5>
            <h5>RW</h5>
            <h5>93</h5>
        </div>


    </div>


  
</div>




<div className="CountryRank">
        <h2>FIFA Country Rangking</h2>


        <div className="CountryAll">
            <h4>Country</h4>
            <h4 style={{textAlign: "right"}}> Total points</h4>

        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>



        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>



        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>


        <div className="CountrySAre">
            <div className="CountryText">
            <h4 style={{marginRight: "10px"}}>01</h4>
            <h4 style={{marginRight: "10px"}}>Argentena</h4>
            <img style={{width: '50px', height: "50px"  }} src={img1} alt="" />

            </div>
            

            <div className="CountryRnk">
                <h4>	1832.69</h4>
            </div>
        </div>

        
    </div>



    </div>


















        </div>
    );
};

export default BaseBallMatch;