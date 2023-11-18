import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizOptionRepository } from "../../../quizOption/repository/interface/IQuizOptionRepository";
import { QuizSectionRepository } from "../../../quizSection/repository/implementation/quizSectionRepositoryImp";
import { ISectionQuestionRepository } from "../../respository/interface/ISectionQuestionRepository";

export class GetQuestionBySectionUseCase implements IuseCase<any, any> {

    constructor(private sectionQuestionRepository: ISectionQuestionRepository,  private readonly quizOptionRepository: IQuizOptionRepository){

    }

  public async execute(section_id:string):Promise<any> {

    const section_question= await this.sectionQuestionRepository.getQuestionBysection(section_id);

    console.log(section_question)

    return section_question
        
    }
}