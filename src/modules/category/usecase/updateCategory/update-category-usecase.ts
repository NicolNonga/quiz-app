import { createClientDTO } from "../../../clients/dto/createClientDTO";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { CreateCategoryDTO } from "../../dto/createCategoryDTO";
import CategoryModel from "../../model/categoryModel";
import { ICategoryRepository } from "../../repository/interaface/ICategoryRopository";

export class UpdateCategoryUseCase implements IuseCase<any, any>{
    constructor(private categoryRepository: ICategoryRepository){

    }
  
  public async  execute(name: string, id: string) :Promise<Result <CategoryModel | any>>{
     
        
       
        // ? first or before check if category name already exists 
       
        const udpateCategory = await this.categoryRepository.editCatgory(id, name)
        
        return Result.ok(udpateCategory)
     
    }
    
} 