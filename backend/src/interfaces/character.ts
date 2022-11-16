import { User } from "./user";
import { CharacterStory } from "./characterstory";
export interface Character{
    id: number,
    player: User,
    name: string,
    description: string,
    characterIntroductionStory: CharacterStory,
}
