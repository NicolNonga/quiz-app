import { CreateClientUseCase } from "./createClientUseCase";
import {Response, Request} from 'express'
import { IController } from "../../../core/interface/IController";
import { Result } from "../../../core/erroHandling/customResult";
import { clientModel } from "../../mdoel/clientModel";
export class CreateClientController implements IController<any, any>{

    constructor(private createClientUseCase: CreateClientUseCase){

    }
    handle(request: Request, response:Response):Response{
        const {email, name, nif, responsible,obs, adress, phoneNumber}= request.body;
       const clientOrError:Result<clientModel>= this.createClientUseCase.execute({
            email,
            nif,
            responsible,
            adress,
            phoneNumber,
            name,
            obs 
        });

        if(!clientOrError.isSuccess){
             return response.status(400).send({message:clientOrError.error})
        }
        console.log(clientOrError)
        return response.status(201).send({message:"Cliente Criado com Sucesso"})
    }
}
