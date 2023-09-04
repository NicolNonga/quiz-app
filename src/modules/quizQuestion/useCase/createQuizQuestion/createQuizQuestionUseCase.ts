import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizRepository } from "../../../quiz/repository/interface/IQuizRepository";
import { CreateQuizQuestionDTO } from "../../dto/createQuizQuestionDTO";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../../repository/interface/IQuizQuestionRepository";

export class CreateQuizQuestionUseCase implements IuseCase<any, any> {
  constructor(
    private readonly quizQuestionRepository: IQuizQuestionRepository,
 
  ) {}

  public async execute(
    data: CreateQuizQuestionDTO,
    body: any
  ): Promise<Result<QuizQuestionModel> |  any> {
    const { question_text, quiz_section_id } = data;
    // first validate if quiz_text_exit or not
    const find_quiz_text =
      await this.quizQuestionRepository.findQuizQuestionText(question_text);
    if (find_quiz_text) return Result.fail("Quiz Question already created");

    const quiz_question = await this.quizQuestionRepository.create({
      quiz_section_id,
      question_text,
    });
    return Result.ok(quiz_question);
  }
}
