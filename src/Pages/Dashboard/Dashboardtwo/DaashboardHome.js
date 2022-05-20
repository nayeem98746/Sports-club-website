import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import useAuth from '../../../Hook/UseAuth';
import DashMessage from '../DashMessage/DashMessage';
import MessageIcon from '@mui/icons-material/Message';

const DaashboardHome = () => {
    const {user,admin} = useAuth();


    const [isConnect, setIsConnect] = useState(true);

    const [messageValu, setMessageValu] = useState('');
    
    const [ansMessage,setAnsMessage] = useState([]);
    const [AllMessage,setAllMessage] = useState([]);
  
     console.log(AllMessage, "data");
  
  
  
  
    // const [id, setId] = useState(userId);
  
   const socketRef = useRef();
  
    useEffect( () => {
      socketRef.current = io("https://blooming-thicket-66783.herokuapp.com");
      socketRef.current.on("chatMessage", (data)=>{
        console.log(data);
        
      });
    } ,[])
  
    useEffect( () => {
      socketRef.current = io("https://blooming-thicket-66783.herokuapp.com");
      socketRef.current.on("getMessage", (data)=>{
        setAnsMessage(data.ans);
        
        
      });
    } ,[])
    
    useEffect(()=>{
      
      const tempMsg = [...AllMessage,ansMessage];
      
        setAllMessage(tempMsg);
    },[ansMessage])
  
  


    useEffect( () => {
        if (user.email && admin) {
            socketRef.current.emit("chatMessage",{ admin_email: user.email});
            

        }
    } ,[user.email,admin])



  

const hendlaMessage = (e) => {
  if(e.target.value){
    if(e.keyCode === 13){
      socketRef.current.emit("chatMessage",{message: messageValu,  admin_email: user.email})
      e.target.value = "";
    }

  }else{
    alert("type Something")
  }
}
  
    return (
        <div>
            
            
            
            <h2>Dashboard Home</h2>
            {isConnect ? <DashMessage hendlaMessage={hendlaMessage} AllMessage={AllMessage} setIsConnect={setIsConnect} setMessageValu={setMessageValu} admin={admin} /> :   <p style={{position: "fixed", right: "20px", bottom: "100px", cursor: "pointer"}}> Chat <MessageIcon  onClick={() => setIsConnect(true)} > </MessageIcon> </p> }


           
        </div>
    );
};

export default DaashboardHome;