import dotenv from 'dotenv';
import express from 'express';
import {appEmpleados,appInfraestructura} from './routes/routes.js';
import { appToken, appVerify} from './helpers/jwt.js';
//import { initRoutes} from './routes/routes.js'
dotenv.config();

let app = express();

app.use(express.json());
//app.use("/productos",appVerify, appBodegas);
app.use("/token", appToken);
app.use("/empleado",appVerify,appEmpleados);
app.use("/infra",appVerify,appInfraestructura)

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});