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
          typeUser:  userData.type_user,
        },
      });

      return {
        username: user.user_name,
        type_user: user.typeUser,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
        password: userData.password
      };
    } catch (error) {
      throw new Error("Falha ao cadastra.");
    }

  }
  async findByUserName(userName: string): Promise<UserModel> {
    const user = await db.user.findFirst({
      where: {
        user_name: userName,
      },
    });
    return {
      username: user?.user_name!,
      type_user: user?.typeUser!,
      password: user?.password!,
      id: user?.id
    };
  }
  async findAll(): Promise<UserModel[]> {
    return (await db.user.findMany({
       orderBy: {
        createdAt: 'desc'
       }
    })).map((user) => {
      return {
        username: user.user_name,
        type_user: user.typeUser,
        created_at: user.createdAt,
        updated_at: user.createdAt, 
      };
    });
  }

  findById(id: string): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  update(id: string, userData: createUserDTO) {
    throw new Error("Method not implemented.");
  }
}
