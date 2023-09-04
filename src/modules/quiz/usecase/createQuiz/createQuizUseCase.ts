import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createQuizDTO } from "../../dto/createQuizDTO";
import QuizModel from "../../model/quizModel";
import { IQuizRepository } from "../../repository/interface/IQuizRepository";

export class  CreateQuizUseCase implements  IuseCase<createQuizDTO, any>{
    constructor(private readonly quizRepository: IQuizRepository){

    }
   public async execute(data: createQuizDTO, body?: any): Promise<Result<QuizModel> >{
        
    const {name} = data
        // first check if quiz name  exits
          const quiz_name = await this.quizRepository.findQuizByName(name);
           if(quiz_name){
               return Result.fail("quiz name already exist")

           }

           // check if quiz-category is already created 
          
           const quiz_name_exits = await this.quizRepository.findQuizByName(name)

           if(quiz_name_exits)  return Result.fail("Já existe este nome")

          
           

           const quizCreated =  await this.quizRepository.createQuiz({name: name})

           return Result.ok(quizCreated)
        

    }

}