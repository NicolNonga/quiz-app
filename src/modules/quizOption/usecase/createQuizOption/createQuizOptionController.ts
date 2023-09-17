import { IController } from "../../../core/interface/IController";
import {Request, Response} from "express"
import { createQuizOptionUsecase } from "./createQuizOptionUseCase";
import { Result } from "../../../core/erroHandling/customResult";

export class  CreateQuizOptionController implements IController<any, any> {
 
       constructor(private readonly createQuizOptionUseCase: createQuizOptionUsecase){

       }
  public async   handle(request: Request, response:  Response): Promise<Response> {
          const {option_text, is_img, is_correct,quiz_question_id } = request.body;

          const quizOption: Result<any> =await this.createQuizOptionUseCase
          .execute({option_text, is_correct, is_img, quiz_question_id}, {})

          if(!quizOption.isSuccess) return response.status(400).send({message: quizOption.error})
          return response.status(201).send({message:"quiz option criado com sucesso"})
    }
    
}