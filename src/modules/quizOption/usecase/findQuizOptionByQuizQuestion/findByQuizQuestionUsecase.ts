import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { FindQuizOptionByQuizQuestionDTO } from "../../dto/findQuizOptionByQuizQuestionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../../repository/interface/IQuizOptionRepository";

export class FindQuizOptionByQuizQuestionUseCase implements IuseCase<any, any> {
  constructor(private readonly quizOptionRepository: IQuizOptionRepository) {}
  public async execute(
    quiz_question_id: string | any,
    body?: any
  ): Promise<Result<QuizOptionModel[]>> {
    const quizOption = await this.quizOptionRepository.findByQuizQuestion(
      quiz_question_id
    );

    return Result.ok(quizOption);
  }
}
                                                              