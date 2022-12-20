import { useState } from "react";
import { PlayersContext } from "../providers/PlayersProvider";
import { useContext } from "react";
import { useEffect } from "react";

export const PlayerCharacter = (props) => {

    const [selected, setSelected] = useState('');

    const {players, setAllPlayers}  = useContext(PlayersContext);

    const handleChange = (event) => {
        setSelected(event.target.value);
        const newPlayers = players.map((player) => {
            if (player.id == parseInt(event.target.value)) {
                player.character = props.character;
            }
            return player;
        })
        setAllPlayers(newPlayers);
    };

    return (
        <div className="player-character">
            <div className="thumbnail">
                <img
                    src={`../../public/assets/img/${props.character.thumbnail}`}
                    alt={props.character.name}
                />
            </div>
            <div className="character-info">
                <h5>{props.character.name}</h5>
                <small>{props.character.description}</small>
            </div>
            <select value={selected} onChange={handleChange} >
                <option disabled={true} value="">--Choose and option--</option>
                {
                players.map((player) => {
                    return(
                        <option key={player.id} value={player.id}>{player.email}</option>
                    )
                })
                }
            </select>
        </div>
    );
};
