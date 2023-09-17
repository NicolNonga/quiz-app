import { ICrypt } from "../../../core/adapter/interface/crypt-adapter";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { LoginUserDTO } from "../../dto/loginUserDTO";
import UserModel from "../../model/userModel";
import { IUserRepository } from "../../repository/interface/IUserRepository";

export class LoginUserUseCase implements IuseCase<LoginUserDTO, Promise<Result<UserModel>>>{
    constructor(private readonly userRepository: IUserRepository, private comparePassword: ICrypt){

    }
    public async   execute(data: LoginUserDTO ) : Promise<Result<UserModel>> {

        const {username, password}= data
         // first of all we need to check if   the username Exists
         const user =  await this.userRepository.findByUserName(username);

         if(!user?.username || user?.username == undefined){
             return Result.fail("Palavra  Passe ou Username Incorreto")
         }
          if( await this.comparePassword.compare(password, user?.password)){
            return Result.ok(user)
          }
      
          return Result.fail("Palavra  Passe ou Username Incorreto")
    }

}