export interface CreateQuizQuestionDTO {
  question_text: string,
  value: string
  section?: Section []
     
}

interface  Section {
  quiz_section_id: string,
  
}