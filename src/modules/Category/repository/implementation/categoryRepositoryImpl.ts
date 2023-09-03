import { db } from "../../../../utils/db.server";
import { CreateCategoryDTO } from "../../dto/createCategoryDTO";
import CategoryModel from "../../model/categoryModel";
import { ICategoryRepository } from "../interaface/ICategoryRopository";

export class CategoryRepositoryImpl implements ICategoryRepository {
  private DB = db;
  public async create(data: CreateCategoryDTO | any): Promise<CategoryModel> {
    console.log(data?.name);
    try {
      return await this.DB.category.create({
        data: {
          name: data,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Ups falha ao cadastra categoria");
    }
  }
  public async findCategoryByName(
    category_nome: string
  ): Promise<CategoryModel> {
    return await this.DB.category.findFirst({
      where: {
        name: category_nome,
      },
    });
  }
  editCatgory(
    id: string,
    data: CreateCategoryDTO
  ): Promise<void | CategoryModel> {
    throw new Error("Method not implemented.");
  }
}