import express from "express";
import routesVersioning from "express-routes-versioning";

import { limitQuery } from "../helpers/others/limit.js";

import {
  getAnimales_busqueda_simple,
  // getAnimales_busqueda_simple_id,
  // getAnimales_busqueda_simple_name,
  // getAnimales_busqueda_simple_animal,
  // getAnimales_busqueda_simple_edad,
  // getAnimales_busqueda_simple_genero,
  // getAnimales_busqueda_simple_habitat_zoo,
  // getAnimales_busqueda_simple_Salud,
  // getAnimales_busqueda_Avanzada,
  // getAnimales_busqueda_Avanzada_id,
  // getAnimales_busqueda_Avanzada_clase,
  // getAnimales_busqueda_Avanzada_raza,
  // getAnimales_busqueda_Avanzada_especie,
  // getAnimales_busqueda_Avanzada_tipo_animal,
  // getAnimales_busqueda_Avanzada_vertebrado,
  // getAnimales_busqueda_Avanzada_tipo_habitad,
  // getAnimales_busqueda_Avanzada_habitad_natual,
  // getAnimales_busqueda_Avanzada_region_geografica,
  // getAnimales_busqueda_Avanzada_pais,
  // getAnimales_busqueda_Avanzada_continente,
  // getAnimales_busqueda_Avanzada_ecosistema,
  // getAnimales_busqueda_Avanzada_estado_conservacion,
  // getAnimales_busqueda_Avanzada_estado_depredadores,
  // getAnimales_busqueda_Avanzada_alimento_principal,
  // getAnimales_busqueda_Avanzada_importancia_ecologica,
  // getAnimales_busqueda_Avanzada_origen,
  postAnimales,
} from '../controllers/entidades/animales.js'

import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/metodos/v1/empleados.js';
import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/metodos/v1/infraestructura.js";
import { deleteHM, getHM, getHMId, postHM } from "../controllers/metodos/v1/historial_mantenimiento.js";
import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/metodos/v1/historial_medico.js";
import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/metodos/v1/eventos.js";
import { deleteFinanza, getFinanzaId, getFinanzas, postFinanzas } from "../controllers/metodos/v1/finanzas.js";
import { getOrg,postOrg } from "../controllers/metodos/v1/organizaciones.js";

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

appAnimales.get("/all", limitQuery(), versions(  getAnimales_busqueda_simple ));
appAnimales.post("/animales", limitQuery(),versions(  postAnimales )); //PENDIENTE POR TESTEAR

appEmpleados.get("/empl", limitQuery(),versions( getEmpleados ));
appEmpleados.get("/empl/:id",limitQuery(),versions( getEmpleadoId ));
appEmpleados.post("/empl",limitQuery(),versions( postEmpl ));
appEmpleados.put("/empl/:id", limitQuery(),versions( putEmpleado ))
appEmpleados.delete("/empl/:id",limitQuery(),versions( deleteEmpleado ))

appInfraestructura.get("/infra",limitQuery(),versions( getInfra ));
appInfraestructura.get("/infra/:id", limitQuery(),versions( getInfraId ));
appInfraestructura.post("/infra", limitQuery(),versions( postInfra ));
appInfraestructura.delete("/infra/:id",limitQuery(),versions( deleteInfra ));

appHMant.get("/hmant",limitQuery(),versions( getHM ));
appHMant.get("/hmant/:id",limitQuery(),versions( getHMId ));
appHMant.post("/hmant",limitQuery(),versions( postHM ));
appHMant.delete("/hmant/:id",limitQuery(),versions( deleteHM ));

appHMed.get("/hmed",limitQuery(),versions( getHMed ));
appHMed.get("/hmed/:id",limitQuery(),versions( getHMedId ));
appHMed.post("/hmed",limitQuery(),versions( postHMed ));
appHMed.delete("/hmed/:id",limitQuery(),versions( deleteHMed ))

appEventos.get("/eventos", limitQuery(),versions( getEventos ));
appEventos.get("/eventos/:id",limitQuery(),versions( getEventoId ));
appEventos.post("/eventos", limitQuery(),versions( postEventos ));
appEventos.delete("/eventos/:id",limitQuery(),versions( deleteEventos ));

appFinanzas.get("/finanzas",limitQuery(),versions( getFinanzas ));
appFinanzas.get("/finanzas/:id",limitQuery(),versions( getFinanzaId ));
appFinanzas.post('/finanzas',limitQuery(),versions( postFinanzas ));
appFinanzas.delete("/finanzas/:id",limitQuery(),versions( deleteFinanza ));

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
