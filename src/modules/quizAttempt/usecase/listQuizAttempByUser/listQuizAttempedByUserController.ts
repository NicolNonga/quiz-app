import { IController } from "../../../core/interface/IController";
import { Request, Response } from "express"

import { Result } from "../../../core/erroHandling/customResult";
import { ListQuizAttempedByUseUseCase } from "./listQuizAttempedByUserUseCase";
export class ListQuizAttempedController implements IController<any, any> {

    constructor(private readonly saveQuizAttemptUseCase: ListQuizAttempedByUseUseCase) {

    }
    public async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, quiz_section_id } = request.params;
        console.log(user_id)

    const data=  await this.saveQuizAttemptUseCase
            .execute({ user_id, quiz_section_id })
        return response.status(200).send({data})
    }

}