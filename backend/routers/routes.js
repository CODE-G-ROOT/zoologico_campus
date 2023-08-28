import express from "express";
import { limitQuery } from "../helpers/limit.js";
import {getEmpleados,postEmpl} from './empleados.js';
//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

const appEmpleados = express();
appEmpleados.use(express.json());


appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.post("/empl",limitQuery(),postEmpl);


export {appEmpleados};