import { Request, Response, Router } from "express";
import { findAllQuizOptionController } from "../../modules/quizOption/usecase/findAllQuizOptions";

export const findAllQuizOptionRouter = Router();
findAllQuizOptionRouter.get(
  "/quiz_option",
  (request: Request, response: Response) => {
    findAllQuizOptionController.handle(request, response);
  }
);
