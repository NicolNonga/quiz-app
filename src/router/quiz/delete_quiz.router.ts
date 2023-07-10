import { Router, response } from "express";
import { deleteQuizController } from "../../modules/quiz/usecase/deleteQuiz";

const deleteQuizRouter = Router();
deleteQuizRouter.delete("/quiz/:quiz_id", (request, response) => {
  return deleteQuizController.handle(request, response);
});

export {deleteQuizRouter}
