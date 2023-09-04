import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../../repository/interface/IQuizOptionRepository";

export class createQuizOptionUsecase implements IuseCase<any, any> {
     constructor(private readonly quizOptionRepository: IQuizOptionRepository){

     }
   public async execute(data:createQuizOptionDTO, body: any): Promise<Result<QuizOptionModel>> {
       const {option_text} = data;

       // ? first we validate if option_text already exits
       const findOptionText = await this.quizOptionRepository.findOptionText(option_text);
       if(findOptionText) return Result.fail('option text already exits');
       const quizOption = await this.quizOptionRepository.create({
        ...data
       })

       return Result.ok(findOptionText)
    }

}