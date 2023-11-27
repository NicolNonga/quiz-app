import { CreateQuizAttachmentDTO } from "../../dto/createQuizAttachmentDto";

export interface IQuizAttachmentInterface{
    create(payload: CreateQuizAttachmentDTO):Promise<void>
}