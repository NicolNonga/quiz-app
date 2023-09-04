import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { CreateQuizSectionDTO } from "../../dto/createQuizSection";
import { QuizSectionModel } from "../../model/quizSectionModel";
import { IQuizSectionRepository } from "../../repository/interface/IQuizSectionRepository";

export class CreateQuizSectionUseCase
  implements IuseCase<CreateQuizSectionDTO, any>
{
  constructor(private readonly quizSectionRepository: IQuizSectionRepository) {}
  public async execute(
    data: CreateQuizSectionDTO,
    body?: any
  ): Promise<Result<QuizSectionModel>> {
    const { name } = data;
    //? primeiro validamos se não existe nenhuma quiz_section com este nome
    const quiz_section_name =
      await this.quizSectionRepository.findQUizSectionByName(name);
    if (quiz_section_name)
      return Result.fail("Já existe uma quiz section com este nome");

    const quizCreated = await this.quizSectionRepository.create({ ...data });
    return Result.ok(quizCreated);
  }
}
