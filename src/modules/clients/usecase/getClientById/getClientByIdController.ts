import { IController } from "../../../core/interface/IController";
import { Request, Response } from "express";
import { Result } from "../../../core/erroHandling/customResult";
import { clientModel } from "../../mdoel/clientModel";
import { GetClientByIdUseCase } from "./getClientByIdUseCase";

export class GetClientByIdController implements IController<any, Response>{
    constructor(private getClientByIdUsecase:GetClientByIdUseCase){

    }
    handle(request?: Request, response?: Response): Response | Promise<Response> {
       const {clientId}= request.params;
       const clientOrError: Result<clientModel> = this.getClientByIdUsecase.execute(clientId);
       if(!clientOrError.isSuccess){
        return response.status(404).send({message: clientOrError.error})
       }
       return response.status(200).send({data: clientOrError.getValue()})
    }

    
}