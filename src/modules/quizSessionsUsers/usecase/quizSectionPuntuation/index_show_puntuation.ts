import { QuizSectionUserPuntuationRepository } from "../../repository/quiz_section_user_puntuation_repository";
import { ShowQuizSectionPutuationController } from "./showQuizSectionPutuationController";
import { ShowQuizSectionPuntuationUseCase } from "./showQuizSectionPutuationUseCase";

const createQuizSectionUserPuntuationRepository = new QuizSectionUserPuntuationRepository();
const showQuizSectionPuntuationUseCase  = new ShowQuizSectionPuntuationUseCase(createQuizSectionUserPuntuationRepository);
const showQuizSectionUserPuntuationController = new ShowQuizSectionPutuationController(showQuizSectionPuntuationUseCase)


export {showQuizSectionUserPuntuationController}