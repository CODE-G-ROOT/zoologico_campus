import { deleteHM, getHM, getHMId, postHM } from "../controllers/v1/historial_mantenimiento.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appHMant = configurarApp();

appHMant.get("/",limitQuery(),getHM);
appHMant.get("/:id",limitQuery(),getHMId);
appHMant.post("/",limitQuery(),postHM);
appHMant.delete("/delete/:id",limitQuery(),deleteHM);

export default appHMant;