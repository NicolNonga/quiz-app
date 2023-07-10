import { IController } from "../../../core/interface/IController";
import { DeleteQuizUsecase } from "./deleteQuizUseCase";
import {Request, Response, request} from 'express'

export class DeleteQuizController implements IController<any, any> {
    constructor( private readonly quizDeleteUseCase: DeleteQuizUsecase){
        
    }
   
   public async handle(request?: Request, response?: Response):Promise<Response> {
       const {quiz_id} = request.params;

      
       const quizDeleteOrError = await this.quizDeleteUseCase.execute(
         quiz_id
       
        )
        console.log(quizDeleteOrError.getValue())
       if(!quizDeleteOrError.isSuccess){
        return response.status(400).send({message: quizDeleteOrError.error})
       }
       
       return response.status(200).send({message: 'quiz deletado com sucesso'})

    }
}