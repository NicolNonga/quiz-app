
import { Request, Response, request } from "express";
import { IController } from "../../core/interface/IController";
import { Result } from "../../core/erroHandling/customResult";
import UserModel from "../model/userModel";
import { CreateUserUseCase } from "./createUser/createUserUseCase";



export class CreateUserController implements IController<any, any>{
    constructor(private createUserUseCase: CreateUserUseCase){

    }
   
   async handle(request: Request, response: Response):Promise<Response> {
      
        const {username, type_user, password}=  request.body;
        const userOrError : Result<UserModel | any>  = await this.createUserUseCase.execute({
            username: username,
            password:  password, 
            type_user: type_user
        })

        if(!userOrError.isSuccess){
            return response.status(400).send({message: userOrError.error})
        }
        return response.status(201).send({message: "User Criado com sucesso"})
    }

} 