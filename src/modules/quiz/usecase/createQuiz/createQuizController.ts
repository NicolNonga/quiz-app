import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import QuizModel from "../../model/quizModel";
import { CreateQuizUseCase } from "./createQuizUseCase";

import { Request, Response, request } from "express";


export class CreateQuizController implements IController <any, any>{
  //?? it is important to change the userCase in the contructor
 
    constructor(private readonly createQuizUseCase: CreateQuizUseCase){

 }

public async handle(request?: Request, response?: Response) {
    const {name, quiz_category} = request.body
    const quizOrError: Result<QuizModel> =  await this.createQuizUseCase.execute(
        {
            quiz_category,
            name
        }
    )

     // check the result 
     if(!quizOrError.isSuccess){
        return response.status(400).send({message: quizOrError.error})
     }

     return response.status(201).send({message: "quiz criado com sucesso"})
    }


}