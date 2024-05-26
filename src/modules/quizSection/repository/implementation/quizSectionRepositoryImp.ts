import { CreateQuizSectionDTO } from "../../dto/createQuizSection";
import { QuizSectionModel } from "../../model/quizSectionModel";
import { IQuizSectionRepository } from "../interface/IQuizSectionRepository";
import { db } from "../../../../utils/db.server";

export class QuizSectionRepository implements IQuizSectionRepository {
  private prismaDB = db;

  public async create(data: CreateQuizSectionDTO): Promise<QuizSectionModel> {

 
    return await this.prismaDB.quiz_section.create({
      data: {
        name: data.name,
        quiz_id: data.quiz_id,
        category_id: data.category_id,
      }
    });
  }
  public async findQUizSectionByName(
    quiz_sectionName: string
  ): Promise<QuizSectionModel | any> {
    return await this.prismaDB.quiz_section.findFirst({
      where: { name: quiz_sectionName },
    });
  }

  public async findAll(): Promise<QuizSectionModel[]> {
    return await this.prismaDB.quiz_section.findMany({
      include: {
        category: {},
        quiz: {},
      },
    });
  }

  public async  edit(quiz_section_id: string, data: CreateQuizSectionDTO): Promise<void> {
                console.log(quiz_section_id, data)
         await  this.prismaDB.quiz_section.update({
          where: {
            id: quiz_section_id
          },
          data: {
            name: data.name,
            quiz_id: data.quiz_id,
            category_id: data.category_id
          }
        })
  }
}
