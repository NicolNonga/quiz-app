import { Router, request, response } from "express";
import { getQuestionBySectionController } from "../../modules/sectionQuestion/useCase/getQuestionBySection";

export const getQuestionBySection = Router();

getQuestionBySection.get('/section_question/:section_id', (request, response)=> {
    return getQuestionBySectionController.handle(request, response)
})