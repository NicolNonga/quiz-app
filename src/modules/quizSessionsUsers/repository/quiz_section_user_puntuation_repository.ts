import { db } from "../../../utils/db.server"
import { showSectionPutuation } from "../usecase/quizSectionPuntuation/showQuizSectionPutuationUseCase"

export interface QuizSectionUserPuntuation {
    savePuntationUser(data: puntuationInterface): Promise<void>
    showPuntationUser(data: showSectionPutuation): Promise< any >
}
export interface puntuationInterface {
    user_id: string
    quiz_section_id: string
    puntuation: string,
    total_pergunta_acertas: number,
    total_perguntas_erradas: number
}


export class QuizSectionUserPuntuationRepository implements QuizSectionUserPuntuation {
    async savePuntationUser(data: puntuationInterface): Promise<void> {
        try {
       
            await db.quiz_section_user_avalition.create({
                data: {
                    user_id: data.user_id,
                    quiz_section_id: data.quiz_section_id,
                    punctuation: parseFloat(data.puntuation),
                    total_pergunta_acertas: data.total_pergunta_acertas,
                    total_perguntas_erradas: data.total_perguntas_erradas
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
   async showPuntationUser(data: Omit<puntuationInterface, "puntuation" | "total_perguntas_erradas" |"total_perguntas_certas">): Promise<any> {
           console.log("data",data.user_id,)
            const  quiz_sectionValiation=  await db.quiz_section_user_avalition.findMany({
             where: {
                user_id: data.user_id,
                quiz_section_id :  data.quiz_section_id
             }
           })
           if(!quiz_sectionValiation)  return   []
           return quiz_sectionValiation
    }

}