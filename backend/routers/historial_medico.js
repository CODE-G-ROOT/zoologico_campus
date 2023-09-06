import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/v1/historial_medico.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appHMed = configurarApp();

appHMed.get("/",limitQuery(),getHMed);
appHMed.get("/:id",limitQuery(),getHMedId);
appHMed.post("/",limitQuery(),postHMed);
appHMed.delete("/delete/:id",limitQuery(),deleteHMed)

export default appHMed;