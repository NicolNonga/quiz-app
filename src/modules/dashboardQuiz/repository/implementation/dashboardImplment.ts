import { db } from "../../../../utils/db.server";
import { IDashobardQuiz } from "../interface/IDashboardQuiz";

export class DashboardQuizRepository implements IDashobardQuiz {
    constructor(){

    }
  private prismaDd = db;
  async findAll(): Promise<any> {
    //  primeiro vamos fazer o count de todas as quiz
    const countQuiz = await this.prismaDd.quiz.count();
    const countQuizSesstion = await this.prismaDd.quiz_section.count();
    const countQuizQuestion = await this.prismaDd.quiz_question.count();

    return {
      countQuiz,
      countQuizQuestion,
      countQuizSesstion
    };
  }
}
