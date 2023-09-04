import { CreateCategoryDTO } from "../../dto/createCategoryDTO";
import CategoryModel from "../../model/categoryModel";

 export interface ICategoryRepository {
    create(data: CreateCategoryDTO): Promise<CategoryModel | void>
    findCategoryByName(category_nome: string): Promise<CategoryModel>
    editCatgory(id: string, data: CreateCategoryDTO): Promise<CategoryModel | void>

 }