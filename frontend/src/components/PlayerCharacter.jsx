import { useState } from "react";

export const PlayerCharacter = (props) => {
    console.log(props);

    const [selected, setSelected] = useState('');


    const handleChange = (event) => {
        setSelected(event.target.value);
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
                props.players.map((player) => {
                    return(
                        // if player is not already selected
                        <option key={player.id} value={player.id}>{player.email}</option>
                    )
                })
                }
            </select>
        </div>
    );
};
