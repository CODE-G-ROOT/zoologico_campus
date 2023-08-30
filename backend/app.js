import dotenv from 'dotenv';
import express from 'express';
import {appEmpleados,appInfraestructura,appHMant,appHMed,appEventos, appFinanzas,appOrg} from './routes/routes.js';
import { appToken, appVerify} from './helpers/jwt.js';
//import { initRoutes} from './routes/routes.js'
dotenv.config();

let app = express();

app.use(express.json());
//app.use("/productos",appVerify, appBodegas);
app.use("/token", appToken);
app.use("/empleado",appVerify,appEmpleados);
app.use("/infra",appVerify,appInfraestructura)
app.use("/hmant",appVerify,appHMant)
app.use("/hmed",appVerify,appHMed)
app.use("/eventos",appVerify,appEventos)
app.use("/finanzas",appVerify,appFinanzas)
app.use("/org",appVerify,appOrg)

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});