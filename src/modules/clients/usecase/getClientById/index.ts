import { ClientRepository } from "../../repository/implementation/clientRepository";
import { GetClientByIdController } from "./getClientByIdController";
import { GetClientByIdUseCase } from "./getClientByIdUseCase";

const clientRepository= ClientRepository.getInstance();
const getClientByIdUseCase= new GetClientByIdUseCase(clientRepository);
const getClientByIdController= new GetClientByIdController(getClientByIdUseCase);


export { getClientByIdController }