
import express from 'express'
import exitHook from 'async-exit-hook'
import {CONNECT_DB,GET_DB, CLOSE_DB} from '~/config/mongodb'
import {env} from '~/config/environment'
const START_SERVER = () =>{
  const app = express()
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
  })

  
  app.listen(port, hostname, async () => {
    console.log(`${env.AUTHOR} : I am running at ${ hostname }:${ port }/`)
  })
  exitHook (()=>{
    console.log('Disconnected to MongoDB')
    CLOSE_DB()
  })
}
// CONNECT_DB()
// .then(() => { console.log('Ket noi thanh cong')})
// .then(() =>START_SERVER() )
// .catch(err => {
//   console.log('error', err)
// })
(async () =>{
  try {
    console.log('Connecting to Atlas...')
    await CONNECT_DB()
    console.log('Ket noi thanh cong')
     START_SERVER()
    
  } catch (error) {
    console.log('error', err)
  }
})(

)