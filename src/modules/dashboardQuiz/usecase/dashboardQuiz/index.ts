import { DashboardQuizRepository } from "../../repository/implementation/dashboardImplment";
import { DashboardQuizController } from "./dashboardQuizController";
import { DashboardQuizUseCase } from "./dashboardQuizUseCase";


const dashboardQuizRepository = new  DashboardQuizRepository();
const dashboardUseCase = new DashboardQuizUseCase(dashboardQuizRepository)
export const  dasboardQuizController = new DashboardQuizController(dashboardUseCase)

