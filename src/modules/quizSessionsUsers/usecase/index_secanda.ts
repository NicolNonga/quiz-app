
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";

import { ListQuizSessionUserController } from "./listQuizSessionUserController";
import { ListQuizSessionUserUseCase } from "./listQuizSessionUserUseCase";

const quizSessionUsersRepository = new QuizSessionUsersRepository();
const listQuizSessionUserUseCase = new ListQuizSessionUserUseCase(quizSessionUsersRepository)
const listQuizSessionUserController = new ListQuizSessionUserController(listQuizSessionUserUseCase)

export { listQuizSessionUserController}