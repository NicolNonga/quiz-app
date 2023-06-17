import { ClientRepository } from "../../../clients/repository/implementation/clientRepository";
import { AttachementClientRepository } from "../../Repository/implementation/attachementClientRepository";
import { CreateClientAttamentController } from "./createClientAttachementController";
import { CreateClientAttachementClientUseCase } from "./createClientAttachementUsecase";

const attachementClientRepository=  AttachementClientRepository.getInstance();
const clientRepository= ClientRepository.getInstance();
const createClientattachementClientUseCase= new CreateClientAttachementClientUseCase(clientRepository, attachementClientRepository);
const createClientAttamentController= new CreateClientAttamentController(createClientattachementClientUseCase);


export { createClientAttamentController }