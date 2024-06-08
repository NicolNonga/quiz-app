import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";
import { RemoveQuizSessionUserController } from "./RemoveQuizSessetinUserController";
import { RemoveQuizSectionSessionUseCase } from "./removeQuizSessetionUserUsecase";

const quizSectionUsersRepository = new QuizSessionUsersRepository();
const removeQuizSectionUserUseCase = new RemoveQuizSectionSessionUseCase(quizSectionUsersRepository);
const removeQuizSectionUserController = new RemoveQuizSessionUserController(removeQuizSectionUserUseCase);


export { removeQuizSectionUserController}