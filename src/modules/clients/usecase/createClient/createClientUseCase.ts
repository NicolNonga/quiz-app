import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createClientDTO } from "../../dto/createClientDTO";
import { clientModel } from "../../mdoel/clientModel";
import { IClientRepository } from "../../repository/interface/IclientRepository";

export class CreateClientUseCase implements IuseCase<createClientDTO, any> {
  constructor(private clientRepository: IClientRepository){}
  execute(request?: createClientDTO): Result<clientModel> {
   
       if(this.clientRepository.findByName(request.name)){
           return Result.fail("Já existe um cliente com este nome")
       }

       if(this.clientRepository.findByNif(request.nif)){
        return Result.fail("Já existe um nif com este nome")
       }
     return Result.ok(this.clientRepository.create(request))
  }
}
