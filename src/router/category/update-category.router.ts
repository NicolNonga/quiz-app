import { Router, response } from "express";
import { updateCategoryController } from "../../modules/category/usecase/updateCategory";

const   updateCategoryRouter = Router();
updateCategoryRouter.put('/category/:id', (request, response) =>{
     return  updateCategoryController.handle(request, response)
})

export { updateCategoryRouter}