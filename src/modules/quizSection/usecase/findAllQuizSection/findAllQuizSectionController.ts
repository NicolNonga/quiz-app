import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import { Request, Response } from "express";
import QuizModel from "../../../quiz/model/quizModel";
import { FindAllQUizSectionUseCase } from "./findAllQuizSectionUseCase";
export class FindAllQuizSectionController implements IController<any, any> {
  constructor(private readonly quizSectionUseCase: FindAllQUizSectionUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const quizSection = await this.quizSectionUseCase.execute();

    return response.status(200).send({ data: quizSection });
  }
}
