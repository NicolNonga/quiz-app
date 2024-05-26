import { IuseCase } from "../../core/interface/IUseCase";
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";


export interface ListQuizSessionUserInterface {
    user_id?: string,
    quiz_section_id: string
}
export  class ListQuizSessionByQuizUseCase implements IuseCase<any, any> {
    constructor(private readonly quizSessitionUser: QuizSessionUsersRepository) {

    }
   async execute(data: ListQuizSessionUserInterface, body?: any) {
        return await this.quizSessitionUser.findByQuizSesstion(data.quiz_section_id)
    }
    
}