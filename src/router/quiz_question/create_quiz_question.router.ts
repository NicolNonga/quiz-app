import { Router } from "express";
import { createQuizQuestionController } from "../../modules/quizQuestion/useCase/createQuizQuestion";
import { validationMiddleware } from "../../modules/core/middleware/validation_middleware";
import { CreateQuizQuestionValidation } from "../../modules/quizQuestion/validation/createQuizQuestionValidation";
const quizQuestionRouter =  Router();
quizQuestionRouter.post('/quiz_question', validationMiddleware(CreateQuizQuestionValidation),  (request, response)=>{
    return createQuizQuestionController.handle(request, response)
})

export {
    quizQuestionRouter
}