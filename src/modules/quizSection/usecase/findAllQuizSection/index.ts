import { QuizQuestionRepositoryImpl } from "../../../quizQuestion/repository/implementation/quizQuestionRepositoryImp";
import { QuizSectionRepository } from "../../repository/implementation/quizSectionRepositoryImp";
import { FindAllQuizSectionController } from "./findAllQuizSectionController";
import { FindAllQUizSectionUseCase } from "./findAllQuizSectionUseCase";


const quizSectionRepository = new QuizSectionRepository();
const findAllQuizSectionUseCase = new FindAllQUizSectionUseCase(quizSectionRepository);
const findAllQUizSectionController =  new FindAllQuizSectionController(findAllQuizSectionUseCase)

export {
    findAllQUizSectionController
}
