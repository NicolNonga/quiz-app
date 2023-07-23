import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizRepository } from "../../../quiz/repository/interface/IQuizRepository";
import { CreateQuizQuestionDTO } from "../../dto/createQuizQuestionDTO";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../../repository/interface/IQuizQuestionRepository";

export class CreateQuizQuestionUseCase implements IuseCase<any, any> {
  constructor(
    private readonly quizQuestionRepository: IQuizQuestionRepository,
    private readonly quizRepository: IQuizRepository
  ) {}

  public async execute(
    data?: CreateQuizQuestionDTO,
    body?: any
  ): Promise<Result<QuizQuestionModel | []>> {
    const { question_text, quiz_id } = data;
    // first validate if quiz_text_exit or not
    const find_quiz_text =  await this.quizQuestionRepository.findQuizQuestionText(question_text);
    if (find_quiz_text) return Result.fail("Quiz Text already created");

    // we should also find if quiz_id is valid id from quiz

    const quiz = await this.quizRepository.findQuizById(quiz_id);
    if (!quiz) return Result.fail("please provide a valid quiz");

    const quiz_question = await this.quizQuestionRepository.create({
      quiz_id,
      question_text,
    });
    Result.ok(quiz_question);
  }
}
