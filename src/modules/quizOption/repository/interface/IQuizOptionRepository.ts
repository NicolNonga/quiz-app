import { QuizOption, createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";

export interface IQuizOptionRepository {
  create(quizOption: QuizOption, quiz_question_id: string ): Promise<void>;
  update(data: createQuizOptionDTO, id: string): Promise<void>;
  findAll(): Promise<QuizOptionModel []>;
  findByQuizQuestion(quiz_question_id: string): Promise<QuizOptionModel []>
  findOptionText(option_text: string, quiz_question_id: string): Promise<QuizOptionModel>
}
