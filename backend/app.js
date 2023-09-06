import express from 'express';
import dotenv from 'dotenv';
import { appToken, appVerify} from './helpers/token/jwt.js';

import appEmpleados from './routers/empleados.js';
import appFinanzas from './routers/finanzas.js';
import appInfraestructura from './routers/infraestructura.js';
import appOrg from './routers/organizaciones.js';
import appAnimales from './routers/animales.js';
import appHMant from './routers/historial_mantenimiento.js';
import appHMed from './routers/historial_medico.js';
import appEventos from './routers/evento.js';

dotenv.config();
let app = express();

app.use(express.json());

//* TOKEN
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