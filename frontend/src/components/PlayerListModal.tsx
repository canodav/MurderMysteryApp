import { Player } from "../interfaces";
import { FaTimes } from "react-icons/fa"

import { useEffect, useState } from "react";

export const PlayerListModal = ({ handleConfirm = (event: React.MouseEvent<HTMLElement>, players: Player[]) => { } }) => {

    const [players, setPlayers] = useState<Player[]>([]);
    const [showModal, setShowModal] = useState(false);


    const addPlayer = (player: Player) => {
        setPlayers([...players, player]);
    }

    useEffect(() => {
        console.log(players);
    }, [players]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, id } = e.target;
        const changePlayers: Player[] = players
        changePlayers.forEach(player => {
            if (player.id == parseInt(id)) {
                player.email = value;
            }
        })
    };

    const handleRemovePlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id  = e.currentTarget.getAttribute("data-key")
        if(id){
            const changePlayers: Player[] = players
            const newPlayers = changePlayers.filter(player => player.id != parseInt(id))
            console.log(newPlayers);
            setPlayers(newPlayers);
        }
    }

    return (
        <div className="player-list-modal">
            <div>
                <button onClick={event => {
                    handleConfirm(event, players)
                    setShowModal(!showModal)
                }} >Close and confirm</button>
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
                                            <button onClick={(e) => handleRemovePlayer(e)} data-key={player.id} >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => addPlayer({ id: players.length + 1, email: "" })}>Add player</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

