import express from "express";
import { limitQuery } from "../helpers/limit.js";
import {getEmpleados,postEmpl} from '../routes/empleados.js';
import { getInfra, postInfra } from "../routes/infraestructura.js";
import { getHM, postHM } from "../routes/historial_mantenimiento.js";
import { getHMed, postHMed } from "../routes/historial_medico.js";
//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

const appEmpleados = express();
appEmpleados.use(express.json());

const appInfraestructura = express();
appInfraestructura.use(express.json());

const appHMant=express();
appHMant.use(express.json());

const appHMed = express();
appHMed.use(express.json());

appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.post("/empl",limitQuery(),postEmpl);

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.post("/infra", limitQuery(),postInfra);

appHMant.get("/hmant",limitQuery(),getHM);
appHMant.post("/hmant",limitQuery(),postHM);

appHMed.get("/hmed",limitQuery(),getHMed);
appHMed.post("/hmed",limitQuery(),postHMed);


export {appEmpleados,appInfraestructura,appHMant,appHMed};