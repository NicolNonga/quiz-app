import { createClientDTO } from "../../dto/createClientDTO";
import { clientModel } from "../../mdoel/clientModel";
import { IClientRepository } from "../interface/IclientRepository";

export class ClientRepository implements IClientRepository {
  private clients: clientModel[];
  private static INSTANCE: ClientRepository;

  constructor() {
    this.clients = [];
  }

  public static getInstance(): ClientRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new ClientRepository();
    }
    return ClientRepository.INSTANCE;
  }

  create(clientData: createClientDTO): clientModel {
    const client = new clientModel();

    Object.assign(client, { ...clientData });

    this.clients.push(client);
    return client;
  }

  findByNif(nif: string): clientModel {
    const clientNif = this.clients.find((client) => client.nif == nif);
    return clientNif;
  }

  findAll(): clientModel[] {
    return this.clients;
  }

  findByName(name: string): clientModel {
    const clientName = this.clients.find((client) => client.name == name);
    return clientName;
  }

  findById(id: string): clientModel {
    const client = this.clients.find((client) => client.id == id);
    return client;
  }

  update(id: string, value: createClientDTO) {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id == id) {
        this.clients[i].adress = value.adress;
        this.clients[i].name = value.name;
        this.clients[i].email = value.email;
      }
    }
  }
}
