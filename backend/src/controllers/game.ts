import { Game } from "../interfaces/game";


export const createGame = (): Game => {
    return {
        id: 0,
        title: "Game title",
        description: "Game description",
        characters: [],
        acts: [],
    }
};
export const getGame = (_id: number): Game => {
    return {
        id: 1,
        title: "",
        description: "Game description",
        characters: [],
        acts: [],
    };
};
