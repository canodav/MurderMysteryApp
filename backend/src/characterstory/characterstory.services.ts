import { CharacterStory } from "./characterstory.interface";
import { Fact } from "../fact/fact.interface";

export const createCharacterStory = (characterId: number, story: Array<Fact>, extraInfo: string) : CharacterStory => {
    return {
        characterId,
        story,
        extraInfo
    }

}