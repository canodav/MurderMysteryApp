import { Character } from "../character/character.interface"
export interface User{
    id: number,
    name: string,
    email: string,
    character: Character,
    isAdmin: boolean
}
