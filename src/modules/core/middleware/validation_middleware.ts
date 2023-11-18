import {Request, Response, NextFunction} from 'express'
import  {z, AnyZodObject} from 'zod'

export const validationMiddleware = (shema: AnyZodObject)=> async(req: Request, res: Response, next: NextFunction)=>{
    try {
         await shema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
         })
         return next()
    } catch (error) {
        return res.status(400).json(error)
    }
}

