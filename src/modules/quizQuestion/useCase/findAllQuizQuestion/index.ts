import { QuizQuestionRepositoryImpl } from "../../repository/implementation/quizQuestionRepositoryImp";
import { FindAllQuizQuestionController } from "./findAllQuizQuestionController";
import { FindAllQuizQuestionUseCase } from "./findAllQuizQuestionUseCase";

const quizQuestionRepository = new  QuizQuestionRepositoryImpl();
const findAllQuizQuestionUseCase = new FindAllQuizQuestionUseCase(quizQuestionRepository);
const findAllQuizQuestionController =  new FindAllQuizQuestionController(findAllQuizQuestionUseCase);

export{
    findAllQuizQuestionController
}