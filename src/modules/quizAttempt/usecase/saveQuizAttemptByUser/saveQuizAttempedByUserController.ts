import { IController } from "../../../core/interface/IController";
import { Request, Response } from "express"

import { Result } from "../../../core/erroHandling/customResult";
import { SaveQuizAttemptedByUserUsseCase } from "./saveQuizAttemptedByUserUseCase";

export class SaveQuizAttempedController implements IController<any, any> {

    constructor(private readonly saveQuizAttemptUseCase: SaveQuizAttemptedByUserUsseCase) {

    }
    public async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, quiz_section_id, option_id, time_to_complete } = request.body;

        //console.log(files)

        await this.saveQuizAttemptUseCase
            .execute({ user_id, quiz_section_id, option_id , time_to_complete})


        return response.status(201).send()
    }

}