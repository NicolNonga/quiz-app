
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";

import { CreateQuizSessionUserController } from "./createQuizSessetinUserController";
import { CreateQuizSectionUserUsecase } from "./createQuizSessetionUserUsecase";

const quizSectionUsersRepository = new QuizSessionUsersRepository();
const createQuizSectionUserUsecase = new CreateQuizSectionUserUsecase(quizSectionUsersRepository)
const createQuizSessionUserController = new CreateQuizSessionUserController(createQuizSectionUserUsecase)

export { createQuizSessionUserController}