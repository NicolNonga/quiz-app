import { Router, response } from "express";
import { findAllCategoryController } from "../../modules/category/usecase/findAllCategory";

const findAllCategoryRouter = Router();

findAllCategoryRouter.get("/category/all" , (request, response)=>{
    return findAllCategoryController.handle(request, response)
})

export { findAllCategoryRouter}