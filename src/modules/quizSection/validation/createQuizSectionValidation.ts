import {z} from 'zod';

export const createQuizSectionValidation= z.object({
    body: z.object({
        name : z.string({
            required_error: "name is required"
        }),
        category_id : z.string({
            required_error: "category is  required"
        }),
        quiz_id: z.string({
            required_error: "quiz id is required"
        })
    })
})