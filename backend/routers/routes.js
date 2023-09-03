import express from "express";
import { limitQuery } from "../helpers/limit.js";
import { getAnimales } from '../controllers/v1/animales.js'; //Esto es temporal mientras se implementan las versiones
import { getEmpleados, postEmpl } from '../controllers/v1/empleados.js'; //Esto es temporal mientras se implementan las versiones
import { getInfra, postInfra } from "../controllers/v1/infraestructura.js"; //Esto es temporal mientras se implementan las versiones
import { getHM, postHM } from "../controllers/v1/historial_mantenimiento.js"; //Esto es temporal mientras se implementan las versiones
import { getHMed, postHMed } from "../controllers/v1/historial_medico.js"; //Esto es temporal mientras se implementan las versiones
import { getEventos, postEventos } from "../controllers/v1/eventos.js"; //Esto es temporal mientras se implementan las versiones
import { getFinanzas, postFinanzas } from "../controllers/v1/finanzas.js"; //Esto es temporal mientras se implementan las versiones
import { getOrg, postOrg } from "../controllers/v1/organizaciones.js"; //Esto es temporal mientras se implementan las versiones

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

const appAnimales = configurarApp();
const appEmpleados = configurarApp();
const appInfraestructura = configurarApp();
const appHMant = configurarApp();
const appHMed = configurarApp();
const appEventos = configurarApp();
const appFinanzas = configurarApp();
const appOrg = configurarApp();

appAnimales.get("/all", limitQuery(), getAnimales);
appAnimales.post("/animales", limitQuery(), postEmpl); //PENDIENTE POR TESTEAR

appEmpleados.get("/empl", limitQuery(), getEmpleados);
appEmpleados.post("/empl", limitQuery(), postEmpl);

appInfraestructura.get("/infra", limitQuery(), getInfra);
appInfraestructura.post("/infra", limitQuery(), postInfra);

appHMant.get("/hmant", limitQuery(), getHM);
appHMant.post("/hmant", limitQuery(), postHM);

appHMed.get("/hmed", limitQuery(), getHMed);
appHMed.post("/hmed", limitQuery(), postHMed);

appEventos.get("/eventos", limitQuery(), getEventos);
appEventos.post("/eventos", limitQuery(), postEventos);

appFinanzas.get("/finanzas", limitQuery(), getFinanzas);
appFinanzas.post('/finanzas', limitQuery(), postFinanzas);

appOrg.get("/org", limitQuery(), getOrg);
appOrg.post("/org", limitQuery(), postOrg)

export {  appAnimales,  appEmpleados, appInfraestructura, appHMant, appHMed, appEventos, appFinanzas, appOrg };