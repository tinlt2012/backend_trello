const Joi = require('joi')
import { GET_DB } from '~/config/mongodb'
import {ObjectId} from 'mongodb'
const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SHEMA = Joi.object({
  title : Joi.string().required().min(3).max(50).trim().strict(),
  slug : Joi.string().required().min(3).trim().strict(),
  description : Joi.string().required().min(3).max(250).trim().strict(),
  columnOrderIds : Joi.array().items(Joi.string().default([])),
  createAt : Joi.date().timestamp('javascript').default(Date.now),
  updateAt : Joi.date().timestamp('javascript').default(null),
  _destroy : Joi.boolean().default(false)
})
const validateBeforeCreate = async (data) => {
    return await BOARD_COLLECTION_SHEMA.validateAsync(data, { abortEarly : false }) 
}
const createNew =async (data) => {
try {
    const validData = await validateBeforeCreate(data)
    const createdBoard = await  GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(validData)
    console.log(createdBoard)
    return createdBoard
} catch (error) {
    throw new Error(error)
}
}
const findOneById =async (id) => {
    try {
        const result = await  GET_DB().collection(BOARD_COLLECTION_NAME).findOne({
            _id : new ObjectId(id)
        })
        return result
    } catch (error) {
        
    }
}

const getDetails =async (id) => {
    try {
        const result = await  GET_DB().collection(BOARD_COLLECTION_NAME).findOne({
            _id : new ObjectId(id)
        })
      
        return result
        
    } catch (error) {
        
    }
}
export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SHEMA,
  createNew,
  findOneById,
  getDetails
}