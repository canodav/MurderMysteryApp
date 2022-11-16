import { Act } from "../act/act.interface";
import { Character } from "../character/character.interface";
export interface Game{
    id: number,
    title: string,
    description: string,        
    characters: Array<Character>,
    acts: Array<Act>,
}
