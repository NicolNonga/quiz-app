export interface createQuizOptionDTO {
    quiz_question_id: string
    quiz_option: string
   
}

export interface  QuizOption {
    option_text: string,
    is_correct:  any,
    is_img:  any
}