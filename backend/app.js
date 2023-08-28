import express from 'express';
import data from './settigns.js';

import {appEmpleados} from './routers/empleados.js';
import { appToken, appVerify} from './helpers/jwt.js';

let app = express();

app.use(express.json());
//app.use("/productos",appVerify, appBodegas);
app.use("/token", appToken);
app.use("/empleado",appVerify,appEmpleados);
//app.use("/user",appUsers,appVerify)

const server_config = data.server_config;

app.listen(server_config, ()=>{
    console.log(`http://${server_config.hostname}:${server_config.port}`);
});