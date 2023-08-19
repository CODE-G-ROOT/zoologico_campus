import express from 'express';
import data from './settings.js';

const app = express();
app.listen(data.server_config, ()=>{
    console.log(`http://${data.server_config.hostname}:${data.server_config.port}`);
})