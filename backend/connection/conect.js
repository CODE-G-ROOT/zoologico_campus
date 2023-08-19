import { MongoClient } from "mongodb";
import data from "../settings.js";

let connection = undefined;
let client = new MongoClient(data.url_connect);

try {
    connection = await client.connect()
} catch (error) {
    console.error(error);
}

let db = connection.db(data.atlas_use)

export default db;