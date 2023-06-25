import { HashPassword } from "../../adapter/implementation/crypt-adapter-impl";
import { UserRepository } from "../../repository/implementaion/userRepositoryImp";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";


const userRepository =  new UserRepository();
const hashPassword = new HashPassword()
const createUserUsecase = new CreateUserUseCase(userRepository, hashPassword)
const createUserController = new CreateUserController(createUserUsecase)

export { createUserController}