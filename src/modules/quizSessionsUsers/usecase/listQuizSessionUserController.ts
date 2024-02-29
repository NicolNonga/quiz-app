import { IController } from "../../core/interface/IController";
import { Request, Response, request } from "express";

import { ListQuizSessionUserUseCase } from "./listQuizSessionUserUseCase";
export class ListQuizSessionUserController implements IController<any, any> {
  
     constructor(private listQuizSectionUserUseCase: ListQuizSessionUserUseCase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {user_id, quiz_section_id} = request.body

        const quizSectionUser = await this.listQuizSectionUserUseCase.execute({
            user_id:user_id,
            quiz_section_id: quiz_section_id
        })

        return response.status(200).send({data: quizSectionUser})
    }
    
}