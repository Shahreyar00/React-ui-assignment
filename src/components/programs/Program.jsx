import React from 'react';
import "./program.css";
import link1 from "../../images/link1.png";
import face1 from "../../images/face1.png";
import twit1 from "../../images/twit1.png";

const Program = () => {
    return (
        <div className="progCont">
            <div className="progWrapper">
                <h3 className="progHeadOne">Programs</h3>
                <h1 className="progTitle">Our <span className="difColor">Programs</span></h1>

                <div className="progBoxWrapper">
                    <div className="progBoxWrapTop">
                        <div className="cardVer">
                            <div className="sqVer"></div>
                            <h3 className="sqVerText">Startup Visa <br/> (SUV)</h3>
                        </div>
                        <div className="cardHor">
                            <div className="sqHor"></div>
                            <div className="sqHorText">Business Immigration</div>
                        </div>
                        <div className="cardHor">
                            <div className="sqHor"></div>
                            <div className="sqHorText">Business Immigration</div>
                        </div>
                    </div>   
                    <div className="progBoxWrapBottom">
                        <div className="cardHor">
                            <div className="sqHor"></div>
                            <div className="sqHorText">Atlantic Immigration</div>
                        </div>
                        <div className="cardVer">
                            <div className="sqVer"></div>
                            <h3 className="sqVerText">Agricultural Immigration</h3>
                        </div>
                        <div className="cardHor">
                            <div className="sqHor"></div>
                            <div className="sqHorText">Express Entry</div>
                        </div>
                    </div>   
                </div> 


                <div className="newsLetterWrapper">
                    <div className="newsLeft">
                        <div className="newsLeftText">
                            <h3 className="newsMd">Let's Start</h3>
                            <h2 className="newsLg">Working Together?</h2>
                            <p className="newsDesc">
                                Fill in the form and a Matrix Venture Studio representative will be in touch soon!
                            </p>
                        </div>
                    </div>
                    <div className="newsRight">
                        <form className="newsForm">
                            <input 
                                className="newsInput" 
                                placeholder="Your name"
                            />
                            <input
                                type="email" 
                                className="newsInput" 
                                placeholder="Email"
                            />
                            <textarea 
                                className="formText"
                                placeholder="Your message"
                            />
                            <button className="newsButton">
                                Send 
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footerWrapper">
                    <div className="footerLeft">
                        <span className="footerText">
                            © 2021 Copyright - Matrix Venture Studio. A proud Canadian company.
                        </span>
                    </div>
                    <div className="footerRight">
                        <img src={face1} className="footerImage" />
                        <img src={twit1} className="footerImage" />
                        <img src={link1} className="footerImage" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Program