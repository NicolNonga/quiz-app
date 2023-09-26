import { IController } from "../../../core/interface/IController";
import { FindAllCategoryUseCase } from "./findAllCategoryUseCase";
import { Request, Response } from "express";
export class FindAllCategoryController implements IController <any, any> {
    constructor(private readonly findAllCategory : FindAllCategoryUseCase){

    }

     public async handle(request: Request, response: Response): Promise<Response> {
              const  category = await this.findAllCategory.execute();

              return response.status(200).send(category)
    }
}