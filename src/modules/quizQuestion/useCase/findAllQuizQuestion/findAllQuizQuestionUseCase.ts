import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../../repository/interface/IQuizQuestionRepository";

export class FindAllQuizQuestionUseCase implements IuseCase<any, any> {
    constructor(private readonly quizQuestionRepository: IQuizQuestionRepository){

    }
   
    public async execute(request?: any, body?: any): Promise<Result<QuizQuestionModel []>> {
       
         const quizQueiston = await this.quizQuestionRepository.findAll();
         return Result.ok(quizQueiston)
    }

    
}