import { User as UserModel } from "../user/user.model";
export const createUserService = async (name: string, email: string, character: number, isAdmin: boolean, roomId: number) : Promise<object> => {
    try{
        const user = await UserModel.create({
            name, email, character, isAdmin, roomId
        });
        return {success: true, id: user.dataValues.id};
    }
    catch(error){
        console.log(error);
        return {success: false};
    }
}