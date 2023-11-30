import { quiz_option } from "@prisma/client";
import { QuizOption, createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";

export interface IQuizOptionRepository {
  create(quizOption: QuizOption, quiz_question_id: string ): Promise<quiz_option>;
  update(data: createQuizOptionDTO, id: string): Promise<void>;
  findAll(): Promise<QuizOptionModel []>;
  findByQuizQuestion(quiz_question_id: string): Promise<QuizOptionModel []>
  findOptionText(option_text: string, quiz_question_id: string): Promise<QuizOptionModel>
}
