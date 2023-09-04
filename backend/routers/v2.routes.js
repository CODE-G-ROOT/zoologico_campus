import express from "express";
import { limitQuery } from "../helpers/limit.js";
import { getAnimales, postAnimales } from '../controllers/v1/animales.js'; //Esto es temporal mientras se implementan las versiones
import { deleteEmpleado, getEmpleadoId, getEmpleados, postEmpl, putEmpleado } from '../controllers/v1/empleados.js';
import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/v1/infraestructura.js";
import { deleteHM, getHM, getHMId, postHM } from "../controllers/v1/historial_mantenimiento.js";
import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/v1/historial_medico.js";
import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/v1/eventos.js";
import { deleteFinanza, getFinanzaId, getFinanzas, postFinanzas } from "../controllers/v1/finanzas.js";
import { getOrg, postOrg } from "../controllers/v1/organizaciones.js";


//TODO:   V2
import {
  getAnimales_busqueda_Avanzada,
  getAnimales_busqueda_Avanzada_alimento_principal,
  getAnimales_busqueda_Avanzada_clase,
  getAnimales_busqueda_Avanzada_continente,
  getAnimales_busqueda_Avanzada_ecosistema,
  getAnimales_busqueda_Avanzada_especie,
  getAnimales_busqueda_Avanzada_estado_conservacion,
  getAnimales_busqueda_Avanzada_estado_depredadores,
  getAnimales_busqueda_Avanzada_habitad_natual,
  getAnimales_busqueda_Avanzada_id,
  getAnimales_busqueda_Avanzada_importancia_ecologica,
  getAnimales_busqueda_Avanzada_origen,
  getAnimales_busqueda_Avanzada_pais,
  getAnimales_busqueda_Avanzada_raza,
  getAnimales_busqueda_Avanzada_region_geografica,
  getAnimales_busqueda_Avanzada_tipo_animal,
  getAnimales_busqueda_Avanzada_tipo_habitad,
  getAnimales_busqueda_Avanzada_vertebrado,
  getAnimales_busqueda_simple,
  getAnimales_busqueda_simple_Salud,
  getAnimales_busqueda_simple_animal,
  getAnimales_busqueda_simple_edad,
  getAnimales_busqueda_simple_genero,
  getAnimales_busqueda_simple_habitat_zoo,
  getAnimales_busqueda_simple_id,
  getAnimales_busqueda_simple_name
} from "../controllers/v2/animales.js";

// import { 
//   getEmpleados,
//   getEmpleados_cargo,
//   getEmpleados_id,
//   getEmpleados_nombre,
//   getEmpleados_nombre_cargo,
//   getEmpleados_nombre_salario,
//   getEmpleados_nombre_salario_cargo,
//   getEmpleados_salario,
// } from "../controllers/v2/empleados.js";

// import { 
//   getEventos,
//   getEventos_animales_participantes,
//   getEventos_animales_participantes_grupo,
//   getEventos_encargado,
//   getEventos_horario_dias,
//   getEventos_id,
//   getEventos_nombre_show,
//   postEventos
// } from "../controllers/v2/eventos.js";

// import { getAnimales } from "../controllers/v2/finanzas.js";
// import { getAnimales } from "../controllers/v2/historial_mantenimiento.js";
// import { getAnimales } from "../controllers/v2/historial_medico.js";
// import { getAnimales } from "../controllers/v2/infraestructura.js";
// import { getAnimales } from "../controllers/v2/organizaciones.js";


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

appAnimales.get("/search_simple/all", limitQuery(), getAnimales_busqueda_simple);
appAnimales.get("/search_simple/:salud", limitQuery(), getAnimales_busqueda_simple_Salud);
appAnimales.get("/search_simple/:animal", limitQuery(), getAnimales_busqueda_simple_animal);
appAnimales.get("/search_simple/:edad", limitQuery(), getAnimales_busqueda_simple_edad);
appAnimales.get("/search_simple/:gen", limitQuery(), getAnimales_busqueda_simple_genero);
appAnimales.get("/search_simple/:habitad", limitQuery(), getAnimales_busqueda_simple_habitat_zoo);
appAnimales.get("/search_simple/:id", limitQuery(), getAnimales_busqueda_simple_id);
appAnimales.get("/search_simple/:name", limitQuery(), getAnimales_busqueda_simple_name);

appAnimales.get("/search_avan/:ali_prin", limitQuery(), getAnimales_busqueda_Avanzada_alimento_principal);
appAnimales.get("/search_avan/:clase", limitQuery(), getAnimales_busqueda_Avanzada_clase);
appAnimales.get("/search_avan/:cont", limitQuery(), getAnimales_busqueda_Avanzada_continente);
appAnimales.get("/search_avan/:eco", limitQuery(), getAnimales_busqueda_Avanzada_ecosistema);
appAnimales.get("/search_avan/:espe", limitQuery(), getAnimales_busqueda_Avanzada_especie);
appAnimales.get("/search_avan/:est_conser", limitQuery(), getAnimales_busqueda_Avanzada_estado_conservacion);
appAnimales.get("/search_avan/:dep", limitQuery(), getAnimales_busqueda_Avanzada_estado_depredadores);
appAnimales.get("/search_avan/:habi_nat", limitQuery(), getAnimales_busqueda_Avanzada_habitad_natual);
appAnimales.get("/search_avan/:id", limitQuery(), getAnimales_busqueda_Avanzada_id);
appAnimales.get("/search_avan/:impor_eco", limitQuery(), getAnimales_busqueda_Avanzada_importancia_ecologica);
appAnimales.get("/search_avan/:ori", limitQuery(), getAnimales_busqueda_Avanzada_origen);
appAnimales.get("/search_avan/:pais", limitQuery(), getAnimales_busqueda_Avanzada_pais);
appAnimales.get("/search_avan/:raza", limitQuery(), getAnimales_busqueda_Avanzada_raza);
appAnimales.get("/search_avan/:reg_geo", limitQuery(), getAnimales_busqueda_Avanzada_region_geografica);
appAnimales.get("/search_avan/:tipo", limitQuery(), getAnimales_busqueda_Avanzada_tipo_animal);
appAnimales.get("/search_avan/:tipo_habitad", limitQuery(), getAnimales_busqueda_Avanzada_tipo_habitad);
appAnimales.get("/search_avan/:vertebrado", limitQuery(), getAnimales_busqueda_Avanzada_vertebrado);
appAnimales.get("/search_avan/all", limitQuery(), getAnimales_busqueda_Avanzada);

appAnimales.post("/animales", limitQuery(), postAnimales); 

appEmpleados.get("/empl", limitQuery(), getEmpleados);
appEmpleados.get("/empl/:id", limitQuery(), getEmpleadoId);
appEmpleados.post("/empl", limitQuery(), postEmpl);
appEmpleados.put("/empl/:id", limitQuery(), putEmpleado)
appEmpleados.delete("/empl/:id", limitQuery(), deleteEmpleado)

appInfraestructura.get("/infra", limitQuery(), getInfra);
appInfraestructura.get("/infra/:id", limitQuery(), getInfraId);
appInfraestructura.post("/infra", limitQuery(), postInfra);
appInfraestructura.delete("/infra/:id", limitQuery(), deleteInfra);

appHMant.get("/hmant", limitQuery(), getHM);
appHMant.get("/hmant/:id", limitQuery(), getHMId);
appHMant.post("/hmant", limitQuery(), postHM);
appHMant.delete("/hmant/:id", limitQuery(), deleteHM);

appHMed.get("/hmed", limitQuery(), getHMed);
appHMed.get("/hmed/:id", limitQuery(), getHMedId);
appHMed.post("/hmed", limitQuery(), postHMed);
appHMed.delete("/hmed/:id", limitQuery(), deleteHMed)

appEventos.get("/eventos", limitQuery(), getEventos);
appEventos.get("/eventos/:id", limitQuery(), getEventoId);
appEventos.post("/eventos", limitQuery(), postEventos);
appEventos.delete("/eventos/:id", limitQuery(), deleteEventos);

appFinanzas.get("/finanzas", limitQuery(), getFinanzas);
appFinanzas.get("/finanzas/:id", limitQuery(), getFinanzaId);
appFinanzas.post('/finanzas', limitQuery(), postFinanzas);
appFinanzas.delete("/finanzas/:id", limitQuery(), deleteFinanza);

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
  appOrg
};
