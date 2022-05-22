import React from "react";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "../../../Hook/UseAuth";
import logo from "../../../Images/Chat/sports.png";

const DashMessage = ({
  setIsConnect,
  hendlaMessage,
  AllMessage,
  setMessageValu,
  admin,
}) => {
  console.log(AllMessage);

  const { user } = useAuth();

  const dateToTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

  const dateString = new Date().getTime();
  const localDate = new Date(dateString);
  //   console.log(`(${dateToTime(localDate)} Your Time)`);

  return (
    <div className="Message">
      {admin ? (
        <div className="ChatMessage">
          <div className="Header">
            <div>
              {" "}
              <LinearScaleIcon className="Header_Icon" />
            </div>
            <div className="Header_Text">
              <p>Sports Club</p>
            </div>
            <div style={{ textAlign: "right" }}>
              {" "}
              <DoDisturbOnIcon
                className="Header_Icon"
                onClick={() => setIsConnect(false)}
              />{" "}
            </div>
          </div>

          <div className="Chat">
            {AllMessage.map((msg) => {
              return (
                <div style={{ marginBottom: "50px" }}>
                    {
                      msg?.question && 
                  <div className="Person">
                    <PersonIcon
                      style={{
                        color: "#000",
                        display: "inline-block",
                        marginBottom: "3px",
                      }}
                    />
                    <p style={{ color: "#000", display: "inline-block" }}>
                      {user?.displayName?.slice(0, 10)} {dateToTime(localDate)}{" "}
                    </p>
                    <p className="Question">{msg?.question}</p>
                  </div>
                  
                  }
                  
                  {msg?.adminAns &&
                  <div className="User">
                    <img
                      style={{
                        width: "25px",
                        marginBottom: "3px",
                        marginRight: "10px",
                      }}
                      src={logo}
                      alt=""
                    />
                    <p style={{ color: "#000", display: "inline-block" }}>
                      SportClub
                    </p>
                    <div className="Ans">
                     <p>{msg?.adminAns}</p>
                  </div>
                  </div>
            }
                </div>
              );
            })}
          </div>
          <div className="InputBox">
            <input
              placeholder="write a message"
              onKeyUp={(e) => {
                hendlaMessage(e);
                setMessageValu(e.target.value);
              }}
              type="text"
            />

            <SendIcon className="Header_Icon" />

            <p
              style={{ color: "#000", textAlign: "center", marginTop: "10px" }}
            >
              Place today place tomorrow
            </p>
          </div>
        </div>
      ) : (
        <h1>jdssdahfdfs hujdsagh edrysh hdgsgftgg</h1>
      )}
    </div>
  );
};

export default DashMessage;