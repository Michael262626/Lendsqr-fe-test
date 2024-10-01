import React, { useEffect, useState } from "react";
import "./gdetails.scss";
import UserDetails from "./UserDetails";

interface User {
    id: number;
    "FULL NAME": string;
    BVN?: string;
    "EMAIL ADDRESS": string;
    "PHONE NUMBER": string;
    GENDER?: string;
    "MARITAL STATUS"?: string;
    CHILDREN?: string;
    "TYPE OF RESIDENCE"?: string;
    "LEVEL OF EDUCATION"?: string;
    "EMPLOYMENT STATUS"?: string;
    "SECTOR OF EMPLOYMENT"?: string;
    "DURATION OF EMPLOYMENT"?: string;
    "OFFICE EMAIL"?: string;
    "MONTHLY INCOME"?: string;
    "LOAN PAYMENT"?: string;
    TWITTER?: string;
    FACEBOOK?: string;
    INSTAGRAM?: string;
    RELATIONSHIP?: string;
}

const Detail: React.FC = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [guarantorData, setGuarantorData] = useState<User | null>(null);
    const apiURL = "https://api.json-generator.com/templates/XE0WlCxq0FA5/data";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiURL, {
                    headers: {
                        Authorization: "Bearer c2w9cbpypi426epl9e9core9vnngxwhcuf506246",
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: User[] = await response.json();
                setUserData(data[0]);
                setGuarantorData(data[1]);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="userdetails">
                <UserDetails />
            </div>
        <div className="gdetails-container">
            <div className="details_sections">
                <div className="details_section">
                    <h3>Personal Information</h3>
                    <div className="details_row">
                        <div className="details_item">
                            <p className="details_key">Full Name</p>
                            <p className="details_value">{userData?.["FULL NAME"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">BVN</p>
                            <p className="details_value">{userData?.BVN}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Email Address</p>
                            <p className="details_value">{userData?.["EMAIL ADDRESS"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Phone Number</p>
                            <p className="details_value">{userData?.["PHONE NUMBER"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Gender</p>
                            <p className="details_value">{userData?.GENDER}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Marital Status</p>
                            <p className="details_value">{userData?.["MARITAL STATUS"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Children</p>
                            <p className="details_value">{userData?.CHILDREN}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Type of Residence</p>
                            <p className="details_value">{userData?.["TYPE OF RESIDENCE"]}</p>
                        </div>
                    </div>
                </div>

                {/* Education and Employment Section */}
                <div className="details_section">
                    <h3>Education and Employment</h3>
                    <div className="details_row">
                        <div className="details_item">
                            <p className="details_key">Level of Education</p>
                            <p className="details_value">{userData?.["LEVEL OF EDUCATION"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Employment Status</p>
                            <p className="details_value">{userData?.["EMPLOYMENT STATUS"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Sector of Employment</p>
                            <p className="details_value">{userData?.["SECTOR OF EMPLOYMENT"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Duration of Employment</p>
                            <p className="details_value">{userData?.["DURATION OF EMPLOYMENT"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Office Email</p>
                            <p className="details_value">{userData?.["OFFICE EMAIL"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Monthly Income</p>
                            <p className="details_value">{userData?.["MONTHLY INCOME"]}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Loan Payment</p>
                            <p className="details_value">{userData?.["LOAN PAYMENT"]}</p>
                        </div>
                    </div>
                </div>

                {/* Socials Section */}
                <div className="details_section">
                    <h3>Socials</h3>
                    <div className="details_row">
                        <div className="details_item">
                            <p className="details_key">Twitter</p>
                            <p className="details_value">{userData?.TWITTER}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Facebook</p>
                            <p className="details_value">{userData?.FACEBOOK}</p>
                        </div>
                        <div className="details_item">
                            <p className="details_key">Instagram</p>
                            <p className="details_value">{userData?.INSTAGRAM}</p>
                        </div>
                    </div>
                </div>

                {/* Guarantor Section */}
                {guarantorData && (
                    <div className="details_section">
                        <h3>Guarantor</h3>
                        <div className="details_row">
                            <div className="details_item">
                                <p className="details_key">Full Name</p>
                                <p className="details_value">{guarantorData["FULL NAME"]}</p>
                            </div>
                            <div className="details_item">
                                <p className="details_key">Phone Number</p>
                                <p className="details_value">{guarantorData["PHONE NUMBER"]}</p>
                            </div>
                            <div className="details_item">
                                <p className="details_key">Email Address</p>
                                <p className="details_value">{guarantorData["EMAIL ADDRESS"]}</p>
                            </div>
                            <div className="details_item">
                                <p className="details_key">Relationship</p>
                                <p className="details_value">{guarantorData["RELATIONSHIP"]}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Detail;
