import React from "react";
import logo from "../../src/images/Group.svg";
import image from "../../src/images/pablo-sign-in 1.svg";
import "./input.scss";

const SignIn: React.FC = () => {
    return (
        <div className="logo">
            <div>
                <img src={logo} alt="Logo" />
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
                <div>
                    <input type="password" placeholder="Password" className="input"/>
                </div>
                <h6>FORGOT PASSWORD?</h6>
                <button className="btn">Log in</button>
            </div>
        </div>
    );
};

export default SignIn;
