import { QuizRepositoryImpl } from "../../repository/implementation/quizRepositoryImpl";
import { DeleteQuizController } from "./deleteQuizController";
import { DeleteQuizUsecase } from "./deleteQuizUseCase";

const quizRepository = new QuizRepositoryImpl();
const deleteQuizUseCase = new DeleteQuizUsecase(quizRepository);
const deleteQuizController = new DeleteQuizController(deleteQuizUseCase);

export { deleteQuizController };
