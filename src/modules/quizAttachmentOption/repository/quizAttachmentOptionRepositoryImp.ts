import { db } from "../../../utils/db.server";
import { CreateQuizAttachmentOptionDTO } from "../dto/createQuizAttachmentDTO";
import { IQuizAttachemnteOptionRepository } from "./quizAttachOptionRespositoryInterface";

export class QuizAttachmentOptionRepositoryImp implements IQuizAttachemnteOptionRepository{
  
  async  create(data: CreateQuizAttachmentOptionDTO): Promise<void> {
            await db.quiz_attachment_option.create({
                data: {
                    ...data
                }
            })
    }
    
}