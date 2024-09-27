import "./mainbar.scss"
import users from "../../../src/images/users.png"

const MainBar = () => {
    return (
        <div className="main">
            <h2>Users</h2>
            <div className="first-block">
                <img src={users} alt=""/>
                <h6>USERS</h6>
            </div>
        </div>
    )
}
export default MainBar
