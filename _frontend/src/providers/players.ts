import { Player } from "../interfaces";
import { createContext, useState } from "react";




const PlayersContext = createContext({});

type props = {
    children: JSX.Element;
};

export const PlayersProvider = ({ children } : props) => {
    const [players, setPlayers] = useState([] as Player[]);
    
    return (
        <PlayersContext.Provider value={{ players, setPlayers }}>
        {children}
        </PlayersContext.Provider>
    );
    };