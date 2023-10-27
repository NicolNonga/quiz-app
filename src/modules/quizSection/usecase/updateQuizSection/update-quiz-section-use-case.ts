import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { CreateQuizSectionDTO } from "../../dto/createQuizSection";
import { IQuizSectionRepository } from "../../repository/interface/IQuizSectionRepository";

export  class UpdateQuizSessionUseCase implements IuseCase<any, any> {
    constructor(private quizSessionRepository: IQuizSectionRepository){

    }
  public async execute(quiz_section_id: string, data: CreateQuizSectionDTO): Promise<Result<any>> {

       try {
        const quizSession = await this.quizSessionRepository.edit(quiz_section_id, data)
        return Result.ok(quizSession)
       } catch (error) {
        
        return  Result.fail("Falha ao actualizar")
       }
        
    }
}