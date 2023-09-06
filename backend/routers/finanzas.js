import { getFinanzaId, getFinanzas, deleteFinanza, postFinanzas } from "../controllers/v1/finanzas.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appFinanzas = configurarApp();

appFinanzas.get("/finanzas",limitQuery(),getFinanzas);
appFinanzas.get("/finanzas/:id",limitQuery(),getFinanzaId);
appFinanzas.post('/finanzas',limitQuery(),postFinanzas);
appFinanzas.delete("/finanzas/:id",limitQuery(),deleteFinanza);

export default appFinanzas;