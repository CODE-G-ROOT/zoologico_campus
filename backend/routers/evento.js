import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/v1/eventos.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appEventos = configurarApp();

appEventos.get("/eventos", limitQuery(),getEventos);
appEventos.get("/eventos/:id",limitQuery(),getEventoId);
appEventos.post("/eventos", limitQuery(),postEventos);
appEventos.delete("/eventos/:id",limitQuery(),deleteEventos);

export default appEventos;