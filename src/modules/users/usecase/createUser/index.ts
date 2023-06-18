import { UserRepository } from "../../repository/implementaion/userRepositoryImp";
import { CreateUserController } from "../createUserController";
import { CreateUserUseCase } from "./createUserUseCase";


const userRepository =  new UserRepository()
const createUserUsecase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUsecase)

export { createUserController}