import { IuseCase } from "../../../core/interface/IUseCase";
import { saveQuizAttemptedInterface, saveQuizAttemptedInterfaceRepo } from "../saveQuizAttemptByUser/saveQuizAttemptedByUserUseCase";

export class ListQuizAttempedByUseUseCase implements IuseCase<any, any>{
  
    constructor(private readonly quizAttempetedRepository:saveQuizAttemptedInterfaceRepo){

    }
  
  async  execute(data: Omit<saveQuizAttemptedInterface, "option_id">) {
    console.log(data)
       return   await this.quizAttempetedRepository.listByUserAndQuizSection({...data})
    }

    
    
}