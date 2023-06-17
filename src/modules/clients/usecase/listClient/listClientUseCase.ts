import { IuseCase } from "../../../core/interface/IUseCase";
import { IClientRepository } from "../../repository/interface/IclientRepository";

export class ListClientUseCase implements IuseCase <any, any>{
    constructor(private clientRepository: IClientRepository){}
    execute() {
         return this.clientRepository.findAll();
    }

}