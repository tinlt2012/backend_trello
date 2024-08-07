const Joi = require('joi');
import {StatusCodes} from 'http-status-codes'
const createNew = async (req,res,next) => {
    const correctCondition = Joi.object({
        title : Joi.string().required().min(3).max(50).trim().strict(),
        description : Joi.string().required().min(3).max(250).trim().strict(),
    })
    try {
       
        console.log(req.body)
        await correctCondition.validateAsync(req.body, {abortEarly : false})
        res.status(StatusCodes.CREATED).json('post method') 

    } catch (error) {
      console.log('error',error)
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        errors : new Error(error).message
      })
    }

}
export const boardValidation = {
    createNew
}