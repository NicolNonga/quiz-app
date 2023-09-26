import { SectionQuestionRepositoryImpl } from "../../../sectionQuestion/respository/implementation/sectionQuestionRepositoryImpl";
import { QuizQuestionRepositoryImpl } from "../../repository/implementation/quizQuestionRepositoryImp";
import { CreateQuizQuestionController } from "./createQuizQuestionController";
import { CreateQuizQuestionUseCase } from "./createQuizQuestionUseCase";

const quizQuestionRepository = new QuizQuestionRepositoryImpl();
const sectionQuestion = new SectionQuestionRepositoryImpl()
const quizQuestionUseCase =  new CreateQuizQuestionUseCase(quizQuestionRepository, sectionQuestion)
const createQuizQuestionController = new CreateQuizQuestionController(quizQuestionUseCase);

export {
    createQuizQuestionController
}