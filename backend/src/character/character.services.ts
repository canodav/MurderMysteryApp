import { CharacterStory } from "../characterstory/characterstory.interface";
import { Character } from "./character.interface";
import {Character as CharacterModel} from "./character.model";

export const createCharacter = (id: number, name: string, description: string, characterIntroductionStory: CharacterStory | null, important: boolean, thumbnail: string | null) : Character => {
    return {
        id: id,
        name: name,
        description: description,
        characterIntroductionStory: characterIntroductionStory,
        important: important,
        thumbnail: thumbnail,
    };
}


export const storeCharacters = async (characterId: number, gameId: number,  name: string, description: string, characterIntroductionStory: CharacterStory | null, important: boolean, thumbnail: string | null) => {
    // Upload characters into database
    try {
        const character = await CharacterModel.findOne({where: {characterId : characterId, gameId: gameId}});
        if (character) {
            console.log("Character already exists");
        } else {
            const charactersToInsertDB = await CharacterModel.create({
                characterId,
                name,
                gameId,
                description,
                characterIntroductionStory : characterIntroductionStory ? characterIntroductionStory : "",
                important,
                thumbnail
            });
            console.log("Character inserted into database" + charactersToInsertDB);
        }
    } catch (err) {
        console.log(err);
    }
}

