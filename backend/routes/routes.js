import express from "express";
import { limitQuery } from "../helpers/limit.js";
import {getEmpleados,postEmpl} from '../routes/empleados.js';
import { getInfra, postInfra } from "../routes/infraestructura.js";
import { getHM, postHM } from "../routes/historial_mantenimiento.js";
//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

const appEmpleados = express();
appEmpleados.use(express.json());

const appInfraestructura = express();
appInfraestructura.use(express.json());

const appHM=express();
appHM.use(express.json());


appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.post("/empl",limitQuery(),postEmpl);

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.post("/infra", limitQuery(),postInfra);

appHM.get("/hm",limitQuery(),getHM)
appHM.post("/hm",limitQuery(),postHM)

export {appEmpleados,appInfraestructura,appHM};