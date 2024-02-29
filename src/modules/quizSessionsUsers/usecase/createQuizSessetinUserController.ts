import { IController } from "../../core/interface/IController";
import { Request, Response, request } from "express";

import { CreateQuizSectionUserUsecase } from "./createQuizSessetionUserUsecase";
export class CreateQuizSessionUserController implements IController<any, any> {
  
     constructor(private createQuizSectionUserUseCase: CreateQuizSectionUserUsecase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {users, quiz_sessetion_id} = request.body

        const quizSectionUser = await this.createQuizSectionUserUseCase.execute({
            users: users,
            sessetion_id: quiz_sessetion_id
        })

        return response.status(201).send({message: "user adicionada a quiz"})
    }
    
}