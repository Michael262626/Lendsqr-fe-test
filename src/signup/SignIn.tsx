import React, {useState} from "react";
import logo from "../../src/images/Group.svg";
import image from "../../src/images/pablo-sign-in 1.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import show/hide icons from react-icons
import "./input.scss";

const SignIn: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle between true and false
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
                    <input type="email" placeholder="Email" className="input"/>
                </div>
                <div className="input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="input"
                    />
                    <span className="toggle-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible/> :
                            <AiFillEye/>}
                    </span>
                </div>
                <h6>FORGOT PASSWORD?</h6>
                <button className="btn">Log in</button>
            </div>
        </div>
    );
};

export default SignIn;
