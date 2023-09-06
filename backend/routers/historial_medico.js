import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/v1/historial_medico.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appHMed = configurarApp();

appHMed.get("/hmed",limitQuery(),getHMed);
appHMed.get("/hmed/:id",limitQuery(),getHMedId);
appHMed.post("/hmed",limitQuery(),postHMed);
appHMed.delete("/hmed/:id",limitQuery(),deleteHMed)

export default appHMed;