
import { db } from "../../../../utils/db.server";
import { CreateQuizAttachmentDTO } from "../../dto/createQuizAttachmentDto";
import { IQuizAttachmentInterface } from "../interface/quizAttachmentRepositoryInterface";

export class QuizAttachmentRepositoryImp implements IQuizAttachmentInterface{
  
  
  async  create(payload: CreateQuizAttachmentDTO): Promise<void> {
              try {
                  await db.quiz_attachment.create({
                    data: {
                        ...payload
                    }
                  })
              } catch (error) {
                 console.log("ups houve um erro")
              }
    }
    
}