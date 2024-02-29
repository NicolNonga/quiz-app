import { Router, Request, Response } from "express";
import { getQuestionBySectionController } from "../../modules/sectionQuestion/useCase/getQuestionBySection";
import { createQuizSessionUserController } from "../../modules/quizSessionsUsers/usecase";

export const createQuizSessionUsers = Router();

createQuizSessionUsers.post('/quiz_session/users', (request: Request, response: Response)=> {
    return createQuizSessionUserController.handle(request, response)
})