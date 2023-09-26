import { CategoryRepositoryImpl } from "../../repository/implementation/categoryRepositoryImpl";
import { FindAllCategoryController } from "./findAllCategoryController";
import { FindAllCategoryUseCase } from "./findAllCategoryUseCase";

const categoryRepository = new CategoryRepositoryImpl();
const findAllCategoryUseCase = new  FindAllCategoryUseCase(categoryRepository)
const findAllCategoryController = new FindAllCategoryController(findAllCategoryUseCase)

export {
    findAllCategoryController
}