import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import { Request , Response} from "express";
import { AttachementClientModel } from "../../model/attamentClient";
import { CreateClientAttachementClientUseCase } from "./createClientAttachementUsecase";
export class CreateClientAttamentController implements IController<any, Response>{
    constructor(private createClientAttachementUseCase:CreateClientAttachementClientUseCase){

    }
    handle(request?: Request, response?: Response): Response | Promise<Response> {
        const {client_id}= request.body
        const {path}= request.file


       const attachementClient: Result<AttachementClientModel |any>= this.createClientAttachementUseCase.execute({
                   client_id,
                  img_path: path
       })

       if(!attachementClient.isSuccess){
        return response.status(500).send({message:attachementClient.error})
       }
       
    return response.status(201).send({message:"Ficheiro Adicionado Com sucesso"})
    }

}