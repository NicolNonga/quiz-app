import  express  from "express";
import { attachementRoutes } from "./router/attachements/attachemnts.router";
import { clienteRoutes } from "./router/clients/clients.router";

const app = express();
app.use(express.json())
app.use(clienteRoutes)
app.use(attachementRoutes)
app.listen(3333); 