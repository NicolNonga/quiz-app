import { createUserDTO } from "../../dto/createUserDTO";
import UserModel from "../../model/userModel";
import { IUserRepository } from "../interface/IUserRepository";
import { db } from "../../../../utils/db.server";

export class UserRepository implements IUserRepository {
  async create(userData: createUserDTO): Promise<UserModel> {
    try {
      const user = await db.user.create({
        data: {
          user_name: userData.username,
          password: userData.password,
          typeUser: "User",
        },
      });

      return {
        username: user.user_name,
        type_user: user.typeUser,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      };
    } catch (error) {}
    throw new Error("Falha ao cadastra.");
  }
 async findByUserName(userName: string): Promise<UserModel> {
    console.log(userName)
       const user = await db.user.findFirst({
        where: {
            user_name: userName
        }
       })
       return {username: user?.user_name, type_user: user?.typeUser}
  }
  findAll(): Promise<UserModel[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  update(id: string, userData: createUserDTO) {
    throw new Error("Method not implemented.");
  }
}
