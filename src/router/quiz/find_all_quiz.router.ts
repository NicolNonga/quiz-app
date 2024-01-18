import { Router, request, response } from "express";
import { findAllQuizController } from "../../modules/quiz/usecase/findAllQuiz";

const findAllQuizRouter = Router();
findAllQuizRouter.get("/quiz/all", (request, response) =>{


     console.log("teste")
    return findAllQuizController.handle(request, response)
})

export { findAllQuizRouter}