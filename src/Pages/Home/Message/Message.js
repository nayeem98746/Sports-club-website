import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import useAuth from "../../../Hook/UseAuth";
import "./Message.css";

const Message = ({
  setIsConnect,
  hendlaMessage,
  AllMessage,
  setMessageValu,
}) => {
  const [isContall, setIsContall] = useState(true);

    console.log(AllMessage);

  const { user } = useAuth();

  const dateToTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

  const dateString = new Date().getTime();
  const localDate = new Date(dateString);
  // console.log(`(${dateToTime(localDate)} Your Time)`);
  // console.log(dateString);

  return (
    <div className="ChatMain">
      <div className="chatHeadLine">
        <h3>Message</h3>
      </div>

      <div className="chat-container bg-white">
        <div className="d-flex message-heading">
          {isContall ? (
            <div className="message-inbox me-3">
              <div className=" pe-4">
                <div className="message-headLine">
                  <div>
                    <input type="text" placeholder="Search" />
                    <i class="icon-material-outline-search"> </i>
                  </div>
                </div>

                <div>
                  <ul className="message-box">
                    <li>
                      <a href="#">
                        <div className="d-flex">
                          <div className="message-avatar">
                            <i class="status-icon status-online"></i>
                            <img
                              src="https://i.ibb.co/JHDmPbQ/user-avatar-small-03.jpg"
                              alt=""
                            />
                          </div>
                          <div className="message-by-headline text-center">
                            <div>
                              <span className="ms-3">4 hours ago</span>
                              <h5 className="ms-2">David Peterson</h5>
                            </div>
                            <div className="message-by">
                              <p>
                                Thanks for reaching out. I'm quite busy right
                                now on many
                              </p>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex">
                          <div className="message-avatar">
                            <i class="status-icon status-online"></i>
                            <img
                              src="https://i.ibb.co/cwVjDGd/user-avatar-small-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="message-by-headline text-center">
                            <div>
                              <span className="ms-3">Yesterday</span>
                              <h5 className="ms-2">Sebastiano Piccio</h5>
                            </div>
                            <div className="message-by">
                              <p>
                                Hello, I want to talk about my project if you
                                don't mind!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex">
                          <div className="message-avatar">
                            <i class="status-icon status-online"></i>
                            <img
                              src="https://i.ibb.co/fSgB8YY/user-avatar-placeholder.png"
                              alt=""
                            />
                          </div>
                          <div className="message-by-headline text-center">
                            <div>
                              <span className="ms-3">2 days ago</span>
                              <h5 className="ms-2">Marcin Kowalski</h5>
                            </div>
                            <div className="message-by">
                              <p>
                                Yes, I received payment. Thanks for cooperation!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex">
                          <div className="message-avatar">
                            <i class="status-icon status-online"></i>
                            <img
                              src="https://i.ibb.co/fSgB8YY/user-avatar-placeholder.png"
                              alt=""
                            />
                          </div>
                          <div className="message-by-headline text-center">
                            <div>
                              <span className="ms-3">4 hours ago</span>
                              <h5 className="ms-2">David Peterson</h5>
                            </div>
                            <div className="message-by">
                              <p>
                                Thanks for reaching out. I'm quite busy right
                                now on many
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ position: "fixed", right: "20px", bottom: "10px" }}>
              {" "}
              <MenuIcon
                className="MessageIcon"
                onClick={() => setIsContall(true)}
              >
                {" "}
              </MenuIcon>{" "}
            </p>
          )}

          <div>
            <div className="message-bubble-container">
              <div className="message-inbox-headLine message-action d-flex justify-content-between">
                {" "}
                <MenuIcon
                  onClick={() => setIsContall(true)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <div className="Header_Text">
                  <p>Sports Club</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  {" "}
                  <DoDisturbOnIcon
                    className="Header_Icone"
                    onClick={() => setIsConnect(false)}
                  />{" "}
                </div>
              </div>

              <div className="Conversation">
                {AllMessage?.map((msg) => {
                  return (
                    <div>
                      <div className="message-time-sign mt-3">
                        <span>28 June, 2019</span>
                      </div>
                      <div className="message-bubble">

                      {msg?.question && 
                        <div className="message-bubble-inner flex-row-reverse d-flex">
                          <div className="message-avatar d-flex justify-content-center align-items-center">
                            <img
                              className="ms-3"
                              src="https://www.vasterad.com/themes/hireo_21/images/user-avatar-small-01.jpg"
                              alt=""
                            />
                          </div>
                          <div className="message-text">
                          <p>{msg?.question}</p>
                            
                          </div>
                        </div>

                      }



{msg?.ans && 
                        <div className="message-bubble-inner d-flex">
                          <div className="message-avatar d-flex justify-content-center align-items-center">
                            <img
                              className="ms-3"
                              src="https://i.ibb.co/cwVjDGd/user-avatar-small-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="message-text-2">
                            <p>{msg?.ans}</p>
                          </div>
                        </div>

                }


                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="message-reply d-flex justify-content-center align-items-center">
                <input
                  onKeyUp={(e) => {
                    hendlaMessage(e);
                    setMessageValu(e.target.value);
                  }}
                  placeholder="Your Message"
                />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;