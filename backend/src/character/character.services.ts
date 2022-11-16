import { CharacterStory } from "../characterstory/characterstory.interface";
import { Character } from "./character.interface";

export const createCharacter = (id: number, name: string, description: string, characterIntroductionStory: CharacterStory | null) : Character => {
    return {
        id: id,
        name: name,
        description: description,
        characterIntroductionStory: characterIntroductionStory,
    };
}