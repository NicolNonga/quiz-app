import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import UserModel from "../../model/userModel";
import { IUserRepository } from "../../repository/interface/IUserRepository";

export class FindAllUsersUseCase implements IuseCase<any, any>{
    constructor(private userRepository:IUserRepository){

    }
  async  execute(request?: any, body?: any):Promise<Result<UserModel | any>> {


        const users = await this.userRepository.findAll()
        return Result.ok(users)

    }
    
}