import { limitQuery } from "../helpers/others/limit.js";
import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/v1/empleados.js';
import configurarApp from "./config_app.js";

const appEmpleados = configurarApp();

appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.get("/empl/:id",limitQuery(),getEmpleadoId);
appEmpleados.post("/empl",limitQuery(),postEmpl);
appEmpleados.put("/empl/:id", limitQuery(),putEmpleado);
appEmpleados.delete("/empl/:id",limitQuery(),deleteEmpleado);

export default appEmpleados;