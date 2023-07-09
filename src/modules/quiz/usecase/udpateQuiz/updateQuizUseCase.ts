import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { UpdateQuizDTO } from "../../dto/updateQuizDTO";
import { IQuizRepository } from "../../repository/interface/IQuizRepository";

export  class UpdateQuizUseCae implements IuseCase<any, any> {
     constructor(private readonly quizRepository: IQuizRepository){

     }

public async    execute(data?: UpdateQuizDTO, id?: string) : Promise<Result<any>>{
        const {name, quiz_category} = data
      
        //? check if the id quiz exists 
       const quiz = await this.quizRepository.findQuizById(id)
          if(!quiz) {
            return Result.fail("quiz id not found")
          }

      const quiz_updated =    await this.quizRepository.editQuiz(data,id)
      
      return Result.ok(quiz_updated)

    }

}