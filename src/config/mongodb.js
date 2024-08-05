//lttin2012/JP8zStRPYEVzd4Wh
const MONGODB_URI = 'mongodb+srv://lttin2012:JP8zStRPYEVzd4Wh@cluster0-tinlt.5z9bt4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-Tinlt'
const DATABASE_Name ='Trello'
import {MongoClient, ServerApiVersion} from 'mongodb'
let trelloDatabaseInstance = null
// Khoi tao doi tuong Client de connect MongoDb
const mongoClientInstance = new MongoClient (MONGODB_URI , {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
// Ket noi den Database
export const CONNECT_DB = async () => {
    await mongoClientInstance.connect()
    trelloDatabaseInstance = mongoClientInstance.db(DATABASE_Name)
}
export const GET_DB = () =>{
    if(!trelloDatabaseInstance) throw new Error('Fail')
  return trelloDatabaseInstance
}
