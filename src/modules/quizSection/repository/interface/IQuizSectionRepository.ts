import { CreateQuizSectionDTO } from "../../dto/createQuizSection";
import { QuizSectionModel } from "../../model/quizSectionModel";

export interface IQuizSectionRepository{
    create(data:CreateQuizSectionDTO): Promise<QuizSectionModel>
    findQUizSectionByName(quiz_sectionName: string):Promise<QuizSectionModel |  undefined>
    findAll(): Promise<QuizSectionModel []>
    edit(quiz_section_id: string, data: CreateQuizSectionDTO ): Promise<void>
}