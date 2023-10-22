import { Result } from "../../../core/erroHandling/customResult";
import { IController } from "../../../core/interface/IController";
import { UpdateQuizUseCae } from "./updateQuizUseCase";
import { Request, Response } from "express";

export class UpdateQuizController implements IController<any, any> {
  constructor(private readonly quizUpdateUseCase: UpdateQuizUseCae) {}

  public async handle(request: Request, response: Response): Promise<any> {
    const { quiz_id } = request.params;
    const { name, topic } = request.body;
   
   const quizUpdateOrError= await this.quizUpdateUseCase.execute(
      {
        name,
        topic,
      },
      quiz_id
    );

    if(!quizUpdateOrError.isSuccess){
        return response.status(400).send({message: quizUpdateOrError.error})
    }

    return response.status(200).send({ message: "Quiz actualizado com sucesso" });
  }
}
