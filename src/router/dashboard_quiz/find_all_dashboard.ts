import { Router, request, response } from "express";
import { dasboardQuizController } from "../../modules/dashboardQuiz/usecase/dashboardQuiz";



export const  dashboardQuizRouter  =  Router();
dashboardQuizRouter.get("/dashboard/all" , (request, response)=>{
    return  dasboardQuizController.handle(request, response)
})