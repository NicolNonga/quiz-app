import { QuizAttachmentRepositoryImp } from "../../../quizAttachment/repository/implementation/quizAttachmentRepositoryImpl";
import { QuizOptionRepositoryImpl } from "../../repository/implementation/quizOptionRepositoryImp";
import { CreateQuizOptionController } from "./createQuizOptionController";
import { createQuizOptionUsecase } from "./createQuizOptionUseCase";

const  quizOptionRepository = new QuizOptionRepositoryImpl();
const quizAttachmentRepository= new QuizAttachmentRepositoryImp()
const  createQuizOptionUseCase = new createQuizOptionUsecase(quizOptionRepository, quizAttachmentRepository);
const  createQuizOptionController = new CreateQuizOptionController(createQuizOptionUseCase)

export{
    createQuizOptionController
}