import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createClientDTO } from "../../dto/createClientDTO";
import { ClientRepository } from "../../repository/implementation/clientRepository";

export class UpdateClientUseCase implements IuseCase<any, any>{
    constructor(private clientRepository: ClientRepository){

    }
    execute(id:string , values:createClientDTO):Result<any> {
       if(!this.clientRepository.findById(id)){
        return Result.fail("Esse Cliente Não foi Contratado")
       }

       return Result.ok(this.clientRepository.update(id, values))
    }



   
}