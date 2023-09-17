import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../../repository/interface/IQuizOptionRepository";

export class FindAllQuizOptionUseCase implements IuseCase<any, Promise< Result<QuizOptionModel []>>> {
  constructor(private readonly quizOptionRepository: IQuizOptionRepository) {}
  public async execute(
    request?: any,
    body?: any
  ): Promise<Result<QuizOptionModel[]>> {
    const quizOption = await this.quizOptionRepository.findAll();

    return Result.ok(quizOption);
  }
}
