import { QuizQuestionRepositoryImpl } from "../../../quizQuestion/repository/implementation/quizQuestionRepositoryImp";
import { QuizSectionRepository } from "../../repository/implementation/quizSectionRepositoryImp";
import { CreateQuizSectionController } from "./createQuizSectionController";
import { CreateQuizSectionUseCase } from "./createQuizSectionUseCase";

const quizSectionRepository = new QuizSectionRepository();
const createQuizSectionUseCase = new CreateQuizSectionUseCase(quizSectionRepository)
const createQuizSectionController = new CreateQuizSectionController(createQuizSectionUseCase)

export { createQuizSectionController}