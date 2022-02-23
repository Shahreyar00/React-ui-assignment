import React from 'react';
import "./process.css";
import Group1 from "../../images/Group1.png";
import Group3 from "../../images/Group3.png";

const Process = () => {
    return (
        <div className="processCont">
            <div className="processWrapper">
                <h3 className="proHeadOne">Process</h3>
                <h1 className="proTitle">Our approach is <span className="difColor">iterative</span></h1>
                <p className="proDesc">
                    we believe a product should deliver incremental value quickly so the market can decide where it fits.
                    We help turn good ideas to great products, here’s how:
                </p>

                <div className="boxWrapper">
                    <img src={Group3} alt="" className="boxGroup" />
                    <div className="boxWrapperTop">
                        <div className="boxWrapperTopLeft">
                            <div className="boxCard lite">
                                <h2 className="boxTitle">Discovery</h2>
                                <p className="boxDesc">
                                    Successful companies need to deliver solutions that are “need to haves”, not just “nice to haves”.
                                </p>
                            </div>
                        </div>
                        <div className="boxWrapperTopRight">
                            <div className="boxCard dark">
                                <h2 className="boxTitle">Design</h2>
                                <p className="boxDesc">
                                    Every business needs a clear path to profitability, enabling responsible growth and 
                                    leading to financing options beyond just venture capital.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="boxWrapperBottom">
                        <div className="boxWrapperBottomLeft">
                            <div className="boxCard dark">
                                <h2 className="boxTitle b2">Development</h2>
                                <p className="boxDesc">
                                    Businesses should deliver value to all stakeholders, not just shareholders, 
                                    taking care of employees, vendors, and customers alike.
                                </p>
                            </div>
                        </div>
                        <div className="boxWrapperBottomRight">
                            <div className="boxCard lite">
                                <h2 className="boxTitle b2">Delivery</h2>
                                <p className="boxDesc">
                                    Businesses should deliver value to all stakeholders, not just shareholders, 
                                    taking care of employees, vendors, and customers alike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process