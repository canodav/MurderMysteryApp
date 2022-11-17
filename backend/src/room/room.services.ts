import { Room } from "./room.interface";
import { Room as RoomModel } from "./room.model";
import { createUserService } from "../user/user.services";

export const createRoomService = async (user: {name: string, email: string}) : Promise<object> => {
    // TODO: Create a room
    try {
        const secretKey = Math.floor(Math.random() * 90000) + 10000;
        const room = await RoomModel.create({secretKey, currentAct: 0})
        createUserService(user.name, user.email, 1, true, room.dataValues.id);
        return {success: true, room: room.dataValues.id, secretKey: secretKey};
    } catch (error) {
        console.log(error);
        return {success: false};
    }
}

export const getRoomService = async (id: number) : Promise<Room> =>{
    // Check if room exists in database
    // If it does, return the room
    // If it doesn't, return null
    //const user = await RoomModel.findOne({ where: { id } });
    return {
        id,
        players: [],
        game: null,
        currentAct: 0,
        secretKey: "0",
    };
}

export const updateRoom = (_req: Request, _res: Response) =>{
    
}
