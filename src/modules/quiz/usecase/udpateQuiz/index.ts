import { QuizRepositoryImpl } from "../../repository/implementation/quizRepositoryImpl";
import { UpdateQuizController } from "./updateQuizController";
import { UpdateQuizUseCae } from "./updateQuizUseCase";

const quizRepository = new QuizRepositoryImpl()
const updateQuizUseCase = new UpdateQuizUseCae(quizRepository)
const updateQuizController = new UpdateQuizController(updateQuizUseCase)

export {
    updateQuizController
}