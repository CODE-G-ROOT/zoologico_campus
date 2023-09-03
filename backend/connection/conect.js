import dotenv from 'dotenv'
import {MongoClient} from 'mongodb';
dotenv.config(); 

const data = JSON.parse(JSON.stringify(process.env))

export async function con() {
  try {

    const uri = `mongodb+srv://${user}:${data.ATLAS_PASSWORD}@${data.ATLAS_USER.toLowerCase()}.ikw3dq6.mongodb.net/`;

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