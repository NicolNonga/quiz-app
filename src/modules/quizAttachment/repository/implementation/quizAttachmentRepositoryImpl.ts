
import { quiz_attachment } from "@prisma/client";
import { db } from "../../../../utils/db.server";
import { CreateQuizAttachmentDTO } from "../../dto/createQuizAttachmentDto";
import { IQuizAttachmentInterface } from "../interface/quizAttachmentRepositoryInterface";

export class QuizAttachmentRepositoryImp implements IQuizAttachmentInterface{
  
  
  async  create(payload: CreateQuizAttachmentDTO): Promise<quiz_attachment> {
              try {
                const quiz_attachem=  await db.quiz_attachment.create({
                    data: {
                        ...payload
                    }
                  })
                  return quiz_attachem
              } catch (error) {
                return {} as quiz_attachment
                 console.log("ups houve um erro")
              }
    }
    
}