import { QuizOptionRepositoryImpl } from "../../repository/implementation/quizOptionRepositoryImp";
import { FindAllQuizOptionController } from "./findAllQuizOptionController";

import { FindAllQuizOptionUseCase } from "./findAllQuizOptionUseCase";

const  quizOptionRepository = new QuizOptionRepositoryImpl();
const  findAllQuizOptionUseCase = new FindAllQuizOptionUseCase(quizOptionRepository);
const  findAllQuizOptionController = new FindAllQuizOptionController(findAllQuizOptionUseCase)


export {
    findAllQuizOptionController
}