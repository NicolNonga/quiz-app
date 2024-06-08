;import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizSectionUserPuntuation, puntuationInterface } from "../../repository/quiz_section_user_puntuation_repository";

export class ShowQuizSectionPuntuationUseCase implements IuseCase<any, any> {
      constructor(private quizSectionUserPuntuationRepository: QuizSectionUserPuntuation){

      }

    async execute(data: Omit<puntuationInterface, 'puntuation'>) {
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