

import { db } from "../../../utils/db.server";
import { saveQuizAttemptedInterface, saveQuizAttemptedInterfaceRepo } from "../usecase/saveQuizAttemptByUser/saveQuizAttemptedByUserUseCase";

export class QuizAttemptedRepository implements saveQuizAttemptedInterfaceRepo {

  public async listByUserAndQuizSection(data: Omit<saveQuizAttemptedInterface, "option_id">): Promise<any> {

    try {
      const quiz_attempt = await db.quiz_attempt.findMany({
        include: {
          quiz_section: {
            include: {
              section_question: {
                include: {
                  quiz_question: {
                    include: {
                      quiz_option: {}
                    }
                  }
                }
              }
            }
          }
        }

      })

      const filterQuizAttemp = quiz_attempt.filter((quiz) => quiz.user_id === data.user_id && quiz.quiz_section_id === data.quiz_section_id)

      return filterQuizAttemp
      console.log(filterQuizAttemp)
    } catch (error) {

    }
  }
  async create(data: saveQuizAttemptedInterface): Promise<void> {

    try {
      await db.quiz_attempt.create({
        data: {
          user_id: data.user_id,
          quez_option_id: data.option_id,
          quiz_section_id: data.quiz_section_id
        }
      })
    } catch (error) {
      throw new Error("Falha ao cadastra.");
    }

  }


}
