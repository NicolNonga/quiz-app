import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizSectionModel } from "../../model/quizSectionModel";
import { IQuizSectionRepository } from "../../repository/interface/IQuizSectionRepository";

export class FindAllQUizSectionUseCase implements IuseCase<any, any> {
  constructor(private readonly quizSectionRepository: IQuizSectionRepository) {}
  public async execute(
    data?: any,
    body?: any
  ): Promise<Result<QuizSectionModel[]>> {
    const quiz_section = await this.quizSectionRepository.findAll();
    return Result.ok(quiz_section);
  }
}
