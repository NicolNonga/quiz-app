import { IController } from "../../../core/interface/IController";
import {Request, Response} from "express"
import { createQuizOptionUsecase } from "./createQuizOptionUseCase";
import { Result } from "../../../core/erroHandling/customResult";

export class  CreateQuizOptionController implements IController<any, any> {
 
       constructor(private readonly createQuizOptionUseCase: createQuizOptionUsecase){

       }
  public async   handle(request: Request, response:  Response): Promise<Response> {
          const {quiz_option,quiz_question_id } = request.body;
          const files = request.files

          //console.log(files)
          console.log(JSON.parse(quiz_option))

          const quizOption: Result<any> =await this.createQuizOptionUseCase
          .execute({quiz_option,quiz_question_id }, files)

          if(!quizOption.isSuccess) return response.status(400).send({message: quizOption.error})
          return response.status(201).send({message:"quiz option criado com sucesso"})
    }
    
}