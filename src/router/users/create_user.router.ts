import { Router, request, response } from "express";
import { createUserController } from "../../modules/users/usecase/createUser";



const usersRouters = Router();

usersRouters.post('/users',(request, response)=>{

    return createUserController.handle(request, response)

})

export {usersRouters}