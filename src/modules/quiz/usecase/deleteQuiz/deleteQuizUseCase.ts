import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizRepository } from "../../repository/interface/IQuizRepository";

export class DeleteQuizUsecase implements IuseCase<any, any> {
  constructor(private readonly quizRepository: IQuizRepository) {}

  public async execute(quiz_id?: string): Promise<Result<any>> {
    //? verify if quiz_id exist or it valid id

    const quiz = await this.quizRepository.findQuizById(quiz_id);

    if (!quiz) return Result.fail("Quiz id not found");

    await this.quizRepository.delete(quiz_id);
    return Result.ok("deletado com sucesso");
  }
}
