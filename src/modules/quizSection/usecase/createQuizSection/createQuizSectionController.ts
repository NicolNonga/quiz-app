import { IController } from "../../../core/interface/IController";

import { Request, Response, request } from "express";
import { CreateQuizSectionUseCase } from "./createQuizSectionUseCase";
import { Result } from "../../../core/erroHandling/customResult";
import { QuizSectionModel } from "../../model/quizSectionModel";

export class CreateQuizSectionController implements IController<any, any> {
     constructor(private createQuizSectionUseCsase: CreateQuizSectionUseCase){
        
     }
   
   public async  handle(request:Request , response: Response): Promise<Response> {
      
    const {name, category_id, quiz_id} = request.body
    const quizSectionOrError :Result<QuizSectionModel | any> = await this.createQuizSectionUseCsase.execute({
        name,
        quiz_id,
        category_id
    })

    if(!quizSectionOrError.isSuccess)  return response.status(400).send({message: quizSectionOrError.error})
    return response.status(201).send({message: "Quiz section criado com sucesso"})
    }
    
}