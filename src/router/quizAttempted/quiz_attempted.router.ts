import { Router, Request, Response, request } from "express";
import { quizAttemptedController } from "../../modules/quizAttempt/usecase/saveQuizAttemptByUser";
import { listquizAttemptedController } from "../../modules/quizAttempt/usecase/listQuizAttempByUser";

const quizAttempteRouter =Router();

quizAttempteRouter.post('/quiz-attempted',  (request:Request, response:Response)=>{
    return quizAttemptedController.handle(request, response)
   })
   
   quizAttempteRouter.get('/quiz_attempted', (request:Request, response: Response)=>{
    return listquizAttemptedController.handle(request, response)
   })

   export {quizAttempteRouter}