import { IController } from "../../../core/interface/IController";
import { IuseCase } from "../../../core/interface/IUseCase";
import {Response, Request} from 'express'

export class  FindAllQuizOptionController implements IController<any, any>{
     constructor(private  findAllQuizOptionUseCase: IuseCase<any, any>){

     }
   public async  handle(request: Request, response: Response): Promise<Response> {
     
        const quizOption = await this.findAllQuizOptionUseCase.execute();
        return  response.status(200).send(quizOption)
    }

}