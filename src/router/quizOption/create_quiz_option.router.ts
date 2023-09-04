import { Router, Request, Response } from "express";
import { createQuizOptionController } from "../../modules/quizOption/usecase/createQuizOption";
import { validationMiddleware } from "../../modules/core/middleware/validation_middleware";
import { CreateQuizOptionValidation } from "../../modules/quizOption/validation/createQuizOptionValidaton";
export const createQuizOptionRouter =  Router();

createQuizOptionRouter.post('/quiz_option',  validationMiddleware(CreateQuizOptionValidation), (request: Request, response: Response)=>{
      createQuizOptionController.handle(request, response)   
})

