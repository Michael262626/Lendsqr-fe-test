import React, { useState } from "react";
import "./leftbar.scss";
import { Link } from "react-router-dom";
import messages from "../../images/tire.png";
import logo from "../../images/briefcase.png";
import logout from "../../images/sign-out.png";
import guarantor from "../../images/gurantor.png";
import handshake from "../../images/handshake.png";
import savings from "../../images/savings.png";
import clipboard from "../../images/clipboard.png";
import account from "../../images/account.png";
import badge from "../../images/basge.png";
import reports from "../../images/reports.png";
import preferences from "../../images/preferences.png";
import services from "../../images/galaxy.png";
import request from "../../images/request.png";
import fees from "../../images/fees.png";
import transaction from "../../images/transaction.png";
import bank from "../../images/bank.png";
import settlement from "../../images/settlements.png";
import karma from "../../images/karma.png";
import whiteList from "../../images/white-list.png";
import loans from "../../images/loans.png";
import user from "../../images/user.png";
import home from "../../images/home.png";
import drop from "../../images/dropdown.png";

const LeftSideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Hamburger Icon for mobile view */}
            <div className="hamburger" onClick={toggleSidebar}>
                &#9776; {/* Unicode for hamburger icon */}
            </div>
            <div className={`left-side-bar ${isSidebarOpen ? 'open' : 'closed'}`}>
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
                            <Link to="/userdashboard" className="dropdown-link">
                                <img src={home} alt="Home" />
                                <h5>Dashboard</h5>
                            </Link>
                        </div>
                        <h6>CUSTOMERS</h6>
                        {/* Customer Links */}
                        {[
                            { src: user, label: "Users" },
                            { src: guarantor, label: "Guarantors" },
                            { src: loans, label: "Loans" },
                            { src: handshake, label: "Decision Models" },
                            { src: savings, label: "Savings" },
                            { src: request, label: "Loan Requests" },
                            { src: whiteList, label: "Whitelist" },
                            { src: karma, label: "Karma" },
                        ].map((item, index) => (
                            <div className="dropdown-content3" key={index}>
                                <img src={item.src} alt={item.label} />
                                <h5>{item.label}</h5>
                            </div>
                        ))}

                        <h6>BUSINESS</h6>
                        {/* Business Links */}
                        {[
                            { src: logo, label: "Organisation" },
                            { src: request, label: "Loan Products" },
                            { src: bank, label: "Savings Products" },
                            { src: fees, label: "Fees and Charges" },
                            { src: transaction, label: "Transactions" },
                            { src: services, label: "Services" },
                            { src: account, label: "Services Account" },
                            { src: settlement, label: "Settlements" },
                            { src: reports, label: "Reports" },
                        ].map((item, index) => (
                            <div className="dropdown-content3" key={index}>
                                <img src={item.src} alt={item.label} />
                                <h5>{item.label}</h5>
                            </div>
                        ))}

                        <h6>SETTINGS</h6>
                        {/* Settings Links */}
                        {[
                            { src: preferences, label: "Preferences" },
                            { src: badge, label: "Fees and Pricing" },
                            { src: clipboard, label: "Audit Logs" },
                            { src: messages, label: "System Messages" },
                        ].map((item, index) => (
                            <div className="dropdown-content3" key={index}>
                                <img src={item.src} alt={item.label} />
                                <h5>{item.label}</h5>
                            </div>
                        ))}
                    </div>
                )}
                <div className="dropdown-content4">
                    <img src={logout} alt="Logout" />
                    <h5>Logout</h5>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
