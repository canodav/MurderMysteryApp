import { Link, Navigate } from "react-router-dom";
import logo from "../../public/assets/img/logo.png";
import {RiLoginCircleFill} from "react-icons/ri"

export const HomeHeader = () => {
    return (
        <div className="home-header">
            <Link className="login-btn" to="/login"> <RiLoginCircleFill /> </Link>
            <div id="logo">
                <img src={logo} alt="Murder Mystery App Logo" />
            </div>
        </div>
    );
};
