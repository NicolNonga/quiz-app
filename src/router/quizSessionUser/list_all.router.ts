import { Router, Request, Response } from "express";

import { listQuizSessionUserController } from "../../modules/quizSessionsUsers/usecase/index_secanda"
export const listAllQuizSectionUser = Router();

listAllQuizSectionUser.get('/quiz_session/users', (request: Request, response: Response)=> {
    return listQuizSessionUserController.handle(request, response)
})