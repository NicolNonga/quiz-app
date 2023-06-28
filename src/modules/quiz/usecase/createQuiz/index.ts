import { QuizRepositoryImpl } from "../../repository/implementation/quizRepositoryImpl";
import { CreateQuizController } from "./createQuizController";
import { CreateQuizUseCase } from "./createQuizUseCase";

const quizRepository= new QuizRepositoryImpl()
const createQuizUseCase = new CreateQuizUseCase(quizRepository)
const createQuizController = new CreateQuizController(createQuizUseCase)


export {
    createQuizController
}