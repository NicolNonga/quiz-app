import { db } from "../../../../utils/db.server";
import { CreateCategoryDTO } from "../../dto/createCategoryDTO";
import CategoryModel from "../../model/categoryModel";
import { ICategoryRepository } from "../interaface/ICategoryRopository";

export class CategoryRepositoryImpl implements ICategoryRepository {
  private DB = db;
  public async create(name: string): Promise<CategoryModel> {
    console.log(name);

    try {
      return await this.DB.category.create({
        data: {
          name,
        },
      });
    } catch (error) {
      throw new Error("Ups falha ao cadastra categoria");
    }
  }
  public async findAll(): Promise<[] | CategoryModel[]> {
    return await this.DB.category.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  }

  public async findCategoryByName(
    category_nome: string
  ): Promise<CategoryModel | any> {
    return await this.DB.category.findFirst({
      where: {
        name: category_nome,
      },
    });
  }
 public async editCatgory(id: string, name: string): Promise<void> {
  console.log("id", id, "name", name)
     await this.DB.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  }
}
