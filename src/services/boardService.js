import { slugify } from '~/utils/formatter'
import {boardModel} from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug : slugify(reqBody.title)
    }
    const createdBoard = await boardModel.createNew(newBoard)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    // console.log(getNewBoard)
    return getNewBoard
  } catch (error) {
    throw error
  }
}
const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    if(!board) {
      throw new ApiError(StatusCodes.NOT_FOUND,'Khong ton tai board')
    }
    return board
  } catch (error) {
    throw error
  }
}
export const boardService ={
  createNew,
  getDetails
}