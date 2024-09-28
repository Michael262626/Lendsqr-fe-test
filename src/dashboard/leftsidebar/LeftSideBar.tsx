import React, { useState } from "react";
import "./leftbar.scss";
import { Link } from "react-router-dom";
import messages from "../../images/tire.png"
import logo from "../../images/briefcase.png";
import logout from "../../images/sign-out.png"
import guarantor from "../../images/gurantor.png"
import handshake from "../../images/handshake.png"
import savings from "../../images/savings.png"
import clipboard from "../../images/clipboard.png"
import account from "../../images/account.png"
import badge from "../../images/basge.png"
import reports from "../../images/reports.png"
import preferences from "../../images/preferences.png"
import services from "../../images/galaxy.png"
import request from "../../images/request.png"
import fees from "../../images/fees.png"
import transaction from "../../images/transaction.png"
import bank from "../../images/bank.png"
import settlement from "../../images/settlements.png"
import karma from "../../images/karma.png"
import whiteList from "../../images/white-list.png"
import loans from "../../images/loans.png"
import user from "../../images/user.png"
import home from "../../images/home.png";
import drop from "../../images/dropdown.png";

const LeftSideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="left-side-bar">
            <div className="img-txt">
                <img src={logo} alt="Logo"/>
                <h5>Switch Organisation</h5>
                <img
                    src={drop}
                    alt="Drop"
                    className="dropdown-toggle"
                    onClick={toggleDropdown}
                />
            </div>

            {/* Dropdown content that shows when 'isOpen' is true */}
            {isOpen && (
                <div>
                    <div className="dropdown-content">
                        <Link to="/userdashboard" className="dropdown-link">
                            <img src={home} alt="Home"/>
                            <h5>Dashboard</h5>
                        </Link>
                    </div>
                    <h6>CUSTOMERS</h6>
                    <div className="dropdown-content2">
                        <img src={user} alt=""/>
                        <h5>Users</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={guarantor} alt=""/>
                        <h5>Guarantors</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={loans} alt=""/>
                        <h5>Loans</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={handshake} alt=""/>
                        <h5>Decision Models</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={savings} alt=""/>
                        <h5>Savings</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={request} alt=""/>
                        <h5>Loan Requests</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={whiteList} alt=""/>
                        <h5>Whitelist</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={karma} alt=""/>
                        <h5>Karma</h5>
                    </div>

                    <h6>BUSINESS</h6>
                    <div className="dropdown-content3">
                        <img src={logo} alt=""/>
                        <h5>Organisation</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={request} alt=""/>
                        <h5>Loan Products</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={bank} alt=""/>
                        <h5>Savings Products</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={fees} alt=""/>
                        <h5>Fees and Charges</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={transaction} alt=""/>
                        <h5>Transactions</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={services} alt=""/>
                        <h5>Services</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={account} alt=""/>
                        <h5>Services Account</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={settlement} alt=""/>
                        <h5>Settlements</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={reports} alt=""/>
                        <h5>Reports</h5>
                    </div>
                    <h6>SETTINGS</h6>
                    <div className="dropdown-content3">
                        <img src={preferences} alt=""/>
                        <h5>Preferences</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={badge} alt=""/>
                        <h5>Fees and Pricing</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={clipboard} alt=""/>
                        <h5>Audit Logs</h5>
                    </div>
                    <div className="dropdown-content3">
                        <img src={messages} alt=""/>
                        <h5>System Messages</h5>
                    </div>
                </div>
            )}
            <div className="dropdown-content4">
                <img src={logout} alt=""/>
                <h5>Logout</h5>
            </div>
        </div>
    );
};

export default LeftSideBar;
