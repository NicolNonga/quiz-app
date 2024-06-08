import { IuseCase } from "../../../core/interface/IUseCase";
import { QuizSectionUserPuntuationRepository, puntuationInterface } from "../../repository/quiz_section_user_puntuation_repository";

export class CreateQuizSectionPuntuationUseCase implements IuseCase<any, any>{
    constructor(private readonly creatQuizSectionValidationRepo: QuizSectionUserPuntuationRepository) {

    }
    async execute(data: puntuationInterface, body?: any) {
        const { quiz_section_id, user_id, puntuation } = data

        try {
            await this.creatQuizSectionValidationRepo.savePuntationUser({
                quiz_section_id,
                user_id,
                puntuation
            })
        } catch (error) {
              console.log(error)
        }


    }
}