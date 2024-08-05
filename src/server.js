
import express from 'express'
import {CONNECT_DB,GET_DB} from '~/config/mongodb'
const START_SERVER = () =>{
  const app = express()
  const hostname = 'localhost'
  const port = 8017
  app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
  })
  
  app.listen(port, hostname, async () => {
    // eslint-disable-next-line no-console
    console.log(await GET_DB().listCollections().toArray())
    console.log(` I am running at ${ hostname }:${ port }/`)
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