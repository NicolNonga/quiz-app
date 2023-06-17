import {request, response, Router} from 'express';
import { createClientController } from '../../modules/clients/usecase/createClient';
import { getClientByIdController } from '../../modules/clients/usecase/getClientById';
import { listClientController } from '../../modules/clients/usecase/listClient';
import { updateClientController } from '../../modules/clients/usecase/updateClient';

const clienteRoutes= Router();

clienteRoutes.post("/clients", (request, response)=>{
     return createClientController.handle(request, response)
})
clienteRoutes.get("/clients/all", (request, response)=>{
     return listClientController.handle(request, response)
})
clienteRoutes.get("/clients/:clientId", (request, response)=>{
     return getClientByIdController.handle(request, response)
})

 clienteRoutes.put("/clients/:clientId", (request, response)=>{
     return updateClientController.handle(request, response)
 })
export { clienteRoutes }