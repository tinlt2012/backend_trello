import express from 'express'
import {boardRoute} from './boardRoute'
import {StatusCodes} from 'http-status-codes'
const Router = express.Router()
Router.get('/status', (req,res) => {
    res.status(StatusCodes.OK).json({message : 'Server Ok'})
})
Router.use('/boards',boardRoute)
 export const APIs_v1 = Router