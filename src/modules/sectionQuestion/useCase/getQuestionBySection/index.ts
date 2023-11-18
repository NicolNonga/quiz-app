import { QuizOptionRepositoryImpl } from "../../../quizOption/repository/implementation/quizOptionRepositoryImp";
import { SectionQuestionRepositoryImpl } from "../../respository/implementation/sectionQuestionRepositoryImpl";
import { GetQuestionBySectionController } from "./getQuestionBySectionController";
import { GetQuestionBySectionUseCase } from "./getQuestionBySectionUseCase";


const sectionQuestionRepository = new SectionQuestionRepositoryImpl();
const quizOptionRepository = new QuizOptionRepositoryImpl()
const getQuestionBySectionUsecase = new GetQuestionBySectionUseCase(sectionQuestionRepository, quizOptionRepository)
export const getQuestionBySectionController = new GetQuestionBySectionController(getQuestionBySectionUsecase)