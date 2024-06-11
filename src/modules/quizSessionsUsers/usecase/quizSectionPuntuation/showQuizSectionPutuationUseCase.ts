;import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizSectionUserPuntuation, puntuationInterface } from "../../repository/quiz_section_user_puntuation_repository";

export interface showSectionPutuation {
    user_id: string,
    quiz_section_id: string
}
export class ShowQuizSectionPuntuationUseCase implements IuseCase<any, any> {
      constructor(private quizSectionUserPuntuationRepository: QuizSectionUserPuntuation){

      }

    async execute(data: showSectionPutuation) {
      const  {user_id, quiz_section_id} = data;
       console.log(user_id, quiz_section_id)
       
       try {

          const data = await this.quizSectionUserPuntuationRepository.showPuntationUser({
            user_id,
            quiz_section_id
          })

          return data;
       } catch (error) {
        
       }

    }
    
}