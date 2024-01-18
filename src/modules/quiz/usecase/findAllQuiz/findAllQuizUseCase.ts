import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import QuizModel from "../../model/quizModel";
import { IQuizRepository } from "../../repository/interface/IQuizRepository";

export class FindAllQuizUseCase implements IuseCase<any, any> {
    constructor(private  readonly  quizRepository: IQuizRepository){

    }


   async execute(request?: any, body?: any):  Promise<Result<QuizModel[]>> {
        
        const quiz = await this.quizRepository.findAllQuiz();
        console.log("quiz", {quiz})
        return Result.ok(quiz)
    }
} 