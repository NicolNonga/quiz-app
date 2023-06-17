import { request, response, Router } from "express";
import multer from "multer";
import { createClientAttamentController } from "../../modules/Attachment/useCase/createClientAttament";

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './tmp/');
    },
    filename: function(req, file, cb){
        const ext= file.originalname.split('.').pop();
        cb(null, file.fieldname + '-' + Date.now()+ '.'+ext)
    }
})
const upload= multer({storage:storage}).single('file')
const attachementRoutes= Router();

attachementRoutes.post("/attachement/client", upload, (request, response)=>{
    return createClientAttamentController.handle(request, response)

})

export { attachementRoutes }