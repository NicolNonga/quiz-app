import { IController } from "../../../core/interface/IController";
import { clientModel } from "../../mdoel/clientModel";
import { Response, Request } from "express";
import { ListClientUseCase } from "./listClientUseCase";


export  class ListClientController implements IController<any ,Response>{
     constructor(private listClientUseCase: ListClientUseCase){}
    handle(request: Request, response: Response) : Response{
        const client= this.listClientUseCase.execute();
        return response.status(200).send({data: client})
    }
    
}