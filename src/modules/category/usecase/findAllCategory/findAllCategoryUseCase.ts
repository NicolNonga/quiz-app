import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import CategoryModel from "../../model/categoryModel";
import { ICategoryRepository } from "../../repository/interaface/ICategoryRopository";


export class FindAllCategoryUseCase implements IuseCase <any, any> {
    constructor(private readonly categoryRepository : ICategoryRepository){

    }

     async execute(request?: any, body?: any) : Promise <Result<CategoryModel []>> {
        const category  = await this.categoryRepository.findAll();
        return Result.ok(category)
        
    }
}