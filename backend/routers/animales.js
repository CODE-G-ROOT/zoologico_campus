import { limitQuery } from "../helpers/others/limit.js";
import configurarApp from "./config_app.js";

import { getAnimales, postAnimales } from '../controllers/v1/animales.js';
import {
    getAnimales_busqueda_Avanzada,
    getAnimales_busqueda_Avanzada_id,
    getAnimales_busqueda_Avanzada_alimento_principal,
    getAnimales_busqueda_Avanzada_clase,
    getAnimales_busqueda_Avanzada_continente,
    getAnimales_busqueda_Avanzada_ecosistema,
    getAnimales_busqueda_Avanzada_especie,
    getAnimales_busqueda_Avanzada_estado_conservacion,
    getAnimales_busqueda_Avanzada_estado_depredadores,
    getAnimales_busqueda_Avanzada_habitad_natual,
    getAnimales_busqueda_Avanzada_importancia_ecologica,
    getAnimales_busqueda_Avanzada_origen,
    getAnimales_busqueda_Avanzada_pais,
    getAnimales_busqueda_Avanzada_raza,
    getAnimales_busqueda_Avanzada_region_geografica,
    getAnimales_busqueda_Avanzada_tipo_animal,
    getAnimales_busqueda_Avanzada_tipo_habitad,
    getAnimales_busqueda_Avanzada_vertebrado,

    getAnimales_busqueda_simple,
    getAnimales_busqueda_simple_Salud,
    getAnimales_busqueda_simple_animal,
    getAnimales_busqueda_simple_edad,
    getAnimales_busqueda_simple_genero,
    getAnimales_busqueda_simple_habitat_zoo,
    getAnimales_busqueda_simple_id,
    getAnimales_busqueda_simple_name,
} from '../controllers/v2/animales.js'

const appAnimales = configurarApp();

appAnimales.get("/all", limitQuery(), getAnimales);
appAnimales.post("/animales", limitQuery(), postAnimales); //PENDIENTE POR TESTEAR

export { configurarApp };
export default appAnimales;
