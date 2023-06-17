import { ClientRepository } from "../../repository/implementation/clientRepository";
import { CreateClientController } from "./creatClientController";
import { CreateClientUseCase } from "./createClientUseCase";

const clientRepository = ClientRepository.getInstance();
const creatClientUseCase = new CreateClientUseCase(clientRepository);
const createClientController = new CreateClientController(creatClientUseCase);

export { createClientController };
 