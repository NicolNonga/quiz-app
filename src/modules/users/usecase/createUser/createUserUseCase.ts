import { clientModel } from "../../../clients/mdoel/clientModel";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createUserDTO } from "../../dto/createUserDTO";
import UserModel from "../../model/userModel";
import { IUserRepository } from "../../repository/interface/IUserRepository";

export class CreateUserUseCase implements IuseCase<createUserDTO, any>{

    constructor(private UserRepository:IUserRepository){

    }
   
   async execute(data?: createUserDTO):Promise<Result <UserModel | any>>{

    console.log(data.username)


        //? check if the username alread exists or not

        const user = await this.UserRepository.findByUserName(data.username)

         if(user.username){
            return  Result.fail("Já existe um utilizador com esse  nome")
         }
        
         const  userCreated:UserModel = await this.UserRepository.create({
            username: data.username,
            type_user: data.type_user,
            password:  data.password  // hash the password before save
         })
         return Result.ok(userCreated)
    }
    
}