import { User } from "../user/user.interface";
import { Game } from "../game/game.interface";
export interface Room{
    id: number;
    players: Array<User>;
    game: Game;
    currentAct: number;
}