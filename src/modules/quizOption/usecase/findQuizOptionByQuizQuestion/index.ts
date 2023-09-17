import { QuizOptionRepositoryImpl } from "../../repository/implementation/quizOptionRepositoryImp";
import { FindByQuizQuestionController } from "./findByQuizQuestionController";
import { FindQuizOptionByQuizQuestionUseCase } from "./findByQuizQuestionUsecase";

const quizOptionRepository = new QuizOptionRepositoryImpl();
const findQuizOptionByQuizQuestionUseCase = new FindQuizOptionByQuizQuestionUseCase(quizOptionRepository);
const findQuizOptionByQuizQuestionController = new FindByQuizQuestionController(findQuizOptionByQuizQuestionUseCase)

export {findQuizOptionByQuizQuestionController}