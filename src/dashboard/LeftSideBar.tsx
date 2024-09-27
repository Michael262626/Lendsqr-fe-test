import React, { useState } from "react";
import "./leftbar.scss";
import logo from "../../src/images/briefcase.png";
import guarantor from "../../src/images/gurantor.png"
import handshake from "../../src/images/handshake.png"
import savings from "../../src/images/savings.png"
import clipboard from "../../src/images/clipboard.png"
import account from "../../src/images/account.png"
import badge from "../../src/images/basge.png"
import reports from "../../src/images/reports.png"
import preferences from "../../src/images/preferences.png"
import services from "../../src/images/galaxy.png"
import request from "../../src/images/request.png"
import fees from "../../src/images/fees.png"
import transaction from "../../src/images/transaction.png"
import bank from "../../src/images/bank.png"
import settlement from "../../src/images/settlements.png"
import karma from "../../src/images/karma.png"
import whiteList from "../../src/images/white-list.png"
import loans from "../../src/images/loans.png"
import user from "../../src/images/user.png"
import home from "../../src/images/home.png";
import drop from "../../src/images/dropdown.png";

const LeftSideBar: React.FC = () => {
    // State to control dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="left-side-bar">
            <div className="img-txt">
                <img src={logo} alt="Logo" />
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
                        <img src={home} alt=""/>
                        <h5>Dashboard</h5>
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
                </div>
            )}
        </div>
    );
};

export default LeftSideBar;
