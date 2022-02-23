import React from 'react';
import AboutUs from '../../components/aboutus/AboutUs';
import OurServices from '../../components/ourServices/OurServices';
import Process from '../../components/process/Process';
import Program from '../../components/programs/Program';
import "./content.css";

const Content = () => {
    return (
        <div className="contentCont">
            <AboutUs />
            <OurServices />
            <Process />
            <Program />
        </div>
    )
}

export default Content