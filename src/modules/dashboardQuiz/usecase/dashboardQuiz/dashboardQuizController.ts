import { IController } from "../../../core/interface/IController";
import { Request, Response, request } from "express";
import { DashboardQuizUseCase } from "./dashboardQuizUseCase";
import { Result } from "../../../core/erroHandling/customResult";
export class DashboardQuizController implements IController<any, any> {
         constructor(private readonly dasboardQuizUseCase: DashboardQuizUseCase){

         }
  
  async  handle(request: any, response: Response): Promise<Response> {
            
          const data: Result<any> = await this.dasboardQuizUseCase.execute();

        return response.status(200).send(data)
    }


}