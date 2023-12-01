import { db } from "../../../../utils/db.server";
import { ISectionQuestionRepository, SectionQuestionDTO } from "../interface/ISectionQuestionRepository";

export class SectionQuestionRepositoryImpl implements ISectionQuestionRepository{
  
  
 public async getQuestionBysection(quiz_section_id: string): Promise<any> {
    
              try {
                 return await db.section_question.findMany({
                  where: {
                    quiz_section_id: quiz_section_id
                  },
                  include: {
                    quiz_question: {
                    
                      include: {
                        
                        quiz_option: {
                          include: {
                            quiz_attachment_option:{
                              include:{
                                quiz_attacment:{}
                              }
                            }
                          }
                        }
                        
                      }
                    
                    }
                    
                  }
                 })
              } catch (error) {

                 throw new Error('erro')
                console.log("this is just a test", error)
                
              }
  }
  
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