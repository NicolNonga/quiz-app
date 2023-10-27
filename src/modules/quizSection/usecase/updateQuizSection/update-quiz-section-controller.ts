import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import { UpdateQuizSessionUseCase } from "./update-quiz-section-use-case";
import { Request, Response, request } from "express";
export class UpdateQuziSessionController implements IController<any, any>{
    
    constructor(private readonly updateQuizSessionUseCase: UpdateQuizSessionUseCase){

    }

     async handle(request: Request, response: Response): Promise<any> {
        const data = request.body
        const {id} = request.params;

        const quizSession : Result<any> = await this.updateQuizSessionUseCase.execute(id, data)

        if(!quizSession.isSuccess){
            return response.status(400).send({message: quizSession.error}) 
        }

        return response.status(201).send({nessage: " Quiz Session  Actualizado com sucesso"})
    }
}