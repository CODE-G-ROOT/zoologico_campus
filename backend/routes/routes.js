import express from "express";
import { limitQuery } from "../helpers/limit.js";
import {getEmpleados} from '../routes/empleados.js';
//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

const appProductos = express();
appEmpleados.use(express.json());


appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.post("/empleados",limitQuery(),appValidateUsers,middlewareUsers,DTOUsers,postUsers);


export {appEmpleados};