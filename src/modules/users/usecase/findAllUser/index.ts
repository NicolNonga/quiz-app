import { UserRepository } from "../../repository/implementaion/userRepositoryImp";
import { FindAllUsersController } from "./findAllUserController";
import { FindAllUsersUseCase } from "./findAllUsersUseCase";

const userRepository = new UserRepository()
const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
const findAllUserController =  new FindAllUsersController(findAllUsersUseCase)

export { findAllUserController}