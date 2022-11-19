import { User as UserModel } from "../user/user.model";
export const createUser= async (name: string, email: string, character: number | null, isAdmin: boolean, roomId: number | null) : Promise<object> => {
    try{ 
        if(character === null){
            console.log("aaaa");
            const user = await UserModel.create({name, email, isAdmin, roomId});
            return user;
        }
        else{
            const user = await UserModel.create({ name, email, character, isAdmin, roomId});
            return user;
        }
    }
    catch(error){
        console.log(error);
        return {success: false};
    }
}