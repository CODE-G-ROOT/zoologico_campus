import dotenv from 'dotenv'
import {MongoClient} from 'mongodb';
dotenv.config(); 
export async function con() {
  try {
  //const uri=`mongodb+srv://JuanDev856:juan856%40juandev856.ikw3dq6.mongodb.net/`; 
    const uri = process.env.URL_CONNECT_MONGODB;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    console.log(client);
    return client.db(`${process.env.ATLAS_DB}`);
  } catch (error) {
    return {status: 500, message: error}, Promise.reject(error);;
  }
}