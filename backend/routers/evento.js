import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/v1/eventos.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appEventos = configurarApp();

appEventos.get("/", limitQuery(),getEventos);
appEventos.get("/:id",limitQuery(),getEventoId);
appEventos.post("/", limitQuery(),postEventos);
appEventos.delete("/delete/:id",limitQuery(),deleteEventos);

export default appEventos;