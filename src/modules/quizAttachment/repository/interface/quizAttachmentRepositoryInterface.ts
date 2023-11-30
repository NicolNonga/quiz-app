import { quiz_attachment } from "@prisma/client";
import { CreateQuizAttachmentDTO } from "../../dto/createQuizAttachmentDto";

export interface IQuizAttachmentInterface{
    create(payload: CreateQuizAttachmentDTO):Promise<quiz_attachment>
}