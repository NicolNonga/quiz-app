import { Router, Request, Response } from "express";
import { createQuizOptionController } from "../../modules/quizOption/usecase/createQuizOption";
import { validationMiddleware } from "../../modules/core/middleware/validation_middleware";
import { CreateQuizOptionValidation } from "../../modules/quizOption/validation/createQuizOptionValidaton";

import multer from "multer";

const storage= multer.diskStorage({
      destination: function(req, file, cb){
          cb(null, './tmp/');
      },
      filename: function(req, file, cb){
          const ext= file.originalname.split('.').pop();
          cb(null, file.fieldname + '-' + Date.now()+ '.'+ext)
      }
  })
  const upload= multer({storage:storage}).array('files')
export const createQuizOptionRouter =  Router();

createQuizOptionRouter.post('/quiz_option',  validationMiddleware(CreateQuizOptionValidation), upload, (request: Request, response: Response)=>{
      createQuizOptionController.handle(request, response)   
})


