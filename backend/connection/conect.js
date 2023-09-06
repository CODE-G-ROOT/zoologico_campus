import dotenv from 'dotenv'
import {MongoClient} from 'mongodb';
dotenv.config(); 

const data = JSON.parse(JSON.stringify(process.env));
const user = data.ATLAS_USER;
const pasword = data.ATLAS_PASSWORD;
const other = user.toLowerCase();

export async function con() {
  try {

    const uri = `mongodb+srv://${user}:${pasword}@${other}.ikw3dq6.mongodb.net/`;
    const options = {  
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const client = await MongoClient.connect(uri, options);
    
    return client.db(`${process.env.ATLAS_DB}`);
  } catch (error) {
    return {status: 500, message: error}, Promise.reject(error);;
  }
}