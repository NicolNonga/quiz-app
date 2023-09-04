import {string, z} from 'zod'
export const CreateQuizOptionValidation =  z.object({
    body: z.object({
        option_text: z.string({
            required_error: "option text é obrigatório"
        }),
        is_img: z.boolean({
            required_error: "is_img  é obrigatório"
        }),
        is_correct: z.boolean({
            required_error: "is_correct is obrigatório"
        }),
        quiz_question_id: z.string({
            required_error: 'quiz_question_id  é obrigatório'
        })
    })
})