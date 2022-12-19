import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { Header } from "../components/Header";

export const NumPlayerForm = () => {
    const {state} = useLocation();
    const { min_players, max_players } = state;
    var gameId = localStorage.getItem("gameId");
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            console.log("No token found");
            navigate('/login');
        }
    }, []);


    const [numPlayers, setNumPlayers] = useState(min_players);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:4000/api/room/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gameId: gameId,
                numPlayers: numPlayers,
            }),
        }).then(
            () => navigate("/players-character-form", {
                state: {
                    gameId: gameId,
                    numPlayers: numPlayers,
                }
            })
        )
    }

    return (
        <div>
            <Header />
            <div id="app-content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="numPlayers">Number of Players: Max {max_players} / Min {min_players}</label>
                    <input
                        type="number"
                        id="numPlayers"
                        name="numPlayers"
                        value={numPlayers ? numPlayers : ""}
                        onChange={(event) => setNumPlayers(parseInt(event.target.value))}
                        min={min_players}
                        max={max_players}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}