import { QuizRepositoryImpl } from "../../repository/implementation/quizRepositoryImpl";
import { FindAllQuizController } from "./findAllQuizController";
import { FindAllQuizUseCase } from "./findAllQuizUseCase";

const quizRepository = new QuizRepositoryImpl();
const findAllQuizUseCase = new FindAllQuizUseCase(quizRepository)
const findAllQuizController = new FindAllQuizController(findAllQuizUseCase);

export {findAllQuizController}