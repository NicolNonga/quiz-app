import { PrismaClient } from "@prisma/client";
import { createQuizDTO } from "../../dto/createQuizDTO";
import QuizModel from "../../model/quizModel";
import { IQuizRepository } from "../interface/IQuizRepository";
import { db } from "../../../../utils/db.server";
import { UpdateQuizDTO } from "../../dto/updateQuizDTO";

export class QuizRepositoryImpl implements IQuizRepository{

    private prismaDb = db

  public async  findQuizByName(quiz_name: string): Promise<QuizModel> {

      return await this.prismaDb.quiz.findFirst({
            where: {
                name: quiz_name
            }
        })
       

 }
 public async findQuizByCategory(quiz_category: string): Promise<QuizModel> {
           return await this.prismaDb.quiz.findFirst({
            where: {
                quiz_category: quiz_category
            }
           })
 }
   public async createQuiz(quiz_data: createQuizDTO): Promise<QuizModel> {
     try {
        return await this.prismaDb.quiz.create(
            {
               data : {
                name: quiz_data?.name,
                quiz_category: quiz_data?.quiz_category
               } 
            }
         )
       
     } catch (error) {
      
         throw error("please any error try late")
     }
        
    }
  
  public async  findAllQuiz(): Promise<QuizModel[]> {
         return (await this.prismaDb.quiz.findMany())
    }
  public async  findQuizById(quiz_id: string): Promise<QuizModel> {
         return (await this.prismaDb.quiz.findUnique({
             where: {
                id: quiz_id
             }
         }))
    }
    

   public async  editQuiz(quiz_data: UpdateQuizDTO,quiz_id:string): Promise<void> {
      const updateQuiz = await this.prismaDb.quiz.update({
         where: {
            id: quiz_id
         },
         data : {
            quiz_category: quiz_data.quiz_category,
            name: quiz_data.name
         }
      })
    }

}