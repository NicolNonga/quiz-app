
import { Request, Response, request } from "express";
import { IController } from "../../../core/interface/IController";
import { QuizSectionUserCompletedUsecase } from "./quizSectionUserCompletedUseCase";


export class QuizSectionCompletedController implements IController<any, any> {
  
     constructor(private completedSectionUserUseCase: QuizSectionUserCompletedUsecase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {user_id, quiz_section_id} = request.body

        await this.completedSectionUserUseCase.execute({
         quiz_section_id,
         user_id
        })

        return response.status(201).send({message: "Quiz Section Completed"})
    }
    
}