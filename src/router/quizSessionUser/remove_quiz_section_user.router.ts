import { Router, Request, Response } from "express";
import { removeQuizSectionUserController } from "../../modules/quizSessionsUsers/usecase/index_remove_quiz_section_users";


export const removeQuizSectionUserRouter = Router();

removeQuizSectionUserRouter.put("/remover/user/quiz_section", (request: Request, response: Response) => {
    return removeQuizSectionUserController.handle(request, response)
})