import { IController } from "../../../core/interface/IController";
import { Request, Response, request } from "express";
import { ShowQuizSectionPuntuationUseCase } from "./showQuizSectionPutuationUseCase";
export class ShowQuizSectionPutuationController  implements IController<any, any> {
  
    constructor(private showQuizSectionPutuationUsecase: ShowQuizSectionPuntuationUseCase ){

    }
  
  async  handle(request: Request, response: Response): Promise<any> {
     const {user_id, quiz_section_id} = request.body;

         console.log(user_id, quiz_section_id)

           const data = await  this.showQuizSectionPutuationUsecase.execute({
            user_id,
            quiz_section_id
           })

           return response.status(200).send(data)

    }
    
}