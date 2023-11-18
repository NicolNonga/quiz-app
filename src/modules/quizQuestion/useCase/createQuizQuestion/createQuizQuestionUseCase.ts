import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IQuizRepository } from "../../../quiz/repository/interface/IQuizRepository";
import { ISectionQuestionRepository } from "../../../sectionQuestion/respository/interface/ISectionQuestionRepository";
import { CreateQuizQuestionDTO } from "../../dto/createQuizQuestionDTO";
import QuizQuestionModel from "../../model/quizQuestionModel";
import { IQuizQuestionRepository } from "../../repository/interface/IQuizQuestionRepository";

export class CreateQuizQuestionUseCase implements IuseCase<any, any> {
  constructor(
    private readonly quizQuestionRepository: IQuizQuestionRepository,
    private readonly sectionQuestionRepository: ISectionQuestionRepository
  ) {}

  public async execute(
    data: CreateQuizQuestionDTO,
    body: any
  ): Promise<Result<QuizQuestionModel> | any> {
    const { question_text, section } = data;
    // first validate if quiz_text_exit or not
    const find_quiz_text =
      await this.quizQuestionRepository.findQuizQuestionText(question_text);
    if (find_quiz_text) return Result.fail("Quiz Question already created");

    const quiz_question = await this.quizQuestionRepository.create({
      question_text,
    });

    
       section?.forEach(async(data) =>{
          console.log(data)
           await  this.sectionQuestionRepository.create({
            quiz_section_id: data.quiz_section_id,
            question_id:  quiz_question.id
           })
       })

       
    return Result.ok();
  }
}
