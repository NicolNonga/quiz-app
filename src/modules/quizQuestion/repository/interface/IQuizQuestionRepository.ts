import { createQuizDTO } from "../../../quiz/dto/createQuizDTO";
import { CreateQuizQuestionDTO } from "../../dto/createQuizQuestionDTO";
import QuizQuestionModel from "../../model/quizQuestionModel";

interface IQuizQuestionRepository {
  create(data: CreateQuizQuestionDTO): Promise<QuizQuestionModel>;
  getByQuiz(quiz_question_id: string): Promise<QuizQuestionModel>;
  findQuizQuestionText(quiz_text: string): Promise<QuizQuestionModel>;
  findAll(): Promise<QuizQuestionModel[]>;
}

export { IQuizQuestionRepository };
