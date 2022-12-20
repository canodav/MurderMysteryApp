import { Header } from "../components/Header";
import { PlayerListModal } from "../components/PlayerListModal";
import { useNavigate, useLocation, json } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PlayersProvider } from "../providers/PlayersProvider";
import { PlayerCharacterList } from "../components/PlayerCharacterList";


export const PlayerCharacterForm = () => {
    const { state } = useLocation();
    const { gameId, numPlayers } = state;

    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            console.log("No token found");
            navigate("/login");
        }

        fetch(`http://localhost:4000/api/game/${gameId}/characters/${numPlayers}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json);
            })
        }, []);


    return (
        <div>
            <Header />
            <PlayersProvider>
                <PlayerListModal/>
                <div id="app-content">
                    <div className="page-header">
                        <h3>Select your character</h3>
                    </div>
                    <PlayerCharacterList characters={characters} />
                </div>
            </PlayersProvider>
        </div>
    );
};
