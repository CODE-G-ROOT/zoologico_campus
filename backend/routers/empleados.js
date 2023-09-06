import { limitQuery } from "../helpers/others/limit.js";
import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/v1/empleados.js';
import configurarApp from "./config_app.js";

const appEmpleados = configurarApp();

appEmpleados.get("/", limitQuery(),getEmpleados);
appEmpleados.get("/:id",limitQuery(),getEmpleadoId);

appEmpleados.post("/",limitQuery(),postEmpl);

appEmpleados.put("/update/:id", limitQuery(),putEmpleado);

appEmpleados.delete("/delete/:id",limitQuery(),deleteEmpleado);

export default appEmpleados;