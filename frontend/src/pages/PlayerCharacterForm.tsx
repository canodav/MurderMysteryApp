import { Header } from "../components/Header";
import { PlayerListModal } from "../components/PlayerListModal";
import { useNavigate, useLocation, json } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlayerCharacter } from "../components/PlayerCharacter";
import { Character, Player } from "../interfaces";

export const PlayerCharacterForm = () => {
    const { state } = useLocation();
    const { gameId, numPlayers } = state;

    const [characters, setCharacters] = useState([] as Character[]);
    const [players, setPlayers] = useState([] as Player[]);

    const navigate = useNavigate();

    const createPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    const handlePlayerChange = (
        event: React.MouseEvent<HTMLElement>,
        players: Player[]
    ) => {
        setPlayers(players);
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            console.log("No token found");
            navigate("/login");
        }

        fetch(
            `http://localhost:4000/api/game/${gameId}/characters/${numPlayers}`,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json);
            });
    }, []);

    useEffect(() => {}, [players]);

    return (
        <div>
            <Header />
            <PlayerListModal handleConfirm={handlePlayerChange} />
            <div id="app-content">
                <div className="page-header">
                    <h3>Select your character</h3>
                </div>
                <div className="player-character-form">
                    {characters.map((character) => {
                        const char: Character = {
                            id: character.id,
                            name: character.name,
                            description: character.description,
                            thumbnail: `${gameId}/` + character.thumbnail,
                        };
                        return (
                            <PlayerCharacter key={character.id} character={char} players={players} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
