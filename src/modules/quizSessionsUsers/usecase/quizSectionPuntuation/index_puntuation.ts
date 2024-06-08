import { QuizSectionUserPuntuationRepository } from "../../repository/quiz_section_user_puntuation_repository";
import { CreateQuizSectionUserPuntuationController } from "./createQuizSectionPutuationController";
import { CreateQuizSectionPuntuationUseCase } from "./createQuizSectionValidationUseCase";

const createQuizSectionUserPuntuationRepository = new QuizSectionUserPuntuationRepository();
const createQuizSectionUserPuntuationUseCase  = new CreateQuizSectionPuntuationUseCase(createQuizSectionUserPuntuationRepository);
const createQuizSectionUserPuntuationController = new CreateQuizSectionUserPuntuationController(createQuizSectionUserPuntuationUseCase)

export {createQuizSectionUserPuntuationController}