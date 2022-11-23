import { Request, Response } from "express";
import { createUser as createUserService } from "./user.services";


export const createUser = async (req: Request, res: Response) => {
    const {username, email} = req.body; 
    const user = await createUserService(username, email, null, false, null);
    console.log(user);
    res.send(user);
}

export const getUser = async (_req: Request, _res: Response) =>{
  
}

export const getUsers = async (_req: Request, _res: Response) =>{
      
}

export const updateUser = (_req: Request, _res: Response) =>{
    
}


export const deleteUser = (_req: Request, _res: Response) =>{

}