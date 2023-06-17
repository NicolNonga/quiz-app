import { clientModel } from "../../../clients/mdoel/clientModel";
import { IClientRepository } from "../../../clients/repository/interface/IclientRepository";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { attachmentClientDTO } from "../../dto/attachmentClientDTO";
import { AttachementClientModel } from "../../model/attamentClient";
import { AttachementClientRepository } from "../../Repository/implementation/attachementClientRepository";

export class CreateClientAttachementClientUseCase implements IuseCase <attachmentClientDTO, any>{
    constructor(private clientRepository:IClientRepository, private attachementClientRepository:AttachementClientRepository){

    }
    execute(data: attachmentClientDTO, body?: any) : Result<AttachementClientModel | clientModel>{
          if(!this.clientRepository.findById(data.client_id)){
            return Result.fail("Cliente não encontrado")
          }
          return Result.ok(this.attachementClientRepository.create(data))
    }

}