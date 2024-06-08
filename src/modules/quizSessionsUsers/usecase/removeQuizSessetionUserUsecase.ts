import { IuseCase } from "../../core/interface/IUseCase";
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";

export interface removeQuizSectionUserInterface {
    user_id: string
    quiz_section_id: string
}

export class RemoveQuizSectionSessionUseCase implements IuseCase<any, any> {
    constructor(private readonly quizSessionUserRepository: QuizSessionUsersRepository){

    }

     async execute(data: removeQuizSectionUserInterface, body?: any) {
        const {user_id, quiz_section_id} = data
      try {
          await this.quizSessionUserRepository.delete({
            user_id:  user_id,
            quiz_sessetion_id: quiz_section_id
          })
      } catch (error) {
         console.log("erro while", error)
      }    
    }
}