import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import { IDashobardQuiz } from "../../repository/interface/IDashboardQuiz";



export class DashboardQuizUseCase implements IuseCase<any, any>{

    constructor (private readonly  dashboardQuizRepository:IDashobardQuiz){

    }
    
    
  async  execute(request?: any, body?: any): Promise<Result<any>> {


        const  dashboardQuiz= await this.dashboardQuizRepository.findAll();
        return Result.ok(dashboardQuiz)
    }


}