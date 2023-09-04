import express from "express";
import { limitQuery } from "../helpers/limit.js";
import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/empleados.js';
import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/infraestructura.js";
import { deleteHM, getHM, getHMId, postHM } from "../controllers/historial_mantenimiento.js";
import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/historial_medico.js";
import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/eventos.js";
import { deleteFinanza, getFinanzaId, getFinanzas, postFinanzas } from "../controllers/finanzas.js";
import { getOrg,postOrg } from "../controllers/organizaciones.js";

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
appEmpleados.get("/empl/:id",limitQuery(),getEmpleadoId);
appEmpleados.post("/empl",limitQuery(),postEmpl);
appEmpleados.put("/empl/:id", limitQuery(),putEmpleado)
appEmpleados.delete("/empl/:id",limitQuery(),deleteEmpleado)

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.get("/infra/:id", limitQuery(),getInfraId);
appInfraestructura.post("/infra", limitQuery(),postInfra);
appInfraestructura.delete("/infra/:id",limitQuery(),deleteInfra);

appHMant.get("/hmant",limitQuery(),getHM);
appHMant.get("/hmant/:id",limitQuery(),getHMId);
appHMant.post("/hmant",limitQuery(),postHM);
appHMant.delete("/hmant/:id",limitQuery(),deleteHM);

appHMed.get("/hmed",limitQuery(),getHMed);
appHMed.get("/hmed/:id",limitQuery(),getHMedId);
appHMed.post("/hmed",limitQuery(),postHMed);
appHMed.delete("/hmed/:id",limitQuery(),deleteHMed)

appEventos.get("/eventos", limitQuery(),getEventos);
appEventos.get("/eventos/:id",limitQuery(),getEventoId);
appEventos.post("/eventos", limitQuery(),postEventos);
appEventos.delete("/eventos/:id",limitQuery(),deleteEventos);

appFinanzas.get("/finanzas",limitQuery(),getFinanzas);
appFinanzas.get("/finanzas/:id",limitQuery(),getFinanzaId);
appFinanzas.post('/finanzas',limitQuery(),postFinanzas);
appFinanzas.delete("/finanzas/:id",limitQuery(),deleteFinanza);

appOrg.get("/org",limitQuery(),getOrg);
appOrg.post("/org",limitQuery(),postOrg)


export {
  appEmpleados,
  appInfraestructura,
  appHMant,
  appHMed,
  appEventos,
  appFinanzas,
  appOrg
};