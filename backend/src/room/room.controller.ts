import { Room } from "./room.interface";
import { createRoomService, getRoomService } from "./room.services";

import { Request, Response } from "express";

export const createRoom = async (req: Request, res: Response) => {
    const { gameId, numPlayers } = req.body;
    const roomInfo: object = await createRoomService(gameId, numPlayers);
    res.status(200).json(roomInfo);
}

export const getRoom = async (req: Request, res: Response) =>{
    const room: Room = await getRoomService(Number(req.params.id));
    // Send Json response with room
    res.send(room);
}

export const updateRoom = (_req: Request, _res: Response) =>{
    
}
