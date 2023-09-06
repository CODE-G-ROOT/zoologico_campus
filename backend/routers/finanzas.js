import { getFinanzaId, getFinanzas, deleteFinanza, postFinanzas } from "../controllers/v1/finanzas.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appFinanzas = configurarApp();

appFinanzas.get("/",limitQuery(),getFinanzas);
appFinanzas.get("/:id",limitQuery(),getFinanzaId);
appFinanzas.post('/',limitQuery(),postFinanzas);
appFinanzas.delete("/delete/:id",limitQuery(),deleteFinanza);

export default appFinanzas;