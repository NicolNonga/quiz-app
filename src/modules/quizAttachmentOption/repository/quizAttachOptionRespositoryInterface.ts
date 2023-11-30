import { CreateQuizAttachmentOptionDTO } from "../dto/createQuizAttachmentDTO";

export interface  IQuizAttachemnteOptionRepository{
    create(data: CreateQuizAttachmentOptionDTO): Promise<void>
}