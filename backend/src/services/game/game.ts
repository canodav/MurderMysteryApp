import { Game } from "../../types";

export const createGame = (): boolean => {
    return false;
};
export const getGame = (id: number): Game => {
    console.log(id);
    return {
        id: 1,
        players: [],
        description: "test",
        act: {
            id: 1,
            actNumber: 1,  
            playerStories: [],
        },
    };
};
