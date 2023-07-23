import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { CreateQuizQuestionUseCase } from "./createQuizQuestionUseCase";
import {Request, Response}  from 'express'

class CreateQuizQuestionController implements IController<any, any>{
    constructor(private readonly createQuizQuestionUseCase: CreateQuizQuestionUseCase){
        
    }
  async   handle(request?: Request, response?: Response) {
      
    const {quiz_id, question_text} = request.body;
    const quizQuestionOrError: Result<QuizQuestionModel | any> = await this.createQuizQuestionUseCase
    .execute({
        quiz_id,
        question_text
    })
    if(!quizQuestionOrError.isSuccess){
        return response.status(400).send({message: quizQuestionOrError.error})
    }
    return response.status(201).send({message: "quiz question criado com sucesso"})
    }

}