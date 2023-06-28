import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createQuizDTO } from "../../dto/createQuizDTO";
import QuizModel from "../../model/quizModel";
import { IQuizRepository } from "../../repository/interface/IQuizRepository";

export class  CreateQuizUseCase implements  IuseCase<createQuizDTO, any>{
    constructor(private readonly quizRepository: IQuizRepository){

    }
   public async execute(data?: createQuizDTO, body?: any): Promise<Result<QuizModel> >{
        
    const {name, quiz_category} = data
        // first check if quiz name  exits
          const quiz_name = await this.quizRepository.findQuizByName(name);
           if(quiz_name){
               return Result.fail("Já existe um nome para este quiz")

           }

           // check if quiz-category is already created 
           const quiz_category_exits = await  this.quizRepository.findQuizByCategory(quiz_category)

           if(quiz_category_exits){
             return Result.fail("Já existe categora para este quiz")
           }

           const quizCreated =  await this.quizRepository.createQuiz(
                {name, quiz_category}
           )

           return Result.ok(quizCreated)
        

    }

}