import { IController } from "../../../core/interface/IController";
import { GetQuestionBySectionUseCase } from "./getQuestionBySectionUseCase";

import {Request, Response} from 'express'

export class GetQuestionBySectionController implements IController<any, any> {

    constructor(private readonly getQuestionBySectionUseCase: GetQuestionBySectionUseCase){
        
    }
   
   public async handle(request: Request, response: Response): Promise<Response> {
          const {section_id} =  request.params

          const quizSectionQuestion = await this.getQuestionBySectionUseCase.execute(section_id);
          return response.status(200).send(quizSectionQuestion)
    }
}