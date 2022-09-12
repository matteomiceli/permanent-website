import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import arrow_right from "../../images/arrow_forward.svg";
import Menu from "./Menu";

const DesktopNav = (props) => {
    return (
        <div id='desktop-nav' className='fade-slide-in'>
            <DefaultButton link="/tickets"
                           label="Get Tickets"
                           isInternal={true}
                           className='transparent'
            >
                <img src={arrow_right} alt="Get your tickets to TEDxSFU 2022 Conference" width="16" height="16"
                     className="filter-white"/>
            </DefaultButton>
            <Menu/>
        </div>
    );
};

export default DesktopNav;