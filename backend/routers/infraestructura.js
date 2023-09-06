import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/v1/infraestructura.js";
import configurarApp from "./config_app.js";
import { limitQuery } from "../helpers/others/limit.js";

const appInfraestructura = configurarApp();

appInfraestructura.get("/",limitQuery(),getInfra);
appInfraestructura.get("/:id", limitQuery(),getInfraId);
appInfraestructura.post("/", limitQuery(),postInfra);
appInfraestructura.delete("/delete/:id",limitQuery(),deleteInfra);

export default appInfraestructura