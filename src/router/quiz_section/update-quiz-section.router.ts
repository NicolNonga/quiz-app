import { Router } from "express";
import { updateQuizSessionController } from "../../modules/quizSection/usecase/updateQuizSection";

export const updateQuizSessionRouter = Router();
updateQuizSessionRouter.put('/quiz_section/:id', (request, response)=> {
    return updateQuizSessionController.handle(request, response)
})