import { attachmentClientDTO } from "../../dto/attachmentClientDTO";
import { AttachementClientModel } from "../../model/attamentClient";

interface IAttachementClient{
    create(attachemntData:attachmentClientDTO):AttachementClientModel;
    findByClientId(id:string): AttachementClientModel
}
export { IAttachementClient }