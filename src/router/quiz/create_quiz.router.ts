import { Router, response } from "express";
import { createQuizController } from "../../modules/quiz/usecase/createQuiz";

const  quizRouters = Router();
quizRouters.post('/quiz', (request, response) =>{
     return  createQuizController.handle(request, response)
})

export { quizRouters}