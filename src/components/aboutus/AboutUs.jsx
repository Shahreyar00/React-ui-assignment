import React from 'react';
import "./aboutus.css";
import bal from "../../images/bal.png";
import plant from "../../images/plant.png";
import puzzle from "../../images/puzzle.png";

const AboutUs = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutWrapper">
                <h3 className="headOne">ABOUT US</h3>
                <h1 className="headMain">We turn ideas to companies</h1>
                <p className="headDesc">
                    We believe that entrepreneurship can unlock human potential and make the world a better place. We're strategists, technologists, 
                    entrepreneurs, and academics who partner with companies and individuals to productize dreams and create awesome experiences. 
                    We're often praised for our business-centric approach and how that differentiates us.
                </p>
                <h2 className="headSecond">Core Business Principles</h2> 
                <div className="cardContainer">
                    <div className="card">
                        <img src={puzzle} alt="" className="cardImage" />
                        <span className="cardTitle">Solve a real Human Problem</span>
                        <p className="cardDesc">
                            Successful companies need to deliver solutions that are “need to haves”, 
                            not just “nice to haves”.
                        </p>
                    </div>
                    <div className="card">
                        <img src={bal} alt="" className="cardImage" />
                        <span className="cardTitle">Solve a real Human Problem</span>
                        <p className="cardDesc">
                            Successful companies need to deliver solutions that are “need to haves”, 
                            not just “nice to haves”.
                        </p>
                    </div>
                    <div className="card">
                        <img src={plant} alt="" className="cardImage" />
                        <span className="cardTitle">Solve a real Human Problem</span>
                        <p className="cardDesc">
                            Successful companies need to deliver solutions that are “need to haves”, 
                            not just “nice to haves”.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs