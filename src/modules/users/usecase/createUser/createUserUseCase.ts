import { clientModel } from "../../../clients/mdoel/clientModel";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { ICrypt } from "../../adapter/interface/crypt-adapter";
import { createUserDTO } from "../../dto/createUserDTO";
import UserModel from "../../model/userModel";
import { IUserRepository } from "../../repository/interface/IUserRepository";


export class CreateUserUseCase implements IuseCase<createUserDTO, any>{

    private NUMBER_OF_HASH = 10
    constructor(private UserRepository:IUserRepository, private CryptPassword:ICrypt){

    }
   
   async execute(data?: createUserDTO):Promise<Result <UserModel | any>>{

       const {username, password, type_user}= data


        //? check if the username alread exists or not

        const user = await this.UserRepository.findByUserName(data.username)

         if(user.username){
            return  Result.fail("Já existe um utilizador com esse  nome")
         }
        
         const  userCreated:UserModel = await this.UserRepository.create({
                 username,
                 type_user,
                 password: await this.CryptPassword.crypt(password, this.NUMBER_OF_HASH) 
                
         })
         return Result.ok(userCreated)
    }
    
}