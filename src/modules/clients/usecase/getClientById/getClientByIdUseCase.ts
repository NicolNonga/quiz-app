import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { clientModel } from "../../mdoel/clientModel";
import { IClientRepository } from "../../repository/interface/IclientRepository";

export class GetClientByIdUseCase implements IuseCase<any, any>{
    constructor(private clientRepository:IClientRepository){}
    execute(id:string):Result<clientModel> {
           if(!this.clientRepository.findById(id)){
            return Result.fail("Este Id não esta associado a um client")
           }
           return Result.ok(this.clientRepository.findById(id))
    }

}