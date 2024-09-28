import React from "react";
import Navbar from "../navbar/Navbar";
import LeftSideBar from "../leftsidebar/LeftSideBar";
import GDetails from "./GDetails";

const GeneralDetails: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="content-wrapper">
                <div className="left-sidebar">
                    <LeftSideBar />
                </div>
                <div className="main-content">
                    <GDetails />
                </div>
            </div>
        </div>
    );
}

export default GeneralDetails;
