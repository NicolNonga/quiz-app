import { PrismaClient } from "@prisma/client";
import { createQuizDTO } from "../../dto/createQuizDTO";
import QuizModel from "../../model/quizModel";
import { IQuizRepository } from "../interface/IQuizRepository";
import { db } from "../../../../utils/db.server";
import { UpdateQuizDTO } from "../../dto/updateQuizDTO";

export class QuizRepositoryImpl implements IQuizRepository {
  findQuizSectionById(quiz_id: string): Promise<QuizModel> {
    throw new Error("Method not implemented.");
  }

  private prismaDb = db;

  public async findQuizByName(quiz_name: string): Promise<QuizModel | any> {
    return await this.prismaDb.quiz.findFirst({
      where: {
        name: quiz_name,
      },
    });
  }

  public async createQuiz(quiz_data: createQuizDTO): Promise<QuizModel | any> {
    try {
      return await this.prismaDb.quiz.create({
        data: {
          name: quiz_data?.name,
        },
      });
    } catch (error) {}
  }

  public async findAllQuiz(): Promise<QuizModel[]> {
    return await this.prismaDb.quiz.findMany({orderBy:[
      {
        createdAt: 'desc'
      }
    ]});
  }
  public async findQuizById(quiz_id: string): Promise<QuizModel | any> {
    return await this.prismaDb.quiz.findUnique({
      where: {
        id: quiz_id,
      },
    
    });
  }

  public async editQuiz(
    quiz_data: UpdateQuizDTO,
    quiz_id: string
  ): Promise<void> {
    await this.prismaDb.quiz.update({
      where: {
        id: quiz_id,
      },
      data: {
        name: quiz_data.name,
        topic: quiz_data.topic
      },
    });
  }

  public async delete(quiz_id: string): Promise<any> {
    return await this.prismaDb.quiz
      .delete({
        where: {
          id: quiz_id,
        },
      })
      .catch((err) => {
        throw Error("Ups faild to delete");
      });
  }
}
