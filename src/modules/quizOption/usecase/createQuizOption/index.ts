import { QuizAttachmentRepositoryImp } from "../../../quizAttachment/repository/implementation/quizAttachmentRepositoryImpl";
import { QuizOptionRepositoryImpl } from "../../repository/implementation/quizOptionRepositoryImp";
import { CreateQuizOptionController } from "./createQuizOptionController";
import { createQuizOptionUsecase } from "./createQuizOptionUseCase";
import { QuizAttachmentOptionRepositoryImp } from "../../../quizAttachmentOption/repository/quizAttachmentOptionRepositoryImp";

const  quizOptionRepository = new QuizOptionRepositoryImpl();
const quizAttachmentOptionRepository= new QuizAttachmentOptionRepositoryImp()
const quizAttachmentRepository= new QuizAttachmentRepositoryImp()
const  createQuizOptionUseCase = new createQuizOptionUsecase(quizOptionRepository, quizAttachmentRepository, quizAttachmentOptionRepository);
const  createQuizOptionController = new CreateQuizOptionController(createQuizOptionUseCase)

export{
    createQuizOptionController
}