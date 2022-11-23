import { Request, Response } from "express";
import { getGames as getGamesService, getGameCharacters as getGameCharactersService } from "./game.services";
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

export const getGameCharacter = async (req: Request, res: Response) => {
    //getGameService();
    const gameId = Number(req.params.id);
    const numCharacters = Number(req.params.num);
    const characters = await getGameCharactersService(gameId, numCharacters);
    res.send(characters);
}
