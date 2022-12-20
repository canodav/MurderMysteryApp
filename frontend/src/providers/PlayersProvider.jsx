import { createContext, useState } from 'react'

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    
    const addPlayer = (player) => {
        setPlayers([...players, player]);
    }

    const removePlayer = (id) => {
        const newPlayers = players.filter(player => player.id != id);
        setPlayers(newPlayers);
    }

    const setAllPlayers = (new_players) => {
        setPlayers(new_players );
    }
   

    return (
        <PlayersContext.Provider value={{ players, addPlayer, removePlayer, setAllPlayers }}>
        {children}
        </PlayersContext.Provider>
    )
}



