import { CharacterStory } from "../characterstory/characterstory.interface";
export interface Act{
    id: number,
    actNumber: number,
    characterStories: Array<CharacterStory>,
}
