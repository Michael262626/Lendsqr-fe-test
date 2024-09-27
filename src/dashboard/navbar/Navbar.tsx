import React from "react";
import image from "../../images/Group.svg";
import searchIcon from "../../images/Vector (3).png"
import bell from "../../images/Vector (2).png";
import dropDownIcon  from "../../images/drop.png"
import profile from "../../images/image 4.png";
import searchBar from "../../images/Rectangle 9.png"
import "./navbar.scss";

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <img src={image} alt="logo" />
            <div className="navbar2">
                <input type="text" placeholder="Search for anything" className="input" />
                <div className="search">
                    <img src={searchBar} alt="Seach-icon container"/>
                    <div className="search-bar">
                        <img src={searchIcon} alt="Search icon"/>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <p>Docs</p>
                <img src={bell} alt="Bell icon" />
                <div className="profile-container">
                    <img src={profile} alt="Profile" className="profile-image" />
                    <p>Adedeji</p>
                    <div className="dropdown">
                        <img src={dropDownIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
