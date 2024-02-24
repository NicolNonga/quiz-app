import { IuseCase } from "../../../core/interface/IUseCase";
export  interface saveQuizAttemptedInterfaceRepo{
    create(data: saveQuizAttemptedInterface):Promise<void>
    listByUserAndQuizSection(data: Omit<saveQuizAttemptedInterface, 'option_id'>):Promise<any>
} 
export interface saveQuizAttemptedInterface {
    user_id: string,
    quiz_section_id: string,
    option_id: string
}

export class SaveQuizAttemptedByUserUsseCase implements IuseCase<any, any> {

    constructor(private readonly quizAttempetedRepository : saveQuizAttemptedInterfaceRepo){

    }
   
   async execute(data:saveQuizAttemptedInterface, body?: any) {
          await this.quizAttempetedRepository.create(data)
    }
    
}