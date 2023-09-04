import { Router, request, response} from "express";
import { validationMiddleware } from "../../modules/core/middleware/validation_middleware";
import { createQuizSectionValidation } from "../../modules/quizSection/validation/createQuizSectionValidation";
import { createQuizSectionController } from "../../modules/quizSection/usecase/createQuizSection";

const createQuizSectionRouter = Router();
createQuizSectionRouter.post('/quiz_section',  validationMiddleware(createQuizSectionValidation), (request, reponse)=>{
         return  createQuizSectionController.handle(request, reponse)
})

export {
    createQuizSectionRouter
}