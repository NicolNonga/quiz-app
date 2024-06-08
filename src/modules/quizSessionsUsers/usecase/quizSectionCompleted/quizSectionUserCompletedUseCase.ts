import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizSessionUsersRepository } from "../../repository/quiz_session_users_repository";

interface quizCompletedInterface {
    user_id: string,
    quiz_section_id: string
}
export class  QuizSectionUserCompletedUsecase implements IuseCase<any, any> {
    constructor(private quizSectionUserRepository: QuizSessionUsersRepository){}
  
  async  execute(data: quizCompletedInterface, body?: any) {
       
      const { user_id, quiz_section_id} = data;

       try {
           await  this.quizSectionUserRepository
           .completeQuizSection(quiz_section_id, user_id)
       } catch (error) {
         console.log("eerro", error)
       }
    }

}