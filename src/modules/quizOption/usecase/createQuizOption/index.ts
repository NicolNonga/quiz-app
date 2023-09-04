import { QuizOptionRepositoryImpl } from "../../repository/implementation/quizOptionRepositoryImp";
import { CreateQuizOptionController } from "../createQuizOptionController";
import { createQuizOptionUsecase } from "./createQuizOptionUseCase";

const  quizOptionRepository = new QuizOptionRepositoryImpl();
const  createQuizOptionUseCase = new createQuizOptionUsecase(quizOptionRepository);
const  createQuizOptionController = new CreateQuizOptionController(createQuizOptionUseCase)

export{
    createQuizOptionController
}