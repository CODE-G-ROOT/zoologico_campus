import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/v1/infraestructura.js";
import configurarApp from "./config_app.js";
import { limitQuery } from "../helpers/others/limit.js";

const appInfraestructura = configurarApp();

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.get("/infra/:id", limitQuery(),getInfraId);
appInfraestructura.post("/infra", limitQuery(),postInfra);
appInfraestructura.delete("/infra/:id",limitQuery(),deleteInfra);

export default appInfraestructura