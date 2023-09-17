import { date } from "zod";
import { db } from "../../../../utils/db.server";
import { createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../interface/IQuizOptionRepository";

export class QuizOptionRepositoryImpl implements IQuizOptionRepository {
  private prismaDb = db;
  public async create(data: createQuizOptionDTO): Promise<QuizOptionModel> {
    return await this.prismaDb.quiz_option.create({
      data: {
        ...data,
      },
    });
  }
  update(data: createQuizOptionDTO, id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async findAll(): Promise<QuizOptionModel[]> {
             return await this.prismaDb.quiz_option.findMany();

  }
  
 public  async findByQuizQuestion(data: string): Promise<QuizOptionModel[]> {

   console.log
            return await this.prismaDb.quiz_option.findMany({
              where: {
                quiz_question_id: data
              }
            })
  }
 
 public async  findOptionText(option_text: string): Promise<QuizOptionModel | any> {
          return await this.prismaDb.quiz_option.findFirst({
            where: {
                option_text: option_text
            }
          })
    
  }
}
