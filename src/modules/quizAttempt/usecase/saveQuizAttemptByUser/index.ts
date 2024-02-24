
import { QuizAttemptedRepository } from "../../repository/quizAttempedRepository";
import { SaveQuizAttempedController } from "./saveQuizAttempedByUserController";
import { SaveQuizAttemptedByUserUsseCase } from "./saveQuizAttemptedByUserUseCase";

const quizAttempetedRepository = new QuizAttemptedRepository();
const quizAttemptedUseCase  = new SaveQuizAttemptedByUserUsseCase(quizAttempetedRepository);
const quizAttemptedController = new SaveQuizAttempedController(quizAttemptedUseCase)

export {
    quizAttemptedController
}