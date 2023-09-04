import { createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";

export interface IQuizOptionRepository {
  create(data: createQuizOptionDTO): Promise<QuizOptionModel>;
  update(data: createQuizOptionDTO, id: string): Promise<void>;
  findAll(): Promise<QuizOptionModel []>;
  findByQuizQuestion(quiz_question_id: string): Promise<QuizOptionModel []>
  findOptionText(option_text: string): Promise<QuizOptionModel>
}
