import { db } from "../../../utils/db.server"

export interface QuizSectionUserPuntuation {
    savePuntationUser(data: puntuationInterface): Promise<void>
    showPuntationUser(data: Omit<puntuationInterface, 'puntuation'>): Promise< any >
}
export interface puntuationInterface {
    user_id: string
    quiz_section_id: string
    puntuation: string
}


export class QuizSectionUserPuntuationRepository implements QuizSectionUserPuntuation {
    async savePuntationUser(data: puntuationInterface): Promise<void> {
        try {
       
            await db.quiz_section_user_avalition.create({
                data: {
                    user_id: data.user_id,
                    quiz_section_id: data.quiz_section_id,
                    punctuation: parseFloat(data.puntuation)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
   async showPuntationUser(data: Omit<puntuationInterface, "puntuation">): Promise<any> {
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