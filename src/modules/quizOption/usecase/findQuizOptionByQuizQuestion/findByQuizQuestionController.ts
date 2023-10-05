import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import {Request, Response} from 'express'
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IuseCase } from "../../../core/interface/IUseCase";
import { FindQuizOptionByQuizQuestionUseCase } from "./findByQuizQuestionUsecase";
export class  FindByQuizQuestionController implements IController<any, any> {
          constructor(private readonly findByQuizQuestionUseCase:FindQuizOptionByQuizQuestionUseCase){

          }
  public async  handle(request: Request, response:  Response): Promise<Response> {
         const {quiz_question_id} =  request.query;
         console.log(quiz_question_id)
      
         const quizOptionData: Result<QuizOptionModel []> =  await  this.findByQuizQuestionUseCase.execute(
            quiz_question_id
         )

          if(!quizOptionData.isSuccess) return response.status(400).send(quizOptionData.error);

          return response.status(200).send( quizOptionData)
    }

}