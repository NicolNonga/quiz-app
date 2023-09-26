import {z} from 'zod';

export const CreateQuizQuestionValidation =  z.object({
    body: z.object({

        question_text: z.string({
            required_error:"question text is required"
        })
    })
}) 