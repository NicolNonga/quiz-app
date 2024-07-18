import { Router, Request, Response } from "express";
import { showQuizSectionUserPuntuationController } from "../../modules/quizSessionsUsers/usecase/quizSectionPuntuation/index_show_puntuation";
export const showQuizSectionUserPutuationRouter = Router();

showQuizSectionUserPutuationRouter.get('/users/puntuation/:user_id/:quiz_section_id', (request: Request, response: Response)=> {
    return showQuizSectionUserPuntuationController.handle(request, response)
})