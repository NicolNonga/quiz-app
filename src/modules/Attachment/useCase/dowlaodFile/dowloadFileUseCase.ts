import { Result } from "../../../core/erroHandling/customResult";
import { IuseCase } from "../../../core/interface/IUseCase";
import * as fs from 'fs';
import { resolve } from 'path';

export interface dowloandFileReponse{
    file: string
}
export class DownloadFileUseCase implements IuseCase<any, any> {
 
  async  execute(file_name:string , body?: any):Promise<Result<dowloandFileReponse>> {
    
         const filePath= resolve( `./tmp/${file_name}`)
         console.log(filePath)
     
          if(!fs.existsSync(filePath)){
            return Result.fail("file not found")
          }

     return    Result.ok({file:filePath})
    }
    
}
