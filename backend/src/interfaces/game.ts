import { Act } from "./act";
import { Character } from "./character";
export interface Game{
    id: number,
    title: string,
    description: string,        
    characters: Array<Character>,
    acts: Array<Act>,
}
