
import { QuizSessionUsersRepository } from "../../repository/quiz_session_users_repository";
import { QuizSectionCompletedController } from "./controllerQuizSectionCompletedController";
import { QuizSectionUserCompletedUsecase } from "./quizSectionUserCompletedUseCase";
 

const quizSectionUsersRepository = new QuizSessionUsersRepository();
const quizSectionUserCompletedUsecase = new QuizSectionUserCompletedUsecase(quizSectionUsersRepository)
const quizSectionCompletedController = new QuizSectionCompletedController(quizSectionUserCompletedUsecase)

export { quizSectionCompletedController}