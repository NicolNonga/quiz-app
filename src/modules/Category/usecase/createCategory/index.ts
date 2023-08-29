import { CreateClientAttamentController } from "../../../Attachment/useCase/createClientAttament/createClientAttachementController";
import { CategoryRepositoryImpl } from "../../repository/implementation/categoryRepositoryImpl";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const categoryRepository = new CategoryRepositoryImpl();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
