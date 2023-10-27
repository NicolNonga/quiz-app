import { QuizSectionRepository } from "../../repository/implementation/quizSectionRepositoryImp";
import { UpdateQuziSessionController } from "./update-quiz-section-controller";
import { UpdateQuizSessionUseCase } from "./update-quiz-section-use-case";


const quizSessionRepository= new QuizSectionRepository();
const updateQuizSessionUseCase= new UpdateQuizSessionUseCase(quizSessionRepository);
export const updateQuizSessionController = new UpdateQuziSessionController(updateQuizSessionUseCase)