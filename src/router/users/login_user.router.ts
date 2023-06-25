import { Router } from "express";
import { request, response } from "express";
import { loginUserController } from "../../modules/users/usecase/loginUser";

const loginUserRouter = Router()

loginUserRouter.post('/user/login', (request, response)=>{
    return loginUserController.handle(request, response)
})

export {loginUserRouter}