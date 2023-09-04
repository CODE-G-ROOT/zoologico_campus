import express from "express";
import routesVersioning from "express-routes-versioning";

import { limitQuery } from "../helpers/others/limit.js";

import { getAnimales, postAnimales } from '../controllers/v1/animales.js'; //Esto es temporal mientras se implementan las versiones
import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/v1/empleados.js';
import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/v1/infraestructura.js";
import { deleteHM, getHM, getHMId, postHM } from "../controllers/v1/historial_mantenimiento.js";
import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/v1/historial_medico.js";
import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/v1/eventos.js";
import { deleteFinanza, getFinanzaId, getFinanzas, postFinanzas } from "../controllers/v1/finanzas.js";
import { getOrg,postOrg } from "../controllers/v1/organizaciones.js";

//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

//const appEmpleados = express();
//appEmpleados.use(express.json());

//const appInfraestructura = express();
//appInfraestructura.use(express.json());

//const appHMant=express();
//appHMant.use(express.json());

//const appHMed = express();
//appHMed.use(express.json());

const versions = routesVersioning();


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
  const appOrg=configurarApp();

appAnimales.get("/all", limitQuery(),routesVersioning(  getAnimales ));
appAnimales.post("/animales", limitQuery(),routesVersioning(  postAnimales )); //PENDIENTE POR TESTEAR

appEmpleados.get("/empl", limitQuery(),routesVersioning( getEmpleados ));
appEmpleados.get("/empl/:id",limitQuery(),routesVersioning( getEmpleadoId ));
appEmpleados.post("/empl",limitQuery(),routesVersioning( postEmpl ));
appEmpleados.put("/empl/:id", limitQuery(),routesVersioning( putEmpleado ))
appEmpleados.delete("/empl/:id",limitQuery(),routesVersioning( deleteEmpleado ))

appInfraestructura.get("/infra",limitQuery(),routesVersioning( getInfra ));
appInfraestructura.get("/infra/:id", limitQuery(),routesVersioning( getInfraId ));
appInfraestructura.post("/infra", limitQuery(),routesVersioning( postInfra ));
appInfraestructura.delete("/infra/:id",limitQuery(),routesVersioning( deleteInfra ));

appHMant.get("/hmant",limitQuery(),routesVersioning( getHM ));
appHMant.get("/hmant/:id",limitQuery(),routesVersioning( getHMId ));
appHMant.post("/hmant",limitQuery(),routesVersioning( postHM ));
appHMant.delete("/hmant/:id",limitQuery(),routesVersioning( deleteHM ));

appHMed.get("/hmed",limitQuery(),routesVersioning( getHMed ));
appHMed.get("/hmed/:id",limitQuery(),routesVersioning( getHMedId ));
appHMed.post("/hmed",limitQuery(),routesVersioning( postHMed ));
appHMed.delete("/hmed/:id",limitQuery(),routesVersioning( deleteHMed ))

appEventos.get("/eventos", limitQuery(),routesVersioning( getEventos ));
appEventos.get("/eventos/:id",limitQuery(),routesVersioning( getEventoId ));
appEventos.post("/eventos", limitQuery(),routesVersioning( postEventos ));
appEventos.delete("/eventos/:id",limitQuery(),routesVersioning( deleteEventos ));

appFinanzas.get("/finanzas",limitQuery(),routesVersioning( getFinanzas ));
appFinanzas.get("/finanzas/:id",limitQuery(),routesVersioning( getFinanzaId ));
appFinanzas.post('/finanzas',limitQuery(),routesVersioning( postFinanzas ));
appFinanzas.delete("/finanzas/:id",limitQuery(),routesVersioning( deleteFinanza ));

appFinanzas.get("/finanzas", limitQuery(), getFinanzas);
appFinanzas.post('/finanzas', limitQuery(), postFinanzas);

appOrg.get("/org", limitQuery(), getOrg);
appOrg.post("/org", limitQuery(), postOrg)


export {
  appAnimales,
  appEmpleados,
  appInfraestructura,
  appHMant,
  appHMed,
  appEventos,
  appFinanzas,
  appOrg,
};
