export  interface ISectionQuestionRepository {
    create(data: SectionQuestionDTO ): Promise<void>
    getQuestionBysection(quiz_section_id: string):Promise<any>
}

export interface SectionQuestionDTO {
    question_id: string,
    quiz_section_id: string
}