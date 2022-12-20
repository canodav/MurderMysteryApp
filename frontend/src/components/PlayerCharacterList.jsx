
import { PlayerCharacter } from "./PlayerCharacter";
import { useContext } from "react";
import { PlayersContext } from "../providers/PlayersProvider";
import { useNavigate } from "react-router-dom";

export const PlayerCharacterList = ({ gameId, characters }) => {
    const navigate = useNavigate();
    const { players } = useContext(PlayersContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const playersWithCharacters = players.filter((player) => player.character);
        if (playersWithCharacters.length == characters.length) {
            navigate("/game/" + gameId, { state: { gameId, players } });
        } else {
            alert("Please select a character for all players");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="player-character-form">
                {characters.map((character) => {
                    const char = {
                        id: character.id,
                        name: character.name,
                        description: character.description,
                        thumbnail: `${gameId}/` + character.thumbnail,
                    };
                    return (
                        <PlayerCharacter key={character.id} character={char} />
                    );
                })}
            </div>
            <button type="submit">Start Game</button>
        </form>
    );
}
