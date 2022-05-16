import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../../../Pages/Shared/Footer/Footer";
import Navigation from "../../../Pages/Shared/Navigation/Navigation";
import ControledSlider from "../../ControledSlider/ControledSlider";
import CountSlider from "../../CountSlider/CountSlider";
import NewsPoint from "../../NewsPoint/NewsPoint";
import Banner from "../Banner/Banner";
import Fans from "../Fans/Fans";
import Message from "../Message/Message";
import Nextmatch from "../Nextmatch/Nextmatch";
import Products from "../Products/Products";
import Sponsored from "../Sponsored/Sponsored";
import Statistics from "../Statistics/Statistics";
import Travel from "../Travel/Travel";
import Video from "../Video/Video";
import WorkHome from "../WorkHome/WorkHome";
import MessageIcon from '@mui/icons-material/Message';
const { io } = require("socket.io-client");

const Home = () => {

  const [isConnect, setIsConnect] = useState(true);
  const [messageValu, setMessageValu] = useState('');
  const [ansMessage,setAnsMessage] = useState([]);
  const [AllMessage,setAllMessage] = useState([]);
console.log(AllMessage);
  // const [id, setId] = useState(userId);

 const socketRef = useRef();

  useEffect( () => {
    socketRef.current = io("http://localhost:7000");
    socketRef.current.on("chatMessage", (data)=>{
      console.log(data);
    });
  } ,[])

  useEffect( () => {
    socketRef.current = io("http://localhost:7000");
    socketRef.current.on("getMessage", (data)=>{
      setAnsMessage(data.ans);
      
    });
  } ,[])
  
  useEffect(()=>{
    const tempMsg = [...AllMessage,ansMessage];
      setAllMessage(tempMsg);
  },[ansMessage])



  const hendlaMessage = (e) => {
            if(e.target.value){
              if(e.keyCode === 13){
                socketRef.current.emit("chatMessage",{message: messageValu})
                e.target.value = "";
              }

            }else{
              alert("type Something")
            }
  }


  return (
    <div>
      
     {isConnect ? <Message hendlaMessage={hendlaMessage} AllMessage={AllMessage} setIsConnect={setIsConnect} setMessageValu={setMessageValu} /> :   <p style={{position: "fixed", right: "20px", bottom: "10px"}}> Chat <MessageIcon  onClick={() => setIsConnect(true)} > </MessageIcon> </p> }


      <Navigation />
      <Banner />
      <Sponsored />
      <WorkHome />
      <Statistics />
      <Nextmatch />
      <ControledSlider />      
      <NewsPoint />
      <Video />
      <Products />
      <Travel />
      <Fans />
      <CountSlider />
      <Footer />

      
    </div>
  );
};

export default Home;
