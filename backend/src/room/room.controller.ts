import { Room } from "./room.interface";
import { createRoomService, getRoomService } from "./room.services";

import { Request, Response } from "express";

export const createRoom = async (req: Request, res: Response) => {
    const { name, email } = req.body; 
    const user = {name, email};
    const roomInfo: object = await createRoomService(user);
    return res.status(200).json(roomInfo);
}

export const getRoom = async (req: Request, res: Response) =>{
    const room: Room = await getRoomService(Number(req.params.id));
    // Send Json response with room
    res.send(room);
}

export const updateRoom = (_req: Request, _res: Response) =>{
    
}
