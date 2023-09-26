import { date } from "zod";
import { db } from "../../../../utils/db.server";
import { QuizOption, createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../interface/IQuizOptionRepository";

export class QuizOptionRepositoryImpl implements IQuizOptionRepository {
  private prismaDb = db;
  public async create(quizOption: QuizOption, quiz_question_id: string ): Promise<void> {
    console.log(quizOption)
            try {
               await this.prismaDb.quiz_option.create({
                data: {
                 quiz_question_id: quiz_question_id,
                  option_text:quizOption?.option_text,
                  is_correct: quizOption.is_correct,
                  is_img: quizOption.is_img,
          
                },
              });
            } catch (error) {
              console.log(error)
            }
  }
  update(data: createQuizOptionDTO, id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async findAll(): Promise<QuizOptionModel[]> {
    return await this.prismaDb.quiz_option.findMany();
  }

  public async findByQuizQuestion(data: string): Promise<QuizOptionModel[]> {
    return await this.prismaDb.quiz_option.findMany({
      where: {
        quiz_question_id: data,
      },
    });
  }

  public async findOptionText(
    option_text: string,
    quiz_question_id: string
  ): Promise<QuizOptionModel | any> {
    return await this.prismaDb.quiz_option.findFirst({
      where: {
        option_text: option_text,
        quiz_question_id: quiz_question_id
      },
    });
  }
}
