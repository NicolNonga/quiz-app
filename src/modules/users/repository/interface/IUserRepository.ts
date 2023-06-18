import { createUserDTO } from "../../dto/createUserDTO";
import UserModel from "../../model/userModel";




interface  IUserRepository {

    create(userData: createUserDTO): Promise<UserModel>
    findByUserName(userName: string) : Promise<UserModel>
    findAll(): Promise<UserModel []> 
    findById(id: string): Promise<UserModel>
    update(id: string, userData: createUserDTO): any
}

export {IUserRepository}