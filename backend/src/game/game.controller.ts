import { Request, Response } from "express";
import { getGames as getGamesService } from "./game.services";
//import { } from "./game.services";

export const createGame = (_req: Request, _res: Response) => {

};

export const getGame = (_req: Request, _res: Response) => {
    //getGameService();
};

export const getGames = async (_req: Request, res: Response) => {
    const games = await getGamesService()
    res.send(games);
};
