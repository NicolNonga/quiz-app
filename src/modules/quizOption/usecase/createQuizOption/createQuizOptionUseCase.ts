import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizAttachmentInterface } from "../../../quizAttachment/repository/interface/quizAttachmentRepositoryInterface";
import { QuizOption, createQuizOptionDTO } from "../../dto/createQuizOptionDTO";
import { QuizOptionModel } from "../../model/quizOptionModel";
import { IQuizOptionRepository } from "../../repository/interface/IQuizOptionRepository";

export class createQuizOptionUsecase implements IuseCase<any, any> {
     constructor(private readonly quizOptionRepository: IQuizOptionRepository, private readonly quizAttachmentRepository: IQuizAttachmentInterface){

     }
   public async execute(data:createQuizOptionDTO , files:any): Promise<Result<QuizOptionModel>> {
       const {quiz_option, quiz_question_id} = data;

       const quizOptionConverted:Array<QuizOption>= JSON.parse(quiz_option)

       // ? first we validate if option_text already exits
/*        const findOptionText = await this.quizOptionRepository.findOptionText(option_text);
       if(findOptionText) return Result.fail('option text already exits');
       const quizOption = await this.quizOptionRepository.create({
        ...data
       }) */
       

       console.log(quizOptionConverted[0])



       for(let i = 0;  i< quizOptionConverted.length ; i ++){
        let attachmentes:any
        if(!quizOptionConverted[i].is_img){
          const findOptionText = await this.quizOptionRepository.findOptionText(quizOptionConverted[i].option_text, quiz_question_id);
          if(findOptionText) continue

         
        }
        const quizOption=  await this.quizOptionRepository.create({...quizOptionConverted[i]}, quiz_question_id)
        if(quizOptionConverted[i].is_img){
            attachmentes= await this.quizAttachmentRepository.create({
              file_name:  files[i].filename ?? '',
              file_path: `tmp/${files[i].filename}`
            })
        }
  
      }

       return Result.ok()
    }

}