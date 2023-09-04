import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { CreateQuizQuestionUseCase } from "./createQuizQuestionUseCase";
import { Request, Response } from "express";

 export class   CreateQuizQuestionController implements IController<any, any> {
  constructor(
    private readonly createQuizQuestionUseCase: CreateQuizQuestionUseCase
  ) {}
  async handle(request: Request, response: Response) : Promise<Response> {
    const { quiz_section_id, question_text } = request.body;
    const quizQuestionOrError: Result<QuizQuestionModel | any> =
      await this.createQuizQuestionUseCase.execute(
        {
          quiz_section_id: quiz_section_id,
          question_text: question_text,
        },
        {}
      );
    if (!quizQuestionOrError.isSuccess) {
      return response.status(400).send({ message: quizQuestionOrError.error });
    }
    return response
      .status(201)
      .send({ message: "quiz question criado com sucesso" });
  }
}
