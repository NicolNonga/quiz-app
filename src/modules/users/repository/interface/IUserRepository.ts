import { createUserDTO } from "../../dto/createUserDTO";
import UserModel from "../../model/userModel";




interface  IUserRepository {

    create(userData: createUserDTO): UserModel
    findByUserName(userName: String) : UserModel
    findAll(): UserModel []
    findById(id: string): UserModel
    update(id: string, userData: createUserDTO): any
}

export {IUserRepository}