import { Router } from "express";
import { findAllQuizQuestionController } from "../../modules/quizQuestion/useCase/findAllQuizQuestion";

const findAllQuizQuestionRouter = Router();
findAllQuizQuestionRouter.get("/quiz_question", (request, response)=>{
       findAllQuizQuestionController.handle(request, response)
})

export {
    findAllQuizQuestionRouter
}