import React, { useState } from "react";
import logo from "../../src/images/Group.svg";
import { useNavigate } from "react-router-dom";
import image from "../../src/images/pablo-sign-in 1.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./input.scss";
import axios from "axios";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "https://api.json-generator.com/templates/g2P52PnYaa3h/data",
                {
                    email,
                    password
                },
                {
                    headers: {
                        Authorization: "Bearer c2w9cbpypi426epl9e9core9vnngxwhcuf506246",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Login successful:", response.data);
                navigate("/userdashboard")
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="logo">
            <div>
                <div className="clogo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="image">
                    <img src={image} alt="Sign In Illustration" />
                </div>
            </div>
            <div className="heading">
                <h1>Welcome!</h1>
                <p>Enter details to login</p>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="toggle-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                </div>
                <h6>FORGOT PASSWORD?</h6>
                <button className="btn" onClick={handleLogin}>
                    Log in
                </button>
            </div>
        </div>
    );
};

export default SignIn;
