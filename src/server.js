
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_v1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'


const START_SERVER = () => {
  const app = express()
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  //enable json
  app.use(express.json())
  //Use Api V1
  app.use('/v1', APIs_v1)
  //Error HandlingMiddleware
  app.use(errorHandlingMiddleware)

  app.listen(port, hostname, () => {
    console.log(`${env.AUTHOR} : I am running at ${ hostname }:${ port }/`)
  })
  exitHook (() => {
    console.log('Disconnected to MongoDB')
    CLOSE_DB()
  })
}
(async () => {
  try {
    console.log('Connecting to Atlas...')
    await CONNECT_DB()
    console.log('Ket noi thanh cong')
    START_SERVER()

  } catch (error) {
    console.log('error', error)
  }
})(

)