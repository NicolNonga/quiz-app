import { Router, Request, Response } from "express";
import { showQuizSectionUserPuntuationController } from "../../modules/quizSessionsUsers/usecase/quizSectionPuntuation/index_show_puntuation";
export const showQuizSectionUserPutuationRouter = Router();

showQuizSectionUserPutuationRouter.post('/users/puntuation', (request: Request, response: Response)=> {
    return showQuizSectionUserPuntuationController.handle(request, response)
})