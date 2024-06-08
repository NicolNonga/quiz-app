
import { Request, Response, request } from "express";

import { IController } from "../../../core/interface/IController";
import { CreateQuizSectionPuntuationUseCase } from "./createQuizSectionValidationUseCase";
export class CreateQuizSectionUserPuntuationController implements IController<any, any> {
  
     constructor(private createQuizSectionUserPutuationUseCase: CreateQuizSectionPuntuationUseCase){

     }

  async  handle(request: Request, response: Response): Promise<Response> {
       
        const {user_id, quiz_section_id, puntuation} = request.body

       await this.createQuizSectionUserPutuationUseCase.execute({
             user_id,
             quiz_section_id,
             puntuation
        })

        return response.status(201).send({message: "Pontuação Salvo Com Sucesso"})
    }
    
}