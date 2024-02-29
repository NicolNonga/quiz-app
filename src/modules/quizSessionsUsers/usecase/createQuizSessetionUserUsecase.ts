import { IuseCase } from "../../core/interface/IUseCase";
import { QuizSessionUsersRepository } from "../repository/quiz_session_users_repository";

export interface createQuizSessionUsers {
    users: Array<string>
    sessetion_id: string
}

export class CreateQuizSectionUserUsecase implements IuseCase<any, any>{

    constructor(private readonly quizSessitionUser: QuizSessionUsersRepository) {

    }
    public execute(data?: createQuizSessionUsers, body?: any) {
        try {
            data?.users.forEach(async (element) => {
                await this.quizSessitionUser.create({
                    user_id: element,
                    quiz_sessetion_id: data.sessetion_id
                })
            })
        } catch (error) {

        }
    }

}