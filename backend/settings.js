import dotenv from 'dotenv';

dotenv.config();

const info = JSON.parse(JSON.stringify(process.env));

const data = {
    url_connect : info.URL_CONNECT_MONGODB,
    atlas_use : info.ATLAS_USE,
    server_config : {
        hostname: info.HOSTNAME,
        port: info.PORT
    }
}
console.log(data);

export default data;