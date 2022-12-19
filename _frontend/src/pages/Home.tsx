import { Link } from "react-router-dom";
import { HomeHeader } from "../components/HomeHeader";

export const Home = () => {
    return (
        <div id="home">
            <HomeHeader />
            <div id="app-content">
                <div className="homepage-menu">
                    <nav>
                        <ul>
                            <li>
                                <Link className="btn" to="/create-game">Create Game</Link>
                            </li>
                            <li>
                                <Link className="btn" to="/join-game">Join Game</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
