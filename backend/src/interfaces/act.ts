import { CharacterStory } from "./characterstory";
export interface Act{
    id: number,
    actNumber: number,
    characterStories: Array<CharacterStory>,
}
