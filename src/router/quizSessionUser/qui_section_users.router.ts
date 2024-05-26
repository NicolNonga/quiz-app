import { Router, Request, Response } from "express";

import { listQuizSessionUserByQuizController } from "../../modules/quizSessionsUsers/usecase/index_quiz_section_users";
export const listAllQuizSectionByQuiz = Router();

listAllQuizSectionByQuiz.get('/users/quiz_section/:quiz_section_id', (request: Request, response: Response)=> {
    return listQuizSessionUserByQuizController.handle(request, response)
})