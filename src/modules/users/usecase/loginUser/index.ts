import { HashAdapter } from "../../../core/adapter/implementation/crypt-adapter-impl";
import { UserRepository } from "../../repository/implementaion/userRepositoryImp";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUsecase";

const userRepository = new UserRepository();
const hashAdapter = new HashAdapter();
const loginUserUseCase = new LoginUserUseCase(userRepository, hashAdapter);
const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
