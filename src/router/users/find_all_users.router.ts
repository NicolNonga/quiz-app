import { Router, response } from "express";
import { findAllUserController } from "../../modules/users/usecase/findAllUser";


const findUserRouter = Router()

findUserRouter.get('/users/all', (request, response)=>{
   return   findAllUserController.handle(request, response)
})

export {findUserRouter}