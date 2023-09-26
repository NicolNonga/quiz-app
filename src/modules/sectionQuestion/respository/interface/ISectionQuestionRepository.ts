export  interface ISectionQuestionRepository {
    create(data: SectionQuestionDTO ): Promise<void>
}

export interface SectionQuestionDTO {
    question_id: string,
    quiz_section_id: string
}