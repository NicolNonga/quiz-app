import { IController } from "../../core/interface/IController";
import { Request, Response, request } from "express";
import { ListQuizSessionByQuizUseCase } from "./listQuizSessionUserByQuizUsecase";
export class ListQuizSessionUserByQuizController implements IController<any, any> {
  
     constructor(private listQuizSectionUserUseCase: ListQuizSessionByQuizUseCase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {quiz_section_id} = request.params

        const users = await this.listQuizSectionUserUseCase.execute({
             quiz_section_id,
        })


         const data = {
            _value: users
         }
        return response.status(200).send(data)
    }
    
}