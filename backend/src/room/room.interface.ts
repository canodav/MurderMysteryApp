import { User } from "../user/user.interface";
import { Game } from "../game/game.interface";
export interface Room{
    id: number;
    players: Array<User>;
    game: Game | null;
    currentAct: number;
    secretKey: string;
    num_players: number;
}