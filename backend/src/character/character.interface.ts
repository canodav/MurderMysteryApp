import { CharacterStory } from "../characterstory/characterstory.interface";
export interface Character{
    id: number,
    name: string,
    description: string,
    characterIntroductionStory: CharacterStory | null,
}
