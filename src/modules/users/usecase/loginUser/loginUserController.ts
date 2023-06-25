import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import UserModel from "../../model/userModel";
import { LoginUserUseCase } from "./loginUserUsecase";
import { Request, Response, request } from "express";

export class LoginUserController implements IController<any, any>{
    constructor(private readonly loginUserUseCae: LoginUserUseCase){

    }
   public async handle(request: Request, response: Response): Promise<Response> {

        const {username, password} = request.body;
        const userLogin: Result<UserModel | any> = await this.loginUserUseCae.execute({
            username,
            password
        }) 


        if(!userLogin.isSuccess){
            return response.status(401).send({message: userLogin.error})
        }
 
        return response.status(200).send({message: "user logado",  data: userLogin.getValue()})
    }
}