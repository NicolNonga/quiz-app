import { createQuizDTO } from "../../dto/createQuizDTO";
import { UpdateQuizDTO } from "../../dto/updateQuizDTO";
import QuizModel from "../../model/quizModel";

export interface IQuizRepository {
  createQuiz(quiz_data: createQuizDTO): Promise<QuizModel>;
  findAllQuiz(): Promise<QuizModel[]>;
  findQuizById(quiz_id: string): Promise<QuizModel>;
  findQuizByName(quiz_name: string): Promise<QuizModel>
  findQuizByCategory(quiz_category: string): Promise<QuizModel>
  editQuiz(quiz_data:UpdateQuizDTO, quiz_id: string): Promise<void>
}
