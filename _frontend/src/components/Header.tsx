import { Link, Navigate } from "react-router-dom";
import logo from "../../public/assets/img/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div id="app-header">
            <div>
                <button className="btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </button>
            </div>
            <div id="logo">
                <img src={logo} alt="Murder Mystery App Logo" />
            </div>
            <Link className="btn" to="/login">
                <RiLoginCircleFill />
            </Link>
        </div>
    );
};
