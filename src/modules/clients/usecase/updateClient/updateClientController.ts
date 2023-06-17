import { IController } from "../../../core/interface/IController";
import { Response , Request} from "express";
import { Result } from "../../../core/erroHandling/customResult";
import { UpdateClientUseCase } from "./updateClientUseCase";
export class UpdateClientController implements IController<any, any>{
    constructor(private updateClientUseCase: UpdateClientUseCase){

    }
    handle(request: Request, response: Response):Response {
        
        const {email, name, nif, responsible,obs, adress, phoneNumber}= request.body;
        const {clientId}= request.params
        const clientOrError:Result<any>= this.updateClientUseCase.execute(clientId,{
            email,
            nif,
            responsible,
            adress,
            phoneNumber,
            name,
            obs 
        });

        if(!clientOrError.isSuccess){
            return response.status(500).send({message: clientOrError.error})
        }
        return response.status(200).send({message: "Cliente actualizado com sucesso"})
    }

}