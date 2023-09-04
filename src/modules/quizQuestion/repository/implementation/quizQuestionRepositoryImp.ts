import { db } from "../../../../utils/db.server";
import { CreateQuizQuestionDTO } from "../../dto/createQuizQuestionDTO";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../interface/IQuizQuestionRepository";

export class QuizQuestionRepositoryImpl implements IQuizQuestionRepository {
  private prismaDb = db;

  public async create(data: CreateQuizQuestionDTO): Promise<QuizQuestionModel> {
    return await db.quiz_question.create({
      data: {
        quiz_section_id: data.quiz_section_id,
        question_text: data.question_text,
      },
    });
  }

  public async getByQuiz(
    quiz_question_id: string
  ): Promise<QuizQuestionModel | any> {
    return this.prismaDb.quiz_question.findUnique({
      where: {
        id: quiz_question_id,
      },
    });
  }

  public async findQuizQuestionText(
    quiz_text: string
  ): Promise<QuizQuestionModel | any> {
    return await this.prismaDb.quiz_question.findFirst({
      where: {
        question_text: quiz_text,
      },
    });
  }

  public async findAll(): Promise<QuizQuestionModel[]> {
    return await this.prismaDb.quiz_question.findMany({
      include: {
        quiz_section: true,
      },
    });
  }
}
