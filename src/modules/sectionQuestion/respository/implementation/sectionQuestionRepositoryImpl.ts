import { db } from "../../../../utils/db.server";
import { ISectionQuestionRepository, SectionQuestionDTO } from "../interface/ISectionQuestionRepository";

export class SectionQuestionRepositoryImpl implements ISectionQuestionRepository{
  
  public async  create(data: SectionQuestionDTO): Promise<void> {
          try {
              await db.section_question.create({
                data: {
                   ...data
                }
             })
          } catch (error) {
              console.log(error)
          }
    }
    
}