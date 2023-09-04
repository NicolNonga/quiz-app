import { QuizQuestionRepositoryImpl } from "../../repository/implementation/quizQuestionRepositoryImp";
import { CreateQuizQuestionController } from "./createQuizQuestionController";
import { CreateQuizQuestionUseCase } from "./createQuizQuestionUseCase";

const quizQuestionRepository = new QuizQuestionRepositoryImpl();
const quizQuestionUseCase =  new CreateQuizQuestionUseCase(quizQuestionRepository)
const createQuizQuestionController = new CreateQuizQuestionController(quizQuestionUseCase);

export {
    createQuizQuestionController
}