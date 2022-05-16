import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import useAuth from '../../../Hook/UseAuth';
import DashMessage from '../DashMessage/DashMessage';
import MessageIcon from '@mui/icons-material/Message';

const DaashboardHome = () => {
    const {user,admin} = useAuth();
    const [replayTxt,setReplayTxt] = useState("");
    const [allMessage,setAllMessage] = useState([]);
    const [currentMessage,setCurrentMessage] = useState({});
    const [isDashConnect,setIsDashConnect] = useState({});
    

    const socketRef = useRef();
    socketRef.current = io("http://localhost:7000");

    useEffect( () => {
      socketRef.current.on("chatMessage", (data)=>{
        setAllMessage(data.question);
      
        
      });
    } ,[])



    useEffect(()=>{
      const tempMsg = [...replayTxt, allMessage];
      setReplayTxt(tempMsg);
      console.log(replayTxt);
    },[allMessage])


    useEffect( (data) => {
        if (user.email && !admin) {
            socketRef.current.emit("chatMessage",{admin_email: user.email});
            

        }
    } ,[user.email,admin])



    const hendlaMessage = (e) => {
        if(e.target.value && !admin){
          if(e.keyCode === 13){
            socketRef.current.emit("chatMessage",{message: currentMessage, admin_email: user.email})
            e.target.value = "";
            console.log(currentMessage);
          }

        }else{
          alert("type Something")
        }
}
  
    return (
        <div>
            <h2>d home</h2>
            {isDashConnect ? <DashMessage hendlaMessage={hendlaMessage} AllMessage={allMessage} setIsConnect={setIsDashConnect} setCurrentMessage={setCurrentMessage} /> :   <p style={{position: "fixed", right: "20px", bottom: "10px"}}> Chat <MessageIcon  onClick={() => setIsDashConnect(true)} > </MessageIcon> </p> }


           
        </div>
    );
};

export default DaashboardHome;