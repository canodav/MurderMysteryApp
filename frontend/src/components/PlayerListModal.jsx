import { FaTimes } from "react-icons/fa"

import { useEffect, useState } from "react";
import { PlayersContext } from "../providers/PlayersProvider";
import { useContext } from "react";

export const PlayerListModal = () => {
    const { players, addPlayer, removePlayer, setAllPlayers }  = useContext(PlayersContext);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, id } = e.target;
        const newPlayers = players.map((player) => {
            if (player.id == parseInt(id)) {
                player.email = value;
            }
            return player;
        })
        setAllPlayers(newPlayers);
    };

    const players_email = players.map((player) => player.email);


    return (
        <div className="player-list-modal">
            <div>
                <button onClick={() => { setShowModal(!showModal) }} >Close and confirm</button>
            </div>
            <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Players</h3>
                    </div>
                    <div className="modal-body">
                        <div className="player-list">
                            {
                                players.map((player) => {
                                    return (
                                        <div className="player" key={player.id} data-key={player.id} >
                                            <input type="text" name="email" id={player.id.toString()} defaultValue={player.email} onChange={handleInputChange} />
                                            <button onClick={(e) => removePlayer(player.id)} data-key={player.id} >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => addPlayer({ id: players.length + 1, email: "" , character: undefined})}>Add player</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

