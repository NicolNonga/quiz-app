import {request, response, Router} from 'express';
import { createClientController } from '../../modules/clients/usecase/createClient';
import { getClientByIdController } from '../../modules/clients/usecase/getClientById';
import { listClientController } from '../../modules/clients/usecase/listClient';
import { updateClientController } from '../../modules/clients/usecase/updateClient';

const clientsRoutes= Router();

clientsRoutes.post("/clients", (request, response)=>{
     return createClientController.handle(request, response)
})
clientsRoutes.get("/clients/all", (request, response)=>{
     return listClientController.handle(request, response)
})
clientsRoutes.get("/clients/:clientId", (request, response)=>{
     return getClientByIdController.handle(request, response)
})

 clientsRoutes.put("/clients/:clientId", (request, response)=>{
     return updateClientController.handle(request, response)
 })
export { clientsRoutes as clientsRoutes }