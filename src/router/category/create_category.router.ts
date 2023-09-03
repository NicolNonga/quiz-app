import { Router, request, response} from "express";
import { createCategoryController } from "../../modules/Category/usecase/createCategory";
import { validationMiddleware } from "../../modules/core/middleware/validation_middleware";
 import { categoryValidation } from "../../modules/Category/validation/createCategoryValidation";
const create_category = Router()

create_category.post('/category', validationMiddleware(categoryValidation), (request, response)=>{
           return createCategoryController.handle(request, response)
})

export {
    create_category
}