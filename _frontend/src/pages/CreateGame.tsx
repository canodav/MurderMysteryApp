import React, { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { StoryButton } from "../components/StoryButton";
import { Game } from "../interfaces";


export const CreateGame = () => {
    const [games, setGames] = useState([] as Game[]);
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            console.log("No token found");
            navigate('/login');
        }

        fetch("http://localhost:4000/api/game", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setGames(json);
            });

    }, []);

    return (
        <div>
            <Header />
            <div id="app-content">
                <div className="page-header">
                    <h3>Select a game</h3>
                </div>
                <div className="story-list">
                    {games.map((game) => {
                        return <StoryButton key={game.id} story={game} />;
                    })}
                </div>
            </div>
        </div>
    );
};
