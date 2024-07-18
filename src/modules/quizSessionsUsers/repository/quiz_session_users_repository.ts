import { db } from "../../../utils/db.server"


export interface quizUserRepositoryInterface {
    findByUserAndQuiz(quiz_section_id: string, user_id: string): Promise<any>
    create(data: createQuizSesstionUserI): Promise<void>
    delete(data: deleteQuizSesstionUserInterface): Promise<void>
    findByQuizSesstion(quiz_section_id: string): Promise<any>
    completeQuizSection(quiz_section_id: string, user_id: string): Promise<any>
}
interface createQuizSesstionUserI {
    user_id: string
    quiz_sessetion_id?: string
}
interface deleteQuizSesstionUserInterface extends createQuizSesstionUserI{

}
export class QuizSessionUsersRepository implements quizUserRepositoryInterface {

    
   async delete(data: deleteQuizSesstionUserInterface): Promise<void> {
            try {
               await db.quiz_section_users.deleteMany(({
                    where: {
                        user_id: data.user_id,  
                        quiz_section_id: data.quiz_sessetion_id
                    },
                 }))
            } catch (error) {
                 throw Error("Erro ao remover user")
            }
    }
    async create(data: createQuizSesstionUserI): Promise<void> {
        try {
            await db.quiz_section_users.create({
                data: {
                    user_id: data.user_id,
                    quiz_section_id: data.quiz_sessetion_id || ''
                }
            })
        } catch (error) {
            throw Error("ups error happlen",)
        }

    }

    async findByUserAndQuiz(user_id: string) {
        const quizSessionUser = await db.quiz_section_users.findMany(
            {
                where: {
                    user_id: user_id,
                },
                include: {
                    quiz_section: {
                        include: {
                            category: {},
                            quiz: {}
                        }
                    }
                }
            }
        )
        if (quizSessionUser) {
            return quizSessionUser.map((quiz) =>{
                return {quiz: quiz.quiz_section,  completed: quiz.is_completed}
            })
        }

        return []
    }

    async findByQuizSesstion(quiz_id: string) {
        const quizSessionUser = await db.quiz_section_users.findMany(
            {
                where: {
                    quiz_section_id: quiz_id,
                  
                },
                include: {
                    user: {
                        
                    }
                }
            }
        )
        if (quizSessionUser) {
            return quizSessionUser
        }

        return []
    }


    async completeQuizSection(quiz_section_id: string, user_id: string): Promise<any> {
          await db.quiz_section_users.updateMany({
            where : {
                user_id: user_id,
                quiz_section_id: quiz_section_id
                
            },
            data: {
                is_completed :  true
            }
          })
    }
}