import fs from "fs/promises";

const contenido = "const data = () => { console.log(`\--------------ENDPOINTS-------------`);
    console.log({
        animales: {
            GET: `http://${server_config.hostname}:${server_config.port}/animales/`,
            POST: `http://${server_config.hostname}:${server_config.port}/animales/`,
        },
        empleados: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/empleados/`,
                por_id: `http://${server_config.hostname}:${server_config.port}/empleados/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/empleados/`,
            PUT: `http://${server_config.hostname}:${server_config.port}/empleados/update/1`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/empleados/delete/1`,
        },
        infraestructura: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/infra`,
                por_id: `http://${server_config.hostname}:${server_config.port}/infra/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/infra`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/infra/delete/1`,
        },
        historial_mantenimiento: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/hmant`,
                por_id: `http://${server_config.hostname}:${server_config.port}/hmant/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/hmant`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/hmant/delete/1`,
        },
        historial_medico: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/hmed`,
                por_id: `http://${server_config.hostname}:${server_config.port}/hmed/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/hmed`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/hmed/delete/1`,
        },
        eventos: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/eventos`,
                por_id: `http://${server_config.hostname}:${server_config.port}/eventos/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/eventos`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/eventos/delete/1`,
        },
        finanzas: {
            GET: {
                todos: `http://${server_config.hostname}:${server_config.port}/finanzas`,
                por_id: `http://${server_config.hostname}:${server_config.port}/finanzas/1`,
            },
            POST: `http://${server_config.hostname}:${server_config.port}/finanzas`,
            DELETE: `http://${server_config.hostname}:${server_config.port}/finanzas/delete/1`,
        },
        organizaciones: {
            GET: `http://${server_config.hostname}:${server_config.port}/org`,
            POST: `http://${server_config.hostname}:${server_config.port}/org`,
        },
    });
};

data();";

const archivo = ".env";

(async () => {
    try {
        await fs.writeFile(archivo, contenido);
        console.log(`Se ha creado el archivo "${archivo}"`);
        console.warn(
            "No te olvides de agregar tus credenciales en el archivo .env\n"
        );
    } catch (err) {
        console.error("Error al crear el archivo:", err);
    }
})();




const token = ()=>{
    console.log(`\--------------TOKEN-------------`);
    console.log({
        animales: `http://${server_config.hostname}:${server_config.port}/token/animal`,
        empleados: `http://${server_config.hostname}:${server_config.port}/token/empleados`,
        infraestructura: `http://${server_config.hostname}:${server_config.port}/token/infraestructura`,
        historial_mantenimiento: `http://${server_config.hostname}:${server_config.port}/token/hmant`,
        historial_medico: `http://${server_config.hostname}:${server_config.port}/token/hmed`,
        eventos: `http://${server_config.hostname}:${server_config.port}/token/eventos`,
        finanzas: `http://${server_config.hostname}:${server_config.port}/token/finanzas`,
        organizaciones: `http://${server_config.hostname}:${server_config.port}/token/org`,
    });
}