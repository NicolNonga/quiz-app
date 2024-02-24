
import { QuizAttemptedRepository } from "../../repository/quizAttempedRepository";
import { ListQuizAttempedController } from "./listQuizAttempedByUserController";
import { ListQuizAttempedByUseUseCase } from "./listQuizAttempedByUserUseCase";

const quizAttempetedRepository = new QuizAttemptedRepository();
const quizAttemptedUseCase  = new ListQuizAttempedByUseUseCase(quizAttempetedRepository);
const listquizAttemptedController = new ListQuizAttempedController(quizAttemptedUseCase)

export {
    listquizAttemptedController
}