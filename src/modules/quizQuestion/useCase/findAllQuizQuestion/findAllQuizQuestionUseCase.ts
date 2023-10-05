import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizOptionRepository } from "../../../quizOption/repository/interface/IQuizOptionRepository";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../../repository/interface/IQuizQuestionRepository";

export class FindAllQuizQuestionUseCase implements IuseCase<any, any> {
    constructor(private readonly quizQuestionRepository: IQuizQuestionRepository, private readonly quizOptionRepository: IQuizOptionRepository){

    }
   
    public async execute(request?: any, body?: any): Promise<Result<QuizQuestionModel [] | any>> {
        let data : Array<any> = [];

       
         const quizQueiston = await this.quizQuestionRepository.findAll();


           for(let quiz of quizQueiston){
              let quizOption = await this.quizOptionRepository.findByQuizQuestion(quiz.id)
             
                data.push({quizQuestion:quiz, quizOption})
              
           }

         return Result.ok({data})
    }

    
}