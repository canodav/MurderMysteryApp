import express from "express";
import dotenv from "dotenv";
dotenv.config();

import db from "./utils/database";

import gameRoutes from "./game/game.routes";
import roomRoutes from "./room/room.routes";

import { Act } from "./act/act.interface";
import { Character } from "./character/character.interface";
import { Fact } from "./fact/fact.interface";

import { createCharacter } from "./character/character.services";
import { createAct } from "./act/act.services";

import story_0 from "../data/stories/0.json";
import story_1 from "../data/stories/1.json";
import { CharacterStory } from "./characterstory/characterstory.interface";
import { createCharacterStory } from "./characterstory/characterstory.services";
import { createFact } from "./fact/fact.services";
import { createGame } from "./game/game.services";



let stories = [story_0, story_1];
//let characters = [];

(async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("Database connection established");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
})();

const app = express();

function mapCharacters(characters: Array<any>): Array<Character> {
    return characters.map((character) => {
        return createCharacter(
            character.id,
            character.name,
            character.description,
            null
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
    const characters = mapCharacters(story.characters);
    const acts = mapActs(story.acts);
    return createGame(
        story.id,
        story.name,
        story.description,
        characters,
        acts
    );
});

games;

app.use(express.json());

const PORT = 3000;

app.get("/api", (_req, res) => {
    res.send("Hello World!");
});

app.use("/api/game", gameRoutes);
app.use("/api/room", roomRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
