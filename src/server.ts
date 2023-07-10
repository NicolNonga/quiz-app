import  express  from "express";
import { attachementRoutes } from "./router/attachements/attachemnts.router";
import { clientsRoutes } from "./router/clients/clients.router";
import { usersRouters } from "./router/users/create_user.router";
import { findUserRouter } from "./router/users/find_all_users.router";
import { loginUserRouter } from "./router/users/login_user.router";
import { quizRouters } from "./router/quiz/create_quiz.router";
import { findAllQuizRouter } from "./router/quiz/find_all_quiz.router";
import { updateQuizRouter } from "./router/quiz/update_quiz.router";
import { deleteQuizRouter } from "./router/quiz/delete_quiz.router";

const app = express();
app.use(express.json())
app.use(clientsRoutes)
app.use(attachementRoutes)
app.use(usersRouters)
app.use(findUserRouter)
app.use(loginUserRouter)
app.use(quizRouters)
app.use(findAllQuizRouter)
app.use(updateQuizRouter)
app.use(deleteQuizRouter)
app.listen(3333); 