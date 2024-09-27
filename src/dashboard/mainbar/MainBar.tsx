import "./mainbar.scss";
import users from "../../../src/images/users.png";
import active from "../../../src/images/active.png";
import filter from "../../../src/images/filter.png";
import loans from "../../../src/images/userloans.png";
import coins from "../../../src/images/coins.png";
import { useEffect, useState } from "react";
import axios from "axios";

const MainBar = () => {
    const [data, setData] = useState<any[]>([]); // State for user data
    const API_URL = "https://api.json-generator.com/templates/_y99FMmSZn1p/data?delay=2";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: "Bearer c2w9cbpypi426epl9e9core9vnngxwhcuf506246", // Replace with actual API key if needed
                    },
                });
                setData(response.data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main">
            <h2>Users</h2>
            <div className="blocks">
                <div className="first-block">
                    <img src={users} alt="Total Users" />
                    <h6>USERS</h6>
                    <h3>2,453</h3>
                </div>
                <div className="first-block">
                    <img src={active} alt="Active Users" />
                    <h6>ACTIVE USERS</h6>
                    <h3>2,453</h3>
                </div>
                <div className="first-block">
                    <img src={loans} alt="Users with Loans" />
                    <h6>USERS WITH LOANS</h6>
                    <h3>12,453</h3>
                </div>
                <div className="first-block">
                    <img src={coins} alt="Users with Savings" />
                    <h6>USERS WITH SAVINGS</h6>
                    <h3>102,453</h3>
                </div>
            </div>

            {/* Display User Data from API */}
            <div className="user-list">
                <table>
                    <thead>
                    <tr>
                        <th>
                            Organisation
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                        <th>
                            Username
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                        <th>
                            Email
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                        <th>
                            Phone Number
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                        <th>
                            Date Joined
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                        <th>
                            Status
                            <img src={filter} alt="Filter icon" className="filter-icon"/>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.organisation}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.date}</td>
                            <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                        {user.status}
                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MainBar;
