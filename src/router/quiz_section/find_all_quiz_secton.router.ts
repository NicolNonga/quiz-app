import { Router } from "express";
import { findAllQUizSectionController } from "../../modules/quizSection/usecase/findAllQuizSection";

const findAllQuizSectionRouter = Router();

findAllQuizSectionRouter.get("/quiz_section/all", (request, response) => {
  findAllQUizSectionController.handle(request, response);
});

export { findAllQuizSectionRouter };
