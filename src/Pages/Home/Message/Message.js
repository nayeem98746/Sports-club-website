import React from 'react';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import "./Message.css";
import useAuth from '../../../Hook/UseAuth';
import logo from '../../../Images/Chat/sports.png';


const Message = ({setIsConnect,hendlaMessage, AllMessage,setMessageValu}) => {

    //   console.log(ansMessage);

    const {user} = useAuth();

    const dateToTime = date => date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      });
      
      const dateString = new Date().getTime();      
      const localDate = new Date(dateString); 
      console.log(`(${dateToTime(localDate)} Your Time)`);
      console.log(dateString);

    return (
        <div  className="Message">
         


            <div className='ChatMessage'>

                <div className="Header">
                    <div>   <LinearScaleIcon className="Header_Icon" /></div>
                    <div className="Header_Text"><p>Sports Club</p></div>
                    <div style={{textAlign: "right"}}> <DoDisturbOnIcon className="Header_Icon" onClick={() => setIsConnect(false)} /> </div>
                </div>
           
                <div className='Chat'>
                    {
                        AllMessage.map(msg =>{
                                return <div style={{marginBottom: "50px"}}>

                                    <div className="Person">
                                    <PersonIcon style={{color: "#000", display: "inline-block", marginBottom: "3px"}} /><p style={{color: "#000", display: "inline-block"}}>{user?.displayName?.slice(0, 10)} {dateToTime(localDate)} </p> 
                                    </div>
                                    <p className='Question'>{msg?.question}
                                    </p>


                                    <div className="User">
                                        <img style={{width: "25px", marginBottom: "3px", marginRight: "10px"}} src={logo} alt="" />
                                       
                                    <p style={{color: "#000", display: "inline-block"}}>SportClub  {dateToTime(localDate)}</p> 
                                    </div>
                                    <div className="Ans">
                                    
                                    <p>{msg?.Ans}</p>
                                    {
                                        msg?.contact_link && <a href={msg?.contact_link}>{msg?.contact_link}</a>
                                    }
                                    </div>
                                    
                                </div>
                        })
                    }
                </div>
                <div className="InputBox">
            <input placeholder='write a message' onKeyUp={e=>{hendlaMessage(e);setMessageValu(e.target.value)}} type="text" />
            
            <SendIcon className="Header_Icon" />

            <p style={{color: "#000", textAlign: "center", marginTop: "10px"}}>Place today place tomorrow</p>


            </div>
        </div>
        </div>
    );
};

export default Message;