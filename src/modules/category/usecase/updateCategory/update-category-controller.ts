import { IController } from "../../../core/interface/IController";
import { Request, Response, request } from "express";
import { Result } from "../../../core/erroHandling/customResult";
import CategoryModel from "../../model/categoryModel";
import { UpdateCategoryUseCase } from "./update-category-usecase";
export class UpdateCategoryController implements IController<any, any>{
  
     constructor(private updateCategoryUseCase: UpdateCategoryUseCase){

     }
  async  handle(request: Request, response: Response): Promise <Response> {
          const {name}= request?.body
          const {id} = request.params
          const categoryOrError : Result<CategoryModel> = await this.updateCategoryUseCase.execute(name, id);
          
          if(!categoryOrError.isSuccess){
            return response.status(400).send({message: categoryOrError.error}) 
          }

          return response.status(201).send({nessage: " Categoria  Actualizado com sucesso"})
      
    }
    
}