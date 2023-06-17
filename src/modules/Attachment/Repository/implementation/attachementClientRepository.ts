import { attachmentClientDTO } from "../../dto/attachmentClientDTO";
import { AttachementClientModel } from "../../model/attamentClient";
import { IAttachementClient } from "../interface/IattachemntClientRepository";

export class AttachementClientRepository implements IAttachementClient{
    private attamentClients: AttachementClientModel[];
    private static INSTANCE: AttachementClientRepository;
    constructor(){
        this.attamentClients= []
    }

    public static getInstance(): AttachementClientRepository{
        if(!this.INSTANCE){
            this.INSTANCE= new AttachementClientRepository();
        }
        return AttachementClientRepository.INSTANCE
    }
    
    create(attachemntData: attachmentClientDTO): any {
        const { client_id, img_path}= attachemntData
          const attachementClient= new AttachementClientModel();
          Object.assign(attachementClient, {client_id, img_path});
         this.attamentClients.push(attachementClient)
        
    }

    findByClientId(client_id: string): AttachementClientModel {
        
        const attamentclient= this.attamentClients.find(attachement=>attachement.clientId==client_id);
        return attamentclient;
    }
    

}

