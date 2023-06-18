import { IuseCase } from "../../../core/interface/IUseCase";
import { createUserDTO } from "../../dto/createUserDTO";

export class CreateUserUseCase implements IuseCase<createUserDTO, any>{

    constructor(private UserRepository:any){
        
    }
    execute(request?: createUserDTO) {


        throw new Error("Method not implemented.");
    }
    
}