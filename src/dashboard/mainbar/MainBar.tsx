import "./mainbar.scss";
import usersImage from "../../../src/images/users.png";
import detailImage from "../../../src/images/np_view_1214519_000000 1.png";
import activateImage from "../../../src/images/np_user_2995993_000000 1.png";
import activeImage from "../../../src/images/active.png";
import blacklistImage from "../../../src/images/np_delete-friend_3248001_000000 1.png";
import filterImage from "../../../src/images/filter.png";
import loansImage from "../../../src/images/userloans.png";
import menuImage from "../../../src/images/menu.png";
import coinsImage from "../../../src/images/coins.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const organisations = ["Lendsqr", "irorun", "Lendstar"];
const statuses = ["Inactive", "Pending", "Blacklisted", "Active"];

const MainBar = () => {
    const [data, setData] = useState<any[]>([]);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [filterVisible, setFilterVisible] = useState(false);
    const [filters, setFilters] = useState({
        organisation: '',
        username: '',
        email: '',
        phoneNumber: '',
        date: '',
        status: ''
    });

    const API_URL = "https://api.json-generator.com/templates/_y99FMmSZn1p/data?delay=2";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: "Bearer c2w9cbpypi426epl9e9core9vnngxwhcuf506246"
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        const filteredData = data.filter(user => {
            return (
                (!filters.organisation || user.organisation.toLowerCase().includes(filters.organisation.toLowerCase())) &&
                (!filters.username || user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
                (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.phoneNumber || user.phoneNumber.includes(filters.phoneNumber)) &&
                (!filters.date || user.date.includes(filters.date)) &&
                (!filters.status || user.status.toLowerCase().includes(filters.status.toLowerCase()))
            );
        });
        setData(filteredData);
    };

    const resetFilters = () => {
        setFilters({ organisation: '', username: '', email: '', phoneNumber: '', date: '', status: '' });
    };

    const handleMenuToggle = (id: number) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <div className="main">
            <h2>Users</h2>
            <div className="blocks">
                <Link to="/user-details" className="link">
                    <div className="first-block">
                        <img src={usersImage} alt="Total Users" />
                        <h6>USERS</h6>
                        <h3>2,453</h3>
                    </div>
                </Link>
                <div className="first-block">
                    <img src={activeImage} alt="Active Users" />
                    <h6>ACTIVE USERS</h6>
                    <h3>2,453</h3>
                </div>
                <div className="first-block">
                    <img src={loansImage} alt="Users with Loans" />
                    <h6>USERS WITH LOANS</h6>
                    <h3>12,453</h3>
                </div>
                <div className="first-block">
                    <img src={coinsImage} alt="Users with Savings" />
                    <h6>USERS WITH SAVINGS</h6>
                    <h3>102,453</h3>
                </div>
            </div>

            {filterVisible && (
                <div className="filter-section">
                    <h5>Organisation</h5>
                    <select
                        name="organisation"
                        value={filters.organisation}
                        onChange={handleFilterChange}
                        className="select-dropdown"
                    >
                        <option value="" disabled>Select</option>
                        {organisations.map((org, index) => (
                            <option key={index} value={org}>
                                {org}
                            </option>
                        ))}
                    </select>

                    <h5>Username</h5>
                    <input
                        type="text"
                        name="username"
                        placeholder="User"
                        value={filters.username}
                        onChange={handleFilterChange}
                    />

                    <h5>Email</h5>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={filters.email}
                        onChange={handleFilterChange}
                    />

                    <h5>Phone Number</h5>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={filters.phoneNumber}
                        onChange={handleFilterChange}
                    />

                    <h5>Date</h5>
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleFilterChange}
                    />

                    <h5>Status</h5>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="select-dropdown"
                    >
                        <option value="" disabled>Select</option>
                        {statuses.map((status, index) => (
                            <option key={index} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>

                    <div className="btn">
                        <button onClick={resetFilters}>Reset</button>
                        <button onClick={applyFilters}>Filter</button>
                    </div>
                </div>
            )}

            {/* Display User Data from API */}
            <div className="user-list">
                {/* Table for Desktop View */}
                <table className="desktop-table">
                    <thead>
                    <tr>
                        <th onClick={toggleFilter}>
                            Organisation
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
                        </th>
                        <th>
                            Username
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
                        </th>
                        <th>
                            Email
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
                        </th>
                        <th>
                            Phone Number
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
                        </th>
                        <th>
                            Date Joined
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
                        </th>
                        <th>
                            Status
                            <img src={filterImage} alt="Filter icon" className="filter-icon" />
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
                            <td>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={menuImage}
                                        alt="Menu"
                                        className="menu-icon"
                                        onClick={() => handleMenuToggle(user.id)}
                                    />
                                    {openMenu === user.id && (
                                        <div className="dropdown-menu">
                                            <div className="menu-item">
                                                <img src={detailImage} alt="View" style={{ marginRight: '8px' }} />
                                                View Details
                                            </div>
                                            <div className="menu-item">
                                                <img src={blacklistImage} alt="Blacklist" style={{ marginRight: '8px', marginTop: '5px' }} />
                                                Blacklist User
                                            </div>
                                            <div className="menu-item">
                                                <img src={activateImage} alt="Activate" style={{ marginRight: '8px', marginTop: '5px' }} />
                                                Activate User
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Column Display for Mobile View */}
                <div className="mobile-column">
                    {data.map(user => (
                        <div className="user-card" key={user.id}>
                            <img
                                src={menuImage}
                                alt="Menu"
                                className="menu-icon"
                                onClick={() => handleMenuToggle(user.id)}
                            />
                            <img src={filterImage} alt="Filter icon" className="filter-icon" onClick={toggleFilter}/>
                            <p><strong>Organisation:</strong> {user.organisation}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                            <p><strong>Date Joined:</strong> {user.date}</p>
                            <p>
                                <span className={`status-badge ${user.status.toLowerCase()}`}>
                                    {user.status}
                                </span>
                            </p>
                            {openMenu === user.id && (
                                <div className="dropdown-menu">
                                    <div className="menu-item">
                                        <img src={detailImage} alt="View" style={{marginRight: '8px'}}/>
                                        View Details
                                    </div>
                                    <div className="menu-item">
                                        <img src={blacklistImage} alt="Blacklist"
                                             style={{marginRight: '8px', marginTop: '5px'}}/>
                                        Blacklist User
                                    </div>
                                    <div className="menu-item">
                                        <img src={activateImage} alt="Activate"
                                             style={{marginRight: '8px', marginTop: '5px'}}/>
                                        Activate User
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainBar;
