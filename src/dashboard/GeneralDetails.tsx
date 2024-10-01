import React from "react";
import Navbar from "./navbar/Navbar";
import LeftSideBar from "./leftsidebar/LeftSideBar";
import Detail from "./userdetails/Detail";
import "./dashboard.scss"

const GeneralDetails: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="content-wrapper">
                <div className="left-sidebar">
                    <LeftSideBar />
                </div>
                <div className="main-content">
                    <Detail />
                </div>
            </div>
        </div>
    );
}

export default GeneralDetails;
