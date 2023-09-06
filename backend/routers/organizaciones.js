import { getOrg,postOrg } from "../controllers/v1/organizaciones.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appOrg = configurarApp();

appOrg.get("/",limitQuery(),getOrg);
appOrg.post("/",limitQuery(),postOrg);

export default appOrg;
