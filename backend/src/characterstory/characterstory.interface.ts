import { Fact } from "../fact/fact.interface";

export interface CharacterStory{
    characterId: number, 
    story: Array<Fact>,
    extraInfo: string,
}