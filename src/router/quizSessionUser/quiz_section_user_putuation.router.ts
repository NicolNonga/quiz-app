import { Router, Request, Response } from "express";
import { createQuizSectionUserPuntuationController } from "../../modules/quizSessionsUsers/usecase/quizSectionPuntuation/index_puntuation";
export const createQuizSectionUserPutuationRouter = Router();

createQuizSectionUserPutuationRouter.post('/users/quiz_section/puntation', (request: Request, response: Response)=> {
    return createQuizSectionUserPuntuationController.handle(request, response)
})