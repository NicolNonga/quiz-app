import {z} from 'zod';

export const CreateQuizQuestionValidation =  z.object({
    body: z.object({
        quiz_section_id: z.string({
            required_error: "quiz section is required"
        }),
        question_text: z.string({
            required_error:"question text is required"
        })
    })
}) 