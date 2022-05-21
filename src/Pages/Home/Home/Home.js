import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../Pages/Shared/Footer/Footer";
import Navigation from "../../../Pages/Shared/Navigation/Navigation";
import ControledSlider from "../../ControledSlider/ControledSlider";
import CountSlider from "../../CountSlider/CountSlider";
import NewsPoint from "../../NewsPoint/NewsPoint";
import Banner from "../Banner/Banner";
import Fans from "../Fans/Fans";
import Nextmatch from "../Nextmatch/Nextmatch";
import Products from "../Products/Products";
import Sponsored from "../Sponsored/Sponsored";
import Statistics from "../Statistics/Statistics";
import Travel from "../Travel/Travel";
import Video from "../Video/Video";
import WorkHome from "../WorkHome/WorkHome";
import MessageIcon from '@mui/icons-material/Message';
import './Home.css';
import ChatApp from "../ChatApp/ChatApp";

const { io } = require("socket.io-client");




const Home = () => {

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
      
     {isConnect ? <ChatApp hendlaMessage={hendlaMessage} AllMessage={AllMessage} setIsConnect={setIsConnect} setMessageValu={setMessageValu} /> :   <p style={{position: "fixed", right: "20px", bottom: "10px"}}>  <MessageIcon className="MessageIcon"  onClick={() => setIsConnect(true)} > </MessageIcon> </p> }


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