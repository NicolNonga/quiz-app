import { CreateClientAttamentController } from "../../../Attachment/useCase/createClientAttament/createClientAttachementController";
import { CategoryRepositoryImpl } from "../../repository/implementation/categoryRepositoryImpl";
import { UpdateCategoryController } from "./update-category-controller";
import { UpdateCategoryUseCase } from "./update-category-usecase";

const categoryRepository = new CategoryRepositoryImpl();
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);
export const  updateCategoryController = new UpdateCategoryController(
    updateCategoryUseCase
);


