import { Game } from "../game/game.interface";
import { createCharacterStory } from "../characterstory/characterstory.services";
import { createFact } from "../fact/fact.services";
import { createCharacter, storeCharacters } from "../character/character.services";
import { createAct } from "../act/act.services";

import { Act } from "../act/act.interface";
import { Character } from "../character/character.interface";
import { Fact } from "../fact/fact.interface";
import { CharacterStory } from "../characterstory/characterstory.interface";

import { Game as GameModel } from "./game.model";
import {Character as CharacterModel} from "../character/character.model";

import story_0 from "../../data/stories/0.json";
import story_1 from "../../data/stories/1.json";


let stories = [story_0, story_1];

export const createGame = (
    id: number,
    title: string,
    description: string,
    characters: Array<Character>,
    acts: Array<Act>,
    thumbnail: string
): Game => {
    return {
        id: id,
        title: title,
        description: description,
        characters: characters,
        acts: acts,
        thumbnail: thumbnail,
    };
};

export const getGames = async (): Promise<Game[]> => {
    const gamesDb = await GameModel.findAll();

    const games = gamesDb.map((game) => {
        return {
            id: game.dataValues.id,
            title: game.dataValues.title,
            description: game.dataValues.description,
            characters: [],
            acts: [],
            thumbnail: game.dataValues.thumbnail,
            min_players: game.dataValues.min_players,
            max_players: game.dataValues.max_players,   
        };
    });
    return games;
};

export const storeGame = async (
    id: number,
    title: string,
    description: string,
    thumbnail: string,
    min_players: number,
    max_players: number
) => {
    // Upload game into database
    try {
        const gameDb = await GameModel.findOne({ where: { id: id } });
        if (gameDb) {
            console.log("Game already exists");
        } else {
            const gameToInsertDB = await GameModel.create({
                id,
                title,
                description,
                thumbnail,
                min_players,
                max_players,
            });
            console.log("Game inserted into database" + gameToInsertDB);
        }
    } catch (err) {
        console.log(err);
    }
};

export const uploadGames = (): Game[] => {
    function mapCharacters(characters: Array<any>, storyId: number): Array<Character> {
        return characters.map((character) => {
            console.log(character, storyId);
            return createCharacter(
                character.id,
                character.name,
                character.description,
                null,
                character.important,
                character.thumbnail
            );
        });
    }

    function mapActs(acts: Array<any>): Array<Act> {
        return acts.map((act) => {
            let characterStories = mapCharacterStories(act.characterStories);
            return createAct(act.id, act.title, characterStories);
        });
    }

    function mapCharacterStories(
        characterStories: Array<any>
    ): Array<CharacterStory> {
        return characterStories.map((characterStory) => {
            let facts = mapFacts(characterStory.facts);
            return createCharacterStory(
                characterStory.character_id,
                facts,
                characterStory.extraInfo
            );
        });
    }

    function mapFacts(facts: Array<any>): Array<Fact> {
        return facts.map((fact) => {
            return createFact(fact.shortText, fact.text, fact.privateFact);
        });
    }

    const games = stories.map((story) => {
        const characters = mapCharacters(story.characters, story.id);
        const acts = mapActs(story.acts);
        return createGame(
            story.id,
            story.name,
            story.description,
            characters,
            acts,
            story.thumbnail
        );
    });


    stories.forEach(async (story) => {
        const stored = await storeGame(
            story.id,
            story.name,
            story.description,
            story.thumbnail,
            story.min_players,
            story.max_players
        );
        console.log(stored);
        story.characters.forEach(async (character) => {
            storeCharacters(character.id, story.id, character.name, character.description, null, character.important, character.thumbnail);
        });
    });
    return games;
};

export const getGameCharacters = async (gameId: number, numCharacters: number): Promise<Character[]> => {
    // Get characters from database
    const charactersDb = await CharacterModel.findAll({
        where: { gameId: gameId },
    });

    const characters = charactersDb.map((character) => {
        return {
            id: character.dataValues.id,
            name: character.dataValues.name,
            description: character.dataValues.description,
            characterIntroductionStory: null,
            important: character.dataValues.important,
            thumbnail: character.dataValues.thumbnail,
        };
    });

    var selectedCharacters = characters.filter((character) => character.important);

    // If there are not enough important characters, add random characters
    if (selectedCharacters.length < numCharacters) {
        var randomCharacters = characters.filter(
            (character) => !character.important
        );
        randomCharacters = randomCharacters.sort(() => Math.random() - 0.5);
        randomCharacters = randomCharacters.slice(0, numCharacters - selectedCharacters.length);
        selectedCharacters = selectedCharacters.concat(randomCharacters);
    }

    return selectedCharacters;
};