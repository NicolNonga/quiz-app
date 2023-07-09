import { Router, response } from "express";
import { quizRouters } from "./create_quiz.router";
import { updateQuizController } from "../../modules/quiz/usecase/udpateQuiz";

const updateQuizRouter = Router();
quizRouters.put('/quiz/:quiz_id', (request, response) =>{
    return updateQuizController.handle(request, response)
})

export { updateQuizRouter}