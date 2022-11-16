import { Game } from "../game/game.interface";
import { Act } from "../act/act.interface";
import { Character } from "../character/character.interface";


export const createGame = (id: number, title: string, description: string, characters: Array<Character>, acts: Array<Act>) : Game => { 
    return {
        id: id,
        title: title,
        description: description,
        characters: characters,
        acts: acts,
    };
};
