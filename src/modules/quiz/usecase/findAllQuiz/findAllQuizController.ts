import { IController } from "../../../core/interface/IController";
import { FindAllQuizUseCase } from "./findAllQuizUseCase";
import { Request, Response } from "express";

export class FindAllQuizController implements  IController <any, any> {
    constructor(private readonly findAllQuizUseCase: FindAllQuizUseCase){

    }

     public async handle(request?: Request, response?: Response) : Promise<Response> {
         
        const quiz = await this.findAllQuizUseCase.execute();
        return response.status(200).send(quiz)
     }
}