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
import { create_category } from "./router/category/create_category.router";
import { createQuizSectionRouter } from "./router/quiz_section/create_quiz_section.router";
import { findAllQuizSectionRouter } from "./router/quiz_section/find_all_quiz_secton.router";
import { quizQuestionRouter } from "./router/quiz_question/create_quiz_question.router";
import { findAllQuizQuestionRouter } from "./router/quiz_question/find_all_quiz_question.router";
import { createQuizOptionRouter } from "./router/quizOption/create_quiz_option.router";
import { findAllQuizOptionRouter } from "./router/quizOption/find_all_quiz_option.router";
import { FindQuizOptionByQuizQuestionRouter } from "./router/quizOption/find_quiz_option_by_quiz_question.router";
import  cors from 'cors'
import { findAllCategoryRouter } from "./router/category/find_all_category.router";
import { dashboardQuizRouter } from "./router/dashboard_quiz/find_all_dashboard";
import { updateCategoryRouter } from "./router/category/update-category.router";
import { updateQuizSessionRouter } from "./router/quiz_section/update-quiz-section.router";
import { getQuestionBySection } from "./router/sectionQuestion/get-question-by-section.router";
import { quizAttempteRouter } from "./router/quizAttempted/quiz_attempted.router";
import { createQuizSessionUsers } from "./router/quizSessionUser/create_quiz_session_user.router";
import { listAllQuizSectionUser } from "./router/quizSessionUser/list_all.router";
import { listAllQuizSectionByQuiz } from "./router/quizSessionUser/qui_section_users.router";
import { removeQuizSectionUserRouter } from "./router/quizSessionUser/remove_quiz_section_user.router";
import { completedQuizSessionUsersRouter } from "./router/quizSessionUser/completed_quiz_section_user.router";
import { createQuizSectionUserPutuationRouter } from "./router/quizSessionUser/quiz_section_user_putuation.router";
import { showQuizSectionUserPutuationRouter } from "./router/quizSessionUser/show_quiz_section_putuation.router";

const app = express();
app.use(express.json())
app.use(cors())
app.use(clientsRoutes)
app.use(attachementRoutes)
app.use(usersRouters)
app.use(findUserRouter)
app.use(loginUserRouter)
app.use(quizRouters)
app.use(findAllQuizRouter)
app.use(updateQuizRouter)
app.use(deleteQuizRouter)
app.use(create_category)
app.use(updateCategoryRouter)
app.use(createQuizSectionRouter)
app.use(findAllQuizSectionRouter)
app.use(quizQuestionRouter)
app.use(findAllQuizQuestionRouter)
app.use(createQuizOptionRouter)
app.use(findAllQuizOptionRouter)
app.use(FindQuizOptionByQuizQuestionRouter)
app.use(findAllCategoryRouter)
app.use(dashboardQuizRouter)
app.use(updateQuizSessionRouter)
app.use(getQuestionBySection)
app.use(quizAttempteRouter)
app.use(createQuizSessionUsers)
app.use(listAllQuizSectionUser)
app.use(listAllQuizSectionByQuiz)
app.use(removeQuizSectionUserRouter)
app.use(completedQuizSessionUsersRouter)
app.use(createQuizSectionUserPutuationRouter)
app.use(showQuizSectionUserPutuationRouter)
app.listen(3333); 