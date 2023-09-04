import { createClientDTO } from "../../../clients/dto/createClientDTO";
import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { CreateCategoryDTO } from "../../dto/createCategoryDTO";
import CategoryModel from "../../model/categoryModel";
import { ICategoryRepository } from "../../repository/interaface/ICategoryRopository";

export class CreateCategoryUseCase implements IuseCase<any, any>{
    constructor(private categoryRepository: ICategoryRepository){

    }
  
  public async  execute(data: CreateCategoryDTO) :Promise<Result <CategoryModel | any>>{
        const {name} = data;

        // ? first or before check if category name already exists 
        const category: CategoryModel | void = await   this.categoryRepository.findCategoryByName(name);

        if(category?.name)  return Result.fail("Category Name already exist")

        const catgoryCreated = await this.categoryRepository.create({name})
        
        return Result.ok(catgoryCreated)
     
    }
    
}