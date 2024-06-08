import { Router, Request, Response } from "express";
import { getQuestionBySectionController } from "../../modules/sectionQuestion/useCase/getQuestionBySection";
import { quizSectionCompletedController } from "../../modules/quizSessionsUsers/usecase/quizSectionCompleted";


export const completedQuizSessionUsersRouter = Router();

completedQuizSessionUsersRouter.put('/quiz_session/users/completed', (request: Request, response: Response)=> {
    return quizSectionCompletedController.handle(request, response)
})