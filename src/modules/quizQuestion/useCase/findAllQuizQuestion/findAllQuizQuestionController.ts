import { IController } from "../../../core/interface/IController";
import { FindAllQuizQuestionUseCase } from "./findAllQuizQuestionUseCase";

export class FindAllQuizQuestionController implements IController<any, any>{
   
     constructor(private readonly findAllQuizQuestionUseCase: FindAllQuizQuestionUseCase){

     }
    public async handle(request: any, response: any): Promise< Response> {
     
         const allQuizQuestion = await this.findAllQuizQuestionUseCase.execute();

          return response.status(200).send(allQuizQuestion)

    }

    
}