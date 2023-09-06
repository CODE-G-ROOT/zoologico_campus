import { deleteHM, getHM, getHMId, postHM } from "../controllers/v1/historial_mantenimiento.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appHMant = configurarApp();

appHMant.get("/hmant",limitQuery(),getHM);
appHMant.get("/hmant/:id",limitQuery(),getHMId);
appHMant.post("/hmant",limitQuery(),postHM);
appHMant.delete("/hmant/:id",limitQuery(),deleteHM);

export default appHMant;