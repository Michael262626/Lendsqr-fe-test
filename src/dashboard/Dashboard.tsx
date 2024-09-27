import React from "react";
import Navbar from "./navbar/Navbar";
import LeftSideBar from "./leftsidebar/LeftSideBar";
import MainBar from "./mainbar/MainBar";
import "./dashboard.scss";

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="content-wrapper">
                <div className="left-sidebar">
                    <LeftSideBar />
                </div>
                <div className="main-content">
                    <MainBar />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
