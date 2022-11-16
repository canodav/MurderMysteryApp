import { Act } from "./act.interface";
import { CharacterStory } from "../characterstory/characterstory.interface";

export const createAct = (id: number, actNumber: number, characterStories: Array<CharacterStory>) : Act => {
    return {
        id,
        actNumber,
        characterStories,
    }
}