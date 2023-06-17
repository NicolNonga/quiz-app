import { createClientDTO } from "../../dto/createClientDTO"
import { clientModel } from "../../mdoel/clientModel";

interface IClientRepository {
    create(clientData: createClientDTO): clientModel;
    findByNif(nif: string): clientModel;
    findAll(): clientModel[];
    findByName(name:string): clientModel
    findById(id:string): clientModel
    update(id:string, value:createClientDTO):any

}
export {IClientRepository}