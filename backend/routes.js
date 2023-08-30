import express from "express";
import { limitQuery } from "./helpers/limit.js";
import { getEmpleados,postEmpl } from './controllers/empleados.js';
import { getInfra, postInfra } from "./controllers/infraestructura.js";
import { getHM, postHM } from "./controllers/historial_mantenimiento.js";
import { getHMed, postHMed } from "./controllers/historial_medico.js";
import { getEventos, postEventos } from "./controllers/eventos.js";
import { getFinanzas, postFinanzas } from "./controllers/finanzas.js";
import { getOrg,postOrg } from "./controllers/organizaciones.js";
//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

//const appEmpleados = express();
//appEmpleados.use(express.json());

//const appInfraestructura = express();
//appInfraestructura.use(express.json());

//const appHMant=express();
//appHMant.use(express.json());

//const appHMed = express();
//appHMed.use(express.json());

function configurarApp() {
    const app = express();
    app.use(express.json());
    return app;
  }
  
  const appEmpleados = configurarApp();
  const appInfraestructura = configurarApp();
  const appHMant = configurarApp();
  const appHMed = configurarApp();
  const appEventos = configurarApp();
  const appFinanzas = configurarApp();
  const appOrg=configurarApp();


appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.post("/empl",limitQuery(),postEmpl);

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.post("/infra", limitQuery(),postInfra);

appHMant.get("/hmant",limitQuery(),getHM);
appHMant.post("/hmant",limitQuery(),postHM);

appHMed.get("/hmed",limitQuery(),getHMed);
appHMed.post("/hmed",limitQuery(),postHMed);

appEventos.get("/eventos", limitQuery(),getEventos);
appEventos.post("/eventos", limitQuery(),postEventos);

appFinanzas.get("/finanzas",limitQuery(),getFinanzas);
appFinanzas.post('/finanzas',limitQuery(),postFinanzas);

appOrg.get("/org",limitQuery(),getOrg);
appOrg.post("/org",limitQuery(),postOrg)

export {appEmpleados,appInfraestructura,appHMant,appHMed,appEventos,appFinanzas,appOrg};