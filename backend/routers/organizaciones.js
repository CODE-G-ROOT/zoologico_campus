import { getOrg,postOrg } from "../controllers/v1/organizaciones.js";
import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

const appOrg = configurarApp();

appOrg.get("/org",limitQuery(),getOrg);
appOrg.post("/org",limitQuery(),postOrg);

export default appOrg;
