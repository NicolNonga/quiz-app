import { IController } from "../../core/interface/IController";
import { Request, Response, request } from "express";
import { RemoveQuizSectionSessionUseCase } from "./removeQuizSessetionUserUsecase";
export class RemoveQuizSessionUserController implements IController<any, any> {
  
     constructor(private createQuizSectionUserUseCase: RemoveQuizSectionSessionUseCase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {user_id, quiz_section_id} = request.body

         await this.createQuizSectionUserUseCase.execute({
            user_id: user_id,
            quiz_section_id: quiz_section_id
        })

        return response.status(201).send({message: "user removido"})
    }
    
}