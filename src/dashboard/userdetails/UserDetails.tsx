import React from "react";
import Navbar from "../navbar/Navbar";
import LeftSideBar from "../leftsidebar/LeftSideBar";
import Details from "./Details";

const UserDetails: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="content-wrapper">
                <div className="left-sidebar">
                    <LeftSideBar />
                </div>
                <div className="main-content">
                    <Details />
                </div>
            </div>
        </div>
    )
}
export default UserDetails;
