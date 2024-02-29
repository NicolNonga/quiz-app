import { db } from "../../../utils/db.server"


export interface quizUserRepositoryInterface {
    findByUserAndQuiz(quiz_section_id: string, user_id: string): Promise<any>
    create(data: createQuizSesstionUserI): Promise<void>
}
interface createQuizSesstionUserI{
    user_id: string
    quiz_sessetion_id: string
}
export class QuizSessionUsersRepository implements QuizSessionUsersRepository{
    async create(data: createQuizSesstionUserI ):Promise<void> {
          try {
             await db.quiz_section_users.create({
                data: {
                    user_id: data.user_id,
                    quiz_section_id: data.quiz_sessetion_id
                }
             })
          } catch (error) {
              throw Error("ups error happlen",)
          }

    }

     async findByUserAndQuiz(quiz_section_id: string, user_id: string){
          const quizSessionUser = await db.quiz_section_users.findMany(
             {
                where: {
                    user_id: user_id,
                    quiz_section_id: quiz_section_id
                },
                include:{
                    quiz_section: true
                }
             }
          )
          if(quizSessionUser){
            return quizSessionUser.map((quiz)=> quiz.quiz_section)
          }

          return []
     }
    
}