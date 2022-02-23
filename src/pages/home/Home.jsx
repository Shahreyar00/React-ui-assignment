import React from 'react';
import "./home.css";
// import Intro from '../../components/intro/Intro'
// import Navbar from '../../components/navbar/Navbar'
import lg from "../../images/im1.png";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeWrapper">
                <div className="homeTop">
                    <div className="homeLeft">
                        <div className="imgContainer">
                            <img src={lg} alt="" className="logo" />
                        </div>
                    </div>
                    <div className="homeRight">
                        <ul className="list">
                            <li className="listItem">Home</li>
                            <li className="listItem">About us</li>
                            <li className="listItem">Services</li>
                            <li className="listItem">Program</li>
                        </ul>
                        <button className="navButton">Contact Us</button>
                    </div>
                </div>
                <div className="homeBottom">
                    <span className="bphrase">matrix venture studio</span>
                    <span className="bphrase">Ideation</span>
                    <span className="bphrase">Innovation</span>
                    <span className="bphrase">Incubation</span>
                </div>
            </div>
        </div>
    )
}

export default Home