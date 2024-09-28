import arrow from "../../images/arrow.png"
import profile from "../../images/profile.png"
import star1 from "../../images/np_star_1208084_000000 1.png"
import star2 from "../../images/np_star_1171151_000000 1.png"
import line from "../../images/Line.png"
import "./userdetails.scss"
import {Link} from "react-router-dom";


const Details = () => {
    return (
        <div className="details">
            <div className="arrow">
                <img src={arrow} alt="Go back"/>
                <h4>Back to users</h4>
            </div>
            <div className="details_header">
                <h2>User Details</h2>
                <div className="btn">
                    <button className="black-btn">BLACKLIST USER</button>
                    <button>ACTIVATE USER</button>
                </div>
            </div>
            <div className="details_body">
                <div className="profile">
                    <img src={profile} alt="Profile"/>
                    <div className="name">
                        <p>Grace Effiom</p>
                        <h5>LSQFF587g90</h5>
                    </div>
                    <div className="profile2">
                        <img src={line} alt=""/>
                        <div className="star">
                            <h5>User's tiers</h5>
                            <div>
                                <img src={star1} alt=""/>
                                <img src={star2} alt=""/>
                                <img src={star2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="profile2">
                        <img src={line} alt=""/>
                        <div className="star">
                            <h3>₦200,000.00</h3>
                            <div>
                                <h6>9912345678/Providus Bank</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <Link to="/general-details" className="link">
                        <h5>General Details</h5>
                    </Link>
                    <h5>Documents</h5>
                    <h5>Bank Details</h5>
                    <h5>Loans</h5>
                    <h5>Savings</h5>
                    <h5>App and System</h5>
                </div>
            </div>
        </div>
    )
}
export default Details;
