import { IController } from "../../../core/interface/IController";
import{Response,Request} from 'express'
import { IuseCase } from "../../../core/interface/IUseCase";
import { Result } from "../../../core/erroHandling/customResult";
import { dowloandFileReponse } from "./dowloadFileUseCase";
export class DownloadFileController  implements IController<any, any>{
          constructor(private downlodaFileUseCase: IuseCase<any, any>){}
  async  handle(request: Request, response: Response): Promise<any> {
          
       const  {file_name}= request.params

        const filePath:Result<dowloandFileReponse> = await this.downlodaFileUseCase.execute(file_name);

          if(!filePath.isSuccess){
            return response.status(404).send({message: "file não encontrado"})
          }

          return  response.download(filePath.getValue().file)
    }
    


}