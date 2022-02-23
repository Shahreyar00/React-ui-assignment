import React from 'react';
import "./ourServices.css";
import hotel from "../../images/hotel.png";
import money from "../../images/money.png";
import money2 from "../../images/money2.png";
import msg from "../../images/msg.png";
import SC from "../../images/SC.png";
import CF from "../../images/CF.png";
import RC from "../../images/RC.png";
import notes from "../../images/notes.png";
import hol from "../../images/holistic.png";
import market from "../../images/market.png";
import dot from "../../images/dot.png";
import sub from "../../images/Sub.png";
import Union from "../../images/Union.png";
import Group2 from "../../images/Group2.png";

const OurServices = () => {
    return (
        <div className="servicesContainer">
            <div className="servicesWrapper">
                <h3 className="serHeadOne">Our Services</h3>
                <h1 className="serTitle">Stuff we do <span className="difColor">best</span></h1>
                <p className="serDesc">
                    Drawing on many years of experience on both sides of the negotiation table, 
                    as investors and an entrepreneurs, the Matrix team provides critical insight 
                    to help you achieve your company's growth and capital raising goals.
                </p>

                <div className="ccCont">
                    <div className="ccVertical">
                        <img src={SC} alt="" className="ccImage" />
                        <img src={dot} alt="" className="ccImage2" />
                    </div>
                    <div className="cc1 cardVertical">
                        <img src={notes} alt="" className="serImage" />
                        <span className="sercardTitle">Financial and operational Assessment</span>
                        <p className="sercardDesc">
                            Are there areas where costs can be reduced or efficiencies can be found?
                        </p>
                    </div>
                    <div className="ccHorizontalCont">
                        <div className="cc3 cardHorizontal">
                            <img src={hol} alt="" className="serImage" />
                            <span className="sercardTitle">New Market Opportunity Assessment</span>
                            <p className="sercardDesc">
                                Are there new customers or areas you can be serving?
                            </p>
                        </div>
                        <div className="sercard cardHorizontal">
                            <img src={market} alt="" className="serImage" />
                            <span className="sercardTitle">New Market Opportunity Assessment</span>
                            <p className="sercardDesc">
                                Are there new customers or areas you can be serving?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="serCardCont">
                    <div className="sercard cardVertical">
                        <img src={money} alt="" className="serImage" />
                        <span className="sercardTitle">Financial and operational Assessment</span>
                        <p className="sercardDesc">
                            Are there areas where costs can be reduced or efficiencies can be found?
                        </p>
                    </div>
                    <div className="sercard cardHorizontal">
                        <img src={hotel} alt="" className="serImage" />
                        <span className="sercardTitle">New Market Opportunity Assessment</span>
                        <p className="sercardDesc">
                            Are there new customers or areas you can be serving?
                        </p>
                    </div>
                    <card className="sercard cardVertical">
                        <img src={msg} alt="" className="serImage" />
                        <span className="sercardTitle">Marketing & Messaging Assessment</span>
                        <p className="sercardDesc">
                            Are you communicating effectively with your customers?
                        </p>
                    </card>
                </div>

                <div className="pointsWrapper">
                    <div className="pointsLeft">
                        <div className="pointsList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Financial Modelling with forecasting, stress testing, and scenario analysis
                            </span>
                        </div>
                        <div className="pointsList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Performing a Company Valuation to determine how much a company is worth forequity financing and also to create a blueprint for growing shareholder value
                            </span>
                        </div>
                        <div className="pointsList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Creating an effective Investor Presentation
                            </span>
                        </div>
                        <div className="pointsList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Outlining a Growth Curve & Financial Roadmap for identifying growth milestones and financial requirements
                            </span>
                        </div>

                    </div>
                    <div className="pointsRight">
                        <div className="pointsRightTop">
                            <img src={CF} alt="" className="pointsImg" />
                            <img src={dot} alt="" className="pointsImg2" />
                        </div>
                        <div className="pointsRightBottom">
                            <img src={money2} alt="" className="pointsLgImg" />
                        </div>
                    </div>
                </div>

                <div className="raisingWrapper">
                    <div className="raisingLeft">
                        <div className="raisingLeftTop">
                            <img src={RC} alt="" className="raisingImg" />
                            <img src={dot} alt="" className="raisingImg2" />
                        </div>
                        <div className="raisingLeftBottom">
                            <img src={Union} alt="" className="raisingLgImg" />
                        </div>
                    </div>
                    <div className="raisingRight">
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Venture Capital
                            </span>
                        </div>
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Debt Financing
                            </span>
                        </div>
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Private equity
                            </span>
                        </div>
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Crowdfunding
                            </span>
                        </div>
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Angel investors
                            </span>
                        </div>
                        <div className="raisingList">
                            <img src={Group2} alt="" className="pointsSub" />
                            <span className="pointsListItem">
                                Factoring and purchase order financing
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices



