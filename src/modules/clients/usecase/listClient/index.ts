import { ClientRepository } from "../../repository/implementation/clientRepository";
import { ListClientController } from "./listClientController";
import { ListClientUseCase } from "./listClientUseCase";

const clientRepository=  ClientRepository.getInstance();
const listClientUseCase= new ListClientUseCase(clientRepository);
const listClientController= new ListClientController(listClientUseCase);

export { listClientController}