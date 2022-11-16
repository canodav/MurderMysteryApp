import { User } from "./user";
import { Game } from "./game";
export interface Room{
    id: number;
    players: Array<User>;
    game: Game;
    currentAct: number;
}