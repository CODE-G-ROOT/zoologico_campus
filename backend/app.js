import express from 'express';
import dotenv from 'dotenv';
import { appAnimales, appEmpleados,appInfraestructura,appHMant,appHMed,appEventos, appFinanzas,appOrg} from './routers/routes.js';
import { appToken, appVerify} from './helpers/jwt.js';

dotenv.config();
let app = express();

app.use(express.json());
//app.use("/productos",appVerify, appBodegas);
app.use("/token", appToken);
app.use("/animales",appVerify,appAnimales);
app.use("/empleado",appVerify,appEmpleados);
app.use("/infra",appVerify,appInfraestructura)
app.use("/hmant",appVerify,appHMant)
app.use("/hmed",appVerify,appHMed)
app.use("/eventos",appVerify,appEventos)
app.use("/finanzas",appVerify,appFinanzas)
app.use("/org",appVerify,appOrg)

const server_config = JSON.parse(process.env.MY_SERVER)
app.listen(server_config, ()=>{
    console.log(`http://${server_config.hostname}:${server_config.port}`);
});