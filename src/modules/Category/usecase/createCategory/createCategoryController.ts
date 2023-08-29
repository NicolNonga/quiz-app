import { IController } from "../../../core/interface/IController";
import { Request, Response, request } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";
import { Result } from "../../../core/erroHandling/customResult";
import CategoryModel from "../../model/categoryModel";
export class CreateCategoryController implements IController<any, any>{
  
     constructor(private createCategoryUseCase: CreateCategoryUseCase){

     }
  async  handle(request?: Request, response?: Response): Promise <Response> {
          const {name}= request.body
          const categoryOrError : Result<CategoryModel> = await this.createCategoryUseCase.execute(name);
          
          if(!categoryOrError.isSuccess){
            return response.status(400).send({message: categoryOrError.error})
          }

          return response.status(201).send({nessage: " Categoria Criado com sucesso"})
      
    }
    
}