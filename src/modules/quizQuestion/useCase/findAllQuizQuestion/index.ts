import { QuizOptionRepositoryImpl } from "../../../quizOption/repository/implementation/quizOptionRepositoryImp";
import { QuizQuestionRepositoryImpl } from "../../repository/implementation/quizQuestionRepositoryImp";
import { FindAllQuizQuestionController } from "./findAllQuizQuestionController";
import { FindAllQuizQuestionUseCase } from "./findAllQuizQuestionUseCase";

const quizQuestionRepository = new  QuizQuestionRepositoryImpl();
const quizOptionRepository = new QuizOptionRepositoryImpl()
const findAllQuizQuestionUseCase = new FindAllQuizQuestionUseCase(quizQuestionRepository, quizOptionRepository);
const findAllQuizQuestionController =  new FindAllQuizQuestionController(findAllQuizQuestionUseCase);

export{
    findAllQuizQuestionController
}