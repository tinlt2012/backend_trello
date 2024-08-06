//lttin2012/JP8zStRPYEVzd4Wh
import {env} from '~/config/environment'
import {MongoClient, ServerApiVersion} from 'mongodb'
let trelloDatabaseInstance = null
// Khoi tao doi tuong Client de connect MongoDb
const mongoClientInstance = new MongoClient (env.MONGODB_URI , {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
// Ket noi den Database
export const CONNECT_DB = async () => {
    await mongoClientInstance.connect()
    trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}
export const GET_DB = () =>{
    if(!trelloDatabaseInstance) throw new Error('Fail')
  return trelloDatabaseInstance
}
export const CLOSE_DB = async () =>{
   await mongoClientInstance.close()
}
