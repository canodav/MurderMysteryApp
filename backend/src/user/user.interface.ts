import { Character } from "../character/character.interface"
export interface User{
    id: number,
    name: string,
    character: Character,
    isAdmin: boolean
}
