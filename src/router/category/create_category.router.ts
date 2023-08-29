import { Router, request, response} from "express";
import { createCategoryController } from "../../modules/Category/usecase/createCategory";

const create_category = Router()

create_category.post('/category', (request, response)=>{
           return createCategoryController.handle(request, response)
})

export {
    create_category
}