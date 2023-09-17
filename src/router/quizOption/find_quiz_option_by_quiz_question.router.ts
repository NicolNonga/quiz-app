import { Router, Request, Response } from "express";
import { findQuizOptionByQuizQuestionController } from "../../modules/quizOption/usecase/findQuizOptionByQuizQuestion";

export const FindQuizOptionByQuizQuestionRouter = Router();

FindQuizOptionByQuizQuestionRouter.get(
  "/quiz_option/by_quiz_question",
  (request: Request, response: Response) => {
    findQuizOptionByQuizQuestionController.handle(request, response);
  }
);
