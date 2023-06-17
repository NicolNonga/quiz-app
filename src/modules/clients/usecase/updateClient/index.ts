import { ClientRepository } from "../../repository/implementation/clientRepository";
import { UpdateClientController } from "./updateClientController";
import { UpdateClientUseCase } from "./updateClientUseCase";

const clientRepository= ClientRepository.getInstance();
const updateClientUseCase= new UpdateClientUseCase(clientRepository);
const updateClientController= new UpdateClientController(updateClientUseCase)

export { updateClientController }