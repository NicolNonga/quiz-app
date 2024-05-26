
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";
import { ListQuizSessionUserByQuizController } from "./listQuizSessionUserByQuizController";
import { ListQuizSessionByQuizUseCase } from "./listQuizSessionUserByQuizUsecase";

const quizSessionUsersRepository = new QuizSessionUsersRepository();
const listQuizSessionUserByQuizUsecase = new ListQuizSessionByQuizUseCase(quizSessionUsersRepository)
const listQuizSessionUserByQuizController = new ListQuizSessionUserByQuizController(listQuizSessionUserByQuizUsecase)

export { listQuizSessionUserByQuizController}