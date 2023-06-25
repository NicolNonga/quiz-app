import { Request, Response } from "express";
import { IController } from "../../../core/interface/IController";
import { FindAllUsersUseCase } from "./findAllUsersUseCase";


export class FindAllUsersController implements IController<any, any> {

  constructor(private readonly  findAllUserUsecase: FindAllUsersUseCase){

  }
  async  handle(request?: Request, response?:  Response): Promise<Response> {

      const user = await this.findAllUserUsecase.execute()
      return  response.status(200).send(user)
    }

}